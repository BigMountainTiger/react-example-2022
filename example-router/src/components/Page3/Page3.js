import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Page3Detail from './Page3Detail'

function Page3() {

    console.log(`Page3 rendered`);

    const navigate = useNavigate();

    useEffect(() => {
        // This can prorect a page from viewing if permission is not available
        // navigate('/');
    }, [])


    const goto = (a, b) => {
        navigate(`Page3Detail/${a}/${b}`);
    };

    return (
        <div>
            <br />
            <div>Page3</div>
            <div>
                <button onClick={() => { goto(3, 4); }}>Go 3/4</button>
                <button onClick={() => { goto(5, 6); }}>Go 5/6</button>
            </div>
            <br />
            <Routes>
                <Route path="Page3Detail/:a/:b/" element={<Page3Detail />} />
                <Route path="*" element={<Navigate to="Page3Detail/1/2/" replace />} />
            </Routes>
        </div>
    )
}

export default Page3