import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello!! Gatsby!!</h1>
    <p>Welcome to Gatsby practice site.</p>
    <Link to="/function/">基本機能のまとめ</Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image filename="gatsby-astronaut.png" alt="宇宙人" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
