import Task2FetchDataandShow from "./components/Task2FetchDataandShow";
import Task3FormValidation from "./components/Task3FormValidation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Header from "./layout/Header";

function App() {
 
  return (
 <>

 {/* task 4 in seperate file */}

  <BrowserRouter>
  <Header/>
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

        
        <Route
          path="/task2"
          element={
           <Task2FetchDataandShow/>
          }
          
        />

         <Route
          path="/task3"
          element={
           <Task3FormValidation/>
          }
          
        />

      </Routes>
    </BrowserRouter>
 </>
  );
}


export default App;
