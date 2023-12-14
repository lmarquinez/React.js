import ViewTasks from "./ViewTasks";
import Icon from "react-native-vector-icons/FontAwesome";

const ViewTasksConfig = {
  name: "ViewTasks",
  component: ViewTasks,
  options: {
    headerTitle: "BottomNavigation",
    tabBarIcon: ({ focused }) => (
      <Icon name="eye" size={30} color={focused ? "#13797e" : "gray"} />
    ),
    tabBarActiveTintColor: "#13797e",
  },
};

export default ViewTasksConfig;
