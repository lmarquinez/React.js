import { FlatList } from "react-native";
import { Box, Row, MyTextInput, Task, MyButton } from "./app/styles";
import { useState } from "react";

const App = () => {
  const [txt, setTxt] = useState("");
  const [tasks, setTasks] = useState([]);

  const saveTask = () => {
    setTasks([...tasks, txt]);
    setTxt("");
  };

  return (
    <Box>
      <Row>
        <MyTextInput
          value={txt}
          placeholder="Escriba la tarea"
          onChangeText={(txt) => setTxt(txt)}
        />
        <MyButton title="+" onPress={saveTask}></MyButton>
      </Row>
      <FlatList
        data={tasks}
        renderItem={(item) => <Task>{item.item}</Task>}
      ></FlatList>
    </Box>
  );
};

export default App;
