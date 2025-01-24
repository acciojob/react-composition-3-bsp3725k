
import React from "react";
import './../styles/App.css';
import Tooltip from './Tooltip';
import './../styles/Tooltip.css';

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      
      <h1>React Tooltip Example</h1>
      <Tooltip text="This is a tooltip">
        <p style={{fontSize:'larger', fontWeight:'bolder'}}><u>Hover over me</u></p>
      </Tooltip>
      <br></br>
      <Tooltip text="This is a another tooltip" >
        <p style={{ marginLeft: '20px', cursor: 'pointer' }}>
          <u>Hover over me to see another tooltip</u>
        </p>
      </Tooltip>
   
    </div>
  )
}

export default App
