import React, { Component } from "react"
import { graphql } from "gatsby"

export default class page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <div>
        <h1>{StaticPage.title}</h1>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPage(slug: { eq: $slug }) {
      title
      content
    }
  }
`
