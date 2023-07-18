import styles from './Profile.module.scss';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, dataUserReducer } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { dataProfile } from '../../services/api';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const userLogin = useSelector((state: RootState) => state.login);
  const userData = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLogin.statusLogin) {
      navigate('/');
    } else {
      dataProfile(userLogin.token!).then((data) => {
        if (data.status) {
          dispatch(dataUserReducer(data.body));
        }
      });
    }
  }, [userLogin.statusLogin]);

  if (userLogin.statusLogin) {
    return (
      <main className={styles['container-profile']}>
        <div className={styles['header']}>
          <h1>
            Welcome back
            <br />
            {userData.firstName} {userData.lastName}!
          </h1>
          <button className={styles['edit-button']}>Edit Name</button>
        </div>
        <h2 className='sr-only'>Accounts</h2>
        <section className={styles['account']}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-tittle']}>
              Argent Bank Checking (x8349)
            </h3>
            <p className={styles['account-amount']}>$2,082.79</p>
            <p className={styles['account-amout-description']}>
              Available Balance
            </p>
          </div>
          <div className={styles['account-content-wrapper cpa']}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles['account']}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-tittle']}>
              Argent Bank Savings (x6712)
            </h3>
            <p className={styles['account-amount']}>$10,928.42</p>
            <p className={styles['account-amout-description']}>
              Available Balance
            </p>
          </div>
          <div className={styles['account-content-wrapper cpa']}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
        <section className={styles['account']}>
          <div className={styles['account-content-wrapper']}>
            <h3 className={styles['account-tittle']}>
              Argent Bank Credit Card (x8349)
            </h3>
            <p className={styles['account-amount']}>$184.30</p>
            <p className={styles['account-amout-description']}>
              Current Balance
            </p>
          </div>
          <div className={styles['account-content-wrapper cpa']}>
            <button className={styles['transaction-button']}>
              View transactions
            </button>
          </div>
        </section>
      </main>
    );
  } else {
    return null;
  }
};

export default Profile;
