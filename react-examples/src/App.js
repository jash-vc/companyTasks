import "./App.css";
import Example from "./Example";
import Example2 from "./Example2";
import Example3 from "./Example3";
import FormValidation from "./FormValidation";
import Welcome from "./Welcome";
import Conditional from "./Conditional";

function App() {
  return (
    <div className="App" style={{ padding: "0 30px" }}>
      {/* <h3 style={{backgroundColor:"black", color:"white"}}>Example:1 Counter Example</h3>
        <Example/>  
      <h3 style={{backgroundColor:"black", color:"white"}}>Example:2 On Hover Change Color</h3>
        <Example2/>
      <h3 style={{backgroundColor:"black", color:"white"}}>Example:3 On Mount Message</h3>
        <Example3/>
      <h3 style={{backgroundColor:"black", color:"white"}}>Example:4 Welcome User</h3>
        <Welcome name="Name"/> */}
      {/* <FormValidation /> */}
      <Conditional />
    </div>
  );
}

export default App;
