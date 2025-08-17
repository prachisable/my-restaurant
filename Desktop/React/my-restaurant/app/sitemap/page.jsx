export const metadata = {
  title: "Sitemap | VeggieBite - Site Navigation",
  description:
    "Find all pages and sections of VeggieBite website. Easy navigation to menu, orders, about us, contact, and more.",
  openGraph: {
    title: "Sitemap | VeggieBite - Site Navigation",
    description:
      "Find all pages and sections of VeggieBite website. Easy navigation to menu, orders, about us, contact, and more.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Sitemap from "./sitemap";

export default function Page() {
  return <Sitemap />;
}
