import './App.css';
import {StripContainer} from "./Components/StripContainer/StripContainer";
import {policiesStrips} from "./Components/StripLib/StripLib";

function App() {

  return (
      <>
        <StripContainer
            title="Agents Status"
            stripData={policiesStrips}
        />
        <StripContainer
            title="Accounts by Posture"
        />
      </>

  );
}

export default App;
