import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { ImageBackground } from "react-native-web";

export default function Detalhes() {
    return (
        <ImageBackground
            source={require("../assets/bikinibottom.png")}
            style={styles.container}
            resizeMode="cover"
        >

            <View style={styles.intro}>
                <Text style={styles.title}>Characters!</Text>
                <Text style={styles.text}>This is the details page where you can find more information about the characters of Bikini Bottom. Explore the details and enjoy the vibrant graphics and engaging content!</Text>
            </View>
            <ScrollView style={styles.scroll}>

                <View style={styles.card}>
                    <Text style={styles.name}>SpongeBob SquarePants</Text>
                    <Image source={require("../assets/bobesponja.png")} style={styles.image} />
                    <Text style={styles.description}>An optimistic and enthusiastic sea sponge who lives in a pineapple under the sea. He works as a fry cook at the Krusty Krab and is best friends with Patrick Star.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Patrick Star</Text>
                    <Image source={require("../assets/patrickestrela.png")} style={styles.image} />
                    <Text style={styles.description}>A pink starfish who is SpongeBob's best friend. He is goofy, lazy, and lives under a rock. Despite his simplicity, he always joins SpongeBob in his adventures.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Squidward Tentacles</Text>
                    <Image source={require("../assets/lulamolusco.png")} style={styles.image} />
                    <Text style={styles.description}>SpongeBob’s grumpy neighbor and co-worker at the Krusty Krab. He loves art and playing the clarinet, but is constantly annoyed by SpongeBob and Patrick.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Mr. Krabs</Text>
                    <Image source={require("../assets/seusiriguejo.png")} style={styles.image} />
                    <Text style={styles.description}>The money-loving owner of the Krusty Krab. He is obsessed with profits and is the father of Pearl. He often clashes with Plankton over the secret formula.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Sandy Cheeks</Text>
                    <Image source={require("../assets/sandybuchecas.png")} style={styles.image} />
                    <Text style={styles.description}>A smart and tough squirrel from Texas who lives in an air dome underwater. She is a scientist, loves karate, and is one of SpongeBob's closest friends.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Plankton</Text>
                    <Image source={require("../assets/plankton.png")} style={styles.image} />
                    <Text style={styles.description}>The tiny villain who owns the Chum Bucket. He constantly schemes to steal the Krabby Patty secret formula and is usually assisted by his computer wife, Karen.</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.name}>Gary the Snail</Text>
                    <Image source={require("../assets/gary.png")} style={styles.image} />
                    <Text style={styles.description}>SpongeBob’s loyal pet snail who communicates by meowing like a cat. Though quiet, Gary is very intelligent and often more sensible than the other characters.</Text>
                </View>

            </ScrollView>
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
    intro: {
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 20,
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        color: "black",
        margin: 20,
    },
    scroll: {
        width: "90%",
        height: "70%",
        gap: 20,
        borderRadius: 10,
    },
    card: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        borderRadius: 10,
        width: "auto",
        height: "auto",
        padding: 20,
        margin: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginTop: 20,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        color: "black",
        margin: 10,
    },
});