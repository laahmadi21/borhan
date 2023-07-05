import { Children, useEffect, useState } from "react";
import "./categoryList.css";
import Loading from "../Loading/loading";
import SearchBar from "../SearchBar/searchBar";
import useAxios from "../useAxios";
const CategoryList = ({ filterItems, children , handleSearch }) => {

const {response : categories, error, loading } = useAxios({
    url : "/FoodCategory/categories"
})

  return (
    <nav className="container  category-list-wrapper">
      <div className="shadow-lg  category-list">
        <div className="d-flex justify-content-between align-item-center w-100 ps-3 gap-5 ">
        {loading ? (
          <Loading />
        ) : (
          <ul className="nav">
            <li className="nav-item" onClick={() => filterItems()}>
              <a className="nav-link" href="#">
                همه فست فودها
              </a>
            </li>
            {categories.map((item) => (
              <li
                className="nav-item"
                key={item.id}
                onClick={() => filterItems(item.id)}
              >
                <a className="nav-link" href="#">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        {children}
        </div>
      </div>
    </nav>
  );
};
export default CategoryList;
