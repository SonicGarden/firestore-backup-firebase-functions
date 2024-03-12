import * as firestore from '@google-cloud/firestore';
const client = new firestore.v1.FirestoreAdminClient();

export const exportFirestore = async ({
  projectId = process.env.GCLOUD_PROJECT,
  bucketName,
}: {
  projectId?: string;
  bucketName?: string;
} = {}): Promise<void> => {
  const bucket = bucketName ? `gs://${bucketName}` : `gs://${projectId}-firestore-backups`;
  const databaseName = client.databasePath(projectId, '(default)');

  await client.exportDocuments({
    name: databaseName,
    outputUriPrefix: bucket,
  });
  console.info('export database, success');
};
