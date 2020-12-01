import {useEffect} from "react";
import React from "react";
import Layout from "../components/layout";
import {Heading} from "../atomic/atoms/typography/heading";

const Redirect = ({ }) => {
    useEffect(() => {
       window.location.href = "https://orders.incfile.com/form-order-now.php";
    });

    return (
        <Layout>
            <Heading size={1} topMargin={300} bottomMargin={150} style={{ textAlign: "center" }}>Please wait, you are being redirected...</Heading>
        </Layout>
    );
};

export default Redirect;