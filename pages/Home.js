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
                <Text style={styles.text}>Get ready to explore the underwater world in a fun and interactive way. Here, you'll meet the most iconic characters from the SpongeBob universe, discover fun facts, and dive into an experience crafted with care, technology, and a touch of nostalgia. Enjoy the ride!</Text>
            </View>
            {/* <TextInput style={styles.input} placeholder="Type something For Nothing" /> */}
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
        padding: 20,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        color: "black",
        margin: 10,
    },
    title: {
        fontSize: 28,
        color: "white",
        fontWeight: "bold",
        margin: 60,
    },
    input: {
        backgroundColor: "#946bc0",
        height: 40,
        width: "90%",
        borderColor: "gray",
        borderWidth: 1,
        marginTop: 30,
        padding: 10,
        borderRadius: 10, 
    },
});