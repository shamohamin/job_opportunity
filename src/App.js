import React from 'react';
import "bootstrap/dist/css/bootstrap.css" ;
import { Connect } from "./Connect";
import dataStore  from "./dataStore/index";
import { Provider } from "react-redux";

function App() {
  return <Provider store={dataStore}>
      <Connect />
  </Provider>
}

export default App;
