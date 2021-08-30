import React from 'react';

// Components
import { Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';

// Utils
import { WINDOW_DEVICE_WIDTH } from '../../utils/constants';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Functions
import {
  requestCameraPermission,
  requestGalleryPermission,
} from '../../helpers/requestPermissions';

// Types
import { CrewMemberNavigationProp, CrewMemberType } from '../../interfaces';

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
