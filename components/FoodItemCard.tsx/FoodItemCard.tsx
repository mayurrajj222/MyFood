// components/FoodItemCard.tsx
import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';

const FoodItemCard = ({ item, navigation }: { item: any, navigation: any }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Here you would normally dispatch to a Redux store or context API
    // to add the item along with quantity to the cart.
    alert(`${item.name} x ${quantity} added to Cart`);
    navigation.navigate('Cart');
  };

  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1 }}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.name}</Text>
      <Text>{`$${item.price}`}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

export default FoodItemCard;