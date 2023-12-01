import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/Home";
import Page2 from "../../screens/Page2";

const Stack = createStackNavigator();

const StackNav = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Page2" component={Page2} />
  </Stack.Navigator>
);

export default StackNav;
