import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Info } from "lucide-react";

import accelerateLogo from "../../assets/images/logo-accelerate.png";

import prospectusDoc from "../../assets/docs/ASL Prospectus.pdf";

import AboutCards from "@/components/AboutCards";
import Footer from "@/components/Footer";
import ProgramFeaturesSection from "@/components/ProgramFeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = function () {
    navigate("//");
  };

  const handleDownloadProspectusButtonClick = function () {
    window.open(prospectusDoc);
  };

  return (
    <>
      <div>
        <div className="flex justify-between mt-3 items-center px-5">
          <Button onClick={handleBackButtonClick} aria-label="back button">
            <ChevronLeft />
            Back
          </Button>
          <img
            src={accelerateLogo}
            className="md:mr-2 w-20 md:w-24"
            alt="Accelerate Logo"
          />
        </div>
        <AboutCards />
        <div className="my-20 flex justify-center">
          <Button
            variant="outline"
            className="action-button hover:bg-blue-900 hover:text-white"
            onClick={handleDownloadProspectusButtonClick}
          >
            <Info />
            View Brochure
          </Button>
        </div>
        <ProgramFeaturesSection />
        <BenefitsSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
