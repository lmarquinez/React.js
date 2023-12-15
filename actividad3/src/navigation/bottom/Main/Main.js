import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainConfig from "./MainConfig";
import HomeConfig from "../../../screens/Home/HomeConfig";
import TasksConfig from "../../../screens/Tasks/TasksConfig";
import TaskStack from "../../stacks/TaskStack/TaskStack";

const BottomTab = createBottomTabNavigator();

const Main = () => (
  <BottomTab.Navigator {...MainConfig}>
    <BottomTab.Screen {...HomeConfig} />
    <BottomTab.Screen {...TasksConfig} component={TaskStack} />
  </BottomTab.Navigator>
);

export default Main;
