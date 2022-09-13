import './App.css';
import {StripContainer} from "./Components/StripContainer/StripContainer";

function App() {

    const policiesStrips=[
        {
            title:'Agents Status',
            totalData:{total:191,status:'increase'},
            stripItems:[
                {
                    title:'Active',
                    count:123,
                    color:'#288718'
                },
                {
                    title:'Inactive',
                    count:52,
                    color:'#9E9E9E'
                },
                {
                    title:'Active with error',
                    count:88,
                    color:'#FF7A00'
                },
            ]
        }
    ];
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
