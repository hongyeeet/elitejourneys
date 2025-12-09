import { faqData, FAQ } from '../data/faqData';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

function normalizeText(text: string): string {
  return text.toLowerCase().trim().replace(/[?!.,]/g, '');
}

function calculateRelevanceScore(userInput: string, faq: FAQ): number {
  const normalizedInput = normalizeText(userInput);
  const words = normalizedInput.split(' ');
  let score = 0;

  for (const keyword of faq.keywords) {
    const normalizedKeyword = normalizeText(keyword);
    if (normalizedInput.includes(normalizedKeyword)) {
      score += 10;
    }
    for (const word of words) {
      if (normalizedKeyword.includes(word) && word.length > 2) {
        score += 2;
      }
    }
  }

  const normalizedQuestion = normalizeText(faq.question);
  for (const word of words) {
    if (word.length > 3 && normalizedQuestion.includes(word)) {
      score += 3;
    }
  }

  return score;
}

export function findBestAnswer(userInput: string): string {
  const normalizedInput = normalizeText(userInput);

  if (normalizedInput.length < 3) {
    return "I'm here to help! Could you please provide more details about what you'd like to know?";
  }

  const scores = faqData.map(faq => ({
    faq,
    score: calculateRelevanceScore(userInput, faq)
  }));

  scores.sort((a, b) => b.score - a.score);

  const bestMatch = scores[0];

  if (bestMatch.score >= 10) {
    return bestMatch.faq.answer;
  } else if (bestMatch.score >= 5) {
    return `${bestMatch.faq.answer}\n\nWould you like to know anything else about ${bestMatch.faq.category.toLowerCase()}?`;
  }

  return "I'm here to help! Could you clarify your question or choose a category below? I can assist with:\n\n• Booking & Reservations\n• Payments\n• Flights\n• Hotels & Accommodation\n• Visa & Travel Documents\n• Travel Insurance\n• Cancellations & Refunds\n• Tour Packages\n• Transportation & Transfers\n• Safety & General Questions";
}

export function getGreeting(): string {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  return `${greeting}! Welcome to Elite Journeys. I'm your luxury travel concierge assistant. How may I help you plan your perfect journey today?`;
}

export function getCategoryFAQs(category: string): FAQ[] {
  return faqData.filter(faq => faq.category === category);
}
