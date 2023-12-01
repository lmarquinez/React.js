import { View, Text, Button } from "react-native";

const Page2 = ({ navigation, route }) => (
  <View>
    <Text>screen {route.name}</Text>
    <Button
      title="Change Screen"
      onPress={() => navigation.navigate("Home")}
    ></Button>
  </View>
);

export default Page2;
