import React, { useState, useEffect } from 'react';

// Components
import {
    ActivityIndicator,
    Alert,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Card from '../../components/organisms/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import OfflineNotice from '../../components/molecules/OfflineNotice';

// API
import { getCrewMembers } from '../../api/fetchAPI';
import NetInfo from "@react-native-community/netinfo";

const CrewMembers: React.FC = () => {
    const [isLoading, setLoading] = useState<Boolean>(true);
    const [data, setData] = useState();
    const [isOffline, setOfflineStatus] = useState<Boolean>(false);

    useEffect(() => {
        setLoading(true);
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });
        (async () => {
            const data = await getCrewMembers();
            if (data == 'TypeError: Network request failed') {
                Alert.alert(
                    "Error",
                    "No internet connection",
                    [
                        { text: "OK", onPress: () => { } }
                    ],
                );
            }
            setData(data);
        })();

        setLoading(false);

        return () => removeNetInfoSubscription();

    }, [isOffline]);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Text style={styles.crewText}>CREW MEMBERS</Text>

            {isOffline && (<OfflineNotice />)}

            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <View style={styles.listContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <Card type="crew" props={item} />
                                </>
                            );
                        }}
                    />
                </View>
            )}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    safeContainer: { alignItems: 'center', flex: 1 },
    crewText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 30,
        paddingVertical: 15,
    },
    listContainer: {
        flex: 1,
    },
});

export default CrewMembers;
