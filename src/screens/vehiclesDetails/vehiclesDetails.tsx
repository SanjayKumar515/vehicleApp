import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    Pressable,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HomeStackProps } from "../../@types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./vehiclesDetails.styles";
import Images from "../../constants/images";

type VehicleDetailsScreenNavigationType = NativeStackNavigationProp<
    HomeStackProps,
    "VehiclesDetails"
>;

const STORAGE_KEY = "WISHLIST_VEHICLES";

const VehicleDetails = () => {
    const navigation = useNavigation<VehicleDetailsScreenNavigationType>();
    const route = useRoute();
    const item: any = route.params;

    const [wishlisted, setWishlisted] = useState(false);

    // Load wishlist status for this vehicle
    useEffect(() => {
        const loadWishlist = async () => {
            try {
                const savedWishlist = await AsyncStorage.getItem(STORAGE_KEY);
                if (savedWishlist) {
                    const parsed = JSON.parse(savedWishlist);
                    if (parsed[item.id]) {
                        setWishlisted(true);
                    }
                }
            } catch (error) {
                console.log("Error loading wishlist:", error);
            }
        };
        loadWishlist();
    }, [item.id]);

    const toggleWishlist = async () => {
        try {
            const savedWishlist = await AsyncStorage.getItem(STORAGE_KEY);
            let parsed = savedWishlist ? JSON.parse(savedWishlist) : {};

            if (wishlisted) {
                // remove from wishlist
                delete parsed[item.id];
                setWishlisted(false);
            } else {
                // add to wishlist
                parsed[item.id] = true;
                setWishlisted(true);
            }

            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        } catch (error) {
            console.log("Error toggling wishlist:", error);
        }
    };

    return (
        <SafeAreaView style={styles.fullScreenSafeArea}>
            <View style={styles.topBar}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.closeBtn}
                >
                    <Text style={styles.closeBtnText}>✕</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Image Section */}
                <View style={styles.imageSection}>
                    <Image
                        source={item?.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                {/* Details Section */}
                <View style={styles.detailsSection}>
                    <View style={styles.rowBetween}>
                        <Text style={styles.name}>
                            {item.make} {item.model}
                        </Text>

                        <Pressable
                            style={styles.heartBtn}
                            onPress={toggleWishlist}
                            hitSlop={10}
                        >
                            <Image
                                source={
                                    wishlisted
                                        ? Images.ic_heartFilled
                                        : Images.ic_heart
                                }
                                style={{ height: 24, width: 24 }}
                            />
                        </Pressable>
                    </View>

                    {/* Colors */}
                    <View style={styles.colorsRow}>
                        <View
                            style={[styles.colorDot, { backgroundColor: "red" }]}
                        />
                        <View
                            style={[styles.colorDot, { backgroundColor: "blue" }]}
                        />
                        <View
                            style={[styles.colorDot, { backgroundColor: "grey" }]}
                        />
                    </View>

                    {/* Features */}
                    <Text style={styles.sectionTitle}>Features:</Text>
                    <Text style={styles.features}>
                        Android Auto, Antilock Brakes, Apple CarPlay, Audio
                        Controls on Steering Wheel, Auxiliary Input, Backup
                        Camera, Blind Spot Monitor, Bluetooth, Brake Assist,
                        Child Safety Locks, Cooled Driver Seat, Dual Climate
                        Control, HD Radio, Heated Steering.
                    </Text>

                    {/* Price & Buy Button */}
                    <View style={styles.bottomRow}>
                        <Text style={styles.price}>
                            ${item.price.toLocaleString()}
                        </Text>
                        <Pressable style={styles.buyBtn}>
                            <Text style={styles.buyBtnText}>BUY NOW</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default VehicleDetails;
