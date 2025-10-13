import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Tinklaraščio įrašai',
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
      name: 'author',
      title: 'Autorius',
      type: 'string',
      initialValue: 'Renata',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publikavimo data',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Pagrindinė nuotrauka',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Santrauka',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Turinys',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Kategorijos',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Mityba', value: 'nutrition' },
          { title: 'Treniruotės', value: 'workouts' },
          { title: 'Receptai', value: 'recipes' },
          { title: 'Motyvacija', value: 'motivation' },
          { title: 'Sveikata', value: 'health' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: `By ${author}`,
        media,
      }
    },
  },
})
