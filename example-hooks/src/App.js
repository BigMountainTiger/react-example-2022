import { useState, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import Component1 from './components/Component1';
import UseRefExample from './components/UseRefExample';

import { OBJ } from './services/Service1';

import './App.css';

function App() {

  const [state, setState] = useState({});

  useEffect(() => {

    const get_init_v = async () => {
      const p = new Promise((rs, rj) => {
        setTimeout(() => {
          rs({
            count: 1,
            attr: 'This is another attribute of the state object'
          });
        }, 10);
      });

      const init_v = await p;
      setState(p => {
        return { ...p, ...init_v };
      });
    };

    get_init_v();

  }, []);

  const update = (i) => {
    setState(p => {
      const n = p.count + i;
      return { ...p, ...{ count: n, user: { name: `User No.${n}` } } };
    });
  };

  const upate_user = (name) => {
    setState(p => {
      return { ...p, ...{ user: { name: name } } };
    });
  };

  return (
    <div className='app'>
      <UserContext.Provider value={{ user: state.user, upate_user }}>
        <div>
          <button style={{ backgroundColor: 'pink', fontSize: '20px' }} onClick={() => { OBJ.print() }}>Call Service1 Object Print()</button>
          <br />
          The user name is {state.user?.name || 'N/A'}
          <br />
          You clicked {state.count} times&nbsp;

          <button onClick={() => update(1)}>+1</button>
          <button onClick={() => update(-1)}>-1</button>

          <button onClick={() => update(1)}>Update User</button>

        </div>
        <div>{state.attr}</div>
        <br />
        <Component1 count={state.count}></Component1>
      </UserContext.Provider>

      <br />
      <div>{process.env.REACT_APP_VARIABLE}</div>

      <UseRefExample></UseRefExample>
    </div>
  );
}

export default App;
