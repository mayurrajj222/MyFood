import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MenuScreen from './screens/Menuscreen';
import CartScreen from './screens/CartScreen';
import OrderSummaryScreen from './screens/OrderSummaryScreen';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen';

// Define the navigation type for screens
export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Cart: undefined;
  OrderSummary: { cartItems: any[]; total: number };
  OrderConfirmation: undefined;
};

// Create the navigation stack
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, // Show header for all screens by default
          headerTitleAlign: 'center', // Center align header title
          headerStyle: {
            backgroundColor: '#f8f8f8', // Customize header background color
          },
          headerTintColor: '#000', // Customize header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Customize header title font weight
          },
        }}
      >
        {/* HomeScreen - Hide header */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }} // Hide header for HomeScreen
        />

        {/* Other screens - Show header */}
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: 'Menu' }} // Set a custom title for MenuScreen
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: 'Cart' }} // Set a custom title for CartScreen
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummaryScreen}
          options={{ title: 'Order Summary' }} // Set a custom title for OrderSummaryScreen
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmationScreen}
          options={{ title: 'Order Confirmation' }} // Set a custom title for OrderConfirmationScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;