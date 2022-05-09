import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// import '../App.css';

function Component2() {
    const { user, upate_user } = useContext(UserContext);

    return (
        <div>
            <div>
                This is component No.2
            </div>
            <div>
                <button onClick={() => upate_user('The name is updated in component No.2')}>Update user in component No.2</button>
            </div>
            <div>
                {user?.name}
            </div>
        </div>
    );
}

export default Component2;
