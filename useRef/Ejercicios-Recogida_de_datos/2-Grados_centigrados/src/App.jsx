import { useRef } from 'react';

const App = () => {

    const centigradosRef = useRef();
    const resultadoRef = useRef();

    const calcular = () => {
        const centigradosValue = centigradosRef.current.value;
        const fahrenheit = centigradosValue * 9 / 5 + 32;
        resultadoRef.current.innerHTML = fahrenheit;
    }

    return <div>
        <input type="text" ref={centigradosRef} />
        <button onClick={calcular}>Enviar</button>
        <div ref={resultadoRef}></div>
    </div>
};

export default App;