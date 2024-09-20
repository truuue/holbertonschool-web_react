import { getAllNotificationsByUser } from './notifications';
const dataNotif = require('../../../../notification.json');
import { normalizedData } from './notifications';

describe('getAllNotificationsByUser', () => {
  it('should return notifications for a specific user when multiple users exist', () => {
    const userId = '5debd764a7c57c7839d722e9';

    let userContext = [];
    for (let i = 0; i < dataNotif.length; i++) {
      const json = dataNotif[i];
      if (userId === json.author.id) {
        userContext.push(json.context);
      }
    }
    const result = getAllNotificationsByUser(userId);
    expect(result).toEqual(expect.arrayContaining(userContext));
  });

  it('verify that your normalized data has a correct result array', function () {
    const expectedReturn = [
      '5debd76480edafc8af244228',
      '5debd764507712e7a1307303',
      '5debd76444dd4dafea89d53b',
      '5debd76485ee4dfd1284f97b',
      '5debd7644e561e022d66e61a',
      '5debd7644aaed86c97bf9d5e',
      '5debd76413f0d5e5429c28a0',
      '5debd7642e815cd350407777',
      '5debd764c1127bc5a490a4d0',
      '5debd7646ef31e0861ec1cab',
      '5debd764a4f11eabef05a81d',
      '5debd764af0fdd1fc815ad9b',
      '5debd76468cb5b277fd125f4',
      '5debd764de9fa684468cdc0b',
    ];

    const result = normalizedData.result;
    expect(result).toEqual(expect.arrayContaining(expectedReturn));
  });

  it('should return the correct jsonSchema', function () {
    const expectedReturn = {
      age: 25,
      email: 'poole.sanders@holberton.nz',
      id: '5debd764a7c57c7839d722e9',
      name: { first: 'Poole', last: 'Sanders' },
      picture: 'http://placehold.it/32x32',
    };
    const user = normalizedData.entities.users['5debd764a7c57c7839d722e9'];
    expect(user).toEqual(expectedReturn);
  });

  it('should return the correct message entity', function () {
    const expectedReturn = {
      guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
      isRead: false,
      type: 'default',
      value: 'Cursus risus at ultrices mi.',
    };
    const message =
      normalizedData.entities.messages['efb6c485-00f7-4fdf-97cc-5e12d14d6c41'];
    expect(message).toEqual(expectedReturn);
  });

  it('should return the correct notification entity', function () {
    const expectedReturn = {
      author: '5debd764f8452ef92346c772',
      context: '3068c575-d619-40af-bf12-dece1ee18dd3',
      id: '5debd7642e815cd350407777',
    };
    const message =
      normalizedData.entities.notifications['5debd7642e815cd350407777'];
    expect(message).toEqual(expectedReturn);
  });
});
