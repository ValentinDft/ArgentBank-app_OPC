import { useSelector } from 'react-redux';
import { AppDispatch, RootState, dataUserReducer } from '../../store/store';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { dataProfile } from '../../services/api';
import { useDispatch } from 'react-redux';

const Profile = () => {
  const userLogin = useSelector((state: RootState) => state.login);
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
    return <div>Profile</div>;
  } else {
    return null;
  }
};

export default Profile;
