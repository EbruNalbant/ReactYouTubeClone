import millify from "millify";
import moment from "moment";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import StringArea from "./StringArea";

const ChannelDetail = ({ detail }) => {
  return (
    <>
      {/* video title */}
      <h1 className="mt-3 text-xl font-bold p-3">{detail.title}</h1>

      {/* left side - information of channel & avatar*/}
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail.author.avatar[0].url}
          />
          <div>
            <h4>{detail.author.title}</h4>
            <p>{detail.author.stats.subscribesText}</p>
          </div>
          <button className="bg-white h-9 rounded-full text-black px-3 transition-all hover:bg-[#bebebe]">
            Subscribe
          </button>
        </div>
        {/* right side - like & dislike buttons */}
        <div className="flex items-center rounded-full bg-[#4b4a4a] px-6 py-1">
          <div className="flex gap-2 items-center border-r-2 border-r-white pr-3">
            <AiFillLike />
            <span>{millify(detail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>
      {/* about part of the video*/}
      <div className="bg-[#383838] mt-2 p-2 cursor-pointer hover:bg-[#535353] rounded">
        <div className="flex gap-3">
          <p>{millify(detail.stats.views)} Views </p>
          <p>{moment(detail.publishedDate).fromNow()}</p>
          <ul className="flex gap-3">
            {detail.superTitle.items.slice(0, 3).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <StringArea text={detail.description} maxChar={200} />
      </div>
    </>
  );
};

export default ChannelDetail;
