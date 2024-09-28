import React from 'react'
import Button from './components/button/Button'
import LazyLoad from './components/performance/LazyLoad'
import Portal from './components/portal/Portal'

const App = () => {
  return (
    <div>
      <Button label="Login"/>
      <LazyLoad />
      <Portal />
    </div>
  )
}

export default App