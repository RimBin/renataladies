export interface Testimonial {
  id: number;
  name: string;
  age: number;
  category: string;
  text: string;
  videoThumbnail: string;
  videoUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aistė',
    age: 32,
    category: 'Riebalų mažinimas',
    text: '"Per 2 mėnesius numečiau 6 kg ir pagaliau išmokau valgyti be kaltės jausmo. Renatos planai – tai ne dieta, o gyvenimo būdas!"',
    videoThumbnail: '/images/testimonials/testimonial-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-1',
  },
  {
    id: 2,
    name: 'Kristina',
    age: 27,
    category: 'Treniruočių programos',
    text: '"Treniruočių programos tiesiog nuostabios! Trumpi, bet intensyvūs video – puikiai tinka užimtom mamoms kaip aš."',
    videoThumbnail: '/images/testimonials/testimonial-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-2',
  },
  {
    id: 3,
    name: 'Giedrė',
    age: 38,
    category: 'Asmeninė priežiūra',
    text: '"Po asmeninės priežiūros su Renata pagaliau supratau, kaip svarbu nuoseklumas. Jaučiuosi stipresnė nei bet kada!"',
    videoThumbnail: '/images/testimonials/testimonial-3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=your-video-id-3',
  },
];
