import React from 'react';

const AnimatedLogo = () => (
  <div className="flex block xl:hidden justify-center items-center">
    <div className="relative w-24 h-24 animate-logo">
      <div className="square square1"></div>
      <div className="squarer square2 rotate-45"></div>
    </div>
    <style jsx>{`
      @keyframes square1Animation {
        0% {
          width: 0;
          height: 0;
        }
        100% {
          width: 70px;
          height: 70px;
        }
      }

      @keyframes square2Animation {
        0% {
          width: 0;
          height: 0;
        }
        100% {
          width: 70px;
          height: 70px;
        }
      }

      .animate-logo {
        animation: square1Animation 1.5s ease-in-out 0s forwards, square2Animation 1.5s ease-in-out 1.5s forwards;
      }

      .square {
        position: absolute;
        border: 2px solid #0093d9;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .squarer {
        position: absolute;
        border: 2px solid #0093d9;
        background-color: transparent;
        top: 0%;
        left: 0%;
        transform: translate(-50%, -50%);
        transform: rotate(45deg);
      }

      .square1 {
        animation: square1Animation 1.5s ease-in-out 0s forwards;
      }

      .square2 {
        animation: square2Animation 1.5s ease-in-out 1.5s forwards;
      }
    `}</style>
  </div>
);

export default AnimatedLogo;
