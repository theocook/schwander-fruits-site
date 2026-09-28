const STATUTS = [
  { title: '🟢 Disponible', value: 'disponible' },
  { title: '🟡 Bientôt disponible', value: 'bientot' },
  { title: '🟠 Dernière chance', value: 'fin-de-saison' },
  { title: '⚪ Pas de saison', value: 'pas-de-saison' },
]

export default {
  name: 'produit',
  title: 'Produit',
  type: 'document',
  fields: [
    { name: 'nom', title: 'Nom du produit', type: 'string', validation: (r) => r.required() },
    {
      name: 'statut',
      title: 'Disponibilité',
      description: 'C’est ce qui s’affiche sur le site. Pensez à Publier après le changement.',
      type: 'string',
      options: { list: STATUTS, layout: 'radio' },
      initialValue: 'pas-de-saison',
      validation: (r) => r.required(),
    },
    {
      name: 'categorie',
      title: 'Catégorie',
      type: 'reference',
      to: [{ type: 'categorie' }],
      validation: (r) => r.required(),
    },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
  ],
  preview: {
    select: { title: 'nom', statut: 'statut', media: 'photo' },
    prepare({ title, statut, media }) {
      const s = STATUTS.find((x) => x.value === statut)
      return { title, subtitle: s ? s.title : '', media }
    },
  },
}
