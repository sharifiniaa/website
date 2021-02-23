import { useRouter } from 'next/router';
import { blog } from '../../mock/index';
import Post from '../../components/Blog/Post';

const BlogPost = () => {
  const router = useRouter();
  const { id: postId } = router.query;

  return (
    <div>
      {blog
        .filter((e) => e.id == postId)
        .map((e) => (
          <Post data={e} key={e} />
        ))}
    </div>
  );
};

export default BlogPost;
