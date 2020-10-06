import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import HeaderSection from "../../atomic/sections/other/incorporate/header";
import {top, trusted, variants} from "../../static/other/incorporate";
import PacketsSection from "../../atomic/sections/other/incorporate/packets";
import RequirementsSection from "../../atomic/sections/other/incorporate/requirements";
import ServicesSection from "../../atomic/sections/other/incorporate/services";
import TrustedSection from "../../atomic/sections/other/incorporate/trusted";

function getURLParams() {
    let paramBag = { };

    if(typeof window !== "undefined") {

        window.location.search.substr(1).split("&").forEach((item) => {
            let paramKeyValuePair = item.split("=");
            paramBag[paramKeyValuePair[0]] = paramKeyValuePair[1];
        });
    }

    return paramBag;
}

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        let searchQuery = getURLParams();

        this.state = {
            entity: searchQuery?.entity ?? null,
            state: searchQuery?.state ?? null,
            total: 0
        };

        this.handlers = {
            stateChange: this.onChangeState.bind(this),
            entityChange: this.onChangeEntity.bind(this),
        };

        this.onChangeEntity = this.onChangeEntity.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
    }

    onChangeEntity(option) {
        this.setState(state => ({
            entity: option.value,
            state: this.state.state,
            total: this.state.total
        }));
    }

    onChangeState(option) {
        this.setState(state => ({
            entity: this.state.entity,
            state: option.value,
            total: this.state.total
        }));
    }

    recalculateTotal(e, data) {
        this.setState({
            entity: this.state.entity,
            state: this.state.state,
            total: (e.target.checked ? (this.state.total + data.value) : (this.state.total - data.value))
        });
    }

    render() {
        const priceVariants = (variants.hasOwnProperty(this.state.state) &&
            variants[this.state.state].hasOwnProperty(this.state.entity)) ? variants[this.state.state][this.state.entity] : null;

        const fillingRequirements = (priceVariants != null) ? variants[this.state.state]['requirements'] : null;
        const services = (priceVariants != null) ? variants[this.state.state]['services'] : null;

        const tableSettings = {
            onChange: this.recalculateTotal.bind(this)
        };

        return (
            <Layout>
                <SEO title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation" description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing." />
                <HeaderSection content={top} eventHandlers={this.handlers} initialState={this.state} />
                {(priceVariants != null) && (
                    <PacketsSection content={priceVariants} fullInfo={true} />
                )}
                {(fillingRequirements != null) && (
                    <RequirementsSection content={fillingRequirements} settings={tableSettings} />
                )}
                {(services != null) && (
                    <ServicesSection content={services} settings={tableSettings} variants={priceVariants} />
                )}
                {(services != null) && (
                    <TrustedSection content={trusted} />
                )}
            </Layout>
        )
    }
}

export default RegistrationPage;