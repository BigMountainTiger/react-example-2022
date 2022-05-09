import React, { useContext } from 'react'
import { UserContext } from '../contexts/UserContext';

function Component3() {

    const style = {
        backgroundColor: 'red',
        padding: '20px'
    }

    const { user } = useContext(UserContext);

    return (
        <div style={style}>Component3 - {user?.name || 'N/A'}</div>
    )
}

export default Component3