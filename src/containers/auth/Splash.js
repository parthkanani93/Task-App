// Library Imports
import {ImageBackground, StyleSheet, View} from 'react-native';
import React, {createRef} from 'react';

import CSafeAreaView from '../../components/common/CSafeAreaView';
import {colors, styles} from '../../themes';
import {StackNav} from '../../navigation/NavigationKeys';
import CText from '../../components/common/CText';
import images from '../../assets/images';
import {moderateScale} from '../../common/constants';
import {
  ChartIcon,
  DownIcon,
  InfoIcon,
  TimeIcon,
  UpIcon,
  UserIcon,
} from '../../assets/svgs';
import CButton from '../../components/common/CButton';
import PredictionModel from '../../components/model/PredictionModel';

const PrizeBox = ({title, value}) => {
  return (
    <View style={styles.center}>
      <CText type={'m14'} color={colors.lightblue}>
        {title}
      </CText>
      <CText type={'b14'} color={colors.blackText} style={styles.mt10}>
        {value}
      </CText>
    </View>
  );
};

const Splash = ({navigation}) => {
  const PredictionSheetRef = createRef();

  const onPressSubmit = () => {
    PredictionSheetRef?.current?.hide();
    setTimeout(() => {
      navigation.navigate(StackNav.TabBar);
    }, 500);
  };

  const onPressOver = () => PredictionSheetRef?.current.show();

  return (
    <CSafeAreaView style={localStyles.container}>
      <CText type="s16">{'Today’s Games'}</CText>
      <View style={localStyles.cardContainer}>
        <ImageBackground source={images.coinBack} style={localStyles.coinCard}>
          <View style={[styles.p15, styles.rowSpaceBetween]}>
            <View style={styles.rowStart}>
              <CText type={'sb12'} color={colors.lightPrimary}>
                {'UNDER OR OVER'}
              </CText>
              <InfoIcon style={styles.ml10} />
            </View>
            <View style={styles.rowStart}>
              <CText type={'m12'} color={colors.lightPrimary}>
                {'Starting in'}
              </CText>
              <TimeIcon style={styles.ml10} />
              <CText
                type={'m14'}
                color={colors.lightPrimary}
                style={styles.ml10}>
                {'03:23:12'}
              </CText>
            </View>
          </View>
          <View style={styles.mh15}>
            <CText type={'m16'} color={colors.lightPrimary}>
              {'Bitcoin price will be under'}
            </CText>
            <CText type={'m16'} color={colors.white}>
              {'$24,524 at 7 a ET on 22nd Jan’21'}
            </CText>
          </View>
        </ImageBackground>
        <View style={[styles.mh15]}>
          <View style={[styles.rowSpaceBetween, styles.mv20]}>
            <PrizeBox title={'PRIZE POOL'} value={'$ 12,000'} />
            <PrizeBox title={'UNDER'} value={'3.25x'} />
            <PrizeBox title={'OVER'} value={'1.25x'} />
            <PrizeBox title={'ENTRY FEES'} value={'5 🪙'} />
          </View>
          <View>
            <CText type={'s14'} color={colors.grayScale6}>
              {'What’s your prediction?'}
            </CText>
            <View style={localStyles.predictButtonContainer}>
              <CButton
                title={'Under'}
                type={'s14'}
                containerStyle={localStyles.button}
                bgColor={colors.jacarta}
                frontIcon={<DownIcon />}
                style={styles.ml5}
              />
              <CButton
                title={'Over'}
                type={'s14'}
                containerStyle={localStyles.button}
                frontIcon={<UpIcon />}
                style={styles.ml5}
                onPress={onPressOver}
              />
            </View>
          </View>
        </View>
        <View style={localStyles.bottomContainer}>
          <View style={[styles.mh15, styles.mv20]}>
            <View style={styles.rowSpaceBetween}>
              <View style={styles.rowStart}>
                <UserIcon />
                <CText
                  type={'s14'}
                  color={colors.grayScale6}
                  style={styles.ml10}>
                  {'355 Players'}
                </CText>
              </View>
              <View style={styles.rowStart}>
                <ChartIcon />
                <CText
                  type={'s14'}
                  color={colors.grayScale6}
                  style={styles.ml10}>
                  {'View chart'}
                </CText>
              </View>
            </View>
            <View style={styles.rowSpaceBetween}>
              <CText type={'m12'} color={colors.lightblue}>
                {'232 predicted under'}
              </CText>
              <CText type={'m12'} color={colors.lightblue}>
                {'123 predicted over'}
              </CText>
            </View>
          </View>
        </View>
      </View>
      <PredictionModel
        SheetRef={PredictionSheetRef}
        onPressSubmit={onPressSubmit}
      />
    </CSafeAreaView>
  );
};

export default Splash;

const localStyles = StyleSheet.create({
  container: {
    ...styles.flex,
    ...styles.p15,
    backgroundColor: colors.white,
    // ...styles.ph15,
  },
  coinCard: {
    width: '100%',
    height: moderateScale(104),
  },
  cardContainer: {
    ...styles.mt15,
    borderColor: '#EEEAF3',
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    width: '48%',
  },
  predictButtonContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mt15,
  },
  bottomContainer: {
    backgroundColor: colors.lightPink,
    ...styles.mt20,
  },
});
