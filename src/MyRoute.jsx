import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/HomePage/Home";
import Vip from "./pages/VIP club/VipClub";
import Bonus from "./pages/Bonus/Bonus";
import Affiliate from "./pages/Affiliation/Affiliate";
import ProvablyFair from "./pages/Help Center/ProvablyFair";
import LCFC from "./pages/Sponcership/LCFC";
import ColbyCovington from "./pages/Sponcership/ColbyCovington";
import MiamiClub from "./pages/Sponcership/MiamiClub";
import JasonDerulo from "./pages/Sponcership/JasonDerulo";
import LilPump from "./pages/Sponcership/LilPump";
import DailyContest from "./pages/Permotion/DailyContest";
import WeeklyRaffle from "./pages/Permotion/WeeklyRaffle";
import BCAirdrop from "./pages/Permotion/BCAirdrop";
import HighLowSpreed from "./pages/CryptoTrading/high-low-spread/HighLowSpreed";
import UpDown from "./pages/CryptoTrading/up-down/UpDown";
import Feature from "./pages/CryptoTrading/feature/Feature";
import Alllotteries from "./pages/Lottery/All lotteries/Alllotteries";
import BCLottery from "./pages/Lottery/BC Lottery/BCLottery";
import Popular from "./pages/Lottery/Popular/Popular";
import Pick from "./pages/Lottery/Pick/Pick";
import Favorites from "./pages/Lottery/Favorites/Favorites";
import Mybets from "./pages/Lottery/My bets/Mybets";
import Soccer from "./pages/Sports/Soccer/Soccer";
import PokerGame from "./pages/BcPoker/PokerGame";
import TopPicks from "./pages/Cashino/TopPicks";
import Wallet from "./pages/Wallet/Wallet";
import GlobalSetting from "./pages/SignUp pages/GlobalSetting";
// import ReferAndEarn from "./pages/Permotion/ReferAndEarn";


function MyRoute() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        //vip club
        { path: "/VipClub", element: <Vip /> },
        { path: "/bonus", element: <Bonus /> },
        { path: "/affiliate", element: <Affiliate /> },
        { path: "/provably-fair", element: <ProvablyFair /> },
        //sponcership
        { path: "/lcfc", element: <LCFC /> },
        { path: "/jasonderulo", element: <JasonDerulo /> },
        { path: "/lilpump", element: <LilPump /> },
        { path: "/colbycovington", element: <ColbyCovington /> },
        { path: "/miamiclub", element: <MiamiClub /> },
        //promotion
        { path: "/BCAirdrop", element: <BCAirdrop /> },
        // { path: "/ReferandEarn", element: <ReferAndEarn/> },
        { path: "/dailycontest", element: <DailyContest /> },
        { path: "/WeeklyRaffle", element: <WeeklyRaffle /> },
        //Crypto trading
        { path: "/high-low-spread", element: <HighLowSpreed /> },
        { path: "/up-down", element: <UpDown /> },
        { path: "/feature", element: <Feature /> },
        //Lottery
        { path: "/all-lotteries", element: <Alllotteries /> },
        { path: "/bc-lottery", element: <BCLottery /> },
        { path: "/popular", element: <Popular /> },
        { path: "/Pick", element: <Pick /> },
        { path: "/Favorites", element: <Favorites /> },
        { path: "/Mybets", element: <Mybets /> },
        //Sports
        { path: "/soccer", element: <Soccer /> },
        //BcPoker
        { path: "/bc-pocker", element: <PokerGame /> },
        //Casino
        { path: "/detaile/:slug", element: <TopPicks /> },
        //wallet
        {path:"/wallet", element:<Wallet/>},
        //Global Setting
        {path:"/GlobalSetting", element:<GlobalSetting/> },
        
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default MyRoute;
