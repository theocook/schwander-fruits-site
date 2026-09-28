// Catalogue Schwander-Fruits.
// ⚠️ Les statuts ci-dessous sont des valeurs de DÉMONSTRATION (mi-septembre),
//    posées pour illustrer la maquette. À valider avec Danièle avant mise en ligne.
// Un produit = { id, name, category, image, status }.
// Pour ajouter un produit : copier une ligne, changer id / name / category / image.

/** Les 4 statuts, dans l’ordre d’affichage. */
export const STATUSES = [
  { id: 'disponible', label: 'Disponible', color: '#3F8F4A' },
  { id: 'bientot', label: 'Bientôt disponible', color: '#D9A521' },
  { id: 'fin-de-saison', label: 'Dernière chance', color: '#C9752B' },
  { id: 'pas-de-saison', label: 'Pas de saison', color: '#9AA0A6' },
]

/** Les catégories, dans l’ordre d’affichage. */
export const CATEGORIES = [
  { id: 'pommes', label: 'Pommes' },
  { id: 'poires', label: 'Poires' },
  { id: 'fruits-a-noyau', label: 'Fruits à noyau' },
  { id: 'petits-fruits', label: 'Petits fruits' },
  { id: 'legumes', label: 'Légumes' },
  { id: 'autres', label: 'Autres produits' },
]

/** 48 produits. */
export const products = [
  // — Pommes —
  { id: 'arkcharms', name: 'Arkcharm’s', category: 'pommes', image: '/photos/produits/arkcharms.jpg', status: 'fin-de-saison' },
  { id: 'beni-shogun', name: 'Beni-shogun', category: 'pommes', image: '/photos/produits/beni-shogun.jpg', status: 'bientot' },
  { id: 'boskoop', name: 'Boskoop', category: 'pommes', image: '/photos/produits/boskoop.jpg', status: 'bientot' },
  { id: 'daliclass', name: 'Daliclass', category: 'pommes', image: '/photos/produits/daliclass.jpg', status: 'disponible' },
  { id: 'golden-delicious', name: 'Golden Delicious', category: 'pommes', image: '/photos/produits/golden-delicious.jpg', status: 'bientot' },
  { id: 'gravenstein', name: 'Gravenstein', category: 'pommes', image: '/photos/produits/gravenstein.jpg', status: 'fin-de-saison' },
  { id: 'honeycrisp', name: 'Honeycrisp', category: 'pommes', image: '/photos/produits/honeycrisp.jpg', status: 'disponible' },
  { id: 'idared', name: 'Idared', category: 'pommes', image: '/photos/produits/idared.jpg', status: 'bientot' },
  { id: 'maigold', name: 'Maigold', category: 'pommes', image: '/photos/produits/maigold.jpg', status: 'bientot' },
  { id: 'milwa', name: 'Milwa', category: 'pommes', image: '/photos/produits/milwa.jpg', status: 'bientot' },
  { id: 'mondial-gala', name: 'Mondial Gala (Gala Galaxy)', category: 'pommes', image: '/photos/produits/mondial-gala.jpg', status: 'disponible' },
  { id: 'pinova', name: 'Pinova', category: 'pommes', image: '/photos/produits/pinova.jpg', status: 'bientot' },
  { id: 'story', name: 'Story', category: 'pommes', image: '/photos/produits/story.jpg', status: 'bientot' },
  { id: 'topaz', name: 'Topaz', category: 'pommes', image: '/photos/produits/topaz.jpg', status: 'bientot' },
  { id: 'vistabella', name: 'VistaBella', category: 'pommes', image: '/photos/produits/vistabella.jpg', status: 'fin-de-saison' },
  // — Poires —
  { id: 'beurre-bosc', name: 'Beurré Bosc', category: 'poires', image: '/photos/produits/beurre-bosc.jpg', status: 'bientot' },
  { id: 'beurre-giffard', name: 'Beurré Giffard', category: 'poires', image: '/photos/produits/beurre-giffard.jpg', status: 'pas-de-saison' },
  { id: 'beurre-hardy', name: 'Beurré Hardy', category: 'poires', image: '/photos/produits/beurre-hardy.jpg', status: 'disponible' },
  { id: 'clapps-favorite', name: "Clapp's Favorite", category: 'poires', image: '/photos/produits/clapps-favorite.jpg', status: 'fin-de-saison' },
  { id: 'concorde', name: 'Concorde', category: 'poires', image: '/photos/produits/concorde.jpg', status: 'bientot' },
  { id: 'doyenne-du-comice', name: 'Doyenné-du-Comice', category: 'poires', image: '/photos/produits/doyenne-du-comice.jpg', status: 'bientot' },
  { id: 'harrow-sweet', name: 'Harrow Sweet', category: 'poires', image: '/photos/produits/harrow-sweet.jpg', status: 'disponible' },
  { id: 'passe-crassane', name: 'Passe Crassane', category: 'poires', image: '/photos/produits/passe-crassane.jpg', status: 'pas-de-saison' },
  { id: 'williams', name: 'Williams', category: 'poires', image: '/photos/produits/williams.jpg', status: 'disponible' },
  { id: 'a-botzi', name: 'À botzi', category: 'poires', image: '/photos/produits/a-botzi.jpg', status: 'disponible' },
  // — Fruits à noyau —
  { id: 'abricots', name: 'Abricots', category: 'fruits-a-noyau', image: '/photos/produits/abricots.jpg', status: 'pas-de-saison' },
  { id: 'berudge', name: 'Berudge', category: 'fruits-a-noyau', image: '/photos/produits/berudge.jpg', status: 'disponible' },
  { id: 'bigarreau-schauenburg', name: 'Bigarreau Schauenburg', category: 'fruits-a-noyau', image: '/photos/produits/bigarreau-schauenburg.jpg', status: 'pas-de-saison' },
  { id: 'bigarreau-summit', name: 'Bigarreau Summit', category: 'fruits-a-noyau', image: '/photos/produits/bigarreau-summit.jpg', status: 'pas-de-saison' },
  { id: 'mirabelle-de-nancy', name: 'Mirabelle de Nancy', category: 'fruits-a-noyau', image: '/photos/produits/mirabelle-nancy.jpg', status: 'fin-de-saison' },
  { id: 'pruneau-buhler', name: 'Pruneau Bühler', category: 'fruits-a-noyau', image: '/photos/produits/pruneau-buhler.jpg', status: 'fin-de-saison' },
  { id: 'pruneau-fellenberg', name: 'Pruneau Fellenberg', category: 'fruits-a-noyau', image: '/photos/produits/pruneau-fellenberg.jpg', status: 'disponible' },
  { id: 'peches', name: 'Pêches', category: 'fruits-a-noyau', image: '/photos/produits/peches.jpg', status: 'fin-de-saison' },
  { id: 'reine-claude-verte', name: 'Reine Claude Verte', category: 'fruits-a-noyau', image: '/photos/produits/reine-claude-verte.jpg', status: 'fin-de-saison' },
  { id: 'reine-claude-de-doullens', name: 'Reine-Claude de Doullens', category: 'fruits-a-noyau', image: '/photos/produits/reine-claude-doullins.jpg', status: 'fin-de-saison' },
  // — Petits fruits —
  { id: 'cassis', name: 'Cassis', category: 'petits-fruits', image: '/photos/produits/cassis.jpg', status: 'pas-de-saison' },
  { id: 'fraises', name: 'Fraises', category: 'petits-fruits', image: '/photos/produits/fraises.jpg', status: 'pas-de-saison' },
  { id: 'framboises', name: 'Framboises', category: 'petits-fruits', image: '/photos/produits/framboises.jpg', status: 'disponible' },
  { id: 'raisinets', name: 'Raisinets', category: 'petits-fruits', image: '/photos/produits/raisinets.jpg', status: 'pas-de-saison' },
  // — Légumes —
  { id: 'agata', name: 'Agata', category: 'legumes', image: '/photos/produits/agata.jpg', status: 'disponible' },
  { id: 'bintje', name: 'Bintje', category: 'legumes', image: '/photos/produits/bintje.jpg', status: 'disponible' },
  { id: 'charlotte', name: 'Charlotte', category: 'legumes', image: '/photos/produits/charlotte.jpg', status: 'disponible' },
  { id: 'chou-fleur', name: 'Chou-fleur', category: 'legumes', image: '/photos/produits/chou-fleur.jpg', status: 'disponible' },
  { id: 'endives', name: 'Endives', category: 'legumes', image: '/photos/produits/endives.jpg', status: 'bientot' },
  { id: 'poireaux', name: 'Poireaux', category: 'legumes', image: '/photos/produits/poireaux.jpg', status: 'disponible' },
  { id: 'victoria', name: 'Victoria', category: 'legumes', image: '/photos/produits/victoria.jpg', status: 'disponible' },
  // — Autres produits —
  { id: 'jus-de-pommes', name: 'Jus de pommes', category: 'autres', image: '/photos/produits/jus-pommes.jpg', status: 'disponible' },
  { id: 'miel-du-pays', name: 'Miel du pays', category: 'autres', image: '/photos/produits/miel-pays.jpg', status: 'disponible' },
]
