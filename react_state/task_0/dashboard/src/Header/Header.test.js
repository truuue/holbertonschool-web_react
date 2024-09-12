import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Composant', function(){

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it('should Header renders without crashing', function(){
        const wrapper = shallow(<Header />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should find img in Header', function(){
        const wrapper = shallow(<Header />)
        expect(wrapper.find('img'))
    })

    it('should find h1 in Header', function(){
        const wrapper = shallow(<Header />)
        expect(wrapper.find('h1'))
    })
})import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Component', function() {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render Header without crashing', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should find img in Header', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should find h1 in Header', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should not create logoutSection with default context value', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('should create logoutSection with user defined context value', function() {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
    };
    const wrapper = shallow(<Header />, {
      context: { user },
    });
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('should call logOut spy when logout link is clicked', function() {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
    };
    const logOutSpy = jest.fn();
    const wrapper = shallow(<Header />, {
      context: { user, logOut: logOutSpy },
    });
    wrapper.find('a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
import { shallow } from 'enzyme';
import Header from './Header.js';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header Component', function() {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render Header without crashing', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should find img in Header', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should find h1 in Header', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toHaveLength(1);
  });

  it('should not create logoutSection with default context value', function() {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection')).toHaveLength(0);
  });

  it('should create logoutSection with user defined context value', function() {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
    };
    const wrapper = shallow(<Header />, {
      context: { user },
    });
    expect(wrapper.find('#logoutSection')).toHaveLength(1);
  });

  it('should call logOut spy when logout link is clicked', function() {
    const user = {
      isLoggedIn: true,
      email: 'test@example.com',
    };
    const logOutSpy = jest.fn();
    const wrapper = shallow(<Header />, {
      context: { user, logOut: logOutSpy },
    });
    wrapper.find('a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});