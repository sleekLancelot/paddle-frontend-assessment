import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./features/Github/screens";

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
            exact
            path='*'
            element={<Navigate to='/github' replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
