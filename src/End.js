import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import "./index.css";
import CardBack from "./images/magic_card_bg.png";

//End animation
function End() {
  const [cards, setCards] = useState([
    CardBack,
    CardBack,
    CardBack,
    CardBack,
    CardBack
  ]);

  const to = i => ({
    x: 0,
    y: i * -4,
    scale: 0.72,
    rot: -10 + Math.random() * 19,
    delay: i * 120
  });
  const from = i => ({ x: 0, rot: 0, scale: 1.4, y: -500 });
  // This interpolates rotation and scale into css transforms
  const trans = (r, s) =>
    `perspective(1400px) rotateX(28deg) rotateY(${r /
      10}deg) rotateZ(${r}deg) scale(${s})`;

  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i)
  }));

  return (
    <a href="https://magic.wizards.com/en/products/throne-of-eldraine">
      <div
        style={{
          height: "600px",
          width: "300px",
          position: "absolute"
        }}
      >
        <div style={{ position: "absolute", top: "-10px", left: "40px" }}>
          {props.map(({ x, y, rot, scale }, i) => (
            <animated.div
              key={i}
              style={{
                position: "absolute",
                transform: interpolate(
                  [x, y],
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                )
              }}
            >
              <animated.div
                className="end-card"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  width: "239px",
                  height: "333px",
                  transform: interpolate([rot, scale], trans),
                  backgroundImage: `url(${cards[i]})`
                }}
              />
            </animated.div>
          ))}
        </div>
      </div>
    </a>
  );
}

export default End;
