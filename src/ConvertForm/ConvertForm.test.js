import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ConvertForm from "./ConvertForm";
import store from '../dummyStore';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <ConvertForm />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div)
});