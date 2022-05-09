import { useState, useEffect } from 'react';
import Component2 from './Component2';
import Component3 from './Component3';
import { OBJ } from '../services/Service1';

function Component1(props) {

    const style = {
        component: {
            backgroundColor: '#66EFEF',
            borderRadius: '10px',
            padding: '15px',
            borderStyle: 'solid',
            borderWidth: '1px',
            color: 'white'
        }
    };

    const [state, setState] = useState({});

    useEffect(() => {
        if (!props.count && props.count !== 0)
            return;

        const label = `You clicked ${props.count} times`;
        document.title = label;

        setState(p => {
            return { ...p, ...{ label: label } };
        });

    }, [props.count]);

    return (
        <div style={style.component}>

            <div>
                This is the Component No.1
            </div>
            <button style={{ backgroundColor: 'pink', fontSize: '20px' }} onClick={() => { OBJ.print() }}>Call Service1 Object Print()</button>
            <br />

            <div>{state.label}</div>

            <br />
            <Component2></Component2>
            <br />
            <Component2></Component2>
            <br />
            <Component3></Component3>
        </div>
    );
}

export default Component1;
