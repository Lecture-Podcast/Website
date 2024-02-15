import React from "react";
import Lottie from "lottie-react";

function LottieAnimation({ lotti , data}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="spinner">
      <Lottie options={defaultOptions} animationData={data}/>
    </div>
  );
}

export default LottieAnimation