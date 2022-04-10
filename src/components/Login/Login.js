import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h2>Please login in to my website otherwise you are gonna be Hi-jacked</h2>
            <div style={{ margin: '10px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>

            </div>
            <br />
            <form>
                <input type="email" placeholder='your email' />
                <br />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;