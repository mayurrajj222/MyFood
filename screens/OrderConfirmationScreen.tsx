import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, Image } from 'react-native';

type OrderConfirmationScreenProps = {
  navigation: any;
};

const OrderConfirmationScreen = ({ navigation }: OrderConfirmationScreenProps) => {
  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
      
        <Image source={require('../assets/tick.png')} style={styles.tickImage} />

        {/* Success Message */}
        <Text style={styles.successText}>Order Successfully Placed!</Text>
        <Text style={styles.messageText}>Thank you for your order. We will notify you once it's ready.</Text>

        {/* Back to Home Button */}
        <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 20,
  },
  tickImage: {
    width: 100, // Adjust the size as needed
    height: 100, // Adjust the size as needed
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default OrderConfirmationScreen;