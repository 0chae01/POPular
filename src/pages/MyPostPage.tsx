import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Post } from '../types/post';
import PostList from '../components/UserMenu/components/PostList';
import MetaTag from '../components/SEO/MetaTag';

const MyPostPage = () => {
  const [posts, setPost] = useState<Post[]>([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch('/post/all');
    const result: Post[] = await response.json();

    setPost(result);
  }

  return (
    <div>
      <MetaTag title={`POPULAR | 내가 쓴 글`} />
      <Title>내가 쓴 글</Title>
      <PostList posts={posts} />
    </div>
  );
};

export default MyPostPage;

const Title = styled.h1`
  font-size: var(--font-medium);
  color: var(--color-main);
  margin-bottom: 20px;
`;
