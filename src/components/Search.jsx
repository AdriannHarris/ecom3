import React, { useState } from 'react';
import data from "./TemplateData.json";


function Search (){
    const [searchTerm, setSearchTerm] = useState("");
    return(
    <>
        <div className="searchContainer">
            <div className="searchInput_Container">
                <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                    setSearchTerm(event.target.value);
                }} />
            </div>
            <div className="searchContainer"></div>{

                data
                .filter((val) => {
                    if(searchTerm === ""){
                        return val;

                    }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                    }
                })
                .map((val)=> {
                    return(
                        <div classname="template" keys={val.id}>
                            
                            <h3>{val.make}</h3>
                            <p classname="price">{val.price}</p>
                            <p classname="model">{val.model}</p>
                        </div>    
                    )
                })
            }
        </div>
    </>
    )
};

export default Search;