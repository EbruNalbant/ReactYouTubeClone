import millify from "millify";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Link className="w-full" to={`/watch/${video?.videoId}`}>
      <div>
        {/* image part */}
        <div className="cursor-pointer">
          <img className="rounded w-full" src={video?.thumbnails?.pop()?.url} />
        </div>
        {/* information part */}
        <div className="flex gap-3 mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src={video?.author?.avatar[0].url}
          />
          <div>
            <h4 className="font-bold">{video?.title}</h4>
            <p>{video?.author?.title}</p>
            <div className="flex gap-3">
              <p>{millify(video?.stats?.views)}</p>
              <p>{video?.publishedTimeText}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
