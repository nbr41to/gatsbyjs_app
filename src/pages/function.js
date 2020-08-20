import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FunctionPage = () => (
  <Layout>
    <h1>Gatsbyの機能まとめ</h1>
    <ul>
      <li><Link to="#">LayoutComponent</Link></li>
      <li><Link to="#">ImageComponent</Link></li>
      <li><Link to="#">StyledComponents</Link></li>
      <li><Link to="#">Markdown Pages</Link></li>
      <li><Link to="#">More GraphQL</Link></li>
      <li><Link to="#">Markdown Pages</Link></li>
      <li><Link to="#">Markdown Pages</Link></li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FunctionPage
