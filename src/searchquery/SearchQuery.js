import React, { useState } from "react";
import "./Search.css";

function SearchQuery() {
  const initialItems = [
    { name: "Apple", image: process.env.PUBLIC_URL + "/fruits img/Apple.jpg" },
    {
      name: "cake",
      image: process.env.PUBLIC_URL + "/fruits img/cake.jpg",
    },
    {
      name: "pineapple",
      image: process.env.PUBLIC_URL + "/fruits img/Apple.jpg",
    },
    {
      name: "Banana",
      image: process.env.PUBLIC_URL + "/fruits img/Banana.jpg",
    },
    {
      name: "potato",
      image: process.env.PUBLIC_URL + "/fruits img/potato.jpg",
    },
    {
      name: "carrot",
      image: process.env.PUBLIC_URL + "/fruits img/carrot.jpg",
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");
  // event handler for search
  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // filter items
    const filteredItems = initialItems.filter(
      (item) =>
        item.name.includes(query) ||
        item.image.toLowerCase().includes(query.toLowerCase()) // Compare image URL directly
    );
    setItems(filteredItems);
  };
  return (
    <div>
      <h2>search bar with images</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="image-container">
        {items.map((item, index) => (
          <div key={index} className="card-container">
            <div className="card">
              <img src={item.image} alt="" />
              <div className="name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchQuery;
