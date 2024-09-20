const dataNotif = require('../../../../notification.json');
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const userContext = dataNotif
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
  return userContext;
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', undefined, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalizedData = normalize(dataNotif, [notification]);
console.log(normalizedData.entities);
