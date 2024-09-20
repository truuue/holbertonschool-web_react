import { getAllNotificationsByUser } from './notifications';
const dataNotif = require('../../../../notification.json');

describe('getAllNotificationsByUser', () => {
  it('should return notifications for a specific user when multiple users exist', () => {
    const userId = '5debd764a7c57c7839d722e9';

    const userContext = [];
    for (let i = 0; i < dataNotif.length; i++) {
      const json = dataNotif[i];
      if (userId === json.author.id) {
        userContext = json.context;
      }
    }
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual(expect.arrayContaining(userContext));
  });
});
