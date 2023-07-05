import { useEffect, useState } from "react";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodItems from "./FastFoodItems/fastFoodItems";
import SearchFastFood from "./SearchBar/searchBar";
import SearchBar from "./SearchBar/searchBar";
import notFind from "./assets/images/404.png";
import useAxios from "./useAxios";

const App = () => {
  const [url, setUrl] = useState("/FastFood/list");
  const {
    response: fastFoodItemsList,
    error,
    loading,
  } = useAxios({
    url,
  });



  const filterItems = (categoryId) => {
    setUrl( `/FastFood/list${categoryId ? "?categoryId=" + categoryId : ""}`)
  };

  const handleSearch = async (name) => {
    setUrl(`/FastFood/search${name ? "?term=" + name : ""}`)
  };

  const renderContent = () => {
    if (loading) {
      return <Loading them="dark" />;
    }

    if (fastFoodItemsList.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ آیتمی یافت نشد.
          </div>
          <img src={notFind} className="mx-auto d-block mt-5 fade-in-horiz" />
        </>
      );
    }

    return <FastFoodItems fastFoodItems={fastFoodItemsList} />;
  };

  return (
    <div className="wrapper bg-faded-dark ">
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItem={handleSearch} />
      </CategoryList>

      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
};

export default App;
