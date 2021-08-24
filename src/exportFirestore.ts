import * as functions from 'firebase-functions';
import * as firestore from '@google-cloud/firestore';
const client = new firestore.v1.FirestoreAdminClient();

export const exportFirestore = ({
  region = 'asia-northeast1',
  schedule = '0 0 * * *',
  timeZone = 'Asia/Tokyo',
  projectId = process.env.GCLOUD_PROJECT,
  bucketName,
}: {
  region?: string;
  schedule?: string;
  timeZone?: string;
  projectId?: string;
  bucketName?: string;
}): functions.CloudFunction<unknown> => {
  const bucket = bucketName ? `gs://${bucketName}` : `gs://${projectId}-firestore-backups`;
  return functions
    .region(region)
    .pubsub.schedule(schedule)
    .timeZone(timeZone)
    .onRun(async () => {
      try {
        const databaseName = client.databasePath(projectId, '(default)');

        await client.exportDocuments({
          name: databaseName,
          outputUriPrefix: bucket,
        });
        console.info('export database, success');
      } catch (err) {
        console.error(err);
      }
    });
};
