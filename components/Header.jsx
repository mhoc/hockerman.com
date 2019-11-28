import React from "react";

const Header = ({ text }) => {
  return (
    <>
      <div className="title">{`$ ${text}`}<span className="header-blink">|</span></div>
      <style jsx>{`
        .title {
          color: #d1c4e9;
          font-size: 1.5rem;
        }
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 1.2rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .header-blink {
          animation: header-blink-anim 1s steps(2, start) infinite;
          -webkit-animation: header-blink-anim 1s steps(2, start) infinite;
        }
        @keyframes header-blink-anim {
          to {
            visibility: hidden;
          }
        }
        @-webkit-keyframes header-blink-anim {
          to {
            visibility: hidden;
          }
        }
      `}</style>
    </>
  )
}

export default Header;
