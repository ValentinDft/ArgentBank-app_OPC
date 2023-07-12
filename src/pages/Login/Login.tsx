import { FormEvent, useRef } from 'react';
import styles from './Login.module.scss';
import { FaCircleUser } from 'react-icons/fa6';
import { statusLogin } from '../../services/postLogin.ts';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const refUsername = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const signIn = (e: FormEvent) => {
    e.preventDefault();

    statusLogin(refUsername.current!.value, refPassword.current!.value).then(
      (response) => {
        response.status === 200 && navigate('/profile');
      }
    );
  };

  return (
    <main className={styles['container-login']}>
      <section className={styles['sign-in-content']}>
        <FaCircleUser />
        <h1>Sign In</h1>
        <form onSubmit={(e) => signIn(e)}>
          <div className={styles['input-wrapper']}>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={'tony@stark.com'}
              ref={refUsername}
            />
          </div>
          <div className={styles['input-wrapper']}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={'password123'}
              ref={refPassword}
            />
          </div>
          <div className={styles['input-remember']}>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          {/* PLACEHOLDER DUE TO STATIC SITE  */}
          {/* <a href='./user.html' className={styles['sign-in-button']}>
            Sign In
          </a> */}
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          <button className={styles['sign-in-button']} type='submit'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
