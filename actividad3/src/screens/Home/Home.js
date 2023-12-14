import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => (
  <View>
    <Button
      title="Change Screen to Add Task"
      onPress={() => navigation.navigate("AddTask")}
    ></Button>
    <Button
      title="Change Screen to View Tasks"
      onPress={() => navigation.navigate("ViewTasks")}
    ></Button>
  </View>
);

export default Home;
