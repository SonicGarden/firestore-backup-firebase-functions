# firestore-backup-firebase-functions

Firestore Backup for Firebase Cloud Functions

## Installation

```sh
npm install --save @sonicgarden/firestore-backup-firebase-functions
// or
yarn add @sonicgarden/firestore-backup-firebase-functions
```

## Usage

```js
import { firestoreBackup } from '@sonicgarden/firestore-backup-firebase-functions';

export exportFirestore = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 0 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(() => firestoreBackup());
```

### Parameters

| parameter  | required | default value                  |
| ---------- | -------- | ------------------------------ |
| projectId  | optional | process.env.GCLOUD_PROJECT     |
| bucketName | optional | ${projectId}-firestore-backups |
