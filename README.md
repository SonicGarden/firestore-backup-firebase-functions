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
import { exportFirestore } from '@sonicgarden/firestore-backup-firebase-functions';
exportFirestore({
  region: 'asia-northeast1',
  schedule: '0 0 * * *',
  timeZone: 'Asia/Tokyo',
});

//or

require('@sonicgarden/firestore-backup-firebase-functions')({
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
