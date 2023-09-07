import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../../themes/colors';
import {
  NegativeDownIcon,
  PositiveUpIcon,
  StarIcon,
} from '../../../../assets/svgs';
import {styles} from '../../../../themes';
import CText from '../../../../components/common/CText';
import {
  deviceWidth,
  getHeight,
  moderateScale,
} from '../../../../common/constants';

const ScoreBoard = () => {
  return (
    <View style={localStyle.scoreBoardContainer}>
      <View>
        <CText type={'s14'} color={colors.grayScale6}>
          {'Under or Over'}
        </CText>
        <View style={[styles.rowStart, styles.mt15]}>
          <PositiveUpIcon />
          <CText type={'b24'} style={styles.ml10} color={colors.scoreBlack}>
            {'81%'}
          </CText>
        </View>
      </View>
      <View>
        <CText type={'s14'} color={colors.grayScale6}>
          {'Top 5'}
        </CText>
        <View style={[styles.rowStart, styles.mt15]}>
          <NegativeDownIcon />
          <CText type={'b24'} style={styles.ml10} color={colors.scoreBlack}>
            {'-51%'}
          </CText>
        </View>
      </View>
      <StarIcon style={localStyle.startIcon} />
    </View>
  );
};

const localStyle = StyleSheet.create({
  scoreBoardContainer: {
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: moderateScale(5),
    ...styles.rowSpaceBetween,
    ...styles.mh15,
    ...styles.p20,
    ...styles.mt40,
  },
  startIcon: {
    position: 'absolute',
    top: getHeight(-15),
    right: deviceWidth / 2 - moderateScale(30),
  },
});

export default ScoreBoard;
