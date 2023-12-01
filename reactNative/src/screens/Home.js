import { View, Text, Button } from "react-native";

const Home = ({ navigation, route }) => (
  <View>
    <Text>screen {route.name}</Text>
    <Button
      title="Change Screen"
      onPress={() => navigation.navigate("Page2")}
    ></Button>
  </View>
);

export default Home;
