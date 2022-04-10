import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register here:</h3>
            <form>
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" placeholder='your email' />
                <input type="password" placeholder='password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;