import ReactPlayer from "react-player";
import ChannelDetail from "../components/ChannelDetail";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { getData } from "../helpers";
import RelatedContents from "../components/RelatedContents";
import SideNav from "../components/SideNav";
const VideoDetail = () => {
  const [detail, setDetail] = useState(null);
  const [relatedContents, setRelatedContents] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    setDetail(null);
    setRelatedContents(null);

    //request apı for detail of videos
    getData(`/video/details/?id=${videoId}`)
      .then((detail) => setDetail(detail))
      .catch((error) => console.log(error));
    //request apı for video related contents
    getData(`/video/related-contents/?id=${videoId}`).then((relatedData) =>
      setRelatedContents(relatedData.contents)
    );
  }, [videoId]);
  return (
    <div className=" lg:px-[100px] flex flex-col gap-5 lg:flex-row min-h-[95vh] text-white bg-[#0f0f0f] ">
      <SideNav />
      {/* Player side */}
      <div>
        <ReactPlayer
          width={"100%"}
          height={"500px"}
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
        />
        {!detail ? <Loading /> : <ChannelDetail detail={detail} />}
      </div>
      {/* Related contents */}
      {!relatedContents ? (
        <Loading />
      ) : (
        <RelatedContents contents={relatedContents} />
      )}
    </div>
  );
};

export default VideoDetail;
