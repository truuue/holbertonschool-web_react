import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('HOC WithLogging', () => {
  it('logs correctly on mount and mount with pure HTML', () => {
    const logMock = jest.spyOn(console, 'log').mockImplementation(() => { });
    const Component = WithLogging(() => <p></p>);
    shallow(<Component />).unmount();

    expect(logMock).toBeCalledWith('Component Component is mounted');
    expect(logMock).toBeCalledWith('Component Component is going to unmount');
  });

  it('logs correctly on mount and mount with pure HTML', () => {
    const logMock = jest.spyOn(console, 'log').mockImplementation(() => { });
    const Component = WithLogging(Login);
    shallow(<Component />).unmount();

    expect(logMock).toBeCalledWith('Component Login is mounted');
    expect(logMock).toBeCalledWith('Component Login is going to unmount');
  });
});
