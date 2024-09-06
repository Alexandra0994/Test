import React, { useState } from 'react'
import style from "./header.module.scss"
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../redux/userSlice';
import { RootState } from '../../store';
import Toast from "../Toast/Toast"
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    setShowToast(true);
  };
  return (

    <div className={style.header}>
      <NavLink to="/" className={style.header_logo}>Best Aplication</NavLink>
      {user.username ? (
        <><span>Hello , {user.username}!</span>
          <button className={style.header_button} onClick={handleLogout}>
            Log Out
          </button>
        </>
      ) : (
        <NavLink to="/registration" className={style.header_button}>Sign In</NavLink>
      )}
      <Toast
        message={`Good bye!`}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>

  )
}

export default Header
