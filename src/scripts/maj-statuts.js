// Au chargement de la page, les statuts sont relus depuis Sanity :
// une modification de Danièle est visible en rechargeant, sans redéploiement.
// Hors ligne ou API en panne : la version figée au build reste affichée.
import { sanityQueryUrl, STATUS_STYLES, TAG_BASE, DOT_BASE } from '../lib/sanity.js'

async function rafraichir() {
  try {
    const rep = await fetch(sanityQueryUrl('*[_type == "produit"]{ "id": _id, statut }'))
    if (!rep.ok) return
    const { result } = await rep.json()
    const statuts = new Map(result.map((p) => [p.id.replace(/^produit-/, ''), p.statut]))

    document.querySelectorAll('[data-produit]').forEach((el) => {
      const statut = statuts.get(el.dataset.id)
      if (!statut || statut === el.dataset.statut) return
      el.dataset.statut = statut
      const style = STATUS_STYLES[statut]
      if (!style) return
      const tag = el.querySelector('[data-tag]')
      if (tag) {
        tag.className = `${TAG_BASE} ${style.txt}`
        tag.querySelector('[data-dot]').className = `${DOT_BASE} ${style.dot}`
        tag.querySelector('[data-label]').textContent = style.label
      }
      el.querySelector('[data-row]')?.classList.toggle('opacity-45', statut === 'pas-de-saison')
    })
    document.dispatchEvent(new CustomEvent('statuts:maj'))
  } catch {
    /* silencieux : le repli est la page telle que construite */
  }
}
rafraichir()
