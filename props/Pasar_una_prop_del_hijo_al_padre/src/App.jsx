import MiComponente from './components/MiComponente';

const App = () => {
  const changePadre = param => {
    alert(param);
  }
  return <div>
    <MiComponente onSomeEvent={changePadre} />
  </div>;
}

export default App;