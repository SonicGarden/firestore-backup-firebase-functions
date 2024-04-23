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
import { exportFirestore as _exportFirestore } from '@sonicgarden/firestore-backup-firebase-functions';

export exportFirestore = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 2 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(_exportFirestore);
```

OR

```js
import { exportFirestore as _exportFirestore } from '@sonicgarden/firestore-backup-firebase-functions';

export exportFirestore = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 2 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(() => _exportFirestore({ projectId: 'project-id', bucketName: 'bucket-name' }));
```

### Parameters

| parameter  | required | default value                  |
| ---------- | -------- | ------------------------------ |
| projectId  | optional | process.env.GCLOUD_PROJECT     |
| bucketName | optional | ${projectId}-firestore-backups |

## GCP Settings

### Cloud Storage

Backup ファイルを保存するバケットを作成する

- デフォルト設定の場合、`${projectId}-firestore-backups`という名称にする
- Region は `asia-northeast1 (東京)` を指定
- Storage クラスは `Nearline` を指定
- オブジェクトへのアクセス制御は `均一` を指定
- オブジェクトのデータ保護はすべて未指定（デフォルトで`削除`が ON になっているが外す）
- バケットのへの公開アクセスは`禁止`

バケットを作成したら、ライフサイクルルールに以下を追加する。
これによりバックアップデータは 30 日後に自動で削除されローテーションするようになる。

- アクション: オブジェクトを削除する
- オブジェクト条件: 経過日数 30 日

### IAM

#### Cloud Functions v1

- App Engine default service account (`[PROJECT_ID]@appspot.gserviceaccount.com`)
  - `Cloud Datastore インポート / エクスポート管理者` ロールを追加
- firebase-adminsdk (`firebase-adminsdk-*****@[PROJECT_ID].iam.gserviceaccount.com`)
  - `Storage オブジェクト作成者` ロールを追加

#### Cloud Functions v2

- Default compute service account (`[PROJECT_NUMBER]-compute@developer.gserviceaccount.com`)
  - `Cloud Datastore インポート / エクスポート管理者` ロールを追加
- firebase-adminsdk (`firebase-adminsdk-*****@[PROJECT_ID].iam.gserviceaccount.com`)
  - `Storage オブジェクト作成者` ロールを追加
