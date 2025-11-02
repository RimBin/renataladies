import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Konvertuoja lietuvišką vardą į kreipinį (vocative case)
 * Pvz: "Agnė" → "Agne", "Jonas" → "Jonai", "Renata" → "Renata"
 */
export function toVocative(name: string): string {
  if (!name) return name;
  
  // Paimam tik pirmą vardą (jei yra vardas + pavardė)
  const firstName = name.trim().split(' ')[0];
  
  // Moterų vardai
  if (firstName.endsWith('ė')) {
    return firstName.slice(0, -1) + 'e'; // Agnė → Agne
  }
  if (firstName.endsWith('ija')) {
    return firstName.slice(0, -1); // Marija → Marij (bet dažnai lieka Marija)
  }
  if (firstName.endsWith('a')) {
    return firstName; // Renata → Renata (nekinta)
  }
  if (firstName.endsWith('ja')) {
    return firstName; // Nadja → Nadja (nekinta)
  }
  
  // Vyrų vardai
  if (firstName.endsWith('as')) {
    return firstName.slice(0, -2) + 'ai'; // Jonas → Jonai
  }
  if (firstName.endsWith('is')) {
    return firstName.slice(0, -2) + 'i'; // Vytis → Vyti
  }
  if (firstName.endsWith('us')) {
    return firstName.slice(0, -2) + 'au'; // Darius → Dariau
  }
  
  // Jei neatitinka taisyklių, grąžinam originalų
  return firstName;
}
