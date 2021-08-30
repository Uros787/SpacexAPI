import React from 'react';

// Components
import { Image, ScrollView, Text, View } from 'react-native';

// Utils
import { WINDOW_DEVICE_WIDTH } from '../../utils/constants';

type Props = {
  name: string,
  details: any,
}

const Row: React.FC<Props> = ({ name, details }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', paddingTop: 20 }}>
        <View
          style={{
            flex: 1,
            width: '50%',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 13,
            }}>
            {name}:
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '50%',
          }}>
          <Text
            style={{
              fontSize: 13,
            }}>
            {details}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Row;
