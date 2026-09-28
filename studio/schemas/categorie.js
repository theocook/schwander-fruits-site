export default {
  name: 'categorie',
  title: 'Catégorie',
  type: 'document',
  fields: [
    { name: 'titre', title: 'Nom de la catégorie', type: 'string', validation: (r) => r.required() },
    {
      name: 'ordre',
      title: 'Ordre d’affichage',
      description: '1 apparaît en premier sur le site.',
      type: 'number',
      validation: (r) => r.required().integer().positive(),
    },
  ],
  orderings: [{ title: 'Ordre d’affichage', name: 'ordre', by: [{ field: 'ordre', direction: 'asc' }] }],
  preview: {
    select: { title: 'titre', ordre: 'ordre' },
    prepare: ({ title, ordre }) => ({ title, subtitle: `Position ${ordre}` }),
  },
}
