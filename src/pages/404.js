import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const NotFound = ({ location }) => {
  return (
    <div>
      <Layout>
        <SEO pagetitle="ページが見つかりません" pagepath={location.pathname} />
        <h1>notfound</h1>
        <h2>SphereBoard, Error Sorry...</h2>
      </Layout>
    </div>
  )
}

export default NotFound
