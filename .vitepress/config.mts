import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'AI-educatie voor gemeenten',
    description: 'Persona-gebaseerd AI-trainingsprogramma voor Nederlandse gemeenten',
    lang: 'nl-NL',
    cleanUrls: true,
    lastUpdated: true,

    ignoreDeadLinks: true,

    markdown: {
      lineNumbers: false
    },

    themeConfig: {
      siteTitle: 'AI-educatie',

      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: 'Zoek',
                  buttonAriaLabel: 'Zoek in de documentatie'
                },
                modal: {
                  displayDetails: 'Toon details',
                  resetButtonTitle: 'Wissen',
                  backButtonTitle: 'Terug',
                  noResultsText: 'Geen resultaten',
                  footer: {
                    selectText: 'selecteer',
                    navigateText: 'navigeer',
                    closeText: 'sluiten'
                  }
                }
              }
            }
          }
        }
      },

      outline: {
        level: [2, 3],
        label: 'Op deze pagina'
      },

      docFooter: {
        prev: 'Vorige',
        next: 'Volgende'
      },

      lastUpdatedText: 'Laatst bijgewerkt',
      returnToTopLabel: 'Terug naar boven',
      sidebarMenuLabel: 'Menu',
      darkModeSwitchLabel: 'Thema',
      lightModeSwitchTitle: 'Naar lichte modus',
      darkModeSwitchTitle: 'Naar donkere modus',

      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'Exploratie',
          items: [
            { text: 'Overzicht', link: '/temp/' },
            { text: 'Spoor 1 — Waardepropositie', link: '/temp/business/segmentation' },
            { text: 'Spoor 2 — Markt & validatie', link: '/temp/strategy/competitive-analysis' },
            { text: 'Spoor 3 — MVP & Pilot', link: '/temp/product/mvp-scope' },
            { text: 'Spoor 4 — Verhaal & GTM', link: '/temp/gtm/vision-prfaq' }
          ]
        },
        {
          text: "Persona's",
          items: [
            { text: 'Overzicht', link: '/documentatie/business/personas/' },
            { text: 'Trainees (20)', link: '/documentatie/business/personas/trainees/controller' },
            { text: 'Trainers (3)', link: '/documentatie/business/personas/trainers/ai-trainer' }
          ]
        },
        { text: 'Business case', link: '/business-case-lean-canvas' }
      ],

      sidebar: {
        '/temp/': [
          {
            text: 'Overzicht',
            items: [{ text: 'README / Flow', link: '/temp/' }]
          },
          {
            text: 'Spoor 1 — Waardepropositie',
            collapsed: false,
            items: [
              { text: '1.1 Segmentatie', link: '/temp/business/segmentation' },
              { text: '1.2 JTBD — Dossierwerkers', link: '/temp/business/jtbd/dossierwerkers' },
              { text: '1.2 JTBD — Spilfiguren', link: '/temp/business/jtbd/spilfiguren' },
              { text: '1.2 JTBD — Regisseurs', link: '/temp/business/jtbd/regisseurs' },
              { text: '1.3 VPC — Dossierwerkers', link: '/temp/business/value-propositions/dossierwerkers' },
              { text: '1.3 VPC — Spilfiguren', link: '/temp/business/value-propositions/spilfiguren' },
              { text: '1.3 VPC — Regisseurs', link: '/temp/business/value-propositions/regisseurs' },
              { text: '1.4 User stories', link: '/temp/business/user-stories/top-3-segments' }
            ]
          },
          {
            text: 'Spoor 2 — Markt & validatie',
            collapsed: false,
            items: [
              { text: '2.1 Competitive analysis', link: '/temp/strategy/competitive-analysis' },
              { text: '2.2 Market sizing', link: '/temp/strategy/market-sizing' },
              { text: '2.3 Stakeholder map', link: '/temp/strategy/stakeholder-map' },
              { text: '2.4 Validatie-interviews', link: '/temp/strategy/validation-interviews' }
            ]
          },
          {
            text: 'Spoor 3 — MVP & Pilot',
            collapsed: false,
            items: [
              { text: '3.1 MVP-scope', link: '/temp/product/mvp-scope' },
              { text: '3.2 Curriculum specs', link: '/temp/product/curriculum-specs' },
              { text: '3.3 Metrics', link: '/temp/product/metrics' },
              { text: '3.4 Pricing & ROI', link: '/temp/product/pricing-roi-model' },
              { text: '3.5 Pilot plan', link: '/temp/product/pilot-plan' },
              { text: '3.6 Pre-mortem', link: '/temp/product/risk-premortem' }
            ]
          },
          {
            text: 'Spoor 4 — Verhaal & GTM',
            collapsed: false,
            items: [
              { text: '4.1 Vision + PR/FAQ', link: '/temp/gtm/vision-prfaq' },
              { text: '4.2 Go-to-market plan', link: '/temp/gtm/gtm-plan' },
              { text: '4.3 Business case v2', link: '/temp/gtm/business-case-v2' }
            ]
          }
        ],

        '/documentatie/': [
          {
            text: "Persona's — overzicht",
            items: [{ text: 'README', link: '/documentatie/business/personas/' }]
          },
          {
            text: 'Trainees — Dienstverlening',
            collapsed: true,
            items: [
              { text: 'Teamleider KCC / Burgerzaken', link: '/documentatie/business/personas/trainees/teamleider-klantcontact-burgerzaken' },
              { text: 'Manager Dienstverlening', link: '/documentatie/business/personas/trainees/manager-dienstverlening' }
            ]
          },
          {
            text: 'Trainees — Financiën & Control',
            collapsed: true,
            items: [
              { text: 'Controller', link: '/documentatie/business/personas/trainees/controller' },
              { text: 'Financieel Manager', link: '/documentatie/business/personas/trainees/financieel-manager' }
            ]
          },
          {
            text: 'Trainees — Informatie, Innovatie & ICT',
            collapsed: true,
            items: [
              { text: 'IT Manager / CIO', link: '/documentatie/business/personas/trainees/it-manager-cio' },
              { text: 'Innovatiemanager', link: '/documentatie/business/personas/trainees/innovatiemanager-adviseur-digitalisering' }
            ]
          },
          {
            text: 'Trainees — Intern Advies',
            collapsed: true,
            items: [
              { text: 'HR Manager', link: '/documentatie/business/personas/trainees/hr-manager' },
              { text: 'Communicatieadviseur', link: '/documentatie/business/personas/trainees/communicatieadviseur' }
            ]
          },
          {
            text: 'Trainees — Openbare Ruimte',
            collapsed: true,
            items: [
              { text: 'Teamleider Beheer OR', link: '/documentatie/business/personas/trainees/teamleider-beheer-openbare-ruimte' },
              { text: 'Asset Manager', link: '/documentatie/business/personas/trainees/asset-manager-beheerder' }
            ]
          },
          {
            text: 'Trainees — Ruimtelijke Ontwikkeling',
            collapsed: true,
            items: [
              { text: 'Projectleider Gebiedsontwikkeling', link: '/documentatie/business/personas/trainees/projectleider-gebiedsontwikkeling' },
              { text: 'Beleidsadviseur RO', link: '/documentatie/business/personas/trainees/beleidsadviseur-ruimtelijke-ordening' }
            ]
          },
          {
            text: 'Trainees — Sociaal Beleid',
            collapsed: true,
            items: [
              { text: 'Beleidsadviseur Sociaal Domein', link: '/documentatie/business/personas/trainees/beleidsadviseur-sociaal-domein' },
              { text: 'Programmamanager', link: '/documentatie/business/personas/trainees/programmamanager' }
            ]
          },
          {
            text: 'Trainees — Sociaal Uitvoering',
            collapsed: true,
            items: [
              { text: 'Teamleider Wmo / Jeugd', link: '/documentatie/business/personas/trainees/teamleider-wmo-jeugd' },
              { text: 'Consulent / Casemanager', link: '/documentatie/business/personas/trainees/consulent-casemanager' }
            ]
          },
          {
            text: 'Trainees — Veiligheid',
            collapsed: true,
            items: [
              { text: 'Adviseur OOV', link: '/documentatie/business/personas/trainees/adviseur-openbare-orde-veiligheid' },
              { text: 'Crisiscoördinator', link: '/documentatie/business/personas/trainees/crisiscoordinator' }
            ]
          },
          {
            text: 'Trainees — Vergunningen',
            collapsed: true,
            items: [
              { text: 'Teamleider Vergunningen', link: '/documentatie/business/personas/trainees/teamleider-vergunningen' },
              { text: 'Vergunningverlener', link: '/documentatie/business/personas/trainees/vergunningverlener' }
            ]
          },
          {
            text: 'Trainers',
            collapsed: false,
            items: [
              { text: 'Mike Hartog — AI-trainer (lead)', link: '/documentatie/business/personas/trainers/ai-trainer' },
              { text: 'Marieke de Lange — Domein-trainer', link: '/documentatie/business/personas/trainers/domein-trainer' },
              { text: 'Ravi Sharma — Technisch trainer', link: '/documentatie/business/personas/trainers/technisch-trainer' }
            ]
          }
        ]
      },

      socialLinks: [],

      footer: {
        message: 'AI-educatie voor Nederlandse gemeenten — documentatie',
        copyright: `Laatst gebouwd: ${new Date().toLocaleDateString('nl-NL')}`
      }
    },

    mermaid: {
      theme: 'default'
    }
  })
)
