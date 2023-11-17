import { useState } from 'react';

const App = () => {
    const [euros, setEuros] = useState(0);
    const [dollars, setDollars] = useState(0);

    const calculateDollars = e => {
        const eurosValue = e.target.value;
        setDollars(eurosValue * 2);
    }

    return (
        <div>
            <input type="text" onChange={calculateDollars} />
            <p>Result: {dollars}</p>

            <input type="text" onChange={e => setEuros(e.currentTarget.value)} />
            <p>Result: {dollars}</p>
            <button onClick={calculateDollars}>Convert</button>
        </div>
        
    );
};

export default App;