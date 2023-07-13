import styles from './Topbar.module.scss';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaCircleUser } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Topbar = () => {
  const userLogin = useSelector((state: RootState) => state.login);
  const userData = useSelector((state: RootState) => state.user);
  console.log(userData);

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
      {userLogin.statusLogin && <span>{userData.firstName}</span>}
      <div>
        {userLogin.statusLogin ? (
          // Faire la logique de deconnection navigation
          <Link className={styles['main-nav-item']} to={'/'}>
            <FaSignOutAlt />
            Sign Out
          </Link>
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
