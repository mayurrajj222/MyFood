export default {
    expo: {
      name: "FoodOrderingApp",
      slug: "FoodOrderingApp",
      version: "1.0.0",
      orientation: "portrait",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash-icon.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.mayu.foodorderingapp",
      },
      android: {
        package: "com.mayu.foodorderingapp",
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff",
        },
      },
      web: {
        favicon: "./assets/favicon.png",
      },
      extra: {
        firebase: {
          apiKey: "AIzaSyCjuq-GcsSEjdCPtLZ4FeAwetTpideVXdk",
          authDomain: "foodorderingapp-ddc6a.firebaseapp.com",
          projectId: "foodorderingapp-ddc6a",
          storageBucket: "foodorderingapp-ddc6a.appspot.com",
          messagingSenderId: "163455991090",
          appId: "1:163455991090:android:365fe54b6a12a3aaa82b2b",
        },
      },
    },
  };
  