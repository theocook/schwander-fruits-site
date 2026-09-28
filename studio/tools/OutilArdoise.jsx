// Outil « Mise à jour rapide » : tous les statuts sur un écran, un seul Enregistrer.
// C'est l'écran d'accueil du Studio — le geste hebdomadaire de Danièle.
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useClient } from 'sanity'

const STATUTS = [
  { value: 'disponible', titre: 'Disponible', couleur: '#3F8F4A' },
  { value: 'bientot', titre: 'Bientôt', couleur: '#D9A521' },
  { value: 'fin-de-saison', titre: 'Dernière chance', couleur: '#C9752B' },
  { value: 'pas-de-saison', titre: 'Pas de saison', couleur: '#9AA0A6' },
]

const REQUETE = `{
  "categories": *[_type == "categorie"] | order(ordre asc) { _id, titre },
  "produits": *[_type == "produit"] | order(nom asc) { _id, nom, statut, "cat": categorie._ref }
}`

export function OutilArdoise() {
  const client = useClient({ apiVersion: '2025-01-01' })
  const [donnees, setDonnees] = useState(null)
  const [modifs, setModifs] = useState({}) // _id -> nouveau statut
  const [etat, setEtat] = useState('') // '' | 'envoi' | 'ok' | 'erreur'

  const charger = useCallback(() => {
    client.fetch(REQUETE).then(setDonnees).catch(() => setEtat('erreur'))
  }, [client])

  useEffect(() => {
    charger()
  }, [charger])

  const nbModifs = Object.keys(modifs).length

  const choisir = (produit, statut) => {
    setModifs((m) => {
      const suivant = { ...m }
      if (statut === produit.statut) delete suivant[produit._id]
      else suivant[produit._id] = statut
      return suivant
    })
  }

  const enregistrer = async () => {
    setEtat('envoi')
    try {
      let tx = client.transaction()
      for (const [id, statut] of Object.entries(modifs)) tx = tx.patch(id, { set: { statut } })
      await tx.commit()
      setModifs({})
      setEtat('ok')
      charger()
      setTimeout(() => setEtat(''), 4000)
    } catch {
      setEtat('erreur')
    }
  }

  const groupes = useMemo(() => {
    if (!donnees) return []
    return donnees.categories
      .map((c) => ({ ...c, produits: donnees.produits.filter((p) => p.cat === c._id) }))
      .filter((c) => c.produits.length > 0)
  }, [donnees])

  if (!donnees)
    return <p style={{ padding: 24, fontFamily: 'sans-serif' }}>Chargement des produits…</p>

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '16px 16px 120px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: 22, margin: '8px 0 4px' }}>Mise à jour rapide</h1>
      <p style={{ color: '#667', fontSize: 14, margin: '0 0 20px' }}>
        Touchez le nouveau statut de chaque produit, puis appuyez une seule fois sur «&nbsp;Enregistrer&nbsp;».
      </p>

      {groupes.map((cat) => (
        <section key={cat._id} style={{ marginBottom: 28 }}>
          <h2
            style={{
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#123A25',
              borderBottom: '2px solid #123A25',
              paddingBottom: 6,
            }}
          >
            {cat.titre}
          </h2>
          {cat.produits.map((p) => {
            const actuel = modifs[p._id] ?? p.statut
            const change = p._id in modifs
            return (
              <div
                key={p._id}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '6px 12px',
                  padding: '10px 0',
                  borderBottom: '1px solid #e3e6e2',
                  background: change ? '#f4f9f2' : 'transparent',
                }}
              >
                <strong style={{ flex: '1 1 160px', fontSize: 15, color: '#1B241E' }}>
                  {p.nom}
                  {change && <span style={{ color: '#3F8F4A' }}> •</span>}
                </strong>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {STATUTS.map((s) => {
                    const actif = actuel === s.value
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => choisir(p, s.value)}
                        style={{
                          border: `1.5px solid ${actif ? s.couleur : '#ccd1cc'}`,
                          background: actif ? s.couleur : '#fff',
                          color: actif ? '#fff' : '#556',
                          fontSize: 12,
                          fontWeight: 600,
                          padding: '7px 10px',
                          cursor: 'pointer',
                          borderRadius: 0,
                        }}
                      >
                        {s.titre}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      ))}

      {/* Barre d'enregistrement, toujours visible en bas */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          background: '#123A25',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          zIndex: 10,
        }}
      >
        <span style={{ color: '#fff', fontSize: 14 }}>
          {etat === 'ok'
            ? '✓ Enregistré ! Le site est à jour.'
            : etat === 'erreur'
              ? 'Erreur — vérifiez la connexion puis réessayez.'
              : nbModifs === 0
                ? 'Aucune modification en attente'
                : `${nbModifs} modification${nbModifs > 1 ? 's' : ''} en attente`}
        </span>
        <button
          type="button"
          disabled={nbModifs === 0 || etat === 'envoi'}
          onClick={enregistrer}
          style={{
            background: nbModifs === 0 ? '#4a6a58' : '#FAF6EC',
            color: nbModifs === 0 ? '#9fb3a7' : '#123A25',
            border: 'none',
            fontWeight: 700,
            fontSize: 14,
            padding: '10px 22px',
            cursor: nbModifs === 0 ? 'default' : 'pointer',
            borderRadius: 0,
          }}
        >
          {etat === 'envoi' ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </div>
    </div>
  )
}

export const outilArdoise = {
  name: 'mise-a-jour',
  title: 'Mise à jour rapide',
  component: OutilArdoise,
}
