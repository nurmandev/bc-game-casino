import { useLocation } from "react-router-dom";
import SoccerTopHeader from "./SoccerTopHeader";
import SoccerHome from "./SoccerHome";
import SoccerLiveIcon from "./SoccerLiveIcon";
import SoccerStar from "./SoccerStar";
import SoccerCopy from "./SoccerCopy";
import SoccerSearchBar from "./SoccerSearchBar";
import Earth from "./Earth";
import SoccerTenis from "./SoccerTenis";
import SoccerGunMan from "./SoccerGunMan";
import DotaPage from "./DotaPage";
import SoccerCricket from "../spotesPages/SoccerCricket";
import SoccerBaseBallPage from "../spotesPages/SoccerBaseBallPage";
import SoccerFootball from "../spotesPages/SoccerFootball";
import Fifa from "../spotesPages/Fifa";
import SoccerBasketball from "../spotesPages/SoccerBasketball";
import AmericanFootBall from "../spotesPages/AmericanFootBall";
import VolleyBall from "../spotesPages/VolleyBall";
import IceHockey from "../spotesPages/IceHockey";
import HorseRace from "../spotesPages/HorseRace";
import Boxing from "../spotesPages/Boxing";
import TableTenis from "../spotesPages/TableTenis";
import SoccerNba2k from "../spotesPages/SoccerNba2k";
import Ehorse24Page from "../spotesPages/Ehorse24Page";

const Soccer = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const btPath = queryParams.get("bt-path");

  const components = {
    ImHome: <SoccerHome />,
    LiveIcon: <SoccerLiveIcon />,
    IoStarOutline: <SoccerStar />,
    CgCopy: <SoccerCopy />,
    Earth: <Earth />,
    IoFootball: <SoccerFootball />,
    FifaIcon: <Fifa />,
    TenisIcon: <SoccerTenis />,
    FaBasketballBall: <SoccerBasketball />,
    GunMan: <SoccerGunMan />,
    DotaIcon: <DotaPage />,
    AmericanFootballIcon: <AmericanFootBall />,
    BaseBallIcon: <SoccerBaseBallPage />,
    PiCricketLight: <SoccerCricket />,
    FaVolleyballBall: <VolleyBall />,
    GiHockey: <IceHockey />,
    LiaHorseHeadSolid: <HorseRace />,
    PiBoxingGloveFill: <Boxing />,
    LiaTableTennisSolid: <TableTenis />,
    Nba2k: <SoccerNba2k />,
    EhorseIcon: <Ehorse24Page />,
    VscSearch: <SoccerSearchBar />,
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="w-[100%]">
          <SoccerTopHeader />
          {components[btPath] || <SoccerHome />}
        </div>
      </div>
    </>
  );
};

export default Soccer;
