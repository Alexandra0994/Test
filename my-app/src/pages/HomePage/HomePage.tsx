import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/postSlice';
import { RootState, AppDispatch } from '../../store';
import style from "./homePage.module.scss"
import ProductCard from '../../components/ProductCard/ProductCard';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { posts, loading, error } = useSelector((state: RootState) => state.posts);

  const [delayedLoading, setDelayedLoading] = useState(true);

  const handlePostClick = (id: number) => {
    navigate(`/post/${id}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPosts());
      setDelayedLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (delayedLoading || loading) {
    return (
      <div className={style.loaderContainer}>
        <div className={style.loader}></div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1 className={style.title}>Posts</h1>

      <div className={style.gridContainer}>
        {posts.map((post) => (
          <ProductCard
            handlePostClick={() => handlePostClick(post.id)}
            key={post.id}
            title={post.title}
            description={post.body}
            imageUrl="https://img.freepik.com/free-photo/cute-kitten-sitting-grass-looking-beautiful-nature-generated-by-artificial-intelligence_25030-63250.jpg?t=st=1725550285~exp=1725553885~hmac=cf958700676e1001b7d1d19b61821037be5236d7f0c47b4b41cea1847f8d3b10&w=1060"
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
