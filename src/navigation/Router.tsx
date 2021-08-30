import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Rockets from '../screens/Rockets';
import CrewMembers from '../screens/CrewMembers';
import CrewMember from '../screens/CrewMember';

// Icons
import Ionicons from 'react-native-vector-icons/Ionicons';

// Types
import { bottomRouterParamList, stackRouterParamList } from '../interfaces';


const Tab = createBottomTabNavigator<bottomRouterParamList>();

const BottomRouter = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;

                    if (route.name === 'Rockets') {
                        iconName = focused ? 'rocket' : 'rocket-outline';
                    } else {
                        iconName = focused ? 'people' : 'people-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
                name="Rockets"
                component={Rockets}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="CrewMembers"
                component={CrewMembers}
                options={{
                    headerShown: false,
                    title: 'Crew Members',
                }}
            />
        </Tab.Navigator>
    );
};
const Stack = createNativeStackNavigator<stackRouterParamList>();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="BottomRouter"
                    component={BottomRouter}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="CrewMember" component={CrewMember} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
