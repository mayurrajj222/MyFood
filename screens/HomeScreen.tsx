import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

// Define the props type for the HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const { width } = Dimensions.get('window'); // Get screen width for responsive design

const HomeScreen = ({ navigation }: Props) => {
  return (
    <ImageBackground source={require('../assets/bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        {/* Welcome Text in Upper Left */}
        <Text style={styles.welcomeText}>Welcome</Text>

        {/* Image Slider */}
        <View style={styles.sliderContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sliderContent}
          >
            <View style={styles.slide}>
              <Image source={require('../assets/20.png')} style={styles.sliderImage} />
              <View style={styles.overlay}>
                <Text style={styles.slideText}>Special Offer: 20% Off</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/50.png')} style={styles.sliderImage} />
              <View style={styles.overlay}>
                <Text style={styles.slideText}>Special Offer: 50% Off</Text>
              </View>
            </View>
          </ScrollView>
          {/* Pagination Indicator */}
          <View style={styles.pagination}>
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
        </View>

        {/* Food Images in Grid Layout */}
        <View style={styles.imageContainer}>
          <View style={styles.gridRow}>
            <View style={styles.imageBox}>
              <Image source={require('../assets/burger.png')} style={styles.image} />
              <Text style={styles.itemText}>Burger</Text>
            </View>
            <View style={styles.imageBox}>
              <Image source={require('../assets/fries.png')} style={styles.image} />
              <Text style={styles.itemText}>Fries</Text>
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.imageBox}>
              <Image source={require('../assets/icecream.png')} style={styles.image} />
              <Text style={styles.itemText}>Ice Cream</Text>
            </View>
            <View style={styles.imageBox}>
              <Image source={require('../assets/momo.png')} style={styles.image} />
              <Text style={styles.itemText}>Momo</Text>
            </View>
          </View>
        </View>
      </View>

      {/* View Menu Button at the Bottom */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Menu')}>
        <Text style={styles.buttonText}>View Menu</Text>
      </TouchableOpacity>

      {/* Cart Button as Image */}
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
        <Image source={require('../assets/cart.png')} style={styles.cartImage} />
      </TouchableOpacity>
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
    alignItems: 'center',
    paddingTop: 20, // Adjusted to move everything up slightly
  },
  welcomeText: {
    alignSelf: 'flex-start', // Align to the left
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    marginLeft: 20, // Add left margin for spacing
    marginTop: 40, // Adjusted to move the text up slightly
  },
  sliderContainer: {
    marginTop: 40, // Adjusted to move the slider up slightly
    height: 180, // Slightly reduced height for better proportion
    width: width - 40, // Responsive width
    borderRadius: 15,
    overflow: 'hidden',
  },
  sliderContent: {
    alignItems: 'center',
  },
  slide: {
    width: width - 40,
    height: 180, // Match slider container height
    position: 'relative',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '40%',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)', // Semi-transparent black overlay
  },
  slideText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  imageContainer: {
    marginTop: 70, // Adjusted to move the grid up slightly
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  imageBox: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
    width: width - 40,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    top: 40, // Adjusted to move the cart button up slightly
    right: 20,
  },
  cartImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default HomeScreen;