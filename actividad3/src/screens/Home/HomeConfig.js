import Home from "./Home";
import Icon from "react-native-vector-icons/FontAwesome";

const HomeConfig = {
  name: "Home",
  component: Home,
  options: {
    headerTitle: "StackNavigation",
    headerShown: true, // Ocultar la cabecera
    tabBarIcon: ({ focused }) => (
      <Icon name="home" size={30} color={focused ? "#13797e" : "gray"} />
    ),
    tabBarActiveTintColor: "#13797e",
  },
};

export default HomeConfig;
