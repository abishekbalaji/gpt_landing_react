import {
  Header,
  Features,
  Blog,
  Footer,
  Possibility,
  WhatGPT,
} from "./containers";

import { CTA, Brand, Navigation } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navigation />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
