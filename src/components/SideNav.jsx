import { useContext } from "react";
import { categories } from "../contants/index";
import { YoutubeContext } from "../context/youtubeContext";

const SideNav = () => {
  const { selected, setSelected } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col p-4">
      {categories.map((i, index) => (
        <div
          onClick={() => {
            i.type !== "menu" && setSelected(i);
          }}
          key={index}
        >
          <div
            className={`${
              selected.name === i.name && "bg-[#2d2d2d]"
            } flex items-start gap-2 p-2 py-4 text-base md:text-lg cursor-pointer rounded-md transition hover:bg-[#2d2d2d]`}
          >
            {i.icon}
            {i.name}
          </div>
          {i.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
