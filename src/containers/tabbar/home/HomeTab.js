import React from 'react';
import {View, StyleSheet} from 'react-native';

import {colors} from '../../../themes/colors';
import CHeader from '../../../components/common/CHeader';
import {ChatIcon, LogoIcon} from '../../../assets/svgs';
import UserProfile from './components/UserProfile';
import ScoreBoard from './components/ScoreBoard';
import ProfileTabView from './components/ProfileTabView';

const HomeTab = () => {
  return (
    <View style={localStyle.mainContainer}>
      <CHeader
        title={'Profile'}
        isHideBack={true}
        isLeftIcon={<LogoIcon />}
        rightIcon={<ChatIcon />}
      />
      <UserProfile />
      <ScoreBoard />
      <ProfileTabView />
    </View>
  );
};

const localStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default HomeTab;
