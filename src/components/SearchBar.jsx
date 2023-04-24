import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar(){
    return(
        <div>
            <form>
                <div className="search-bar-container">
                    
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search your Transactions"
                    />
                    <span className="search-icon">
                        <AiOutlineSearch size={24} />
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;
