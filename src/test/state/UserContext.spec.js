import React,  { useContext } from 'react';
import { UserContext, State } from '../../state/UserContext';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

describe("UserContext", () => {

  configure({adapter: new Adapter()});
  

  it("adds user session", () => {
    const TestComponent = () => {

      const [session, clearSession, addUser] = useContext(UserContext)
      return <> 
        <div data-testid="value">{session}</div>
        <button onClick={() => {
          addUser(1)
          }
        }> SetFavorite </button>
      </>
    };

    const wrapper = mount (
      <State>
        <TestComponent />
      </State>
    );

    wrapper.find("button").simulate('click');
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("1");


  });

  it("removes user session", () => {
    const TestComponent = () => {

      const [session, clearSession ] = useContext(UserContext)
      return <> 
        <div data-testid="value">{session}</div>
        <button onClick={() => {
          clearSession()
          }
        }> SetFavorite </button>
      </>
    };

    const wrapper = mount (
      <State>
        <TestComponent />
      </State>
    );

    wrapper.find("button").simulate('click');
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("");


  });


});