// Source des données du site : Sanity d'abord, repli sur products.js si l'API est injoignable.
import { products as produitsLocaux, CATEGORIES as categoriesLocales } from './products.js'
import { sanityQueryUrl } from '../lib/sanity.js'

const REQUETE = `{
  "categories": *[_type == "categorie"] | order(ordre asc) { "id": _id, "label": titre },
  "produits": *[_type == "produit"] { "id": _id, nom, statut, "categorie": categorie._ref, "photo": photo.asset->url }
}`

const strip = (v, prefixe) => (typeof v === 'string' && v.startsWith(prefixe) ? v.slice(prefixe.length) : v)

export async function getCatalogue() {
  try {
    const ctrl = new AbortController()
    const minuteur = setTimeout(() => ctrl.abort(), 10000)
    const rep = await fetch(sanityQueryUrl(REQUETE), { signal: ctrl.signal })
    clearTimeout(minuteur)
    if (!rep.ok) throw new Error(`API Sanity : HTTP ${rep.status}`)
    const { result } = await rep.json()

    const categories = result.categories.map((c) => ({ id: strip(c.id, 'categorie-'), label: c.label }))
    const ordre = new Map(categories.map((c, i) => [c.id, i]))
    const locaux = new Map(produitsLocaux.map((p) => [p.id, p]))
    const products = result.produits
      .map((p) => {
        const id = strip(p.id, 'produit-')
        return {
          id,
          name: p.nom,
          category: strip(p.categorie, 'categorie-'),
          image: p.photo ? `${p.photo}?w=304&h=304&fit=crop&auto=format` : (locaux.get(id)?.image ?? ''),
          status: p.statut,
        }
      })
      .sort(
        (a, b) =>
          (ordre.get(a.category) ?? 99) - (ordre.get(b.category) ?? 99) || a.name.localeCompare(b.name, 'fr'),
      )
    if (products.length === 0) throw new Error('catalogue vide')
    console.log(`[catalogue] ${products.length} produits chargés depuis Sanity`)
    return { products, categories, source: 'sanity' }
  } catch (err) {
    console.warn(`[catalogue] repli sur les données locales (${err.message})`)
    return { products: produitsLocaux, categories: categoriesLocales, source: 'local' }
  }
}
