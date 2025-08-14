// app/contact/page.jsx

export const metadata = {
  title: "Contact Us - VeggieBite | Get in Touch for Reservations & Inquiries",
  description:
    "Contact VeggieBite for table reservations, catering services, or any inquiries. Visit our restaurant or reach out through phone, email, or our contact form.",
  openGraph: {
    title: "Contact Us - VeggieBite | Get in Touch for Reservations & Inquiries",
    description:
      "Contact VeggieBite for table reservations, catering services, or any inquiries. Visit our restaurant or reach out through phone, email, or our contact form.",
    images: ["/images/veggiebite-contact.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - VeggieBite | Get in Touch for Reservations & Inquiries",
    description:
      "Contact VeggieBite for table reservations, catering services, or any inquiries. Visit our restaurant or reach out through phone, email, or our contact form.",
    images: ["/images/veggiebite-contact.jpg"],
  },
};

import ContactPage from "./Contact";

export default function Page() {
  return <ContactPage />;
}
