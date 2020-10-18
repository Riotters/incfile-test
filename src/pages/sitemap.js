import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

//Sections
import Top from "../atomic/sections/other/sitemap/top";
import List from "../atomic/sections/other/sitemap/lists";
import TrustSection from "../atomic/sections/other/sitemap/trust";

//Texts
import { seo, top, list, trust } from "../static/other/sitemap";

const Sitemap = () => (
  <Layout>
    <SEO title={seo.title} description={seo.desc} />
    <Top content={top} />
    <List content={list} />
    <TrustSection content={trust} />
  </Layout>
);

export default Sitemap;
