// app/reservations/page.jsx

export const metadata = {
  title: "Reserve a Table - VeggieBite | Vegetarian Restaurant Reservations",
  description:
    "Reserve a table online at VeggieBite. Easy booking for fresh vegetarian food dining experience. Book your spot now.",
  openGraph: {
    title: "Reserve a Table - VeggieBite | Vegetarian Restaurant Reservations",
    description:
      "Reserve a table online at VeggieBite. Easy booking for fresh vegetarian food dining experience. Book your spot now.",
    images: ["/images/veggiebite-reservations.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve a Table - VeggieBite | Vegetarian Restaurant Reservations",
    description:
      "Reserve a table online at VeggieBite. Easy booking for fresh vegetarian food dining experience. Book your spot now.",
    images: ["/images/veggiebite-reservations.jpg"],
  },
};

import ReservationsPage from "./Reservations";

export default function Page() {
  return <ReservationsPage />;
}
