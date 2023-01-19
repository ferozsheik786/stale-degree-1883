import { Route, Routes } from "react-router-dom";

import Home from "../Pages/Home";
import Location from "../Pages/Location";
import Categories from "../Pages/Categories";
import SearchBar from "../Pages/SearchBar";
function AllRouters(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/location" element={<Location/>}/>

                <Route path="/categories" element={<Categories/>}/>

                <Route path="/searchbar" element={<SearchBar/>}/>
            </Routes>
        </div>
    )
}
export default AllRouters;