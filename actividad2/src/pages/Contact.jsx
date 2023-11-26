import logo from "../../../actividad1/src/assets/image/logo.svg";
import "../App.css";

const Contact = () => {
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Contact</code> component.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
