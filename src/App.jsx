import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import cat1 from '/src/assets/headline.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="headline">
            <div className="he1">
              <div>
               <h2>HAPPY HAPPY BIRTHDAY LOVEY!</h2>
              </div>
              <img src={cat1} />
            </div>
        </div>
      </div>
    </>
  )
}

export default App
