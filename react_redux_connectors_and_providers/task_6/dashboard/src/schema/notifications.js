import { normalize, schema } from 'normalizr';
import * as jsonData from '../../notifications.json';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', undefined, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export const normalizedData = normalize(jsonData.default, [notification]);

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

export function getAllNotificationsByUser(userId) {
  const { entities: { notifications, messages }, result } = normalizedData;
  const userNotifications = [];

  result.forEach(notificationId => {
    const { author, context } = notifications[notificationId];
    if (author == userId)
      userNotifications.push(messages[context]);
  })

  return userNotifications;
}
