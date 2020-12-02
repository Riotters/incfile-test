import {useEffect} from "react";
import React from "react";
import Layout from "../components/layout";
import {Heading} from "../atomic/atoms/typography/heading";

const Redirect = ({ }) => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const queryString = window.location.search || '';
            window.location.href = `${process.env.ORDER_URL}/form-order-now.php${queryString}`;
        }
    });

    return (
        <Layout>
            <Heading size={1} topMargin={300} bottomMargin={150} style={{ textAlign: "center" }}>Please wait, you are being redirected...</Heading>
        </Layout>
    );
};

export default Redirect;