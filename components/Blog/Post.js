const Post = ({ data }) => {
  return (
    <div>
      <img alt='' src={data.image} className='image' />
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <style scoped jsx>{`
        .image {
          width: 200px;
          height: 200px;
        }
      `}</style>
    </div>
  );
};

export default Post;
