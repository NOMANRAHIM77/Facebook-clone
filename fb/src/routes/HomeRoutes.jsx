import Home from "../pages/Home";
import FindFriends from "../pages/FindFriends";
import MarketPlace from "../pages/MarketPlace";
import Reels from "../pages/Reels";

export const HomeRoutes=[
    {
        path : "/home",
        element : <Home/>
    },
       {
        path : "/findfriends",
        element : <FindFriends/>
    },
       {
        path : "/reels",
        element : <Reels/>
    },
       {
        path : "/marketPlace",
        element : <MarketPlace/>
    },
]