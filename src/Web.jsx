import React, { useState } from "react";
import './index.css'
import CircularText from './CircularText.jsx';
import useSound from 'use-sound';

import lovey1 from '/src/assets/lovey1.jpg';
import lovey2 from '/src/assets/big.png';
import lovey3 from '/src/assets/lovey2.png';
import cat1 from '/src/assets/headline.png';
import cat2 from '/src/assets/section1.png';
import cat3 from '/src/assets/section2.png';
import cat4 from '/src/assets/section3.png';
import cat6 from '/src/assets/section5.png';
import cat7 from '/src/assets/section6.png';
import cat8 from '/src/assets/modal1.png';
import cat9 from '/src/assets/EXPLODE.gif';
import cat10 from '/src/assets/happy.gif';
import cat11 from '/src/assets/birthday.gif';


const Web = () => {
  const [answer, setAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const soundUrl = '/catnormal.mp3';
  const soundUrl1 = '/monstercat.mp3';
  const [playbackRate, setPlaybackRate] = React.useState(0.75);
  const [playbackRate1, setPlaybackRate1] = React.useState(0.75);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });
  const [play1] = useSound(soundUrl1, {
    playbackRate1,
    volume: 0.5,
  });

  const soundClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };
  const soundClick1 = () => {
    setPlaybackRate1(playbackRate1 + 0.1);
    play1();
  };

  const spriteMap = {
    yes: [6710, 2050],
    no: [10, 5710],
    gift: [9900, 33500],
  }
  const [play3] = useSound('/spritemodal.mp3', {
    sprite: {
      yes: [6710, 2050],
      no: [10, 5710],
      gift: [9900, 33500],
    },
  });


  const [openModal, setOpenModal] = useState(null); // null, "modal1", or "modal2"

  const open = (modalName) => setOpenModal(modalName);
  const close = () => setOpenModal(null);


  return (
    <>
      <div className="container">
        <div className="headline-mobile">
          <div className="he1">
            <div>
              <h2>HAPPY HAPPY BIRTHDAY LOVEY!</h2>
            </div>
            <img src={cat1} onClick={soundClick1} />
          </div>
        </div>
        <div className="section1">
          <div className="s11">
            <p>This website will take you to a mind-boggling, and silly imageries and messages that you never once read in your whole life. Basically, you are the first in your bloodline to see this dedication masterpiece I crafted for the special day of my man. Happy 23rd birthday babycakes✨✨✨ </p>
          </div>
          <img src={lovey1} alt="" className="lImg" />
          <div className="s12">
            <img src={cat2} alt="" className="cat1" onClick={soundClick} />
            <p>👆 <br /> Look at this fine man 🤤. Uhmmm... scrumptious indeed.</p>
          </div>
          <div className="s13" style={{ paddingBottom: '1em' }}>
            <p style={{ paddingBottom: '0em' }}>PEEP PEEP! INVITATION ALERT! THIS IS NOT A THREAT 👇</p>
            <button onClick={() => open('modal1')}>OMG! CLICK ME! CLICK ME!</button>
            <img src={cat3} alt="" className="cat2" onClick={soundClick} />
          </div>
        </div>
        <div className="section2">
          <div className="headline-pc">
            <div className="he1">
              <div>
                <h2>HAPPY HAPPY BIRTHDAY LOVEY!</h2>
              </div>
              <img src={cat1} onClick={soundClick1} />
            </div>
          </div>
          <div className="s21">
            <div>
              <h2>Dear Julland, </h2>
              <p></p>
              <CircularText
                text="HABADU LOVEY**"
                onHover="speedUp"
                spinDuration={10}
                className="custom-class"
              />
            </div>
            <div style={{ display: 'flex', flex: '1' }}>
              <img src={lovey2} alt="" className="lImg1" />
              <p>Halu bebe! Happy 23rd birthday! I really hope you like this uhmmmm ermmm website that I've built for you 👉👈. I only did this for small amount of days habang 'di busy hehehheheh. I just want to say how much I love you and I am glad that we've got a chance to celebrate your birthday! I hope you achieve a lot more of things and opportunities in the future. Don't worry bebecakes, I got you! Syempre andito lang kami with your family and friends to support you in your journey. Thank you kila tita for making you. CHAROT HAHAHAHHA. I love you always bebe. Enjoy your day lovey!</p>
            </div>
          </div>
          <div className="conts223">
            <div className="s22">
              <img src={cat4} alt="" className="cat3" onClick={soundClick} />
              <p style={{ textAlign: 'center' }}>This is a website is specifically dedicated for John Julland Abad.</p>
            </div>
            <div className="s23">
              <p style={{ fontSize: '0.7em' }}>Ermmmm meow meow meow meow meow meow meow meow meow </p>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="s31">
            <img src={cat6} alt="" className="cat5" onClick={soundClick} />
            <p>Pro tip, KINDLY click the cat stickers for a suprise. (Don't click them repeatedly please.)</p>
          </div>
          <div className="s32">
            <img src={lovey3} alt="" className="lImg2" />
            <p>Happy Birthday Julland! I love you so much hehe. I wish you good health, more break, and opportunities. Always take care of yourself Lovey!</p>
            <img src={cat7} alt="" className="cat6" onClick={soundClick} />

            <button onClick={() => open('modal2')} style={{ padding: ' 1em 3em 4em' }}>CLICK THIS TO
              REDEEM YOUR GIFT!</button>
          </div>
        </div>
      </div>
      <div className="container-tablet">
        HEY!😡 YOU'RE NOT SUPPOSED TO SEE THIS IN TABLET OR SLIGHTLY SMALLER THAN PC SCREEN MODE. I HAVEN'T OPTIMIZED THE TABLET/SMALL LAPTOP SCREEN YET. GET YOUR PC/CP STINKY 😡
      </div>

      <div className="modal-container">
        {openModal === 'modal1' && (
          <div className="modal-overlay" onClick={close}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={close}>&times;</button>
              {answer === 'yes' && (
                <div>
                  <h3>YEPPPPERS!</h3>
                  <img style={{ height: '15em' }} src={cat10} alt="" />
                  <p>Since you agreed, let's meet at
                  </p>
                  <h3>👉July 25 or 26, 2025👈</h3>
                  <p>📍Fantasy World SM Fairview and 🍗BBQ Chicken Fairview!</p>
                  <p className="q">(ALL EXPENSES PAID! WOHOHOI. ANDDDDDDDDDDDDDDDDDDD...) </p><br />
                  <h2 >ILOCOS TRIP AT AUGUST 9</h2> <br />
                  <p className='r' style={{ fontSize: '0.3em', marginTop: '-5em', padding:'0' }}>Separate payment hehehe </p>

                </div>
              )}

              {answer === 'no' && (
                <div>
                  <h3>AW MEN...</h3>
                  <p>Next time na lang 😔 </p>
                  <img style={{ height: '15em' }} src={cat9} alt="" />
                </div>
              )}

              {answer === '' && (
                <div>

                  <h2>HALO THERE!</h2>
                  <img style={{ height: '15em' }} src={cat8} alt="" />
                  <p>Hi! I'm a watermelon cat. I'm going to take you on adventure. This is totally safe and consensual. If you pick no, I will explode.</p>
                  <div>
                    <p>Do you want to go to adventure, pretty boi?</p>
                    <div className="labels" style={{ display: 'flex', marginBottom: '1.5em' }}>
                      <label>
                        <input
                          type="radio"
                          name="yesno"
                          value="yes"
                          checked={selectedAnswer === 'yes'}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                          onClick={() => play3({ id: 'yes' })}
                        />
                        Hell yeah~!
                      </label>
                      <br />
                      <label style={{ marginLeft: '10px' }}>
                        <input
                          type="radio"
                          name="yesno"
                          value="no"
                          checked={selectedAnswer === 'no'}
                          onChange={(e) => setSelectedAnswer(e.target.value)}
                          onClick={() => play3({ id: 'no' })}
                        />
                        No! You stanky cat!
                      </label>
                    </div>
                    <button onClick={() => setAnswer(selectedAnswer)}>THIS IS MY FINAL ANSWER!</button>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        {openModal === 'modal2' && (
          <div className="modal-overlay" onClick={close}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={close}>&times;</button>
              <h2>HELLO BWEBWE</h2>
              <p>HAPPY BIRTHDAY MAHAL! Hehehehe. Yung gift ko sa'yo is paparating pa lang so baka ma-delay hanggang August :( .  But anyways, I found a picture of you. Hehehehe. Abot ko na lang po pagdating hehehe</p>
              <img src={cat11} alt="" />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Web;
