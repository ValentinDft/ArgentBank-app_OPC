import styles from './Topbar.module.scss';
import { Link } from 'react-router-dom';
import { FaCircleUser } from 'react-icons/fa6';

const Topbar = () => {
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
      <div>
        <Link className={styles['main-nav-item']} to={'/login'}>
          <FaCircleUser />
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
