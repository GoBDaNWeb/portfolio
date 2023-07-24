import React from "react";
import { Header } from "./components/layout/Header";
import "./styles/App.sass";
import { Main } from "./components/views/Main";
import { Experiences } from "./components/views/Experiences";
import { Stack } from "./components/views/Stack";
import { Navbar } from "./components/layout/Navbar";
import { Works } from "./components/views/Works";
import { Examples } from "./components/views/Examples";
const App = () => (
  <div className=" app">
    <Header />
    <Navbar />
    <Main />
    <Experiences />
    <Stack />
    <Works />
    <Examples />
  </div>
);

export default App;
