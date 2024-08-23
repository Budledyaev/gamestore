import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import {HomePage} from "./pages/home-page/HomePage";
import { Header } from "./components/header/header";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
      <Header/>
        <Routes>
          <Route path="/home" element={<HomePage />}/>
       </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App
