import React from 'react'
import Button from './components/button/Button'
import LazyLoad from './components/performance/LazyLoad'

const App = () => {
  return (
    <div>
      <Button label="Login"/>
      <LazyLoad />
    </div>
  )
}

export default App