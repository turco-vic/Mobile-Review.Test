import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../components/Card";
import { ImageBackground } from "react-native-web";

export default function Perfil() {
    return (
        <ImageBackground
            source={require("../assets/bikinibottom.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <View style={styles.cardAll}>
                <Text style={styles.title}>Enzo Turcovic</Text>
                <Image source={require("../assets/profile.png")} style={styles.image} />
                <View style={styles.cardsContainer}>
                    <Card ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png" }} />
                    <Card ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/732/732212.png" }} />
                    <Card ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/732/732190.png" }} />
                    <Card ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/1183/1183672.png" }} />
                    <Card ImgSrc={{ uri: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" }} />
                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    cardAll: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        borderRadius: 10,
        width: "90%",
        height: "70%",
    },
    title: {
        fontSize: 40,
    },
    subTitle: {
        fontSize: 20,
        margin: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginTop: 20,
    },
    cardsContainer: {
        marginTop: 40,
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "center",
        gap: 20,
    },
});