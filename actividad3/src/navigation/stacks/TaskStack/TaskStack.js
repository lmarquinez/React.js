import { createStackNavigator } from "@react-navigation/stack";
import View from "../../../screens/View/View";
import Tasks from "../../../screens/Tasks/Tasks";

const Stack = createStackNavigator();

const TaskStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tasks" component={Tasks} />
    <Stack.Screen name="View" component={View} />
  </Stack.Navigator>
);

export default TaskStack;
