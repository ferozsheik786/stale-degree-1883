import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Location from "../Pages/Location";

import SearchBar from "../Pages/SearchBar";
import Language from "../Pages/Language";
import Login from "../Pages/Login";
import Returns from "../Pages/Returns";
import Cart from "../Pages/Cart";
import Categories from "../Pages/Categories";




function AllRouters() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/location" element={<Location />} />

                <Route path="/categories" element={<Categories/>} />

                <Route path="/searchbar" element={<SearchBar />} />

                <Route path="/language" element={<Language />} />

                <Route path="/login" element={<Login/>} />

                <Route path="/returns" element={<Returns />} />

                <Route path="/cart" element={<Cart />} />

            </Routes>
        </div>
    )
}
export default AllRouters;