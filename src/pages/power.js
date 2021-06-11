import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"

import SEO from "../components/seo"

const Power = ({ data, location }) => {
  return (
    <>
      <Layout>
        <SEO
          pagetitle="Powerについて"
          pagedesc="Powerについての情報を発信しているSpheRe"
          pagepath={location.pathname}
        />
        <h1>Power</h1>
        <h2>I'm 130, React Developer</h2>
      </Layout>
    </>
  )
}

export default Power
