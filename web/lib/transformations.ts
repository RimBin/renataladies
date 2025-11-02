export interface Transformation {
  id: number;
  name: string;
  age: number;
  beforeImage: string;
  afterImage: string;
  result: string;
  duration: string; // e.g., "3 mėnesiai"
  weight?: string; // e.g., "-12 kg"
}

export const transformations: Transformation[] = [
  {
    id: 1,
    name: 'Laura',
    age: 32,
    beforeImage: 'https://images.unsplash.com/photo-1594737625785-c6683fcf8c31?w=800&h=1200&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1200&fit=crop',
    result: 'Pasiekiau savo svajonių formą ir atgavau pasitikėjimą savimi',
    duration: '3 mėnesiai',
    weight: '-12 kg',
  },
  {
    id: 2,
    name: 'Ieva',
    age: 28,
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1200&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1616803689943-5601631c7fec?w=800&h=1200&fit=crop',
    result: 'Ne tik numečiau svorio, bet ir tapau stipresnė fiziškai ir emociškai',
    duration: '4 mėnesiai',
    weight: '-15 kg',
  },
  {
    id: 3,
    name: 'Rūta',
    age: 35,
    beforeImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1200&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1548690596-f2b7a4625b62?w=800&h=1200&fit=crop',
    result: 'Po gimdymo atgavau formą ir energiją, kurią maniau praradusi',
    duration: '5 mėnesiai',
    weight: '-18 kg',
  },
];
