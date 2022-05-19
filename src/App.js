import React from "react";
import BaseHeader from "./layouts/header";
import Navbar from "./layouts/navbar";
import TopBar from "./layouts/topBar";
import ItemCard from "./components/itemCard";
import { useSelector } from "react-redux";

function App() {
  const items = useSelector((state) => state.store.items);
  const activeCategory = useSelector((state) => state.store.activeCategory);
  const searchActive = useSelector((state) => state.store.searchActive);
  const search = useSelector((state) => state.store.search);

  const showingItems = items.filter((item) => {
    if (searchActive) {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    } else {
      if (activeCategory === "") {
        return item;
      } else {
        return item.category === activeCategory;
      }
    }
  });

  return (
    <React.Fragment>
      <BaseHeader />
      <Navbar />
      <TopBar />
      <div className="container mx-auto">
        <div className="grid overflow-hidden grid-cols-5 grid-rows-none gap-12 py-4">
          {showingItems.map((item, index) => (
            <ItemCard item={item} key={index} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
