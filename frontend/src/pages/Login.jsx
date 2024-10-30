import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center ' >
      <div className='flex flex-col gap-3 m-auto p-8 min-w-[340px] sm:min-w-96 rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold '>{state === 'Sign Up' ? "Create account" : "Login"} </p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment </p>
        <div className='w-full'>
          <p>Full Name</p>
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='border border-zinc-300 rounded w-full p-2 mt-1' required />
        </div>
        <div className='w-full'>
          <p>Email</p>
          <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='border border-zinc-300 rounded w-full p-2 mt-1' required />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='border border-zinc-300 rounded w-full p-2 mt-1' required />
        </div >
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? " Create Account " : "Log in"}</button>
        <p>
          {
            state === 'Sign Up' ? <p>Already have an account ? log in here </p> 
             : <p> Create a New account ? click here </p>
          }
        </p>
      </div>
    </form>
  )
}

export default Login
