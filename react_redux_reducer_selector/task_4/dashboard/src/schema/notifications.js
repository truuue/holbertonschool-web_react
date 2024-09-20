const dataNotif = require('../../../../notification.json');
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const messages = normalizedData.entities.messages;
  const notifications = normalizedData.entities.notifications;

  const notifByUser = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      const context = messages[notifications[key].context];
      notifByUser.push(context);
    }
  }
  return notifByUser;
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', undefined, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

function notificationsNormalizer() {
  return normalize(dataNotif, [notification]);
}

export const normalizedData = normalize(dataNotif, [notification]);
export default notificationsNormalizer;
