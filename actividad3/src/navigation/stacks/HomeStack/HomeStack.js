import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../screens/Home/Home";
import AddTask from "../../../screens/AddTask/AddTask";
import ViewTasks from "../../../screens/ViewTasks/ViewTasks";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="AddTask" component={AddTask} />
    <Stack.Screen name="ViewTasks" component={ViewTasks} />
  </Stack.Navigator>
);

export default HomeStack;
