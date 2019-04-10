import React from 'react'
import { Context } from '../App'
import PostList from './PostList'

const PostContainer = props => (
  <Context.Consumer>
  { context => (
      context.posts.map(post => (
        <PostList
          key={post.id}
          post={post}
        />
    ))
  ) }
  </Context.Consumer>
)

export default PostContainer
