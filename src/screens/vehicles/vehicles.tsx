import React, { useState, useEffect } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeStackProps } from "../../@types";
import vehicles from "../../assets/vehicles";
import styles from "./vehicles.styles";
import Images from "../../constants/images";

type VehiclesScreenNavigationType = NativeStackNavigationProp<
  HomeStackProps,
  "Vehicles"
>;

const STORAGE_KEY = "WISHLIST_VEHICLES";

const Vehicles = () => {
  const navigation = useNavigation<VehiclesScreenNavigationType>();
  const [wishlist, setWishlist] = useState<{ [key: number]: boolean }>({});

  // Load wishlist from AsyncStorage
  useEffect(() => {
    const loadWishlist = async () => {
      try {
        const savedWishlist = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedWishlist) {
          setWishlist(JSON.parse(savedWishlist));
        }
      } catch (error) {
        console.log("Error loading wishlist:", error);
      }
    };
    loadWishlist();
  }, []);

  // Save wishlist to AsyncStorage
  const saveWishlist = async (newWishlist: { [key: number]: boolean }) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newWishlist));
    } catch (error) {
      console.log("Error saving wishlist:", error);
    }
  };

  const toggleWishlist = (id: number) => {
    setWishlist((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      saveWishlist(updated);
      return updated;
    });
  };

  const renderVehicles = ({ item }: { item: any }) => {
    const isWishlisted = wishlist[item.id] || false;

    return (
      <Pressable
        style={styles.card}
        onPress={() => navigation.navigate("VehiclesDetails", item)}
      >
        <View style={styles.nameView}>
          <Text style={styles.name}>{item.make}</Text>
        </View>

        <Image source={item?.image} style={styles.image} />
        <View style={styles.details}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={styles.modelView}>
              <Text style={styles.name}>{item.model}</Text>
            </View>

            <Pressable
              style={styles.heartBtn}
              onPress={() => toggleWishlist(item.id)}
              hitSlop={10}
            >
              <Image
                source={isWishlisted ? Images.ic_heartFilled : Images.ic_heart}
                style={styles.icon}
              />
            </Pressable>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.modelView}>
              <Image source={Images.ic_calendar} style={styles.icon} />
              <Text style={styles.price}>{item.year}</Text>
            </View>
            <View style={styles.modelView}>
              <Image source={Images.ic_money} style={styles.icon} />
              <Text style={styles.price}>${item.price.toLocaleString()}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image source={Images.ic_menu} style={styles.headerImage} />
        <Text style={styles.headerText}>Available Vehicles</Text>
      </View>

      <FlatList
        contentContainerStyle={styles.listContent}
        data={vehicles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderVehicles}
      />
    </SafeAreaView>
  );
};

export default Vehicles;
