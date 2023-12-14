import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainConfig from "./MainConfig";
import HomeConfig from "../../../screens/Home/HomeConfig";
import HomeStack from "../../stacks/HomeStack/HomeStack";
import AddTaskConfig from "../../../screens/AddTask/AddTaskConfig";
import ViewTasksConfig from "../../../screens/ViewTasks/ViewTasksConfig";

const BottomTab = createBottomTabNavigator();

const Main = () => (
  <BottomTab.Navigator {...MainConfig}>
    <BottomTab.Screen {...HomeConfig} component={HomeStack} />
    <BottomTab.Screen {...AddTaskConfig} />
    <BottomTab.Screen {...ViewTasksConfig} />
  </BottomTab.Navigator>
);

export default Main;
