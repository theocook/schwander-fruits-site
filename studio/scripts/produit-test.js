// Crée ou supprime le produit fictif du test de pipeline.
import { getCliClient } from 'sanity/cli'
const client = getCliClient({ apiVersion: '2025-01-01' })
if (process.env.ACTION === 'supprimer') {
  await client.delete('produit-test-pipeline')
  console.log('produit test supprimé')
} else {
  await client.createOrReplace({
    _id: 'produit-test-pipeline',
    _type: 'produit',
    nom: 'Produit test pipeline',
    statut: 'disponible',
    categorie: { _type: 'reference', _ref: 'categorie-autres' },
  })
  console.log('produit test créé')
}
