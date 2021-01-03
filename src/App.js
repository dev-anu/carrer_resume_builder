import "./App.css";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./reducer/UserReducer";

export const UserContext = createContext();
const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
      history.push("/dashboard");
    } else {
      history.push("/");
    }
  }, []);
  if (state) {
    return [<Route path="/dashboard" component={Dashboard} />];
  } else {
    return [
      <>
        <Route exact path="/" component={HomePage} />
        <Route path="/login/:id" component={Login} />
      </>,
    ];
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
