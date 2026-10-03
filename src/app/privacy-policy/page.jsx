import Breadcrumb from "@/components/Breadcrumb";
import FooterFive from "@/components/FooterFive";
import NavbarThree from "@/components/NavbarThree";
import PrivacyPolicyArea from "@/components/PrivacyPolicyArea";

export const metadata = {
  title: "Privacy Policy - Digi1xprt",
  description:
    "Learn how Digi1xprt collects, uses, shares and protects data, including WhatsApp Platform Data, on our marketing and engagement platform for small businesses.",
};

const page = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />

      {/* Breadcrumb */}
      <Breadcrumb title={"Privacy Policy"} />

      {/* Privacy Policy */}
      <PrivacyPolicyArea />

      {/* Footer */}
      <FooterFive />
    </>
  );
};

export default page;
