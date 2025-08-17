export const metadata = {
  title: "Privacy Policy | VeggieBite - Vegetarian Restaurant",
  description:
    "Learn how VeggieBite collects, uses, and protects your personal information. Read our comprehensive privacy policy for transparency and trust.",
  openGraph: {
    title: "Privacy Policy | VeggieBite - Vegetarian Restaurant",
    description:
      "Learn how VeggieBite collects, uses, and protects your personal information. Read our comprehensive privacy policy for transparency and trust.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PrivacyPolicy from "./privacy";

export default function Page() {
  return <PrivacyPolicy />;
}
