import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const Speed = ({ data, location }) => {
  return (
    <Layout>
      <SEO
        pagetitle="Speedについて"
        pagedesc="Speedについての情報を発信しているSpheRe"
        pagepath={location.pathname}
      />
      <h1>Speed</h1>
      <h2>I'm 130, React Developer</h2>
    </Layout>
  )
}

export default Speed
