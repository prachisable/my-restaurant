// app/about/page.jsx

export const metadata = {
  title: "About Us - VeggieBite | Our Story & Mission",
  description:
    "Learn about VeggieBite's journey, our commitment to fresh vegetarian cuisine, and our mission to serve healthy, delicious food with love and care.",
  openGraph: {
    title: "About Us - VeggieBite | Our Story & Mission",
    description:
      "Learn about VeggieBite's journey, our commitment to fresh vegetarian cuisine, and our mission to serve healthy, delicious food with love and care.",
    images: ["/images/veggiebite-about.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - VeggieBite | Our Story & Mission",
    description:
      "Learn about VeggieBite's journey, our commitment to fresh vegetarian cuisine, and our mission to serve healthy, delicious food with love and care.",
    images: ["/images/veggiebite-about.jpg"],
  },
};

import AboutPage from "./About";

export default function Page() {
  return <AboutPage />;
}
