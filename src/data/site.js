// Informations de la ferme. Volontairement en dur : elles ne changent pas.
// ⚠️ À FAIRE VÉRIFIER PAR DANIÈLE — extraites automatiquement de l'ancien site.
export const site = {
  nom: 'Schwander Fruits',
  baseline: 'Fruits et légumes de saison, cultivés à Cheseaux-Noréaz',
  lieu: 'Cheseaux-Noréaz',
  canton: 'Vaud',
  label: 'Production PER',
  telephone: '024 426 07 91',
  mobile: '078 764 30 05',
  email: 'pschwander@sunrise.ch',
  facebook: 'https://www.facebook.com/people/Schwander-Pierre-Alain-Schwander-Dani%C3%A8le/100009118014778',
  instagram: '',
}

export const pointsDeVente = [
  {
    id: 'ferme',
    nom: 'À la ferme',
    adresse: 'Cheseaux-Noréaz, 1400 Yverdon-les-Bains',
    detail: 'Vente directe au domaine, face au lac de Neuchâtel.',
    horaires: [
      { jours: 'Lundi – vendredi', heures: '8h00 – 18h30' },
      { jours: 'Samedi', heures: '14h00 – 17h30' },
      { jours: 'Dimanche', heures: '9h00 – 17h00' },
    ],
  },
  {
    id: 'marche-yverdon',
    nom: "Marché d'Yverdon-les-Bains",
    adresse: 'Place Pestalozzi, 1400 Yverdon-les-Bains',
    detail: 'Retrouvez notre stand deux fois par semaine.',
    horaires: [
      { jours: 'Mardi', heures: 'Matin' },
      { jours: 'Samedi', heures: 'Matin' },
    ],
  },
]
