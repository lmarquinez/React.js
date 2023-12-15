import { Container, Task } from "../../app/styles";

const View = ({ navigation, route }) => {
  const { task } = route.params;

  return (
    <Container>
      <Task>{task.item}</Task>
    </Container>
  );
};

export default View;
