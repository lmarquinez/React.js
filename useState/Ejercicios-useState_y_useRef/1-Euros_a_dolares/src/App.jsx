import { useRef, useState } from 'react';

const App = () => {
    const eurosRef = useRef(null);
    const [result, setResult] = useState(0);

    const calculateDollars = () => {
        const eurosValue = eurosRef.current.value;
        const dollars = eurosValue * 2;
        setResult(dollars);
    }

    return <div>
        <input type="text" ref={eurosRef} />
        <button onClick={calculateDollars}>Convert</button>
        <p>Result: {result}</p>
    </div>

};

export default App;