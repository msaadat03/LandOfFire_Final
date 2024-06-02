import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../pages/About/About";
import Cities from "../layout/menu/Cities";
import Map from "../pages/Map/Map";
import Art from "../pages/Art/Art";
import Music from "../pages/Music/Music";
import Food from "../pages/Food/Food";
import Lang from "../pages/Language/Lang";
import DynamicInfo from "../pages/Info/DynamicInfo";
import HelpfulInformation from "../pages/HelpfulInformation/HelpfulInformation";
import UsefulStatements from "../pages/UsefulInformation/UsefulStatements";
import TouristVisa from "../pages/TouristVisa/TouristVisa";
import Rules from "../pages/Rules/Rules";
import Seasons from "../pages/Seasons/Seasons";
import HolidaysAndFestivals from "../pages/HolidaysAndFestivals/HolidaysAndFestivals";
import Holiday from "../pages/Holiday/Holiday";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "info/:id",
        element: <DynamicInfo />,
      },
      {
        path: "cities",
        element: <Cities />,
      },
      {
        path: "map",
        element: <Map />,
      },
      {
        path: "art",
        element: <Art />,
      },
      {
        path: "music",
        element: <Music />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "lang",
        element: <Lang />,
      },
      {
        path: "helpfull-information",
        element: <HelpfulInformation />,
      },
      {
        path: "useful-statements",
        element: <UsefulStatements />,
      },
      {
        path: "tourist-visa",
        element: <TouristVisa />,
      },
      {
        path: "rules",
        element: <Rules />,
      },
      {
        path: "seasons",
        element: <Seasons />,
      },
      {
        path: "holidays-and-festivals",
        element: <HolidaysAndFestivals />,
      },
      {
        path: "holiday/:id",
        element: <Holiday />,
      },
    ],
  },
]);
