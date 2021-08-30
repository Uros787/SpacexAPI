import React from 'react';

// Components
import {
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PressBox from '../molecules/PressBox';

// Types
import { CrewMemberType, RocketType } from '../../interfaces';

type Props = {
  type: string,
  props: RocketType | CrewMemberType
}

const Card: React.FC<Props> = ({ type, props }) => {

  return (
    <PressBox
      disabled={type == 'rocket' ? true : false}
      crewMember={props}
    >
      <Image
        style={[
          styles.imageContainer,
          {
            borderRadius: type == 'rocket' ? 0 : 60,
          },
        ]}
        fadeDuration={0}
        source={{
          uri: type == 'rocket' ? props.flickr_images[0] : props.image,
        }}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.nameText}>{props.name}</Text>

        {type == 'rocket' && (
          <View>
            <View style={styles.countryContainer}>
              <Text style={styles.countryText}>Country: {props.country}</Text>
            </View>
            <Text style={styles.flightText}>
              First Flight: {props.first_flight}
            </Text>
          </View>
        )}
        {type == 'crew' && (
          <View style={styles.textContainer}>
            <Text style={styles.launchesText}>
              Participated in {props.launches.length}{' '}
              {props.launches.length == 1 ? 'launch' : 'launches'}
            </Text>
          </View>
        )}
        <Text style={styles.companyText}>
          {type == 'rocket' ? props.company : props.agency}
        </Text>
      </View>
      {type == 'crew' && (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name={'ios-arrow-forward'} size={30} color={'gray'} />
        </View>
      )}
    </PressBox>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: 100,
    minHeight: 120,
    marginRight: 10,
    alignItems: 'center',
  },
  mainContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    flexShrink: 1,
  },
  countryContainer: {
    flex: 1, flexDirection: 'row'
  },
  countryText: {
    fontSize: 12,
    color: 'gray',
    flex: 1,
    flexShrink: 1,
    paddingBottom: 5,
  },
  flightText: {
    fontSize: 12,
    color: 'gray',
  },
  textContainer: { flex: 1, flexDirection: 'row' },
  launchesText: { fontSize: 12, flex: 1, flexShrink: 1 },
  companyText: {
    fontSize: 9,
    color: 'gray',
  },
});
export default Card;
