import { FC } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
