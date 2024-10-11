import * as utils from './utils';

describe('getFullYear()', () => {
  it('returns the correct year', () => {
    expect(utils.getFullYear()).toEqual(new Date().getFullYear());
  });
});

describe('getFooterCopy()', () => {
  it('returns the correct string when isIndex = true', () => {
    expect(utils.getFooterCopy(true)).toEqual('Holberton School');
  });

  it('returns the correct string when isIndex = false', () => {
    expect(utils.getFooterCopy(false)).toEqual('Holberton School main');
  });
});

describe('getLatestNotification()', () => {
  it('returns the correct string', () => {
    expect(utils.getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
