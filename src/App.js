import React from 'react'
import Button from './components/button/Button'
import LazyLoad from './components/performance/LazyLoad'
import Portal from './components/portal/Portal'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './components/counter/Counter'

const App = () => {
  return (
    <Provider store={store}>
      <Button label="Login"/>
      <LazyLoad />
      <Portal />
      <Counter />
    </Provider>
  )
}

export default App