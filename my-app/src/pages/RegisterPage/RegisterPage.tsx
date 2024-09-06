import React, { useState } from 'react';
import axios from 'axios';
import { setUser } from '../../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast/Toast';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../apiConstants';
import style from './register.module.scss';

const RegisterPage:React.FC = () => {
    const [username, setUsername] = useState('');
    const [toastMessage, setToastMessage] = useState<string | null>(null);
    const [showToast, setShowToast] = useState(false); 
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users?username=${username}`);
            if (response.data.length > 0) {
                const user = response.data[0];
                dispatch(setUser({ username: user.username, id: user.id }));
                navigate('/');
            } else {
                setToastMessage('User not found');
                setShowToast(true);
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };
  return (
    <>
        {showToast && <Toast show={showToast} message={toastMessage} onClose={() => setShowToast(false)} />}
        <div className={style.register}>
            <div className={style.register_content} onClick={(e) => e.stopPropagation()}>
                <h2 className={style.register_title}>Sign In</h2>
                <div className={style.register_box}>
                    <input placeholder='UserName' onChange={(e) => setUsername(e.target.value)} type="text" className={style.register_box_input} />
                    <button  onClick={handleSubmit} className={style.register_box_button}>Go</button>
                    <NavLink to="/" className={style.register_box_link}>Go Home</NavLink>
                </div>
            </div>
        </div>
        </>
  )
}

export default RegisterPage