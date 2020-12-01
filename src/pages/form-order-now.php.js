import {useEffect} from "react";
import React from "react";
import Layout from "../components/layout";

const Redirect = ({ }) => {
    useEffect(() => {
       window.location.href = "https://orders.incfile.com/form-order-now.php";
    });

    return (
        <Layout/>
    );
};

export default Redirect;