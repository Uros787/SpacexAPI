import {PermissionsAndroid} from 'react-native';

export const requestCameraPermission = async () => {
  try {
    const grantedCamera = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );
    if (grantedCamera === PermissionsAndroid.RESULTS.GRANTED) {
      return PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (error) {
    return error;
  }
};

export const requestGalleryPermission = async () => {
  try {
    const grantedGallery = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    if (grantedGallery === PermissionsAndroid.RESULTS.GRANTED) {
      return PermissionsAndroid.RESULTS.GRANTED;
    }
  } catch (error) {
    return error;
  }
};
