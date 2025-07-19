import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import lovey1 from '/src/assets/lovey1.jpg';
import lovey2 from '/src/assets/big.png';
import cat1 from '/src/assets/headline.png';
import cat2 from '/src/assets/section1.png';
import cat3 from '/src/assets/section2.png';
import cat4 from '/src/assets/section3.png';
import cat5 from '/src/assets/section4.png';

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra ia. Lorem ipsum dolor sit amet. Placeholder bitch </p>
          </div>
            <img src={cat3} alt="" className="cat2" />
        </div>
        <div className="section2">
          <div className="headline-pc">
            <div className="he1">
              <div>
               <h2>HAPPY HAPPY BIRTHDAY LOVEY!</h2>
              </div>
              <img src={cat1} />
            </div>
        </div>
          <div className="s21">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p className="circle-text">Lorem Ipsum</p>
            </div>
            <div>
              <img src={lovey2} alt="" className="lImg1" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est. Donec hendrerit tristique nulla vel rhoncus. Sed non interdum tellus. Vivamus ultrices urna ut diam rutrum placerat. Integer vitae neque nec tortor laoreet auctor imperdiet eu nibh. Integer ullamcorper sollicitudin urna a facilisis. Nulla luctus posuere metus, a aliquam arcu condimentum sit amet. Mauris sed urna mi. Nulla feugiat lacus vel lorem feugiat convallis. Integer eu orci eu risus dapibus mattis vel at justo. Ut ultricies libero mauris, vel molestie purus elementum eget.</p>
            </div>
          </div>
          <img src={cat4} alt="" className="cat3" />
          <div className="conts223">
          <div className="s22">
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="s23">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis, leo sed pharetra iaculis, erat dolor ullamcorper justo, a gravida dolor est id est.</p>
          </div>
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
