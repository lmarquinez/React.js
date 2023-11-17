import { useState } from 'react';

const App = () => {

    const ANIMAL_IMAGES = {
        img1: "http://via.placeholder.com/111x111",
        img2: "http://via.placeholder.com/222x222",
        img3: "http://via.placeholder.com/333x333",
    };

    const [currentImg, setCurrentImg] = useState(ANIMAL_IMAGES.img1);
    return (
        <div>
            <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img1)}>Img 1</button>
            <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img2)}>Img 2</button>
            <button onClick={() => setCurrentImg(ANIMAL_IMAGES.img3)}>Img 3</button><br />

            <img src={currentImg} alt="Imagen" />
        </div>
    );
};

export default App;