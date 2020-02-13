import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import anime from "animejs";
import Background from "./images/magic_ad_bg.jpg";
import CardBack from "./images/magic_card_bg.png";
import Card1 from "./images/magic_card1.png";
import Card2 from "./images/magic_card2.png";
import Card3 from "./images/magic_card3.png";
import Card4 from "./images/magic_card4.png";
import Card5 from "./images/magic_card5.png";
import SvgBorder from "./components/SvgBorder";
import End from "./End";
import LinkDiv from "./components/LinkDiv";

// Styled Components
const chuckAway = keyframes`
0% {
  transform: rotateY(0deg) scale(0.64);
      transition: transform 0.5s;
}
20% {
  transform: rotateY(180deg) scale(0.79);
      transition: transform 0.5s;
}
80% {transform: rotateY(180deg) scale(0.78) rotate(1deg) translate3d(0px, 0, 0px);}
95% {transform: translate3d(2000px, 0, 0);}
97% {visibility: visible;}
98% {visibility: hidden; display:none; background: 'transparent';}
100% {visibility: hidden; display:none; background: 'transparent';}
`;

const Card = styled.div`
  overflow: hidden;
  opacity: ${props => (props.isStarted ? 1 : 0)};
  ${props =>
    props.index === props.clicked &&
    css`
      .content {
        animation: ${chuckAway} 2s linear;
        animation-fill-mode: forwards;
      }
      .svg-border rect {
        stroke-width: 0;
      }
    `};
`;

const Bg = styled.div`
  height: 600px;
  width: 300px;
  overflow: hidden;
  position: relative;
  background: url(${Background});
`;

function App() {
  const [cards, setCards] = useState([Card1, Card2, Card3, Card4, Card5]);
  const [active, setActive] = useState(4);
  const [isClicked, setIsClicked] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [finish, setFinish] = useState(false);
  const [end, setEnd] = useState(false);

  // Animation that runs at start
  useEffect(() => {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
      targets: ".card",
      begin: function(anim) {
        setIsStarted(true);
      }
    });
    tl.add({
      targets: ".card",
      opacity: [0, 1],
      duration: 1200,
      translateX: [780, -20],
      delay: (el, i) => 20 * i,
      rotate: (el, i) => 6 * i
    })
      .add({
        targets: ".card",
        duration: 300,
        translateX: (el, i) => 19 * i,
        rotate: (el, i) => 5 * i
      })
      .add({
        easing: "easeOutExpo",
        duration: 350,
        targets: `.svg-border`,
        borderRadius: 10
      })
      .add({
        targets: `.svg-border rect`,
        opacity: 1,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500
      });
  }, []);

  //Removes top card from array
  const removeCard = () => {
    setActive(active - 1);
    let temp = [...cards];
    temp.pop();
    setCards([...temp]);
  };
  return (
    <div className="container">
      <Bg>
        <LinkDiv />
        <div
          style={{
            position: "absolute",
            top: "-10px",
            left: "-15px",
            perspective: "600px"
          }}
        >
          {end && <End />}
          {cards.map((item, i) => (
            <Card
              index={i}
              clicked={isClicked}
              isStarted={isStarted}
              finish={finish}
              className={`card card-${i}`}
              key={i}
              onClick={() => {
                setActive(i);
                setIsClicked(i);
                setTimeout(() => {
                  removeCard();
                }, 2000);
                i === 0 && setFinish(true);
                i === 0 &&
                  setTimeout(() => {
                    setEnd(true);
                  }, 2000);
              }}
            >
              {i === active ? <SvgBorder /> : ""}
              <div className="content">
                <div
                  className="front"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundImage: `url(${CardBack})`
                  }}
                ></div>
                <div
                  className="back"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundImage: `url(${cards[i]})`
                  }}
                ></div>
              </div>
            </Card>
          ))}
        </div>
      </Bg>
    </div>
  );
}

export default App;
