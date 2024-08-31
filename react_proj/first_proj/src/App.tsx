import { Fragment } from "react/jsx-runtime";
import Navbar from './components/navbar';
import Card_list from "./components/card_list";
import RouteData from "./components/route";

function App() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <div className="container mt-3">
        <RouteData></RouteData>
      </div>

    </Fragment>
  )
}
export default App;