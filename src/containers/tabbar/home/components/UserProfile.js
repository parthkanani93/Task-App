import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {colors} from '../../../../themes/colors';
import {EditIcon, LogoutIcon} from '../../../../assets/svgs';
import {moderateScale} from '../../../../common/constants';
import {styles} from '../../../../themes';
import CText from '../../../../components/common/CText';
import images from '../../../../assets/images';

const UserProfile = () => {
  return (
    <View>
      <TouchableOpacity style={[styles.selfCenter, styles.mb20]}>
        <Image source={images.userImage} style={localStyle.userImage} />
        <EditIcon
          style={localStyle.editIcon}
          width={moderateScale(25)}
          height={moderateScale(25)}
        />
      </TouchableOpacity>
      <View style={[styles.columnCenter, styles.mh15]}>
        <CText type={'m14'} color={colors.blackText}>
          {'Jina Simons'}
        </CText>
        <CText type={'m14'} color={colors.grayScale6} style={styles.mt5}>
          {'6000 Pts'}
        </CText>
        <CText type={'m14'} color={colors.grayScale6} style={styles.mt10}>
          {
            'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!'
          }
        </CText>
      </View>
      <View style={styles.rowCenter}>
        <LogoutIcon />
        <CText type={'m14'} color={colors.grayScale6} style={styles.ml10}>
          {'Logout'}
        </CText>
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  userImage: {
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: moderateScale(37.5),
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default UserProfile;
