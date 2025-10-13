import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'video',
  title: 'Treniruočių video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pavadinimas',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategorija',
      type: 'string',
      options: {
        list: [
          { title: 'Jėgos treniruotės', value: 'strength' },
          { title: 'Kardio', value: 'cardio' },
          { title: 'Yoga', value: 'yoga' },
          { title: 'HIIT', value: 'hiit' },
          { title: 'Tempimas', value: 'stretching' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Trukmė (min)',
      type: 'number',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'level',
      title: 'Lygis',
      type: 'string',
      options: {
        list: [
          { title: 'Pradedantis', value: 'beginner' },
          { title: 'Vidutinis', value: 'intermediate' },
          { title: 'Pažengęs', value: 'advanced' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (YouTube/Vimeo)',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Nuotrauka',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Aprašymas',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'equipment',
      title: 'Reikalinga įranga',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isPremium',
      title: 'Premium turinys',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      category: 'category',
      media: 'thumbnail',
    },
    prepare({ title, duration, category, media }) {
      return {
        title,
        subtitle: `${category} • ${duration} min`,
        media,
      }
    },
  },
})
