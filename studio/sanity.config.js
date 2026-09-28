import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { frFRLocale } from '@sanity/locale-fr-fr'
import { schemaTypes } from './schemas/index.js'
import { outilArdoise } from './tools/OutilArdoise.jsx'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'gf4it2ok'

export default defineConfig({
  name: 'schwander',
  title: 'Schwander Fruits',
  projectId,
  dataset: 'production',
  plugins: [
    structureTool({
      title: 'Contenu',
      structure: (S) =>
        S.list()
          .title('La ferme')
          .items([
            S.listItem()
              .title('Produits par catégorie')
              .child(
                S.documentTypeList('categorie')
                  .title('Choisir une catégorie')
                  .defaultOrdering([{ field: 'ordre', direction: 'asc' }])
                  .child((catId) =>
                    S.documentList()
                      .title('Produits')
                      .filter('_type == "produit" && categorie._ref == $catId')
                      .params({ catId })
                      .defaultOrdering([{ field: 'nom', direction: 'asc' }]),
                  ),
              ),
            S.documentTypeListItem('produit').title('Tous les produits'),
            S.divider(),
            S.documentTypeListItem('categorie').title('Catégories (ordre d’affichage)'),
          ]),
    }),
    frFRLocale(),
  ],
  schema: { types: schemaTypes },
  // L'outil « Mise à jour rapide » en premier : c'est l'écran d'accueil du Studio.
  tools: (prev) => [outilArdoise, ...prev],
})
