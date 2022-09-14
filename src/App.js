import './fonts.scss';
import {StripContainer} from "./Components/StripContainer/StripContainer";
import {policiesStrips,alertsStrips} from "./Components/StripLib/StripLib";

function App() {

  return (
      <>
        <StripContainer
            stripData={policiesStrips}
        />
        <StripContainer
            stripData={alertsStrips}
        />
      </>

  );
}

export default App;
