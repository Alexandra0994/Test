import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import style from './detailInformation.module.scss'
import { BASE_URL } from '../../apiConstants';

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  body: string;
  email: string;
}

const DetailInformation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const [postResponse, commentsResponse] = await Promise.all([
          axios.get(`${BASE_URL}/posts/${id}`),
          axios.get(`${BASE_URL}/comments`) 
        ]);
        setPost(postResponse.data);

        const filteredComments = commentsResponse.data.filter((comment: Comment) => comment?.postId === post?.id);
        setComments(filteredComments);
      } catch (error) {
        console.error('Error fetching post or comments:', error);
      }
    };

    fetchPostAndComments();
  }, [id, post?.id]);

  if (!post) {
    return <p>Loading post...</p>;
  }

  return (
    <div>
      <h2>Post</h2>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>post`s id {post.id}</p>
      <p> this post belongs user with id: {post.userId}</p>

      <h2>Comments</h2>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id} className={style.comments_container}>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
            <p>this is comment for postId : {comment.postId}</p>
            <p>{comment.email}</p>
          </div>
        ))
      ) : (
        <p>No comments for this post.</p>
      )}
    </div>
  );
};

export default DetailInformation;
