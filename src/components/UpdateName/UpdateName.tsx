/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Dispatch, SetStateAction, useState } from 'react';
import styles from './UpdateName.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, dataUserReducer } from '../../store/store';
import { dataProfile, updateProfile } from '../../services/api';

type showProps = {
  isOpen: Dispatch<SetStateAction<boolean>>;
};

const UpdateName: React.FC<showProps> = ({ isOpen }) => {
  const userData = useSelector((state: RootState) => state.user);
  const userLogin = useSelector((state: RootState) => state.login);
  const dispatch = useDispatch<AppDispatch>();
  const [firstName, setFirstName] = useState<string | null>(userData.firstName);
  const [lastName, setLastName] = useState<string | null>(userData.lastName);

  const clickOnUpdate = () => {
    updateProfile(userLogin.token!, firstName!, lastName!);
    dataProfile(userLogin.token!).then((data) => {
      if (data.status) {
        dispatch(dataUserReducer(data.body));
      }
    });
    isOpen(false);
  };

  return (
    <div className={styles['container']}>
      <input
        type='text'
        placeholder='Firstname'
        value={firstName || ''}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Lastname'
        value={lastName || ''}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={clickOnUpdate}>Update</button>
    </div>
  );
};

export default UpdateName;
