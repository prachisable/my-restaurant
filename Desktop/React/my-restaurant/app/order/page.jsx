// app/order/page.jsx

export const metadata = {
  title: "Order Online - VeggieBite | Fresh Vegetarian Food Delivery",
  description:
    "Order fresh, delicious vegetarian food online from VeggieBite. Fast delivery, easy ordering, and the best vegetarian cuisine in the city.",
  openGraph: {
    title: "Order Online - VeggieBite | Fresh Vegetarian Food Delivery",
    description:
      "Order fresh, delicious vegetarian food online from VeggieBite. Fast delivery, easy ordering, and the best vegetarian cuisine in the city.",
    images: ["/images/veggiebite-order.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Online - VeggieBite | Fresh Vegetarian Food Delivery",
    description:
      "Order fresh, delicious vegetarian food online from VeggieBite. Fast delivery, easy ordering, and the best vegetarian cuisine in the city.",
    images: ["/images/veggiebite-order.jpg"],
  },
};

import OrderPage from "./Order";

export default function Page() {
  return <OrderPage />;
}
