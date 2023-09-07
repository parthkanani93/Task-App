import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Local Imports
import {TabRoute} from '../NavigationRoutes';
import {TabNav} from '../NavigationKeys';
import {colors, styles} from '../../themes';
import {getHeight} from '../../common/constants';
import strings from '../../i18n/strings';
import CText from '../../components/common/CText';
import {
  Home_Active_Icon,
  Home_InActive_Icon,
  Leagues_Active_Icon,
  Leagues_Inactive_Icon,
  Search_Active_Icon,
  Search_InActive_Icon,
  Profile_Active_Icon,
  Profile_Inactive_Icon,
  LeaderBoard_Active_Icon,
  LeaderBoard_Inactive_Icon,
} from '../../assets/svgs';

export default function TabBarNavigation() {
  const Tab = createBottomTabNavigator();

  const TabText = memo(({IconType, label, focused}) => (
    <View style={localStyle.tabViewContainer}>
      {IconType}
      <CText
        style={styles.mt5}
        numberOfLines={1}
        color={focused ? colors.textColor : colors.grayScale5}
        type={'M10'}>
        {label}
      </CText>
    </View>
  ));

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: [
          localStyle.tabBarStyle,
          {backgroundColor: colors.backgroundColor},
        ],
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.HomeTab}>
      <Tab.Screen
        name={TabNav.HomeTab}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={focused ? <Home_Active_Icon /> : <Home_InActive_Icon />}
              focused={focused}
              label={strings.home}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.LeaguesTab}
        component={TabRoute.LeaguesTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <Leagues_Active_Icon /> : <Leagues_Inactive_Icon />
              }
              focused={focused}
              label={strings.leagues}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.SearchTab}
        component={TabRoute.SearchTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <Search_Active_Icon /> : <Search_InActive_Icon />
              }
              focused={focused}
              label={strings.research}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.LeaderBoardTab}
        component={TabRoute.LeaderBoardTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? (
                  <LeaderBoard_Active_Icon />
                ) : (
                  <LeaderBoard_Inactive_Icon />
                )
              }
              focused={focused}
              label={strings.leaderboard}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.ProfileTab}
        component={TabRoute.ProfileTab}
        options={{
          tabBarIcon: ({focused}) => (
            <TabText
              IconType={
                focused ? <Profile_Active_Icon /> : <Profile_Inactive_Icon />
              }
              focused={focused}
              label={strings.profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyle = StyleSheet.create({
  tabBarStyle: {
    height: getHeight(60),
    ...styles.ph20,
    borderTopWidth: 0,
  },
  tabViewContainer: {
    ...styles.center,
  },
});
