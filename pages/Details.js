import { View, Text, StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";

export default function Detalhes() {
    return (
        <ImageBackground
            source={require("../assets/bikinibottom.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <Text style={styles.title}>Developer in development!</Text>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
    },
    title: {
        fontSize: 30,
    },
});