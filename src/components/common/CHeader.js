import {StyleSheet, View} from 'react-native';
import React, {memo} from 'react';

// Custom Imports
import {styles} from '../../themes';
import CText from './CText';

const CHeader = props => {
  const {title, rightIcon, isHideBack, isLeftIcon} = props;

  return (
    <View style={[localStyles.container, !!isHideBack && styles.pr10]}>
      <View style={[styles.rowSpaceBetween, styles.flex]}>
        {!!isLeftIcon && isLeftIcon}

        <CText
          numberOfLines={1}
          style={[styles.pr10, styles.mr10]}
          type={'m14'}>
          {title}
        </CText>
        {!!rightIcon && rightIcon}
      </View>
    </View>
  );
};

export default memo(CHeader);

const localStyles = StyleSheet.create({
  container: {
    ...styles.rowSpaceBetween,
    ...styles.ph20,
    ...styles.pv15,
    ...styles.center,
  },
});
