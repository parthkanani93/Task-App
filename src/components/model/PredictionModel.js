import {StyleSheet, View, Animated} from 'react-native';
import React, {useState} from 'react';
import CText from '../common/CText';
import {colors, styles} from '../../themes';
import ActionSheet from 'react-native-actions-sheet';
import {deviceWidth, moderateScale} from '../../common/constants';
import CButton from '../common/CButton';
import {Picker} from '@react-native-picker/picker';

const options = ['14', '15', '16', '17', '18', '19', '20'];

const PredictionModel = props => {
  const {SheetRef, onPressSubmit} = props;
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const renderItem = (option, index) => {
    const label = option;

    return <Picker.Item key={option} value={option} label={label} />;
  };

  const onValueChange = option => {
    setSelectedOption(option);
  };

  return (
    <ActionSheet
      ref={SheetRef}
      isGestureEnabled={true}
      indicatorStyle={{width: moderateScale(100)}}
      containerStyle={[
        localStyles.actionSheetContainer,
        {backgroundColor: colors.background},
      ]}>
      <View style={localStyles.bottomContainer}>
        <CText type={'s16'}>{'Your Prediction is Under'}</CText>
        <View style={[styles.rowSpaceBetween, styles.mt20]}>
          <View>
            <CText type={'m12'} color={colors.lightblue}>
              {'You Can win'}
            </CText>
            <CText type={'s14'} color={colors.green}>
              {'$2000'}
            </CText>
          </View>
          <View>
            <CText type={'m14'}>{'Total 🪙 5'}</CText>
          </View>
        </View>
        <View style={localStyles.mainBox}>
          <Picker
            style={localStyles.bottomPicker}
            selectedValue={selectedOption}
            onValueChange={onValueChange}
            // itemStyle={itemStyle}
          >
            {options.map((option, index) => renderItem(option, index))}
          </Picker>
        </View>
        <CButton
          title={'Submit my prediction'}
          type={'s14'}
          containerStyle={[styles.mt30, styles.mb20]}
          onPress={onPressSubmit}
        />
      </View>
    </ActionSheet>
  );
};

const localStyles = StyleSheet.create({
  actionSheetContainer: {
    // ...styles.p20,
  },
  bottomContainer: {
    width: '100%',
    ...styles.selfCenter,
    paddingHorizontal: moderateScale(16),
    ...styles.mv30,
  },
  bottomPicker: {
    width: deviceWidth,
  },
});

export default PredictionModel;
