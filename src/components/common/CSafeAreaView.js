import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from '../../themes';

export default CSafeAreaView = ({children, ...props}) => {
  return (
    <SafeAreaView style={localStyles.root} {...props}>
      {children}
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
});
