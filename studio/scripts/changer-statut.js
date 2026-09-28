// Change le statut d'un produit (outil de test / dépannage).
//   PRODUIT=fraises STATUT=disponible npx sanity exec scripts/changer-statut.js --with-user-token
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2025-01-01' })
const { PRODUIT, STATUT } = process.env
if (!PRODUIT || !STATUT) throw new Error('Variables PRODUIT et STATUT requises')
const doc = await client.patch(`produit-${PRODUIT}`).set({ statut: STATUT }).commit()
console.log(`${doc.nom} → ${doc.statut}`)
