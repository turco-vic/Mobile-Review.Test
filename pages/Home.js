import { View, Text, TextInput, StyleSheet, ImageBackground } from "react-native";
import Button from "../components/Button";

export default function Home({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/bikinibottom.png")}
            style={styles.container}
            resizeMode="cover"
        >
            <Text style={styles.title}>Welcome to Bikini Bottom!</Text>
            <View style={styles.card}>
                <TextInput style={styles.input} placeholder="Type something For Nothing" />
            </View>
            <Button text="Click Here For Do Nothing!" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        borderRadius: 10,
        width: "90%",
        height: "40%",
    },
    title: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        margin: 60,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        borderRadius: 10,
    },
});