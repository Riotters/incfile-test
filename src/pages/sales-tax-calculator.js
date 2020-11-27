import React, {useState} from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RatingRow from "../atomic/atoms/boxes/rating-row";
import CartBlock from "../atomic/molecules/blocks/cart-block";
import RatingBlock from "../atomic/molecules/blocks/rating-block";
import {scrollToElement} from "../helpers/utils";
//Sections
import Top from "../atomic/partials/top";
import About from "../atomic/sections/learning-center-entity/sales-tax-calculator/about";
import Calculator from "../atomic/sections/learning-center-entity/sales-tax-calculator/calculator";
import TaxRates from "../atomic/sections/learning-center-entity/sales-tax-calculator/tax-rates";
import Explore from "../atomic/sections/learning-center-entity/sales-tax-calculator/explore";
import Articles from "../atomic/sections/articles";
//Texts
import {top, about, calculator} from "../static/learning-center-entity/sales-tax-calculator";
import ArrowLink from "../atomic/molecules/buttons/text";

const SalesTaxCalculator = () => {
    const [selectedState, setSelectedState] = useState("");
    const [stateTax, setStateTax] = useState({});

    const [topCity, setTopCity] = useState({
        header: ``,
        text: `Note: You may also need to add municipality and/or city rates depending on your location.`,
        circles: [],
    });

    const [explore, setExplore] = useState({
        header: ``,
        table: {
            headers: [`City Name`, `State`, `County`, `City`, `District(s)`],
            rows: [],
        },
    });

    const getState = (selectedState) => {
        setSelectedState(selectedState);

        fetchData(selectedState).then((data) => {
            setExplore((prevState) => {
                let newData = {...prevState};
                newData.header = `Explore other ${selectedState} cities`;
                newData.table.rows = data.entries;
                return newData;
            });

            setTopCity((prevState) => ({
                ...prevState,
                header: `Additional tax rates for a few of the top cities in ${selectedState}`,
                circles: data.topCity,
            }));

            setStateTax(data.state);
        });
    };

    const fetchData = async (state) => {
        const data = await fetch(`${process.env.INCFILE_API_URL}/getSaleTaxes/?state_code=${state}`).then((response) => response.json());
        return data;
    };

    return (
        <Layout>
            <SEO title="Sales Tax Calculator | Check Your State Sales Tax Rate"
                 description="Need to know what sales tax to charge your customers? Our easy-to-use calculator helps you look up the sales tax rates for your area. Try it now."/>
            <Top imageName="mr-bulb-sales-tax-calculator-8937" imageAlt="Mrs Bulb and with checklist" ovalColor="purple-2">
                <h1>{top.header}</h1>
                <ArrowLink content={top.link} onClick={e => scrollToElement(e, 'sales-calculator')} bottomMargin={22}/>
                <RatingRow topMargin="0">
                    <CartBlock/>
                    <RatingBlock/>
                </RatingRow>
            </Top>
            <About content={about}/>
            <Calculator content={calculator} state={stateTax} onSelectState={getState} id="sales-calculator"/>

            {selectedState && (
                <>
                <TaxRates content={topCity}/>
                <Explore content={explore}/>
                </>
            )}

            <Articles/>
        </Layout>
    );
};

export default SalesTaxCalculator;
