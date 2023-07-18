import styles from './Topbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  RootState,
  dataUserReducer,
  signInReducer,
} from '../../store/store';

const Topbar = () => {
  const userLogin = useSelector((state: RootState) => state.login);
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(signInReducer({ statusLogin: false, token: null }));
    dispatch(
      dataUserReducer({
        email: null,
        firstName: null,
        lastName: null,
        createdAt: null,
        updatedAt: null,
        id: null,
      })
    );
    navigate('/');
  };

  return (
    <nav className={styles['main-nav']}>
      <Link to={'/'} className={styles['main-nav-logo']}>
        <img
          className={styles['main-nav-logo-image']}
          src='./assets/argentBankLogo.png'
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </Link>

      <div className={styles['main-nav-container']}>
        {userLogin.statusLogin && (
          <Link className={styles['main-nav-item']} to={'/profile'}>
            <FaCircleUser />
            {userData.firstName}
          </Link>
        )}
        {userLogin.statusLogin ? (
          // Faire la logique de deconnection navigation
          <div className={styles['sign-out']} onClick={signOut}>
            <FaSignOutAlt />
            Sign Out
          </div>
        ) : (
          <Link className={styles['main-nav-item']} to={'/login'}>
            <FaCircleUser />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
