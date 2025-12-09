export interface FAQ {
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

export const faqData: FAQ[] = [
  {
    category: "Booking & Reservations",
    question: "How do I make a booking with your agency?",
    answer: "You can make a booking by browsing our destinations and packages, then contacting us through our website form, email, or phone. Our luxury travel consultants will guide you through the entire process and customize your perfect journey.",
    keywords: ["book", "booking", "make reservation", "reserve", "how to book"]
  },
  {
    category: "Booking & Reservations",
    question: "Can I reserve a package first and pay later?",
    answer: "Yes, we offer reserve-now-pay-later options for select packages. A small deposit may be required to hold your reservation, with the balance due closer to your departure date. Contact our team for specific terms.",
    keywords: ["reserve", "pay later", "hold", "deposit"]
  },
  {
    category: "Booking & Reservations",
    question: "How far in advance should I book my trip?",
    answer: "We recommend booking 3-6 months in advance for international luxury travel to ensure the best availability for flights, premium hotels, and exclusive experiences. However, we can also accommodate last-minute bookings based on availability.",
    keywords: ["advance", "when to book", "how early", "timing"]
  },
  {
    category: "Booking & Reservations",
    question: "Can I customise my travel itinerary?",
    answer: "Absolutely! Every journey we create is fully customizable. From hotels and activities to dining experiences and private tours, we tailor everything to your preferences and desires. Your journey, your way.",
    keywords: ["customize", "customise", "tailor", "personalize", "change itinerary"]
  },
  {
    category: "Booking & Reservations",
    question: "Do I need to pay a deposit to confirm my booking?",
    answer: "Yes, a deposit is typically required to confirm your booking and secure your reservations. The deposit amount varies by package but is usually 20-30% of the total trip cost. Full payment is due 60 days before departure.",
    keywords: ["deposit", "down payment", "confirm booking", "secure"]
  },
  {
    category: "Booking & Reservations",
    question: "How do I know if my booking is confirmed?",
    answer: "Once your booking is confirmed, you'll receive a detailed confirmation email with your itinerary, booking reference number, and all relevant travel documents. Our team will also follow up with a personal call to review your arrangements.",
    keywords: ["confirmed", "confirmation", "booking status", "verify"]
  },
  {
    category: "Payments",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, PayPal, and wire transfers. For high-value bookings, we also work with luxury concierge payment services.",
    keywords: ["payment", "pay", "credit card", "payment method", "how to pay"]
  },
  {
    category: "Payments",
    question: "Do you offer instalment payment options?",
    answer: "Yes, we offer flexible instalment plans for bookings over a certain amount. You can spread your payments over 3-12 months depending on your booking timeline. Contact us for personalized payment arrangements.",
    keywords: ["instalment", "installment", "payment plan", "monthly payment", "split payment"]
  },
  {
    category: "Payments",
    question: "Are there any hidden fees I should know about?",
    answer: "We believe in complete transparency. All fees are clearly outlined in your quote, including taxes, service charges, and any applicable fees. There are no hidden costs - what you see is what you pay.",
    keywords: ["hidden fees", "extra charges", "additional cost", "fees"]
  },
  {
    category: "Payments",
    question: "Can I pay in a different currency?",
    answer: "Yes, we accept payments in multiple currencies including USD, EUR, GBP, and others. Currency conversion rates are clearly displayed, and we work with secure international payment processors.",
    keywords: ["currency", "foreign payment", "different currency", "exchange"]
  },
  {
    category: "Flights",
    question: "Can I change my flight date after booking?",
    answer: "Flight changes are subject to airline policies and availability. We'll work with you to modify your dates, though change fees and fare differences may apply. Contact us as soon as possible for the best options.",
    keywords: ["change flight", "modify date", "reschedule flight", "flight change"]
  },
  {
    category: "Flights",
    question: "What happens if my flight is delayed or cancelled?",
    answer: "Our 24/7 support team will immediately assist you with rebooking, accommodation if needed, and liaison with airlines. We also recommend travel insurance which covers delays and cancellations for added peace of mind.",
    keywords: ["delayed flight", "cancelled flight", "flight delay", "flight cancellation"]
  },
  {
    category: "Flights",
    question: "Can you help me arrange special meals or seat preferences?",
    answer: "Absolutely! We handle all special requests including dietary requirements, seat preferences, extra legroom, and any accessibility needs. Just let us know your preferences when booking.",
    keywords: ["special meal", "seat preference", "dietary", "seat selection"]
  },
  {
    category: "Flights",
    question: "Do you offer assistance for unaccompanied minors?",
    answer: "Yes, we coordinate with airlines to ensure safe travel for unaccompanied minors, including special assistance, supervision, and meet-and-greet services at both departure and arrival airports.",
    keywords: ["minor", "unaccompanied", "child travel", "kids flying alone"]
  },
  {
    category: "Hotels & Accommodation",
    question: "Do I get to choose my hotel?",
    answer: "Yes! We present you with carefully curated luxury hotel options that match your style and preferences. You have complete freedom to choose, or we can recommend the perfect property based on your needs.",
    keywords: ["choose hotel", "select hotel", "hotel choice", "pick hotel"]
  },
  {
    category: "Hotels & Accommodation",
    question: "What is included in the hotel stay?",
    answer: "Our luxury packages typically include daily breakfast, airport transfers, room upgrades when available, and exclusive amenities. Specific inclusions vary by property and are detailed in your itinerary.",
    keywords: ["hotel include", "what's included", "hotel amenities", "inclusions"]
  },
  {
    category: "Hotels & Accommodation",
    question: "Can I request early check-in or late check-out?",
    answer: "Yes, we'll request early check-in and late check-out with hotels on your behalf. While subject to availability, our relationships with luxury properties often secure these complimentary services for our clients.",
    keywords: ["early check in", "late checkout", "check in time", "checkout time"]
  },
  {
    category: "Hotels & Accommodation",
    question: "Are there any hotel city taxes?",
    answer: "Some destinations charge local city or tourism taxes that are collected directly by hotels. These are clearly outlined in your booking documents and are typically paid at the hotel upon checkout.",
    keywords: ["city tax", "hotel tax", "tourism tax", "local tax"]
  },
  {
    category: "Visa & Travel Documents",
    question: "Do you assist with visa applications?",
    answer: "Yes, we provide comprehensive visa assistance including document preparation, application submission, and tracking. Our team ensures you have all required documents for hassle-free entry to your destination.",
    keywords: ["visa", "visa help", "visa assistance", "visa application"]
  },
  {
    category: "Visa & Travel Documents",
    question: "How long does the visa process take?",
    answer: "Processing times vary by country, typically ranging from 3-30 days. We advise starting the visa process as early as possible and can expedite applications when urgent processing is available.",
    keywords: ["visa time", "how long visa", "visa processing", "visa duration"]
  },
  {
    category: "Visa & Travel Documents",
    question: "What documents do I need for international travel?",
    answer: "Generally, you'll need a valid passport (with 6+ months validity), visa if required, travel insurance, booking confirmations, and any health certificates. We provide a personalized checklist for your specific destination.",
    keywords: ["documents", "travel documents", "what documents", "passport", "requirements"]
  },
  {
    category: "Visa & Travel Documents",
    question: "Do I need travel vaccinations?",
    answer: "Vaccination requirements vary by destination. We provide current health advisories and recommend consulting with a travel health clinic. Some countries require proof of specific vaccinations for entry.",
    keywords: ["vaccination", "vaccine", "immunization", "health requirements"]
  },
  {
    category: "Travel Insurance",
    question: "Is travel insurance included?",
    answer: "Travel insurance is optional but highly recommended. Some premium packages include complimentary coverage. We can arrange comprehensive insurance covering medical emergencies, cancellations, lost luggage, and more.",
    keywords: ["insurance included", "insurance coverage", "is insurance"]
  },
  {
    category: "Travel Insurance",
    question: "What does it cover?",
    answer: "Our recommended insurance covers trip cancellation, medical emergencies, evacuation, lost or delayed baggage, travel delays, and 24/7 emergency assistance. Specific coverage details are provided with each policy.",
    keywords: ["insurance cover", "what does insurance", "coverage", "insurance benefits"]
  },
  {
    category: "Travel Insurance",
    question: "Can I purchase it separately?",
    answer: "Yes, you can purchase travel insurance separately from us or through your preferred provider. We work with leading insurers and can secure competitive rates with comprehensive coverage.",
    keywords: ["buy insurance", "purchase insurance", "separate insurance", "insurance separately"]
  },
  {
    category: "Cancellations & Refunds",
    question: "What is your cancellation policy?",
    answer: "Cancellation terms vary by booking. Typically: 90+ days before = full refund minus deposit; 60-89 days = 50% refund; 30-59 days = 25% refund; less than 30 days = no refund. Travel insurance can protect against these fees.",
    keywords: ["cancel", "cancellation", "cancel policy", "cancellation policy"]
  },
  {
    category: "Cancellations & Refunds",
    question: "Are refunds guaranteed?",
    answer: "Refunds depend on the cancellation timeframe and supplier policies. We always advocate on your behalf for the best possible outcome. Travel insurance provides additional protection for unforeseen circumstances.",
    keywords: ["refund", "money back", "refund guaranteed", "get refund"]
  },
  {
    category: "Cancellations & Refunds",
    question: "How long do refunds take?",
    answer: "Refunds are typically processed within 10-15 business days after cancellation approval. The timeframe can vary based on your payment method and supplier processing times. We monitor all refunds to ensure timely completion.",
    keywords: ["refund time", "how long refund", "refund processing", "when refund"]
  },
  {
    category: "Cancellations & Refunds",
    question: "Can I transfer my booking?",
    answer: "Yes, booking transfers to another person are possible in most cases, subject to supplier approval and potential name change fees. Contact us as soon as possible to arrange the transfer.",
    keywords: ["transfer booking", "change name", "transfer to someone", "booking transfer"]
  },
  {
    category: "Tour Packages",
    question: "What's included?",
    answer: "Our packages typically include accommodation, specified meals, guided tours, entrance fees, internal transportation, and airport transfers. Each package has detailed inclusions listed in the itinerary.",
    keywords: ["what's included", "package include", "what included", "inclusions"]
  },
  {
    category: "Tour Packages",
    question: "Do you offer private tours?",
    answer: "Yes! We specialize in private, personalized tours with dedicated guides and drivers. Enjoy exclusive experiences without the crowds, moving at your own pace with complete flexibility.",
    keywords: ["private tour", "private", "exclusive tour", "personal tour"]
  },
  {
    category: "Tour Packages",
    question: "Can I add optional activities?",
    answer: "Absolutely! We offer a wide range of optional activities and experiences to enhance your journey. From hot air balloon rides to private yacht charters, we can arrange extraordinary additions to your itinerary.",
    keywords: ["add activity", "optional activity", "extra activity", "additional experience"]
  },
  {
    category: "Tour Packages",
    question: "Are meals included?",
    answer: "Meal inclusions vary by package. Typically, breakfast is included daily, with some packages including additional meals. All inclusions are clearly detailed in your itinerary, and we can always arrange additional dining experiences.",
    keywords: ["meals", "food included", "meals included", "dining"]
  },
  {
    category: "Transportation & Transfers",
    question: "Do you provide airport transfers?",
    answer: "Yes, all our packages include luxury airport transfers with meet-and-greet service. Your driver will be waiting at arrivals with a name sign, ready to transport you in comfort to your hotel.",
    keywords: ["airport transfer", "pickup", "airport transport", "transfer"]
  },
  {
    category: "Transportation & Transfers",
    question: "Can I rent a car or arrange private transport?",
    answer: "Yes, we can arrange luxury car rentals with premium vehicles and comprehensive insurance, or provide a private driver for your entire stay. Both options offer flexibility and comfort during your travels.",
    keywords: ["rent car", "car rental", "private driver", "private transport", "chauffeur"]
  },
  {
    category: "Safety & Misc",
    question: "Is it safe to travel to [destination]?",
    answer: "We continuously monitor travel advisories and only recommend destinations we deem safe for luxury travel. We provide detailed safety information for each destination and maintain 24/7 support throughout your journey.",
    keywords: ["safe", "safety", "is it safe", "dangerous", "secure"]
  },
  {
    category: "Safety & Misc",
    question: "Do you accommodate travellers with special needs?",
    answer: "Absolutely! We specialize in creating accessible luxury experiences for travelers with mobility issues, dietary restrictions, or other special requirements. We ensure all arrangements meet your specific needs.",
    keywords: ["special needs", "accessibility", "disability", "wheelchair", "accessible"]
  },
  {
    category: "Safety & Misc",
    question: "What should I do in an emergency during the trip?",
    answer: "Contact our 24/7 emergency hotline immediately. We have dedicated support staff ready to assist with any situation, from medical emergencies to lost documents. Your emergency contact numbers are provided in your travel documents.",
    keywords: ["emergency", "emergency contact", "help", "urgent", "problem"]
  },
  {
    category: "Safety & Misc",
    question: "Do you offer 24/7 customer support?",
    answer: "Yes! Our luxury concierge service is available 24/7 throughout your journey. Whether you need restaurant reservations, itinerary adjustments, or emergency assistance, we're always here for you.",
    keywords: ["24/7", "support", "customer service", "help", "contact", "24 hours"]
  },
  {
    category: "Safety & Misc",
    question: "Can you help plan corporate or group travel?",
    answer: "Yes, we specialize in luxury corporate retreats, incentive travel, and group journeys. We handle all logistics for groups of any size, ensuring seamless coordination and unforgettable experiences for your team or group.",
    keywords: ["corporate", "group", "business travel", "team", "company trip", "group travel"]
  }
];

export const quickReplies = [
  "How do I book?",
  "Payment options?",
  "Cancellation policy?",
  "Is insurance included?",
  "Can I customize my trip?",
  "Do you help with visas?"
];

export const categories = [
  "Booking & Reservations",
  "Payments",
  "Flights",
  "Hotels & Accommodation",
  "Visa & Travel Documents",
  "Travel Insurance",
  "Cancellations & Refunds",
  "Tour Packages",
  "Transportation & Transfers",
  "Safety & Misc"
];
