import features1 from "../../assets/images/features-1.svg";
import features2 from "../../assets/images/features-2.svg";
import features3 from "../../assets/images/features-3.svg";
import features4 from "../../assets/images/features-4.svg";

import TypewrittenText from "../TypewrittenText";

const ProgramFeaturesSection = () => {
  return (
    <div className="mt-14 md:mt-20 flex flex-col items-center px-5">
      <TypewrittenText
        text="Program Features"
        className="text-2xl sub-heading font-mono"
      />
      <div className="md:mt-2 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={features1} className="w-20 mr-8" aria-hidden="true" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Flexible Online Format
          </h3>
          <p>
            Participate from anywhere with sessions designed to fit your
            schedule, particularly on weekends.
          </p>
        </div>
      </div>
      <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={features2} className="w-20 mr-8" aria-hidden="true" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Affordable Access
          </h3>
          <p>
            Affordably priced to ensure inclusivity while maintaining
            exceptional quality.
          </p>
        </div>
      </div>
      <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={features3} className="w-20 mr-8" aria-hidden="true" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Comprehensive Curriculum
          </h3>
          <p>
            Covering high-demand topics such as programming, data analytics, and
            tools for digital optimization.
          </p>
        </div>
      </div>
      <div className="mt-6 md:w-[50%] border-purple-400 border-2 flex items-center rounded-3xl p-5 box-shadow">
        <img src={features4} className="w-20 mr-8" aria-hidden="true" />
        <div className="self-start">
          <h3 className="text-lg font-thin mb-2 text-yellow-300">
            Expert Panel
          </h3>
          <p>
            Sessions conducted by industry professionals and experts from the
            Global Shapers community & beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramFeaturesSection;
