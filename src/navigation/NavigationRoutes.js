// Tab Routes
import HomeTab from '../containers/tabbar/home/HomeTab';
import LeaguesTab from '../containers/tabbar/leagues/LeaguesTab';
import SearchTab from '../containers/tabbar/search/SearchTab';
import LeaderBoardTab from '../containers/tabbar/leaderBoard/LeaderBoardTab';
import ProfileTab from '../containers/tabbar/profile/ProfileTab';

// Screens Route
import Splash from '../containers/auth/Splash';
import TabBar from './Type/TabBarNavigation';

export const TabRoute = {
  HomeTab,
  LeaguesTab,
  SearchTab,
  LeaderBoardTab,
  ProfileTab,
};

export const StackRoute = {
  Splash,
  TabBar,
};
