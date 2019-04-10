import React from 'react'

const Post = props => (
  <p>{`${props.post.author}: ${props.post.title}`}</p>
)

export default Post
