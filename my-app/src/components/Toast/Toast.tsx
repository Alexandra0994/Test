import React, { useEffect } from 'react';
import style from "./toast.module.scss"


interface ToastProps {
  message: string | null;
  show: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, show, duration = 3000, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration); 
      return () => clearTimeout(timer); 
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className={style.toast}>
      <p>{message}</p>
    </div>
  );
};

export default Toast;
