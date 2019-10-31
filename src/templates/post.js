import React, { Component } from "react"
import { graphql } from "gatsby"

export default class post extends Component {
  render() {
    const StaticPost = this.props.data.wordpressPost
    return (
      <div>
        <h1>{StaticPost.title}</h1>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      title
      content
    }
  }
`
