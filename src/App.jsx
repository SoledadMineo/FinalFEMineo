import React, { Suspense, useState } from "react"
import './App.css';
import { routes, Login, Layout } from './Navigation/Routes.js';
import { ProtectedRoutes } from './components/utils/ProtectedRoute';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NewContextProvider from './components/utils/Context';
//import Navbar from "./components/Navbar";


function App() {

  const [darkMode, setDarkMode] = useState(false)

  function toggleMode() {
    setDarkMode(!darkMode)
  }
  
  const [values, setValues] = useState(null);

  const handleFetchValues = (userInfomation) => {
    setValues(userInfomation);
  };

  return (
    <NewContextProvider>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <BrowserRouter>
          <div className={ darkMode? "dark" : "ligth"}>
            <Layout toggleMode={toggleMode} />
            <Routes>
              <Route path='/login' element={<Login handleFetchValues={handleFetchValues} />} />
                <Route element={<ProtectedRoutes />}>
                  
                  {
                    routes.map(({ id, path, Element }) => (
                      <Route key={id} path={path} element={<Element />} />
                  ))
                  }
                  
                </Route>
              <Route path='/' element={<Navigate to="/login" />} />
            </Routes>
          </div>  
        </BrowserRouter>
      </Suspense>
    </NewContextProvider>
  )
}

export default App
