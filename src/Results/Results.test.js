import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Results from "./Results";
import FashionFitsContext from "../FashionFitsContext";

it('renders without crashing', () => {
    const convertProfile = {
        category: "Pants, Dresses, Skirts, Coats, and Jackets",
        fit: "USA - Womens",
        id: 1,
        number_sizes: ["0 - 2", "4 - 6", "8 - 10", "12 - 14", "16 - 18", "20 - 22", "24 - 26"],
        profiletype_id: "1",
        region_id: "1",
        results: "the USA"
    };
    
    // const div = document.createElement('div');
    // ReactDOM.render(
    //     <BrowserRouter>
    //         <Results convertProfile={convertProfile} />
    //     </BrowserRouter>,
    //     div
    // );
    // ReactDOM.unmountComponentAtNode(div)
});