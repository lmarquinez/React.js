import Post from './components/Post';

const App = () => (
    <div className="App">
        <Post postTitle="Viaje a la luna" author="Julio Verne">Texto 1</Post>
        <Post postTitle="Viaje a Marte" author="Pablo Mon">Texto 2</Post>
    </div>
);

export default App;