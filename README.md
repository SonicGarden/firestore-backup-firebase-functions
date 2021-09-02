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
import * as firestoreBackup from '@sonicgarden/firestore-backup-firebase-functions';
export exportFirestore = firestoreBackup.exportFirestore({
  region: 'asia-northeast1',
  schedule: '0 0 * * *',
  timeZone: 'Asia/Tokyo',
});

//or

const firestoreBackup = require('@sonicgarden/firestore-backup-firebase-functions');
exports.exportFirestore = firestoreBackup.exportFirestore({
  region: 'asia-northeast1',
  schedule: '0 0 * * *',
  timeZone: 'Asia/Tokyo',
});
```

### Parameters

| parameter  | required | default value                  |
| ---------- | -------- | ------------------------------ |
| region     | optional | asia-northeast1                |
| schedule   | optional | 0 0 \* \* \*                   |
| timeZone   | optional | Asia/Tokyo                     |
| projectId  | optional | process.env.GCLOUD_PROJECT     |
| bucketName | optional | ${projectId}-firestore-backups |
