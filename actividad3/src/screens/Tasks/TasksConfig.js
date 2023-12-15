import Tasks from "./Tasks";
import Icon from "react-native-vector-icons/FontAwesome";

const TasksConfig = {
  name: "Tasks",
  component: Tasks,
  options: {
    headerTitle: "Activity 3",
    tabBarIcon: ({ focused }) => (
      <Icon name="list" size={30} color={focused ? "#13797e" : "gray"} />
    ),
    tabBarActiveTintColor: "#13797e",
  },
};

export default TasksConfig;
