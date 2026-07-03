import type { Metadata } from "next";
import PersonvernPage from "../personvern/page";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy — North Installasjon",
  },
  description:
    "Privacy Policy for North Installasjon AS. We protect your personal data in accordance with GDPR and Norwegian privacy legislation.",
  keywords: ["privacy policy", "privacy", "GDPR", "personal data"],
  alternates: {
    canonical: "https://www.northinstallasjon.no/personvern",
    languages: {
      "nb-NO": "https://www.northinstallasjon.no/personvern",
      "en-US": "https://www.northinstallasjon.no/privacy-policy",
    },
  },
};

export default function PrivacyPolicyEnglishPage() {
  return <PersonvernPage />;
}
