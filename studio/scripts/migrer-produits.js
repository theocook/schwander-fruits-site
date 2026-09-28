// Migration unique : envoie les 48 produits et leurs photos vers Sanity.
// À lancer depuis le dossier studio/ :
//   npx sanity exec scripts/migrer-produits.js --with-user-token
import { getCliClient } from 'sanity/cli'
import { createReadStream, existsSync } from 'node:fs'
import path from 'node:path'
import { products, CATEGORIES } from '../../src/data/products.js'

const client = getCliClient({ apiVersion: '2025-01-01' })

for (const [i, c] of CATEGORIES.entries()) {
  await client.createOrReplace({ _id: `categorie-${c.id}`, _type: 'categorie', titre: c.label, ordre: i + 1 })
  console.log('catégorie :', c.label)
}

for (const p of products) {
  const imgPath = path.join(process.cwd(), '..', 'public', ...p.image.split('/').filter(Boolean))
  let photo
  if (existsSync(imgPath)) {
    const asset = await client.assets.upload('image', createReadStream(imgPath), {
      filename: path.basename(imgPath),
    })
    photo = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } else {
    console.warn('photo introuvable :', imgPath)
  }
  await client.createOrReplace({
    _id: `produit-${p.id}`,
    _type: 'produit',
    nom: p.name,
    statut: p.status,
    categorie: { _type: 'reference', _ref: `categorie-${p.category}` },
    ...(photo && { photo }),
  })
  console.log('produit :', p.name)
}
console.log(`\nTerminé : ${CATEGORIES.length} catégories, ${products.length} produits.`)
