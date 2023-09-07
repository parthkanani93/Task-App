import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

import {colors} from '../../../../themes/colors';
import {moderateScale} from '../../../../common/constants';
import {styles} from '../../../../themes';
import CText from '../../../../components/common/CText';
import Badges from './Badges';

const ProfileTabView = () => {
  const navigation = useNavigation();
  const [tab, setTab] = useState({
    index: 1,
    routes: [
      {key: 'first', title: 'Games played'},
      {key: 'second', title: 'Badges'},
    ],
  });

  const _handleIndexChange = index => {
    setTab({
      ...tab,
      index,
    });
  };

  const _renderScene = ({route}) => {
    if (route.key == 'first' && tab.index == 0) {
      return (
        <View style={localStyle.tabContainer}>
          <CText>{'Games Played'}</CText>
        </View>
      );
    }
    if (route.key == 'second' && tab.index == 1) {
      return <Badges />;
    }
  };

  const _renderTabBar = props => {
    return (
      <View style={localStyle.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={[
                localStyle.tabItem,
                {
                  borderBottomWidth: tab.index == i ? moderateScale(5) : 0,
                  borderColor: colors.primary,
                },
              ]}
              key={i.toString()}
              onPress={() => {
                _handleIndexChange(i);
              }}>
              <View style={localStyle.container}>
                <CText
                  type={tab.index == i ? 's14' : 'm14'}
                  color={tab.index == i ? colors.primary : colors.trend_title}
                  numberOfLines={1}
                  style={localStyle.homeTabText}>
                  {route.title}
                </CText>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={[styles.flex, styles.mt10]}>
      <TabView
        navigationState={tab}
        renderScene={_renderScene}
        renderTabBar={_renderTabBar}
        onIndexChange={_handleIndexChange}
        activeColor={{color: colors.primary}}
        navigation={navigation}
      />
    </View>
  );
};

const localStyle = StyleSheet.create({
  homeTabText: {
    ...styles.ml10,
  },
  tabBar: {
    backgroundColor: colors.white,
    ...styles.rowSpaceBetween,
  },
  tabItem: {
    alignItems: 'center',
    padding: moderateScale(10),
    flex: 1,
    borderColor: colors.darkPrimary,
  },
  tabContainer: {
    backgroundColor: 'rgba(98, 49, 173, 0.06)',
    ...styles.flex,
  },
});

export default ProfileTabView;
