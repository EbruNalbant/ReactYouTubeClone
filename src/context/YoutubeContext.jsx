import { createContext, useEffect, useState } from "react";
import { getData } from "../helpers";

export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
  const [selected, setSelected] = useState({ name: "Home", type: "home" });
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    if (selected.type === "home") {
      getData("/home/").then((data) => setVideos(data.contents));
    } else {
      getData(`/search/?q=${selected.name.toLocaleLowerCase()}`).then((data) =>
        setVideos(data.contents)
      );
    }
  }, [selected]);
  return (
    <YoutubeContext.Provider
      value={{ selected, setSelected, videos, setVideos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
