import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        //   console.log('user',user);
        return (
          <div>
            <p>Signed In User: {user._tokenResponse.email}</p>
          </div>
        );
      }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card mg:max-w-lg bg-base-100 shadow-xl p-5">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">login</h2>
                </div>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className="btn btn-accent">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;