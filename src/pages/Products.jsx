import React from 'react';
import Card from "../components/Card";
import Footer from "../components/Footer";
import Search from "../components/Search";

function Products(){
    return(
        <div className="products">
            <h1>Cars for Sale</h1>
            <Search />
            <Card />
            <Footer />
        </div>
    );
}
export default Products;