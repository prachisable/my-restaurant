// app/menu/page.jsx

export const metadata = {
  title: "Our Menu - VeggieBite | Vegetarian Fast Food & Traditional Meals",
  description:
    "Explore our extensive menu of vegetarian fast food, traditional thalis, snacks, and beverages. Fresh, healthy, and delicious options for every taste.",
  openGraph: {
    title: "Our Menu - VeggieBite | Vegetarian Fast Food & Traditional Meals",
    description:
      "Explore our extensive menu of vegetarian fast food, traditional thalis, snacks, and beverages. Fresh, healthy, and delicious options for every taste.",
    images: ["/images/veggiebite-menu.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Menu - VeggieBite | Vegetarian Fast Food & Traditional Meals",
    description:
      "Explore our extensive menu of vegetarian fast food, traditional thalis, snacks, and beverages. Fresh, healthy, and delicious options for every taste.",
    images: ["/images/veggiebite-menu.jpg"],
  },
};

import MenuPage from "./Menu";

export default function Page() {
  return <MenuPage />;
}
