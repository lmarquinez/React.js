import { useState } from "react";
import { Button, FlatList } from "react-native";
import { Container, StyledTextInput, Task } from "../../app/styles";

const Tasks = ({ navigation }) => {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const addTask = () => {
    setAllTasks([...allTasks, task]);
    setTask("");
  };

  return (
    <Container>
      <StyledTextInput
        placeholder="Type your task and save"
        value={task}
        onChangeText={(task) => setTask(task)}
      />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={allTasks}
        renderItem={(item, index) => (
          <Task
            onPress={() =>
              navigation.navigate("View", {
                task: item,
              })
            }
          >
            {item.item}
          </Task>
        )}
      ></FlatList>
    </Container>
  );
};

export default Tasks;
