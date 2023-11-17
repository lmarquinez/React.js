import { useState } from 'react';

const App = () => {
    const [value, setValue] = useState(0);
    return <div>
        <input type="text" onChange={e => setValue(e.target.value)} />
        {value}
        
        {/* En el caso de que quisieramos saber si una checkbox está marcada o no, usaríamos la propiedad checked:
        <input type="checkbox" onclick={e=> setEstaMarcado(e.target.checked)}/> */}

    </div>
}

export default App;