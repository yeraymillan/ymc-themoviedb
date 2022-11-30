import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container';
import Appbar from './components/Appbar'
import SearchResults from "./pages/SearchResults";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar />
        <Container>
            <Routes>
              <Route exact path='/' element={<SearchResults />} />
              <Route exact path='/movie/:id' element={<MovieDetails />} />
              <Route path="*" element={<SearchResults to="/" replace />} />
            </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
