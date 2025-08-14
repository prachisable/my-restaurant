// app/gallery/page.jsx

export const metadata = {
  title: "Gallery - VeggieBite | Photos of Our Dishes & Restaurant Ambiance",
  description:
    "Browse through our gallery featuring delicious vegetarian dishes, restaurant interior, and happy customers enjoying fresh, healthy food at VeggieBite.",
  openGraph: {
    title: "Gallery - VeggieBite | Photos of Our Dishes & Restaurant Ambiance",
    description:
      "Browse through our gallery featuring delicious vegetarian dishes, restaurant interior, and happy customers enjoying fresh, healthy food at VeggieBite.",
    images: ["/images/veggiebite-gallery.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery - VeggieBite | Photos of Our Dishes & Restaurant Ambiance",
    description:
      "Browse through our gallery featuring delicious vegetarian dishes, restaurant interior, and happy customers enjoying fresh, healthy food at VeggieBite.",
    images: ["/images/veggiebite-gallery.jpg"],
  },
};

import GalleryPage from "./mainpage";

export default function Page() {
  return <GalleryPage />;
}
