import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "./components/Cards";
import Category from "./components/Category";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import datas from "./data/data";
const App = () => {
  const [data, setData] = useState(datas);
  // get all cat uniq
  const allCat = ["الكل", ...new Set(datas.map((i) => i.category))];
  // ===== filter by category
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setData(datas);
    } else {
      const newArray = datas.filter((i) => i.category === cat);
      setData(newArray);
    }
  };
  // ===== search by category
  const searchByCategory = (word) => {
    if (word !== "") {
      const newArray = datas.filter((i) => i.title === word);
      setData(newArray);
    }
  };

  return (
    <div className=" color-body font">
      <NavBar searchByCategory={searchByCategory} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} allCat={allCat} />
        <Cards itemsData={data} />
      </Container>
    </div>
  );
};

export default App;
