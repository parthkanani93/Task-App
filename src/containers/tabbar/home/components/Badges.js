import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import {colors, styles} from '../../../../themes';
import images from '../../../../assets/images';
import {moderateScale} from '../../../../common/constants';
import CText from '../../../../components/common/CText';
import {badgeData} from '../../../../api/constant';

const Badges = () => {
  const renderBadge = ({item}) => {
    return (
      <View style={localStyles.badgeContainer}>
        <Image source={images.badgeImage} style={localStyles.badgeImage} />
        <View style={[styles.flex, styles.ml15]}>
          <CText type={'s14'}>{item.title}</CText>
          <CText type={'m14'} numberOfLines={2} style={styles.mt5}>
            {item.description}
          </CText>
        </View>
      </View>
    );
  };
  return (
    <View style={localStyles.tabContainer}>
      <FlashList
        data={badgeData}
        renderItem={renderBadge}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'rgba(98, 49, 173, 0.06)',
    ...styles.flex,
  },
  badgeImage: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  badgeContainer: {
    ...styles.rowStart,
    ...styles.p20,
    backgroundColor: colors.white,
    ...styles.mh15,
    ...styles.mv15,
    borderRadius: moderateScale(5),
  },
});

export default Badges;
