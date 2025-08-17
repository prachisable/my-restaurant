export const metadata = {
  title: "Dine-in Experience | VeggieBite",
  description:
    "Enjoy our cozy restaurant ambiance and freshly prepared vegetarian meals with table service.",
};

export default function DineInPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-4">Dine-in Experience</h1>
      <p className="text-gray-700 mb-4">
        Join us at VeggieBite for a delightful in-restaurant dining experience.
        Enjoy our warm hospitality and a diverse menu of fresh vegetarian dishes
        in an inviting ambiance.
      </p>
      <ul className="list-disc pl-6 text-gray-600 space-y-1">
        <li>Spacious, comfortable seating</li>
        <li>Friendly table service</li>
        <li>Ideal for families, friends, and team lunches</li>
        <li>Reservations recommended for weekends</li>
      </ul>
    </div>
  );
}
