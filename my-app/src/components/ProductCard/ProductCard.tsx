import React from 'react';
import style from './productCard.module.scss';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  handlePostClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, handlePostClick }) => {
  return (
    <div onClick={handlePostClick} className={style.productCard}>
      <img src={imageUrl} alt={title} className={style.productCard__image} />
      <div className={style.productCard__content}>
        <h2 className={style.productCard__title}>{title}</h2>
        <p className={style.productCard__description}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
