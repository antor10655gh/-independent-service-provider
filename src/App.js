import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;
