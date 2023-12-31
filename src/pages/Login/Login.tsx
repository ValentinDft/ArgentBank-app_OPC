/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { FormEvent, useRef } from 'react';
import styles from './Login.module.scss';
import { FaCircleUser } from 'react-icons/fa6';
import { statusLogin } from '../../services/api.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch, signInReducer } from '../../store/store.ts';

const Login = () => {
  const refUsername = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const signIn = (e: FormEvent) => {
    e.preventDefault();

    statusLogin(refUsername.current!.value, refPassword.current!.value).then(
      (response) => {
        if (response.status === 200) {
          dispatch(
            signInReducer({ statusLogin: true, token: response.body.token })
          );
          navigate('/profile');
        }
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
            <input type='text' id='username' ref={refUsername} />
          </div>
          <div className={styles['input-wrapper']}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={refPassword} />
          </div>
          <div className={styles['input-remember']}>
            <input type='checkbox' id='remember-me' />
            <label htmlFor='remember-me'>Remember me</label>
          </div>
          <button className={styles['sign-in-button']} type='submit'>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login;
