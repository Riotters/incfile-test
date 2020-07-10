import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Top from "../components/partials/sections/top/top"
import Benefits from "../components/partials/sections/benefits"
import Certificates from "../components/partials/sections/certificates"
import Articles from "../components/partials/sections/articles"

const ManageYourCompany = () => (
  <Layout>
    <SEO
      title="Managing and Operating Your LLC or Corporation | Documents Needed to Manage your Company or Corporation"
      description="Manage LLC and Corporate Ongoing Filng Requirements. Infile has the needed documents to help you file and stay in good standing."
    />
    <Top 
      headline="Manage Your Company"
      text="Helping entrepreneurs form their businesses is just one of the many services we offer. As your business grows we'll be there every step of the way to make sure that you have the resources at hand to service your companies ongoing needs."
      imageName="mrs-bulb-final-paper-stock"
      imageAlt="Mr Bulb with paper stock"
    />
    <Benefits />
    <Certificates />
    <Articles />
  </Layout>
)

export default ManageYourCompany
