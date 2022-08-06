import Hero from "./compoents/Hero/Hero";
import GlobalStyled, { Backgorund } from "./GlobalStyled";
import { BrowserRouter } from "react-router-dom";
import "./in.css";
import Contant from "./compoents/contant/Contant";
import { Data1, Data2, Data3, Data4 } from "./Data.js/Contant";
import Cards from "./compoents/Cards/Cards";
import { Card1, Card2, Card3 } from "./Data.js/CardData";
import { CardBox } from "./compoents/Cards/Cards.Style";
import Footer from "./compoents/Footer/Footer";
import Nav from "./compoents/Navigation/Nav";
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyled />
        <Nav />
        <Backgorund id="background">
          <Hero />
        </Backgorund>
        <Contant data={Data1} />
        <Contant data={Data2} />
        <Contant data={Data3} />
        <Contant data={Data4} />
        <CardBox id="card">
          <Cards data={Card1} />
          <Cards data={Card2} />
          <Cards data={Card3} />
        </CardBox>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
