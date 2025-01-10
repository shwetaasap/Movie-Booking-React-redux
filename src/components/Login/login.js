import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let Login = () => {
  const [state, setstate] = useState({
    username: "user1",
    password: "1234"
  });
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  let loginSubmit = () => {
    if (state.username === 'user1' && state.password === '1234') {

      setMessage(<span className='text-success'>user authenticated</span>);
      navigate('/home')
    } else {
      setMessage(<span className='text-danger'>Try Again</span>);
    }
  }


  return (
    <div className="col-lg-4 border m-5 p-3 logIn">
      <h3 className="text-primary border-bottom m-1">LogIn</h3>
      <div className="form-group form-row mt-4">
        <label>Email:</label>
        <input type="text" className="form-control" defaultValue={state.username} autoFocus="autoFocus" onChange={(event) => setstate({ ...state, username: event.target.value }, console.log(state))}></input>
      </div>
      <div className='form-group form-row mt-4'>
        <label>Password:</label>
        <input type="password" className="form-control" defaultValue={state.password} onChange={(event) => setstate({ ...state, password: event.target.value })}></input>
      </div>
      <div className="text-center m-3">
        <p>{message}</p>
        <button className="btn btn-dark" onClick={loginSubmit}>LogIn</button>
      </div>
    </div>
  );
}
export default Login;

