import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

// Categories
export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "home" },
  {
    name: "Trend",
    icon: <MdLocalFireDepartment />,
    type: "category",
  },
  {
    name: "Music",
    icon: <CgMusicNote />,
    type: "category",
  },
  { name: "Series", icon: <FiFilm />, type: "category" },
  { name: "live", icon: <MdLiveTv />, type: "category" },
  {
    name: "Game",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "News",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Sports",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Educational",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Beauty & Cosmetic",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },

  {
    name: "Report history",
    icon: <AiOutlineFlag />,
    type: "menu",
  },

  { name: "Help", icon: <FiHelpCircle />, type: "menu" },

  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];

// for api request
export const options = {
  params: { hl: "tr", gl: "TR" },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};
