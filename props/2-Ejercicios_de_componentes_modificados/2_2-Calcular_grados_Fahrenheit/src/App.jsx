import { useState } from 'react';
import Form from './components/Form';

const App = () => {
    const [centigrades, setCentigrades] = useState();
    const [fahrenheit, setFahrenheit] = useState('');

    const calcular = () => {
        const fahrenheitValue = centigrades * 9 / 5 + 32;
        setFahrenheit(fahrenheitValue);
    }

    return <div>
        <h2>Ejercicio conversión de grados centígrados a Fahrenheit</h2>
        <input type="text" onChange={e => setCentigrades(e.target.value)} />
        <button onClick={calcular}>Enviar</button>

        <Form value={fahrenheit} />
    </div>;
}

export default App;