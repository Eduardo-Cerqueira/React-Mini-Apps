import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { MovieDb } from 'moviedb-promise';
import SearchBar from './components/SearchBar';
import SingleMoviePage from "./components/SingleMoviePage";

// Icons: https://icones.js.org/collection/line-md
const movieDB = new MovieDb(import.meta.env.VITE_TMDB_API_KEY || '')
console.log(movieDB)

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/discover" element={<></>} />
        <Route path="/search" element={<SearchBar movieDbConnection={movieDB} />} />
        <Route path="/movie/:id" element={<SingleMoviePage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

