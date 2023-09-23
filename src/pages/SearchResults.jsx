import { useSearchParams } from "react-router-dom";
import SideNav from "../components/SideNav";
import { useEffect, useState } from "react";
import { getData } from "../helpers";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const SearchResults = () => {
  const [params, setParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);
  const query = params.get("search_query");

  useEffect(() => {
    getData(`https://youtube138.p.rapidapi.com/search/?q=${query}`).then(
      (results) => setSearchResults(results)
    );
  }, [query]);
  return (
    <div className="flex bg-[#0f0f0f] text-white min-h-[100vh]">
      <SideNav />
      <div className="flex flex-col gap-20 p-10 w-full">
        {!searchResults ? (
          <Loading />
        ) : (
          searchResults?.contents?.map((item, i) => {
            return <VideoCard video={item?.video} key={i} />;
          })
        )}
      </div>
    </div>
  );
};
export default SearchResults;
