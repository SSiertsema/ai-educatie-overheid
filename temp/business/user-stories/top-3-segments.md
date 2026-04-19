# User Stories — Leerdoelen per persona (top-3 segmenten)

**Datum**: 2026-04-19
**Scope**: Leerverhalen voor de 9 persona's in de top-3 MVP-segmenten (Dossierwerkers, Spilfiguren, Regisseurs)
**Format**: "Als [persona], wil ik [leerdoel / capaciteit], zodat [outcome]" + acceptance criteria (Given/When/Then)
**Relatie tot INVEST**: stories zijn geformuleerd als *leerstories*, niet als softwaretaken — I (independent), N (negotiable), V (valuable), E (estimable), S (small), T (testable)

## Naming conventie

- **DW** = Dossierwerker (Controller, Consulent, Vergunningverlener)
- **SP** = Spilfiguur (Teamleider)
- **RG** = Regisseur (MT-lid)

---

## Dossierwerkers (9 stories over 3 persona's)

### Controller — Eva Mulder

#### DW-C-01 — Variantie-analyse met AI-assistentie
**Als** controller voor het fysiek domein
**wil ik** leren hoe ik AI gebruik om variantie-analyses op programma-niveau te automatiseren
**zodat** ik mijn tijd aan variantie-duiding halveer en de marap altijd tijdig op tafel ligt.

**Given** ik heb 5 jaar maandelijkse uitputting-data uit het financieel systeem
**When** ik mijn AI-assistent de juiste prompt geef en resultaat controleer
**Then** kan ik binnen 30 minuten een eerste concept-variantieverklaring produceren waar eerder 3 uur voor stond.

**Leermoment**: training-opdracht op eigen geanonimiseerde financiële data.

#### DW-C-02 — Bronverwijzing en uitlegbaarheid
**Als** controller
**wil ik** leren hoe ik AI-output traceerbaar maak met bronverwijzing en audit-trail
**zodat** ik de accountant kan laten zien hoe iedere regel in mijn marap tot stand is gekomen.

**Given** ik gebruik AI om conceptteksten bij cijfers te genereren
**When** ik een bronverwijzings-workflow volg
**Then** is elke claim herleidbaar tot brondata + AI-versie + prompt + reviewmoment.

**Leermoment**: template + werkopdracht in module "auditable prompting".

#### DW-C-03 — Ad-hoc verzoeken afdelingshoofden
**Als** controller
**wil ik** sneller ad-hoc analyse-verzoeken kunnen beantwoorden
**zodat** afdelingshoofden beslissingen kunnen onderbouwen zonder dat ik een halve week uittrek.

**Given** een afdelingshoofd stelt een vraag over budgetrealisatie
**When** ik mijn eigen ontwikkelde AI-workflow gebruik
**Then** lever ik binnen 4 uur een onderbouwde analyse, met bronverwijzing en waarschuwing bij onzekerheden.

### Consulent / Casemanager — Kim Peters

#### DW-K-01 — Gesprek naar ondersteuningsplan
**Als** casemanager
**wil ik** leren een keukentafelgesprek automatisch om te zetten naar een concept-ondersteuningsplan
**zodat** ik 40 minuten per gesprek terugwin voor meer aandacht aan de cliënt.

**Given** ik heb toestemming van cliënt voor opname
**When** ik het transcript verwerk met de gemeentelijke AI-assistent
**Then** heb ik binnen 10 minuten een concept-plan volgens gemeentelijke standaard, klaar voor mijn redactie.

**Leermoment**: praktijkopdracht met eigen (anonieme) casuïstiek onder begeleiding.

#### DW-K-02 — Kennis-assistent regelgeving
**Als** casemanager tijdens een gesprek
**wil ik** snel regelgeving op een specifieke situatie kunnen toepassen
**zodat** ik niet halverwege moet pauzeren voor "ik kijk dat na".

**Given** een cliënt stelt een vraag over een voorliggende voorziening
**When** ik mijn kennis-assistent raadpleeg met specifieke situatie
**Then** krijg ik een antwoord met verwijzing naar relevante wetartikel + beleidsregel + kritische kanttekening of ik nóg iets moet checken.

#### DW-K-03 — Dossieroverdracht voorbereiden
**Als** casemanager bij collega-vakantie
**wil ik** 12 dossiers in 30 minuten kunnen overdragen
**zodat** mijn collega niet verdrinkt en cliënten niet stilstaan.

**Given** ik heb de dossiers actief openstaan in het zaaksysteem
**When** ik mijn overdrachts-AI-workflow toepas
**Then** heb ik per dossier een samenvatting + openstaande acties + risicopunten + gevoeligheid-signaal.

### Vergunningverlener — Naomi Jansen

#### DW-N-01 — Standaard-aanvraag toetsen met AI
**Als** vergunningverlener
**wil ik** standaard-dakkapel-aanvragen in 45 minuten in plaats van 3 uur kunnen afwerken
**zodat** ik tijd overhoud voor complexe dossiers waar mijn vakmanschap telt.

**Given** de aanvraag is compleet ingediend met beleidsregels-conform ontwerp
**When** ik de AI-toets-assistent gebruik op de aanvraag
**Then** krijg ik een concept-motivering met verwijzingen naar beleidsregels, klaar voor redactie en eindtoets door mijzelf.

#### DW-N-02 — Complexe bijlagen integreren
**Als** vergunningverlener met een commercieel dossier van 12 bijlagen
**wil ik** een integrale samenvatting + kruisvergelijking krijgen
**zodat** ik inconsistenties direct zie en mijn toets gestructureerd is.

**Given** 12 bijlagen in het dossier (bodem, geluid, parkeren, water, etc.)
**When** ik de document-analyse-workflow toepas
**Then** heb ik een samenvatting per bijlage + een lijst met potentiële tegenstrijdigheden + verwijzingen naar paginanummers om te verifiëren.

#### DW-N-03 — Ontvankelijkheidstoets verbeteren
**Als** vergunningverlener
**wil ik** AI inzetten voor eerste ontvankelijkheidstoets
**zodat** we 50% minder aanvullingsrondes hebben.

**Given** een aanvrager dient aanvraag in via DSO
**When** de AI-preview-toets draait
**Then** krijgt aanvrager meteen een signaleringslijst van ontbrekende gegevens, voor de aanvraag formeel in behandeling gaat.

---

## Spilfiguren (12 stories over 4 persona's)

### Teamleider KCC / Burgerzaken — Linda van der Berg

#### SP-L-01 — Vragenclustering voor FAQ-chatbot pilot
**Als** teamleider KCC
**wil ik** leren hoe we 30% van de vragen automatisch kunnen afhandelen met een chatbot
**zodat** mijn team meer tijd heeft voor complexe burgers.

**Given** we hebben 6 maanden KCC-logdata
**When** ik de vragenclustering-analyse uitvoer
**Then** heb ik een top-10 van vragen die we als eerste kunnen automatiseren, inclusief juridische check.

#### SP-L-02 — AI-adoptie team sturen
**Als** teamleider
**wil ik** begrijpen hoe ik mijn team door de AI-adoptie-curve leid
**zodat** ook de voorzichtigere medewerkers meekomen en er geen tweedeling ontstaat.

**Given** een team van 18 met verschillende AI-ervaring
**When** ik de change-management-playbook volg
**Then** heb ik een fasering (quick wins voor early adopters, begeleiding voor voorzichtigen) met meetpunten per week.

#### SP-L-03 — KPI-impact aan MT tonen
**Als** teamleider
**wil ik** maandelijks laten zien hoe AI onze KPI's beïnvloedt
**zodat** ik in het MT onderbouwd kan sturen op inzet.

**Given** we meten wachttijden, first-contact-fix en KTO
**When** ik het adoptie-dashboard gebruik
**Then** heb ik een 1-pager met KPI-voor/na per maand.

### Teamleider Beheer Openbare Ruimte — Hans de Jong

#### SP-H-01 — Meldingen automatisch prioriteren
**Als** teamleider beheer
**wil ik** 300 meldingen per week automatisch geprioriteerd en toegewezen krijgen
**zodat** ik 's middags weer de stad in kan in plaats van sorteren op kantoor.

**Given** meldingen komen binnen via 5 kanalen
**When** de prioritering-workflow draait
**Then** heb ik een dagelijkse werklijst per team met voorgestelde volgorde, waarbij veiligheidsissues automatisch rood zijn.

#### SP-H-02 — Dubbele meldingen detecteren
**Als** teamleider
**wil ik** dubbele meldingen over dezelfde kuil automatisch geclusterd zien
**zodat** we niet drie aannemers langs dezelfde locatie sturen.

**Given** 10+ meldingen over vergelijkbare onderwerpen binnen 48 uur
**When** de dubbelings-detectie draait
**Then** zijn ze geclusterd als "verzameling" met één werkorder en verwijzing naar alle melders.

#### SP-H-03 — Raadsvraag beantwoorden uit data
**Als** teamleider
**wil ik** een raadsvraag over meldingen per wijk in 1 uur kunnen beantwoorden
**zodat** ik bestuurlijk op tijd lever.

**Given** een raadslid vraagt "hoeveel meldingen in wijk X afgelopen jaar?"
**When** ik mijn AI-data-analyse-workflow gebruik
**Then** heb ik binnen een uur een grafisch overzicht + tekstuele duiding, klaar voor college-beantwoording.

### Teamleider Wmo / Jeugd — Carla Verhoeven

#### SP-C-01 — Caseload-signalering
**Als** teamleider Wmo/Jeugd
**wil ik** wekelijks signalen over risicodossiers (escalatiekans, doorlooptijd)
**zodat** ik proactief kan ingrijpen voordat het fout gaat.

**Given** caseload van 200 actieve dossiers
**When** de risicosignalering-workflow draait
**Then** krijg ik een weekoverzicht van 10-15 dossiers met kleurcoderingen en aandachtspunten.

#### SP-C-02 — OR-communicatie over AI
**Als** teamleider voor een kritische OR
**wil ik** een sterke narratief over AI-inzet voorbereiden
**zodat** de OR instemt met pilotvorm en medewerkers gerustgesteld worden.

**Given** OR maakt zich zorgen over banen en cliënt-data
**When** ik de OR-communicatiekit gebruik
**Then** heb ik een presentatie + Q&A + pilot-voorstel die OR-proof is.

#### SP-C-03 — Contractbeheer zorgaanbieders
**Als** teamleider
**wil ik** AI inzetten voor resultaatgesprekken met zorgaanbieders
**zodat** ik objectiever kan sturen op kwaliteit.

**Given** kwartaalresultaten van 12 zorgaanbieders
**When** ik de vergelijkings-analyse-workflow gebruik
**Then** heb ik een kwartaalrapport met vergelijkings-KPI's en gespreks-agenda's per aanbieder.

### Teamleider Vergunningen — Erik van den Broek

#### SP-E-01 — Doorlooptijden-dashboard met signalering
**Als** teamleider vergunningen
**wil ik** vroegsignalen voor dossiers die van-rechtswege-verleend dreigen te worden
**zodat** ik nooit meer overvallen word door termijnproblemen.

**Given** 150 actieve vergunningendossiers
**When** het dashboard draait
**Then** krijg ik elke maandagochtend een top-10 van termijnrisicovolle dossiers.

#### SP-E-02 — Capaciteitsplanning bij uitval
**Als** teamleider bij ziekteverzuim
**wil ik** werkvoorraad-herverdeling voorgesteld krijgen
**zodat** ik niet handmatig dossiers hoef te herschikken.

**Given** een vergunningverlener valt 2 weken uit
**When** ik de herverdelings-workflow gebruik
**Then** heb ik een voorstel met takenverdeling per collega op basis van expertise en huidige werklast.

#### SP-E-03 — Kwaliteitstoets op conceptbesluiten
**Als** teamleider die vier-ogen-principe wil borgen
**wil ik** AI inzetten als eerste review op conceptbesluiten
**zodat** ik zelf alleen complex hoef door te lezen.

**Given** 20 conceptbesluiten per week
**When** de kwaliteitstoets draait
**Then** zijn 15 daarvan door AI positief gereviewd (wat ik steekproefsgewijs controleer), en 5 hebben attentiepunten voor mijn persoonlijke review.

---

## Regisseurs (15 stories over 5 persona's)

### Manager Dienstverlening — Peter Janssen

#### RG-P-01 — Bestuurlijke AI-notitie in 2 uur
**Als** manager dienstverlening
**wil ik** in 2 uur een bestuurlijke notitie over AI-inzet kunnen opstellen
**zodat** ik collegevragen tijdig en kwalitatief beantwoord.

**Given** een collegevraag over AI in dienstverlening
**When** ik mijn notitie-workflow gebruik (template + AI-ondersteund)
**Then** heb ik een 1-A4 notitie met kernpunten, onderbouwing en aanbeveling, klaar voor MT-review.

#### RG-P-02 — Leveranciers challengen in pitch
**Als** manager
**wil ik** 10 kritische vragen kunnen stellen aan AI-leveranciers
**zodat** ik onderscheid maak tussen marketing en werkelijke capability.

**Given** 3 leveranciers pitchen een "AI-oplossing"
**When** ik mijn vragenkit gebruik
**Then** zie ik direct welke leveranciers substance hebben en welke niet, en heb ik uniforme scorekaart.

#### RG-P-03 — Executive-briefing voor raadsdebat
**Als** manager die voor raadsdebat voorbereidt
**wil ik** AI-toepassingen + risico's + governance kunnen uitleggen in 10 minuten
**zodat** de raad geïnformeerd kan debatteren.

**Given** raadsdebat over "grip op AI"
**When** ik de briefing-template gebruik
**Then** heb ik 10-minuten-verhaal met backup-slides voor als er doorgevraagd wordt.

### Financieel Manager — Rob Dekker

#### RG-R-01 — AI-beleid voor financiële kolom
**Als** financieel manager
**wil ik** heldere do's-and-don'ts voor AI-gebruik door mijn controllers
**zodat** we innovatie toestaan zonder rechtmatigheid te schaden.

**Given** mijn team van 4 controllers experimenteert al met ChatGPT
**When** ik ons AI-beleid uitrol
**Then** is voor elke controller duidelijk welke data wel/niet in welke tool mag, en hoe de audit-trail geborgd is.

#### RG-R-02 — Accountant-gesprek voorbereiden
**Als** financieel manager
**wil ik** kunnen uitleggen hoe AI gebruikt wordt in onze P&C-cyclus
**zodat** de accountant niet verrast is en geen kwalificatie plaatst.

**Given** accountant stelt vraag over AI-ondersteuning bij jaarrekening
**When** ik mijn governance-documentatie toon
**Then** zie je processen, controles, audit-trail en steekproefbevinding — allemaal controleerbaar.

#### RG-R-03 — Begrotingstool evaluatie
**Als** financieel manager bij leverancier-pitch AI-forecasting-tool
**wil ik** weten hoe het model werkt, welke data, uitlegbaarheid
**zodat** ik kan beoordelen of dit past binnen rechtmatigheidskader.

**Given** leverancier biedt "AI-forecasting-module" aan
**When** ik mijn evaluatie-framework toepas
**Then** heb ik een risico-overwegings-tabel plus vraag/antwoord documentatie voor auditcomité.

### IT Manager / CIO — Maarten Bakker

#### RG-M-01 — AI-architectuur keuze
**Als** CIO
**wil ik** kunnen besluiten tussen eigen Azure OpenAI tenant vs. per-use-case leverancier
**zodat** we geen vendor lock-in én geen architectuur-chaos creëren.

**Given** 5 vakafdelingen willen een AI-tool
**When** ik mijn architectuur-framework gebruik
**Then** heb ik een trade-off tabel + aanbevolen platform-strategie + migratiepad.

#### RG-M-02 — AI-Act-compliance inrichten
**Als** CIO verantwoordelijk voor AI-compliance
**wil ik** een inventarisatie + classificatie + governance opzetten
**zodat** we AI-Act-ready zijn voor inspectie.

**Given** AI-Act art. 4 verplicht AI-literacy
**When** ik ons compliance-framework uitrol
**Then** hebben we een levende inventarisatie van AI-systemen, risicoclassificatie, documentatie en literacy-plan.

#### RG-M-03 — Shadow-IT aanpakken
**Als** CIO met organisatiebreed ChatGPT-gebruik
**wil ik** een acceptable use policy + centraal veilig platform
**zodat** we shadow-IT omzetten in gecontroleerde adoptie.

**Given** 60% van medewerkers gebruikt al persoonlijk AI-tools
**When** ik de shadow-IT-aanpak uitvoer
**Then** hebben we beleid + platform + communicatie + L&D-traject beschikbaar.

### HR Manager — Sandra Hendriks

#### RG-S-01 — Organisatiebrede AI-geletterdheidsplan
**Als** HR-manager
**wil ik** een L&D-roadmap per functiegroep
**zodat** we AI-Act-literacy-verplichting systematisch invullen.

**Given** 300 FTE met zeer verschillende rollen
**When** ik ons persona-gedreven plan maak (aansluitend op onze segmentatie)
**Then** heeft elke functiegroep een concreet leerpad met tijdlijn en meetmomenten.

#### RG-S-02 — AI in werving toetsen
**Als** HR-manager
**wil ik** weten hoe AI in werving mag én moet
**zodat** we juridisch én ethisch verantwoord filteren.

**Given** recruiter wil AI-CV-filter
**When** ik mijn AVG + AI-Act-check uitvoer
**Then** heb ik een beleid dat doe/niet-doe vastlegt + OR-proof communicatie.

#### RG-S-03 — Banenbehoud-narratief
**Als** HR-manager bij efficiency-plan
**wil ik** teamleiders ondersteunen in gesprekken met medewerkers
**zodat** vertrouwen behouden blijft en mobiliteit toeneemt.

**Given** MT-besluit tot efficiency via AI
**When** ik mijn communicatiekit uitrol
**Then** hebben teamleiders gespreksleidraden + mobiliteitsplatform + loopbaancoach-budget.

### Programmamanager — Bas Hofman

#### RG-B-01 — Stuurgroeprapportage met AI-assistentie
**Als** programmamanager
**wil ik** mijn 6-wekelijkse rapportage half zo snel produceren
**zodat** ik meer tijd heb voor inhoudelijk werk.

**Given** input van 6 deelprojectleiders
**When** ik mijn rapportage-workflow uitvoer
**Then** heb ik een conceptnota in 2 uur in plaats van 1 dag.

#### RG-B-02 — Impact meten met AI
**Als** programmamanager voor integrale aanpak kwetsbare inwoners
**wil ik** effect aantonen op uitstroom uit schulden/bijstand
**zodat** mijn stuurgroep concrete voortgang ziet.

**Given** deelnemer-data over 18 maanden
**When** ik de impact-analyse-workflow gebruik
**Then** heb ik een dashboard met uitkomst-KPI's + correlaties + aantoonbare leeswijze.

#### RG-B-03 — Subsidieverantwoording voorbereiden
**Als** programmamanager van EU-gefinancierd project
**wil ik** consistentie tussen tussentijdse rapportages en eindverantwoording borgen
**zodat** geen gaps of tegenstrijdigheden opkomen.

**Given** 4 tussentijdse rapportages + concept-eindrapport
**When** ik de consistentie-check uitvoer
**Then** heb ik een gap-analyse met 5-10 attentiepunten om te adresseren vóór indiening.

---

## Samenvatting (mapping naar curriculum)

| Segment | Aantal stories | Gemeenschappelijke leer-elementen |
|---|---|---|
| Dossierwerkers | 9 | Werk-opdrachten, promptbibliotheek, juridische waarborgen, 30-dagen meting |
| Spilfiguren | 12 | Change management, KPI-dashboard, team-adoptie, peer-leerkring |
| Regisseurs | 15 | Governance-templates, vendor-evaluatie, peer-netwerk, PR/FAQ |

**Totaal**: 36 user stories, bruikbaar als ankerpunten voor curriculum-modules (Spoor 3.2 functional-specifications).

## Volgende stap

- Voeden naar **Spoor 3.2 (functional-specifications)** — curriculummodules afleiden uit deze stories
- Voeden naar **Spoor 3.3 (metric-definition)** — succes-KPI's per story voor pilot-metingen
