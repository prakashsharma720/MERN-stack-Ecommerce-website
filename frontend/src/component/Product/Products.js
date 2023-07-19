import React, {Fragment, useEffect, useState} from "react";
import "./Products.css";
import { useSelector , useDispatch} from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loaders/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import {useAlert,} from "react-alert";
import { Typography } from "@material-ui/core";
import MetaData from "../layout/MetaData";

const categories = [
    "Laptop",
    "Footwear",
    "Bottom",
    "Top",
    "Camera",
    "SmartPhones",
    "Cycle",
]

const Products = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const alert = useAlert();
    
    const [currentPage, setCurrentPage ] = useState(1);
    const [price, setPrice] = useState([1, 50000]);
    const [category, setCategory] = useState("");
    const [ratings, setRatings] = useState(0);

    const { products, 
        loading, 
        error, 
        productsCount, 
        resultPerPage, } = useSelector((state) => state.products);

    const keyword = params.keyword;

    const setCurrentPageNo =(e) =>{
        setCurrentPage(e)
    };

    const priceHandler = (event, newPrice) => {
        setPrice(newPrice);
    };

      
    useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }

        dispatch(getProduct(keyword, currentPage, price, category,ratings));
    }, [dispatch, keyword, currentPage, price, category,ratings,alert,error]);

    
    return <Fragment> {loading ? <Loader /> : (
    <Fragment>
        <MetaData title="PRODUCTS ----- ECOMMERCE"/>
        <h2 className="productsHeading">Products</h2>
        
        <div className="products">
            {products && products.map((product)=>(
                <ProductCard key={product._id} product={product} />
            ))}
        </div>

        <div className="filterBox">
            <Typography>Price</Typography>
            <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={50000}
            />

            <Typography>Categories</Typography>
            <ul className="categoryBox">
                {categories.map((category)=>(
                    <li
                    className="category-link"
                    key={category}
                    onClick={()=> setCategory(category) }                    
                    >
                    {category}
                    </li>
                ))}
            </ul>

            <fieldset>
            <Typography component="legend">Rating Above</Typography>
            <Slider
                value={ratings}
                onChange={(e, newRating)=>{
                    setRatings(newRating);
                }}
                area-aria-labelledby="continous-slider"
                min={0}
                max={5}
                valueLabelDisplay="auto"
            />
        </fieldset>
        </div>

       

        {resultPerPage < productsCount && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
    </Fragment>
    )
        }</Fragment>
}

export default Products;