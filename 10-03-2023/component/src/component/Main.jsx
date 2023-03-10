import React from 'react'
import Aside from './Aside'
import Content from './Content'

const Main = () => {
  return (
    <div class="main">
        <Aside />
        <Content />
        <Aside />
    </div>
  )
}

export default Main