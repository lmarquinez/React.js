import { useState } from 'react';
import Popup from './components/popup';

const App = () => {
    const [isVisible, setVisible] = useState(false);
    return <div>
        <button onClick={() => setVisible(true)}>Ver PopUp</button>
        <Popup isVisible={isVisible} setVisible={setVisible}></Popup>
    </div>;
};

export default App;