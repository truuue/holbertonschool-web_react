const dataNotif = require('../../../../notification.json');

export function getAllNotificationsByUser(userId) {
  const userContext = dataNotif
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
  return userContext;
}
