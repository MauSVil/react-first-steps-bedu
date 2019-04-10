import React from 'react'
import PostNav from './PostNav'

const Posts = props => (
  <>
    <PostNav />
    {props.children}
  </>
)

export default Posts
