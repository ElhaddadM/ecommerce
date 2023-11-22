import React, { useState, useEffect } from "react";
// import configAxios from '../configAxios.js'
import axios from "axios";

function Categories() {
  const [categories, setCategories] = useState([]);

  const categorieslist = async () => {
    const categories = await axios.get("http://localhost:3001/categories");
    setCategories(categories.data);
  };

  useEffect(() => {
    categorieslist();
  }, []);
  return (
    <div className="d-flex flex-column gap-3 flex-md-row">
      {categories?.map((categorie) => {
        return (
          <div className="card d-flex" style={{ width:"18rem" }} key={categorie.id}>
            <img src={categorie.img}  className="card-img-top img-fluid " alt="..." />
            <div className="card-body text-center">
              <p className="card-text"> {categorie.CategoryName} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
