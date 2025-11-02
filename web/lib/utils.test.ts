import { toVocative } from './utils';

// Test cases
const testCases = [
  // Moterų vardai
  { input: 'Agnė', expected: 'Agne' },
  { input: 'Agnė Petraitė', expected: 'Agne' },
  { input: 'Renata', expected: 'Renata' },
  { input: 'Marija', expected: 'Marij' },
  { input: 'Gražina', expected: 'Gražina' },
  { input: 'Rūta', expected: 'Rūta' },
  
  // Vyrų vardai
  { input: 'Jonas', expected: 'Jonai' },
  { input: 'Petras', expected: 'Petrai' },
  { input: 'Vytis', expected: 'Vyti' },
  { input: 'Darius', expected: 'Dariau' },
  { input: 'Marius', expected: 'Mariau' },
  
  // Edge cases
  { input: '', expected: '' },
  { input: 'John', expected: 'John' }, // užsienietiškas vardas
];

console.log('🧪 Testing toVocative function:\n');

testCases.forEach(({ input, expected }) => {
  const result = toVocative(input);
  const status = result === expected ? '✅' : '❌';
  console.log(`${status} toVocative("${input}") = "${result}" ${result !== expected ? `(expected: "${expected}")` : ''}`);
});
