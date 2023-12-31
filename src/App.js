
import './App.css';
import NavItems from './shared/NavItem';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Dashboard from '../src/pages/home/dasboard';
import MainKonsulta from '../src/pages/konsulta/mainKonsultaForm'

import Login from '../src/pages/login/Login';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";


function App() {
    // Retrieve the object from storage
    var get_user = localStorage.getItem('item');
  return (
    <>
    {get_user != null ? 
      <Box sx={{ display: 'flex' }}>
          <BrowserRouter>
            <NavItems />

            <CssBaseline />

            <Container maxWidth="lg" style={{marginTop: '70px'}}>
                <Routes>
                  <Route exact path="/"  element={ <Dashboard/> } />
                  <Route exact path="/konsulta_registration"  element={ <MainKonsulta/> } />
                  {/*
                  <Route exact path="/files" element={ <Files/> }  />
                  <Route exact path="/leaves" element={ <Leaves/> }  />
                  <Route exact path="/konsulta" element={ <Konsulta/> }  /> */}
                </Routes>
              </Container>
          </BrowserRouter>

      </Box>
    : <Login/>  }
   </>
  );
}

export default App;
