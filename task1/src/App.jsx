import Task2FetchDataandShow from "./components/Task2FetchDataandShow";
import Task3FormValidation from "./components/Task3FormValidation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./components/Login";

function App() {
 
  return (
 <>
{/* tast one is not done completely due to some configration error come and takes 20 min there so 
its not done and task 4 is in seperate folder named Task4 and task 3 is done and task 2 is also done 
*/}
 {/* task 2 */}
 <Task2FetchDataandShow/>
 {/* task 3 */}
 {/* <Task3FormValidation/> */}

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
 </>
  );
}


export default App;
