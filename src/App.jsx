import Aside from "./containers/aside";
import Page from "./containers/page";
import "./styles/app.sass";

function App() {
  return (
    <div className="resume" id="resume">
      <Aside />
      <Page />
    </div>
  );
}

export default App;