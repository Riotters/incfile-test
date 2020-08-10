import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    alig-items: center;
    padding-top: 50px;

    @media (min-width: 769px) {
        padding-top: 150px;
    }

    & > h1, h2 {
        text-align: left;
        margin: 35px 0 25px;
    }

    a {
        text-decoration: none;
        color: #797a79;
        font-family: Avenir;
        transition: color 0.3s ease;
        margin-bottom: 16px;

        &:hover {
            color: #fd8550;
        }
    }
`;

const ComponentsPage = () => (
  <Layout>
    <SEO
      title="All pages"
      description="Incfile all pages list page."
    />
    <Container>
        <Wrapper>
            <h1>List of all sites</h1>
            <Link to="/">Nonprofit</Link>
            <Link to="/manage-your-company">Manage your company</Link>
            <Link to="/manage-your-company/annual-report">Annual report</Link>
            <Link to="/manage-your-company/business-license">Business license</Link>
            <Link to="/manage-your-company/certificate-of-good-standing">Certificate of good standing</Link>
            <Link to="/manage-your-company-change-of-registered-agent">Change of registered agent</Link>
            <Link to="/manage-your-company-trademark-name-search">Trademark name search</Link>
            <Link to="/manage-your-company/tax-id-ein">EIN tax identification number</Link>
            <Link to="/manage-your-company-dissolution">Filing Articles of  Dissolution</Link>
            <Link to="/manage-your-company-foreign-qualification">Foreign Qualification</Link>
            <Link to="/manage-your-company-registered-agent">Registered Agent</Link>
            <Link to="/manage-your-company-llc-s-corp-election">S Corp Tax Election</Link>
            <Link to="/manage-your-company/corporate-llc-kit">Corporate LLC Kit</Link>
            <Link to="/manage-your-company/filling-business-taxes">Filling Business Taxes</Link>
            <Link to="/manage-your-company/fictitious-business">Fictitious Business (WIP)</Link>
            <Link to="/blog">Blog (no API)</Link>
            <Link to="/article">Article (no API)</Link>
            <Link to="/type-of-business/airbnb">Airbnb (WIP)</Link>
            <Link to="/type-of-business/coach">Coach (WIP)</Link>
            <h2>Additional sites</h2>
            <Link to="/components">Components</Link>
            <Link to="/404">404</Link>
        </Wrapper>
    </Container>
  </Layout>
)

export default ComponentsPage
