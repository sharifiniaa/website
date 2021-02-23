const Content = ({ children }) => {
  return (
    <div className='content-section'>
      {children}
      <style scoped jsx>{`
        .content-section {
          margin-right: 380px;
          width: calc(100% - 380px);
          @media screen and (max-width: 1199.98px) {
            margin-right: 80px;
            width: calc(100% - 80px);
          }
          @media screen and (max-width: 767.98px) {
            margin-right: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Content;
