import { useRouter } from 'next/router';
import { blog } from '../../mock/index';
import Post from '../../components/Blog/Post';

const BlogPost = () => {
  const router = useRouter();
  const { id: postId } = router.query;

  return (
    <div className="blog-post">
      {blog
        .filter((e) => e.id === postId)
        .map((e) => (
          <Post data={e} key={e.id} />
        ))}
      <style scoped jsx>
        {`
          .blog-post {
            padding-left: 5%;
            padding-right: 5%;
          }
        `}
      </style>
    </div>
  );
};

export default BlogPost;
