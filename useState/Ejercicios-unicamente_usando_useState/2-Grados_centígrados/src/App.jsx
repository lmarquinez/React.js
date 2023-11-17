import { useState } from 'react';

const App = () => {

    const [fahrenheit, setFahrenheit] = useState(0);

    const calcular = e => {
        const centigradesValue = e.target.value;
        const fahrenheitValue = centigradesValue * 9 / 5 + 32;
        setFahrenheit(fahrenheitValue);
    }

    return (
        <div>
            <input type="text" onChange={calcular} />
            {fahrenheit}
        </div>
    );
};

export default App;