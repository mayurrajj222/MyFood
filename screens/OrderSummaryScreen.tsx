import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; 

type OrderSummaryScreenProps = NativeStackScreenProps<RootStackParamList, 'OrderSummary'>;

const OrderSummaryScreen = ({ route, navigation }: OrderSummaryScreenProps) => {
  const { cartItems, total } = route.params;

  const handleSubmitOrder = () => {
    console.log('Order submitted:', cartItems);

    navigation.navigate('OrderConfirmation');
  };

  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Order Summary</Text>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const price = parseFloat(item.price) || 0; 
            const quantity = item.quantity || 1; 
            return (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₹{price.toFixed(2)}</Text>
                <Text style={styles.itemQuantity}>Quantity: {quantity}</Text>
              </View>
            );
          }}
        />

        <Text style={styles.totalText}>Total: ₹{total.toFixed(2)}</Text>

        <Button title="Confirm Order" onPress={handleSubmitOrder} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: '#666',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#888',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});

export default OrderSummaryScreen;