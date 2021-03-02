import * as semver from 'semver';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { IProjectProperties } from '../interfaces/projectProperties';

export function projectProperties(
    app?: admin.app.App,
    version: string = '1.0'): IProjectProperties {
  return semver.lt(version, '2.0') ? {
    database: admin.firestore(app),
    authToken: functions.config().newsriver.key,
  } : {
    database: undefined,
    authToken: undefined
  };
}

let serviceAccount = undefined;
if (process.env.RUNNING_LOCAL)
  serviceAccount = require('../../firebase-adminsdk.json');

export const firebaseApp = admin.initializeApp({
  credential: process.env.RUNNING_LOCAL
      ? admin.credential.cert(serviceAccount)
      : admin.credential.applicationDefault(),
  databaseURL: undefined,
});
