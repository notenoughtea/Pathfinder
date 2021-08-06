import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin/Signin";
import SignUp from "./components/Signup/Signup";

function App() {
  return (
    <>
      <Switch>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/signin">
          <SignIn></SignIn>
        </Route>
      </Switch>
    </>
  );
}

export default App;
