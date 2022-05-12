import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Page3Detail = () => {

    console.log(`Page3Detail rendered`);

    const style = {
        container: {
            backgroundColor: 'lightpink',
            height: '100px'
        }
    }

    const { a, b } = useParams();
    const [state, setState] = useState({})

    useEffect(() => {

        // May need to clear the state before making an Ajax call
        setState({});

        const loadData = async () => {
            const p = new Promise((rs, rj) => {
                setTimeout(() => {
                    rs({
                        a: `Text formatted async way a is ${a}`,
                        b: `Text formatted async way b is ${b}`
                    });
                }, 10);
            });

            const v = await p;
            setState(p => {
                return { ...p, ...v };
            });
        };

        loadData();

    }, [a, b])


    return (
        <div style={style.container}>
            <div>Page3Detail</div>
            <div>a = {a}, b = {b}</div>
            <div>a = {state.a}, b = {state.b}</div>
        </div>
    )
}

export default Page3Detail;