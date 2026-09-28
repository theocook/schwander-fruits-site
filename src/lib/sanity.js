// Configuration Sanity partagée entre le build (serveur) et le navigateur.
// Le dataset est en lecture publique : aucun secret ici.
export const SANITY = { projectId: 'gf4it2ok', dataset: 'production', apiVersion: '2025-01-01' }

export function sanityQueryUrl(query) {
  return `https://${SANITY.projectId}.api.sanity.io/v${SANITY.apiVersion}/data/query/${SANITY.dataset}?query=${encodeURIComponent(query)}`
}

/** Les statuts en vente sur l'ardoise. */
export const EN_VENTE = ['disponible', 'fin-de-saison']

/** Styles du marqueur de statut (classes écrites en toutes lettres pour Tailwind). */
export const STATUS_STYLES = {
  disponible: { label: 'Disponible', dot: 'bg-green', txt: 'text-green' },
  bientot: { label: 'Bientôt', dot: 'bg-amber-500', txt: 'text-amber-700' },
  'fin-de-saison': { label: 'Dernière chance', dot: 'bg-orange-600', txt: 'text-orange-700' },
  'pas-de-saison': { label: 'Hors saison', dot: 'bg-ink/25', txt: 'text-ink/40' },
}
export const TAG_BASE = 'surtitre inline-flex items-center gap-1.5 whitespace-nowrap'
export const DOT_BASE = 'h-[7px] w-[7px] shrink-0'
