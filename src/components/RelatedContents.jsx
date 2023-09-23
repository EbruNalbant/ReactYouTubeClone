import VideoCard from "../components/VideoCard";

const RelatedContents = ({ classname, contents }) => {
  return (
    <div className={classname}>
      {contents?.map((content, i) => {
        return <VideoCard key={i} video={content?.video} />;
      })}
    </div>
  );
};

export default RelatedContents;
