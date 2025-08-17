export const metadata = {
  title: "Terms of Service | VeggieBite - Vegetarian Restaurant",
  description:
    "Read VeggieBite's terms of service for ordering, dining, and using our website. Understand your rights and responsibilities as our valued customer.",
  openGraph: {
    title: "Terms of Service | VeggieBite - Vegetarian Restaurant",
    description:
      "Read VeggieBite's terms of service for ordering, dining, and using our website. Understand your rights and responsibilities as our valued customer.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import TermsOfService from "./terms";

export default function Page() {
  return <TermsOfService />;
}
