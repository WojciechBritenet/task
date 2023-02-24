//@ts-nocheck
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import './Login.css';
import Home from "./Home";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  useEffect(() => {
    if(success) {
      window.location.replace('/admin');
    }
  }, [success])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = JSON.parse(await window.localStorage.getItem("UserList"))
      const userData = response.find((item) => item.email === user && item.password === pwd) || null
      const roles = userData.firstName;
      setAuth({ user, pwd, roles });
      setUser('');
      setPwd('');
      setSuccess(true);
      window.localStorage.setItem("auth", JSON.stringify(true));
    } catch (err) {
      setErrMsg('No Server Response');
    }
  }

  return (
    <>
        <section >
          {/*@ts-ignore*/}
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1 className="SignIn">Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      <Home></Home>
    </>
  )
}

export default Login