import { Back } from './styled';

const Popup = ({ setVisible, isVisible }) =>
  <Back isVisible={isVisible}>
    <div>hola
      <p>bura bura</p>
      <button onClick={obj => setVisible(false)}>Close</button>
    </div>
  </Back>;

export default Popup;