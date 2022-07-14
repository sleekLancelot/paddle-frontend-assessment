import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./features/Github/screens";
import { About, ComingSoon } from "./features/Metric/screens";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            index
            exact
            path='/github'
            element={<Home />}
          />

          <Route
            index
            exact
            path='/comingsoon'
            element={<ComingSoon />}
          />

          <Route
            index
            exact
            path='/about'
            element={<About />}
          />

          <Route 
            exact
            path='/'
            element={<Navigate to='/github' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
