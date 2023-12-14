import AddTask from "./AddTask";
import Icon from "react-native-vector-icons/FontAwesome";

const AddTaskConfig = {
  name: "AddTask",
  component: AddTask,
  options: {
    headerTitle: "BottomNavigation",
    tabBarIcon: ({ focused }) => (
      <Icon name="plus" size={30} color={focused ? "#13797e" : "gray"} />
    ),
    tabBarActiveTintColor: "#13797e",
  },
};

export default AddTaskConfig;
