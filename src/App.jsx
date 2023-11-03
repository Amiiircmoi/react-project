import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

// Components 
import Navbar from "./components/NavBar";

// Pages
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Provider store={store}>
          <Routes>
            <Route path="/register" element={<Register />} />
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
