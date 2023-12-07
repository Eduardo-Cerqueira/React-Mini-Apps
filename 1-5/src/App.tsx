import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import UserPage from "./components/UserPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";
import "./styles.scss";

// Icons: https://icones.js.org/collection/line-md

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const color = { black: '#000', white: '#ffffff'};
    if (darkMode) {
      document.documentElement.style.setProperty('--bg-color', color.black);
      document.documentElement.style.setProperty('--text-color', color.white);
    } else {
      document.documentElement.style.setProperty('--bg-color', color.white);
      document.documentElement.style.setProperty('--text-color', color.black);
    }
  }, [darkMode]);

  return (
    <>
    <BrowserRouter>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

