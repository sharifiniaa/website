import { ReactNode } from "react";

type Props =  {
  children: ReactNode
}

const ContentSection = ({children} : Props) => {
  return (
    <div className="content-section">
      {children}
      <style scoped>{`
        .content-section {
          margin-left: 320px;
          width: calc(100% - 320px);
        }
        @media screen and (max-width: 1199.98px) {
          .content-section {
            margin-left: 80px;
            width: calc(100% - 80px);
          }
        }
        @media screen and (max-width: 767.98px) {
          .content-section {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentSection;
