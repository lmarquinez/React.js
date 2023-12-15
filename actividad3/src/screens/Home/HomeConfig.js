import Home from "./Home";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeConfig = {
  name: "Home",
  component: Home,
  options: {
    headerTitle: "Activity 3",
    headerShown: true,
    tabBarIcon: ({ focused }) => (
      <Icon name="home" size={30} color={focused ? "#13797e" : "gray"} />
    ),
    tabBarActiveTintColor: "#13797e",
  },
};

export default HomeConfig;
