import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="w-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />

      <div className="mx-5 space-y-5 text-center text-sm font-bold lg:text-base">
        <p className="text-white">** Disclaimer **</p>
        <p className="text-zinc-400">
          Please Note: This AI web application is a personal project and is
          intended for demonstration purposes only. It does not process real
          financial transactions, and we do not collect or store any real
          information. For your safety and security, please do not enter any
          genuine credit card or personal information into this application.
          Thank you for your understanding.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
