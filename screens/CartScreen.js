import React, { useState, useEffect } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, FlatList } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  const { cart } = route.params || { cart: [] }; 
  const [cartItems, setCartItems] = useState(cart);
  const [total, setTotal] = useState(0);

 
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.price) || 0; 
        return sum + price * (item.quantity || 1); 
      }, 0);
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cartItems]);

  const handleOrder = () => {
    navigation.navigate('OrderSummary', { cartItems, total });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>

        {cartItems.length > 0 ? (
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
                  <View style={styles.quantityContainer}>
                    <Button
                      title="-"
                      onPress={() =>
                        handleQuantityChange(item.id, Math.max(1, quantity - 1))
                      }
                    />
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <Button
                      title="+"
                      onPress={() =>
                        handleQuantityChange(item.id, quantity + 1)
                      }
                    />
                  </View>
                  <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
                </View>
              );
            }}
          />
        ) : (
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
        )}

        <Text style={styles.totalText}>Total: ₹{total.toFixed(2)}</Text>

        {cartItems.length > 0 && (
          <Button title="Proceed to Order" onPress={handleOrder} />
        )}
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  emptyCartText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'right',
  },
});

export default CartScreen;