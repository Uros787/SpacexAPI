import {PermissionsAndroid} from 'react-native';
import { PERMISSIONS, check, request, RESULTS } from 'react-native-permissions'
export const requestAppTrackingPermissionIOS = async () => {
  const res = await check(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    if (res === RESULTS.GRANTED) {
      return RESULTS.GRANTED
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
      if(res2 === RESULTS.GRANTED ){
        return RESULTS.GRANTED;
      }
      else {
        return RESULTS.DENIED;
      }
    }
    else{
      return RESULTS.BLOCKED
    }
}
export const requestCameraPermissionIOS = async () => {
  const res = await check(PERMISSIONS.IOS.CAMERA);
    if (res === RESULTS.GRANTED) {
      return RESULTS.GRANTED
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.CAMERA);
      if(res2 === RESULTS.GRANTED ){
        return RESULTS.GRANTED;
      }
      else {
        return RESULTS.DENIED;
      }
    }
    else{
      return RESULTS.BLOCKED
    }
}
export const requestGalleryPermissionIOS = async () => {
  const res = await check(PERMISSIONS.IOS.PHOTO_LIBRARY);
    if (res === RESULTS.GRANTED) {
      return RESULTS.GRANTED
    } else if (res === RESULTS.DENIED) {
      const res2 = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
      if(res2 === RESULTS.GRANTED ){
        return RESULTS.GRANTED;
      }
      else {
        return RESULTS.DENIED;
      }
    }
    else{
      return RESULTS.BLOCKED
    }
}
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
