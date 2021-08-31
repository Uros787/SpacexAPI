import React from 'react';

// Components
import { Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';

// Utils
import { IS_IOS, WINDOW_DEVICE_WIDTH } from '../../utils/constants';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Functions
import {
  requestAppTrackingPermissionIOS,
  requestCameraPermission,
  requestCameraPermissionIOS,
  requestGalleryPermission,
  requestGalleryPermissionIOS,
} from '../../helpers/requestPermissions';

// Types
import { CrewMemberNavigationProp, CrewMemberType } from '../../interfaces';
import { RESULTS } from 'react-native-permissions';

type Props = {
  disabled: boolean,
  crewMember: CrewMemberType
}

const PressBox: React.FC<Props> = ({ children, disabled, crewMember }) => {
  const navigation = useNavigation<CrewMemberNavigationProp>();
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.7}
      onPress={async () => {
        if (IS_IOS) {
          const grantedTracking = await requestAppTrackingPermissionIOS();
          const grantedCamera = await requestCameraPermissionIOS();
          const grantedGallery = await requestGalleryPermissionIOS();
          if (grantedTracking === RESULTS.GRANTED && grantedCamera === RESULTS.GRANTED && grantedGallery === RESULTS.GRANTED) {
            navigation.navigate('CrewMember', { props: crewMember });
          }
          else {
            Alert.alert(
              'Error',
              'You need to enable App Tracking, Camera and Gallery permission to be able to acces crew member.',
              [{ text: 'OK', onPress: () => { } }],
            );
          }
        }
        else {
          const grantedCamera = await requestCameraPermission();
          const grantedGallery = await requestGalleryPermission();
          if (
            grantedCamera === PermissionsAndroid.RESULTS.GRANTED &&
            grantedGallery === PermissionsAndroid.RESULTS.GRANTED
          ) {
            navigation.navigate('CrewMember', { props: crewMember });
          } else {
            Alert.alert(
              'Error',
              'You need to enable Camera and Gallery permission to be able to acces crew member.',
              [{ text: 'OK', onPress: () => { } }],
            );
          }
        }

      }}
      style={{
        width: WINDOW_DEVICE_WIDTH * 0.9,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
      }}>
      {children}
    </TouchableOpacity>
  );
};
export default PressBox;
