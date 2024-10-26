import React from 'react';

function Login({ email, setEmail, password, setPassword, handleLogin }) {
  const submitHandler = (e) => { 
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <form onSubmit={submitHandler} className='flex flex-col items-center justify-center gap-3'>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-white mt-2'
        type='email'
        placeholder='Enter Your E-mail'
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-white mt-2'
        type='password'
        placeholder='Enter Your Password'
      />
      <button className='text-white outline-none bg-emerald-600 hover:bg-emerald-800 border-2 border-emerald-600 px-5 rounded-full py-2 mt-5'>
        Log-In
      </button>
    </form>
  );
}

export default Login;
