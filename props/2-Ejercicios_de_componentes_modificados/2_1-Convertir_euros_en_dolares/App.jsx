import { useState } from 'react';
import Form from './components/Form';

const App = () => {

    const [dolares, setDolares] = useState(0);

    return (
        <div>
            <h2>Ejercicio euros a dólares</h2>
            <input type="text" onChange={e => setDolares(e.target.value * 2)} />

            <Form value={dolares} />

        </div>
    );

}

export default App;