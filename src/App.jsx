import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import lovey1 from '/src/assets/lovey1.jpg';
import cat1 from '/src/assets/headline.png';
import cat2 from '/src/assets/section1.png';
import cat3 from '/src/assets/section2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="headline-mobile">
            <div className="he1">
              <div>
               <h2>HAPPY HAPPY BIRTHDAY LOVEY!</h2>
              </div>
              <img src={cat1} />
            </div>
        </div>
        <div className="section1">
          <div className="s11">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper.</p>
          </div>
          <img src={lovey1} alt="" className="lImg" />
          <img src={cat2} alt="" className="cat1" />
          <div className="s12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia</p>
          </div>
          <div className="s13">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia. Lorem ipsum dolor sit amet. </p>
            <button></button>
          </div>
            <img src={cat3} alt="" className="cat2" />
        </div>
        <div className="section1">
          <div className="s11">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper.</p>
          </div>
          <img src={lovey1} alt="" className="lImg" />
          <div className="s12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia</p>
          </div>
          <div className="s13">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia. Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
                <div className="section1">
          <div className="s11">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper.</p>
          </div>
          <img src={lovey1} alt="" className="lImg" />
          <div className="s12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia</p>
          </div>
          <div className="s13">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia. Lorem ipsum dolor sit amet. </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
