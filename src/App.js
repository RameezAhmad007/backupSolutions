import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/home";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
