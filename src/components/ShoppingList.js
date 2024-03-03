import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [itemList, setItemList] = useState(items)

  function handleCategory(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function handleSubmit(newItem){
    setItemList([...itemList, newItem])
  }

  const itemsToDisplay = itemList.filter((item) => selectedCategory === "All" ? true : item.category === selectedCategory)
                                 .filter((item) => search === "" ? true : item.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter onCategoryChange={handleCategory} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
} 

export default ShoppingList;
