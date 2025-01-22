import { useEffect, useState } from "react";

import accelerateLogo from "../../assets/images/logo-accelerate.png";
import accelerateLogoLow from "../../assets/images/logo-accelerate-low.png";

const HeadingSection = () => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLogoLoaded(true);
    };
    img.src = accelerateLogo;
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-16 mb-10 px-2">
      <h1 className="sr-only">Mastering Data Science</h1>
      <h1 className="hero-text text-white" aria-hidden="true">
        mastering
      </h1>
      <h1 className="hero-text text-yellow-400" aria-hidden="true">
        data analytics
      </h1>
      {isLogoLoaded && (
        <img
          src={accelerateLogo}
          className="accelerate-logo"
          alt="Accelerate Logo"
        />
      )}
      {!isLogoLoaded && (
        <img
          src={accelerateLogoLow}
          className="accelerate-logo"
          alt="Accelerate Logo"
        />
      )}
    </div>
  );
};

export default HeadingSection;
