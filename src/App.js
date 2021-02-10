import "./App.css";
import { Route, Switch } from "react-router-dom";
import News from "./Components/News";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={News} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
