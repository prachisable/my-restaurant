// app/reviews/page.jsx

export const metadata = {
  title: "Customer Reviews - VeggieBite | What Our Customers Say",
  description:
    "Read genuine reviews and testimonials from our satisfied customers. Discover why VeggieBite is the preferred choice for vegetarian dining.",
  openGraph: {
    title: "Customer Reviews - VeggieBite | What Our Customers Say",
    description:
      "Read genuine reviews and testimonials from our satisfied customers. Discover why VeggieBite is the preferred choice for vegetarian dining.",
    images: ["/images/veggiebite-testimonials.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews - VeggieBite | What Our Customers Say",
    description:
      "Read genuine reviews and testimonials from our satisfied customers. Discover why VeggieBite is the preferred choice for vegetarian dining.",
    images: ["/images/veggiebite-testimonials.jpg"],
  },
};

import ReviewsPage from "./Reviews";

export default function Page() {
  return <ReviewsPage />;
}
