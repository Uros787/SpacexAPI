import React, { useEffect } from 'react';

// Components
import { Image, StyleSheet, View } from 'react-native';
import Row from '../../components/molecules/Row';
import { CrewMemberProps } from '../../interfaces';

// Utils
import { WINDOW_DEVICE_WIDTH } from '../../utils/constants';

const CrewMember = ({
    navigation,
    route: {
        params: { props },
    },
}: CrewMemberProps) => {
    useEffect(() => {
        navigation.setOptions({ title: props.name });
    }, []);

    return (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: props.image }}
                    style={styles.image}
                />
            </View>
            <View style={styles.rowsContainer}>
                <Row name={'Name'} details={props.name} />
                <Row name={'Agency'} details={props.agency} />
                <Row name={'Number of Launches'} details={props.launches.length} />
                <Row name={'Status'} details={props.status} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: { width: WINDOW_DEVICE_WIDTH * 0.3, height: 150 },
    rowsContainer: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: WINDOW_DEVICE_WIDTH * 0.9,
        marginTop: 30,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default CrewMember;
