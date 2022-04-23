import React, { useEffect, useState } from "react";

function Toast({ message, info, duration, setToast }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let interval = setTimeout(() => {
      setHide(true);
      setToast("");
    }, duration);

    return () => {
      clearInterval(interval);
      setHide(false);
    };
  }, []);

  function showIcon(info) {
    if (info === "error")
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"
            fill="currentColor"
          />
          <path d="M11 7h2v7h-2zm0 8h2v2h-2z" fill="currentColor" />
        </svg>
      );

    if (info === "success") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1.3em"
          height="1.3em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M4 12l6 6L20 6"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      );
    }
  }

  return (
    <div
      className={`[max-width:_1024px] ${
        hide && "hidden"
      } [width:90%] left-0 right-0 mx-auto p-4 text-white ${
        info === "success" ? "bg-[#39B48B]" : "bg-[#E9556C]"
      } flex items-center gap-3 bg-[#39B48B] fixed top-4 [z-index:10000] md:[width:max-content] md:mr-5 md:top-12`}
    >
      {showIcon(info)}
      {message}
    </div>
  );
}

export default Toast;
