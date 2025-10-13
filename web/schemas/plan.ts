import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'plan',
  title: 'Mitybos planai',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Pavadinimas',
      type: 'object',
      fields: [
        {
          name: 'lt',
          title: 'Lietuvių kalba',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'en',
          title: 'Anglų kalba',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'object',
      fields: [
        {
          name: 'lt',
          title: 'Lietuvių slug',
          type: 'slug',
          options: { source: 'title.lt' },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'en',
          title: 'Anglų slug',
          type: 'slug',
          options: { source: 'title.en' },
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'goal',
      title: 'Tikslas',
      type: 'string',
      options: {
        list: [
          { title: 'Svorio mažinimas', value: 'weight-loss' },
          { title: 'Raumenų auginimas', value: 'muscle-gain' },
          { title: 'Palaikymas', value: 'maintenance' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'diet',
      title: 'Mitybos tipas',
      type: 'string',
      options: {
        list: [
          { title: 'Subalansuota', value: 'balanced' },
          { title: 'Veganiška', value: 'vegan' },
          { title: 'Vegetariška', value: 'vegetarian' },
          { title: 'Keto', value: 'keto' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'kcal',
      title: 'Kalorijos (kcal)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1000).max(4000),
    }),
    defineField({
      name: 'days',
      title: 'Dienų skaičius',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
    defineField({
      name: 'recipes',
      title: 'Receptų skaičius',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Kaina (EUR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'rating',
      title: 'Įvertinimas',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      name: 'thumb',
      title: 'Nuotrauka',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'samplePdf',
      title: 'Pavyzdžio PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'includes',
      title: 'Kas įtraukta',
      type: 'object',
      fields: [
        {
          name: 'lt',
          title: 'Lietuvių kalba',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'en',
          title: 'Anglų kalba',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Aprašymas',
      type: 'object',
      fields: [
        {
          name: 'lt',
          title: 'Lietuvių kalba',
          type: 'text',
          rows: 4,
        },
        {
          name: 'en',
          title: 'Anglų kalba',
          type: 'text',
          rows: 4,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.lt',
      kcal: 'kcal',
      media: 'thumb',
    },
    prepare({ title, kcal, media }) {
      return {
        title,
        subtitle: `${kcal} kcal`,
        media,
      }
    },
  },
})
