import React, { useEffect, useState } from 'react';

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

// API
import { getRockets } from '../../api/fetchAPI';
import NetInfo from "@react-native-community/netinfo";
import OfflineNotice from '../../components/molecules/OfflineNotice';

const Rockets: React.FC = () => {
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
            const data = await getRockets();
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
            setLoading(false);
        })();

        return () => removeNetInfoSubscription();

    }, [isOffline]);

    return (
        <SafeAreaView style={styles.safeContainer}>
            <Text style={styles.rocketText}>LIST OF ROCKETS</Text>

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
                                    <Card type="rocket" props={item} />
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
    rocketText: {
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

export default Rockets;
