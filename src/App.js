import "./App.css";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponent } from "./components/ParentComponent";
import { UserGreeting } from "./components/UserGreeting";
import { NameList } from "./components/NameList";
import { Stylesheet } from "./components/Stylesheet";
import { Inline } from "./components/Inline";

function App() {
  return (
    <div className="App">
      Hello World
      <Greet />
      <Greet name="Bruce" heroName="Batman" />
      <Greet name="Clark" heroName="Superman">
        <button> Action </button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman">
        <p> This is children props </p>
      </Greet>
      <Message />
      <br />
      <ClickHandler />
      <ParentComponent />
      <br />
      <UserGreeting />
      <br />
      <NameList />
      <br />
      <Stylesheet />
      <br />
      <Inline />
      <h1 className="error"> Error</h1>
      <h1 className={styles.success}> Success </h1>
    </div>
  );
}

export default App;
