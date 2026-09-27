# BUSI STUDIO — MASTER AUDIT

**Datum:** 2026-09-27
**Modus:** alleen lezen. Er is niets gewijzigd, gedeployed, verwijderd of gemigreerd.
**Voor:** Didier
**Uitgevoerd door:** Claude Code in een geïsoleerde cloudcontainer met een verse clone van `github.com/Busimatch/Busimatch`

> **Leeswijzer.** Dit rapport doet alleen uitspraken die ik zelf heb gecontroleerd in deze repository of met een meting. Als ik iets niet kon controleren, staat er **"Ik weet het niet"**. Er is één belangrijke conclusie die bijna elke sectie bepaalt: **in deze repository staat geen Busi Studio.** Er staat alleen een klein prototype van een crypto-exchange-landingspagina, gemaakt door Emergent in juni 2025. De secties hieronder volgen de gevraagde volgorde (1–37). Waar er niets te auditen valt, zeg ik dat kort en eerlijk en vul ik het niet aan met aannames.

---

## 1. Samenvatting

| Vraag | Antwoord (geverifieerd) |
|---|---|
| Staat Busi Studio in deze GitHub-repository? | **Nee.** Er is geen code voor een editor, Board, `.busi`, plugins, Busi ID, wallet, AI, Shop of desktopbuild. |
| Wat staat er wel? | Een React-landingspagina voor "Busimatch – Lightning Cryptocurrency Exchange" plus een standaard FastAPI-voorbeeldbackend ("Hello World" en `/status`). |
| Herkomst | Gegenereerd door Emergent (`.emergent/emergent.yml`, commit-auteur `E1 <e1@emergent.sh>`). 50 commits tussen 2025-06-20 en 2025-06-21. |
| Repositories die deze sessie kan zien | Eén: `Busimatch/Busimatch` (**publiek**). |
| Live-omgeving | **Ik weet het niet.** Het netwerkbeleid van deze omgeving blokkeert alle geteste domeinen (HTTP 403 bij de proxy). |
| Gevaarlijkste bevinding | De exchange-flow toont **hardgecodeerde stortingsadressen** en een vast order-ID (`FB9A34`), zonder backend. Staat deze pagina ergens publiek live, dan kunnen bezoekers echte crypto naar adressen sturen waarvan niet vaststaat wie ze beheert. Ernst: **C1** (zie §30). |

**Conclusie:** de echte Busi Studio (als die bestaat) staat ergens anders: lokaal op jouw computer, in een ander account of een andere repository, of op een server. Voordat er iets over architectuur, groottes of knoppen gezegd kan worden, moet eerst die bron gevonden worden. Zie §37.

---

## 2. Bevindingen over de bron (source of truth)

- **Repository:** `Busimatch/Busimatch`, publiek, laatste push 2025-06-21T01:09:06Z (volgens de GitHub-API van deze sessie).
- **Branches op origin:** `main` en `claude/lezen-en-uitvoeren-o8awpp`. Beide staan op dezelfde commit `d980bf90230230ad9aa49dc2c743f874f2f019aa`.
- **Historie:** 50 commits, allemaal van "E1" (Emergent), met automatische berichten ("auto-commit for …"). Er zijn in de hele historie **geen verwijderde bestanden** (`git log --diff-filter=D` is leeg). Er is dus ook nooit Studio-code in deze repo geweest die later is weggehaald.
- **Getrackte bestanden:** 22, samen 606.424 bytes.
- **Andere repositories:** `list_repos` toont er voor deze sessie maar één. Of er in andere GitHub-accounts of organisaties nog repositories staan: **Ik weet het niet.**

## 3. Verschillen tussen LOCAL, GITHUB en LIVE

| Laag | Status |
|---|---|
| LOCAL (jouw computer) | **Ik weet het niet.** Ik heb geen toegang tot jouw computer. |
| GITHUB | Gelijk aan de clone in deze container (HEAD = origin/main = `d980bf9`). |
| LIVE | **Ik weet het niet.** `frontend/.env` wijst naar een Emergent-preview-URL (`…preview.emergentagent.com`), maar die kan ik vanaf hier niet bereiken. Of die nog draait, is niet vastgesteld. |

## 4. Exacte groottes (gemeten, niet geschat)

Gemeten op 2026-09-27 in de scratchpad van deze container, op een kopie. De repository is niet aangeraakt.

| Onderdeel | Grootte | Methode |
|---|---|---|
| Werkmap zonder `.git` | 684 KB (`du -sh`) | `du` |
| `.git` | 496 KB (pack 270,96 KiB) | `du`, `git count-objects` |
| Getrackte bestanden | 606.424 bytes | `git ls-files \| du -b` |
| `frontend/node_modules` na installatie | 231.088.843 bytes (220,4 MB), 51.929 bestanden | `du -sb` |
| Productiebuild, totaal inclusief sourcemaps | 2.360.870 bytes | `du -sb build` |
| Productiebuild zonder sourcemaps | 476.035 bytes (≈ 465 KB) | berekend: totaal − `.js.map` (1.873.592) − `.css.map` (10.243) |
| JS-bundel | 449.130 bytes (133,54 kB gzip) | CRA-uitvoer |
| CSS-bundel | 22.757 bytes (5,01 kB gzip) | CRA-uitvoer |
| Backend (Python-afhankelijkheden) | **Niet gemeten.** Deze zijn niet geïnstalleerd. | — |
| Installer, desktop, portable build, `.busi`-assets, AI-modellen | **Niet aanwezig** in de repository | — |

**De 20 grootste bestanden:** de repository heeft er 22 in totaal. De grootste zijn `frontend/yarn.lock` (462.335 B) en `frontend/src/components.js` (121.439 B, 2.613 regels). De rest is kleiner dan 7 KB.
**Duplicaten en artefacten:** in de root staat een lege `yarn.lock` (86 B, alleen de header). Die is overbodig, want de echte lockfile staat in `frontend/`. Er zijn geen oude builds.

## 5. Is 500 MB haalbaar?

Voor *deze* codebase is de vraag niet zinvol: de build is ongeveer 0,47 MB. Voor de **echte Busi Studio** kan ik het niet beoordelen zonder die code en build: **Ik weet het niet.** Om het vast te stellen zijn nodig: de desktoptechnologie (bijvoorbeeld Electron of Tauri), meegeleverde runtimes en codecs (bijvoorbeeld ffmpeg), fonts, templates en eventuele lokale AI-modellen. Die bepalen samen de grootte.

## 6. Is een portable USB-editie van 2 GB haalbaar?

Zelfde situatie als §5: **Ik weet het niet** zonder de echte build.

## 7. Huidige architectuur (van deze repository)

- **Frontend:** React 19 en Create React App (`react-scripts` 5.0.1), Tailwind 3, framer-motion, lucide-react. Alle UI staat in één bestand (`components.js`). Er is geen routing: `react-router-dom` is geïnstalleerd, maar wordt niet gebruikt.
- **Backend:** FastAPI met Motor/MongoDB. Endpoints: `GET /api/` (Hello World), `POST /api/status` en `GET /api/status`. CORS staat op `*` met credentials aan.
- **Koppeling frontend ↔ backend:** er is **geen**. De frontend roept de backend nergens aan (`axios` wordt niet geïmporteerd). De enige externe call gaat naar de CoinGecko-API voor prijzen.
- **Analytics:** in `public/index.html` wordt PostHog geladen.
- **Opslag, bestanden, plugins, AI, wallet, desktop:** niet aanwezig.

## 8. Inventaris van functies en modules

| Module (gevraagd) | Aanwezig? |
|---|---|
| Busi Board, Raster, Vector, Word, Sheet, Presentation, PDF, Video, Audio | Nee |
| `.busi`, Container Browser | Nee |
| Busi ID, login | Nee (alleen knoppen zonder functie) |
| Busi Wallet, BT, BC, BusiX | Nee. Er staat alleen een "BUSIMATCH"-token met een vaste prijs van $1,00 in de UI. |
| AI, dictatie, plugins, Shop, Share, samenwerken | Nee |
| Aanwezige secties | Header, taalkeuze (13 talen), exchange-formulier, ordertrackingpagina, features, "recente transacties", FAQ, nieuws, gidsen, footer |

## 9. Audit van de UI en knoppen (deze repository)

| Element | Status | Oorzaak |
|---|---|---|
| Taalkeuze (desktop en mobiel) | WORKING, deels | Alleen `heroTitle`, `heroSubtitle` en enkele sleutels via `t()` worden vertaald. De teksten van FAQ, features, nieuws, gidsen en footer zijn hardgecodeerd in het Engels. |
| Mobiel menu open/dicht | WORKING | — |
| About, Blog, FAQ, API, Support (nav) | PLACEHOLDER | `href="#"` |
| 🌙 (dark mode) | PLACEHOLDER | geen `onClick` |
| Sign in / Sign up | PLACEHOLDER | geen `onClick`, geen authenticatie |
| Valutakeuze en zoeken | WORKING | — |
| "All currencies" | PLACEHOLDER | geen `onClick` |
| Wisselknop (swap) | WORKING | — |
| Bedrag- en koersberekening | PARTIALLY WORKING | Live prijzen van CoinGecko. Bij een fout wordt stil teruggevallen op hardgecodeerde prijzen, zonder melding aan de gebruiker. BUSIMATCH staat vast op $1. |
| Veld bestemmingsadres | NOT CONNECTED | De waarde wordt niet opgeslagen. De orderpagina toont altijd `rJQrESwxf2BfkGhfSXwDi7Kb9rU48ei`. |
| "Exchange now" | BROKEN / gevaarlijk | Maakt alleen lokaal een nep-order: vaste ID `FB9A34`, hardgecodeerde stortingsadressen, geen backend. Zie §30. |
| Copy-knoppen (orderpagina) | PLACEHOLDER | geen `onClick` of clipboard |
| QR-code | PLACEHOLDER | vaste SVG die niet overeenkomt met het adres |
| "Address" / "With amount" | PLACEHOLDER | geen `onClick` |
| Afteltimer | PLACEHOLDER | staat vast op `29:58` en telt niet af |
| Voortgangsstappen | PLACEHOLDER | staat altijd op stap 1 |
| "Back to exchange" | WORKING | — |
| FAQ uitklappen | WORKING | — |
| "Recent transactions" | PLACEHOLDER | statische nepdata die als echt wordt gepresenteerd |
| "All news", "Read more", "Read all" | PLACEHOLDER | — |
| Footer- en sociale links | PLACEHOLDER | `href="#"` |

## 10. Compatibiliteitsmatrix voor bestandsformaten

Niet van toepassing. Er is geen bestandsafhandeling (geen open, import, export of save).

## 11. Huidige `.busi`-implementatie

**Die bestaat niet.** `.busi` komt nergens voor in de code of de historie.

## 12. Voorstel voor de `.busi` v1-architectuur

De prompt vraagt eerst de bestaande implementatie te auditen. Omdat die in deze bron ontbreekt, geef ik hier alleen de **randvoorwaarden** waarover je een besluit moet nemen. Ik geef nog geen volledige specificatie, want die zou nu op aannames rusten.

- **ZIP-compatibele container.** ZIP is gespecificeerd in PKWARE APPNOTE.TXT (PKWARE Inc., <https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT>). Een gangbaar patroon is een ongecomprimeerd eerste bestand met het mediatype, zoals EPUB en ODF doen (OASIS ODF 1.2, deel 3, §3.3, <https://docs.oasis-open.org/office/v1.2/os/OpenDocument-v1.2-os-part3.html>).
- **Beveiligingseisen:**
  - geen paden met `..` of absolute paden (Zip Slip);
  - limieten op uitgepakte grootte en compressieverhouding (bescherming tegen decompressiebommen);
  - symlinks weigeren;
  - nooit automatisch iets uitvoeren.

## 13. Busi Board

Niet aanwezig.

## 14. Klaar voor workshops en realtime?

Niet aanwezig: geen websockets, geen presence, geen rollen.

## 15. Word, Sheet, Presentation en PDF

Niet aanwezig.

## 16. Raster en Vector

Niet aanwezig.

## 17. Video en Audio

Niet aanwezig.

## 18. AI-architectuur en kosten/metering

Niet aanwezig. Er staan geen AI-API-sleutels in de code (gecontroleerd met grep).

## 19. Dictatie en offline spraak

Niet aanwezig.

## 20. Plugin-architectuur

**Er zijn geen dynamische plugins.** Het woord "plugins" komt alleen voor in de config van Tailwind en PostCSS (build-plugins).

## 21. Busi ID, desktop en offline

Niet aanwezig. `requirements.txt` bevat wel bibliotheken zoals `pyjwt`, `python-jose` en `passlib`, maar ze worden **nergens gebruikt**. Dat zijn standaard-afhankelijkheden van de Emergent-template.

## 22. Busi Wallet-integratie

Er is geen ledger, contract, tabel of wallet-API. De enige MongoDB-collectie is `status_checks`.

## 23. BusiX, BT en BC

- Geen BT, BC of BusiX.
- Er is een "BUSIMATCH"-token met een **hardgecodeerde prijs van $1,00**, zonder marktbron. De FAQ beschrijft het als "decentralized cryptocurrency token". Waarop die bewering gebaseerd is: **Ik weet het niet.**

## 24. Delen en social

Niet aanwezig.

## 25. Shop en Marketplace

Niet aanwezig.

## 26. Klaar voor samenwerking?

Niet aanwezig.

## 27. Bestandskoppeling en icoon (Windows/macOS)

Niet aanwezig: er is geen desktopbuild.

## 28. Klaar voor IANA-registratie?

Het officiële proces staat in **RFC 6838** (N. Freed, J. Klensin, T. Hansen, januari 2013, <https://www.rfc-editor.org/rfc/rfc6838>) en het registratieformulier op <https://www.iana.org/form/media-types>.

- **Tree.** Onder de standards tree moet een type door een IETF-standaardsproces of een erkende standaardisatieorganisatie. Een leverancier kiest meestal de **vendor tree** (`application/vnd.…`), bijvoorbeeld `application/vnd.busimatch.busi+zip`. De `+zip`-suffix is geregistreerd in RFC 6839 (<https://www.rfc-editor.org/rfc/rfc6839>).
- **Nodig voor de aanvraag:** een gepubliceerde specificatie, een sectie over beveiliging en over interoperabiliteit, bestandsextensie en magic bytes, contactgegevens en afspraken over change control.
- **Wat IANA-registratie niet doet:** ze installeert geen OS-icoon en geen bestandskoppeling.
- **Status:** ik heb deze bronnen tijdens deze sessie **niet live kunnen openen**, omdat het netwerk geblokkeerd is. Controleer vóór indiening of er een nieuwere RFC of een gewijzigd formulier is.

Er is nog niets ingediend.

## 29. Privacy

- **P1.** PostHog wordt direct bij het laden gestart (`public/index.html`), **zonder consentbanner**. Onder de ePrivacy-richtlijn (2002/58/EG, art. 5 lid 3) is voor niet-strikt-noodzakelijke opslag of uitlezing op het apparaat voorafgaande toestemming nodig. Of PostHog in deze configuratie cookies of localStorage gebruikt, heb ik niet live getest: **Ik weet het niet** hoe het er precies aan toe gaat. De standaardconfiguratie van PostHog gebruikt wel opslag in de browser. Dit moet gecontroleerd worden.
- **P2.** PostHog-host `us.i.posthog.com`: gegevens gaan naar de VS. Voor de AVG is dan een doorgiftegrondslag nodig (hoofdstuk V AVG).
- **P3.** Bij elke paginaweergave worden elke 30 seconden prijzen opgevraagd bij CoinGecko. Daarbij krijgt CoinGecko het IP-adres van de bezoeker.
- **P4.** Links naar het privacybeleid en de voorwaarden zijn `#`: er is geen privacyverklaring.

## 30. Beveiliging

| ID | Ernst | Bevinding | Bestand |
|---|---|---|---|
| S1 | **C1 Kritiek** (als live) | Hardgecodeerde stortingsadressen per munt, vaste order-ID `FB9A34`, vast bestemmingsadres. Er is geen backend die orders verwerkt. Wie het adres beheert: **Ik weet het niet.** Een bezoeker die betaalt, verliest mogelijk zijn geld. | `frontend/src/components.js:1678-1717` |
| S2 | **C2 Hoog** (juridisch en reputatie) | Misleidende claims: "Trusted since 2018", "© 2018-2025 Busimatch DEX", nep-"Recent transactions", nieuws over een "Lightning Network"-lancering, "1% / 0,5% fees". Niets hiervan wordt ondersteund door code. | `components.js:2160-2274, 2361-2375, 2606-2609` |
| S3 | C3 Medium | Backend: CORS `allow_origins=["*"]` met `allow_credentials=True`. `POST /api/status` is zonder authenticatie en zonder rate limit. | `backend/server.py:57-63` |
| S4 | C4 Laag | `.env`-bestanden zijn gecommit. Ze bevatten geen geheimen (Mongo op `localhost`), maar het patroon is riskant. De PostHog-sleutel `phc_…` is een publieke projectsleutel en dus geen geheim. | `backend/.env`, `frontend/.env`, `public/index.html` |
| S5 | C4 Laag | De repository is **publiek**. | — |

## 31. Technische schuld

- Alle UI staat in één bestand van 2.613 regels.
- Vertalingen worden deels wel en deels niet gebruikt.
- `yarn.lock` loopt niet gelijk met `package.json`: `yarn install --frozen-lockfile` faalt. Zo'n build is dus niet reproduceerbaar.
- Er zijn ongebruikte afhankelijkheden: onder andere `axios`, `react-router-dom` en `@headlessui/react`, en in de backend een lange lijst.
- In de productiecode staan `console.log`-regels (`components.js:1637-1642`).
- `test_result.md` is een Emergent-sjabloon zonder testdata. `tests/` is leeg.

## 32. Bugs

1. De timer loopt niet, de QR-code klopt niet met het adres en de Copy-knoppen doen niets (§9).
2. Het ingevulde bestemmingsadres wordt genegeerd (§9).
3. Als de prijs-API faalt, wordt stil teruggevallen op verouderde prijzen, bijvoorbeeld BTC $43.250 (`components.js:1584-1597`).
4. Bij `swapCurrencies` en tegelijk een actieve koersberekening kan het ontvangen bedrag direct opnieuw worden overschreven door het effect op `sendAmount`. Dit volgt uit het lezen van de code en is niet interactief getest.

## 33. Risico's

1. Het grootste risico: **plannen maken op basis van de verkeerde bron.** Deze repo is niet de Studio.
2. Juridisch en financieel: zie S1 en S2 als de pagina ergens publiek staat.
3. Onomkeerbaar verlies: als het GitHub-account of de repository nu wordt verwijderd, is de historie weg. Daarnaast is onbekend of er nog andere zaken aan dit account hangen (zie het antwoord hieronder).

## 34. Wat kan hergebruikt worden?

Vrijwel niets voor Busi Studio. Hooguit:

- het idee van de 13-talige taalkeuze (`LanguageProvider`);
- het logo als data-URI (de "space rabbit").

De crypto-exchange-flow is **niet** herbruikbaar, gezien S1.

## 35. Aanbevolen doelarchitectuur

Niet verantwoord om nu op te stellen zonder de echte Studio-bron. De principes uit jouw prompt (één Busi ID, één Busi Wallet, één AI Gateway, één `.busi`-specificatie) kan ik pas toetsen aan bestaande code als die code gevonden is.

## 36. Prioriteiten in de roadmap

1. **Fase 0 – Bron vinden.** Waar staat de echte Busi Studio? Lokaal, in een ander GitHub-account, op Emergent, Replit, Lovable of een server?
2. **Fase 0b – Risico beperken.** Als de exchange-pagina ergens live staat: offline halen, of een duidelijke waarschuwing "demo, niet betalen" tonen (S1). **Dit gebeurt alleen na jouw akkoord.**
3. **Fase 1.** Deze audit herhalen op de echte bron. Pas dan kunnen §4–§27 echt worden ingevuld.
4. **Daarna** volgt de volgorde uit je prompt (`.busi` v1 → Container Browser → Board → …).

## 37. Besluiten en vragen voor Didier

1. **Waar staat de echte Busi Studio?** Denk aan lokaal pad, GitHub-account of -organisatie, hostingplatform en URL.
2. **Staat de Busimatch-exchange-pagina ergens live?** Zo ja, waar? En mag die offline of van een waarschuwing voorzien worden?
3. **Wat moet er met deze repository gebeuren?** Archiveren (aanbevolen), privé maken of verwijderen?
4. **Mag de echte Studio-repository aan deze sessie gekoppeld worden,** zodat ik de audit daarop kan uitvoeren?

---

### Bronnen

- Code en historie: `github.com/Busimatch/Busimatch`, commit `d980bf9`, 2025-06-21, auteur E1/Emergent.
- RFC 6838, *Media Type Specifications and Registration Procedures*, Freed, Klensin, Hansen, IETF, jan. 2013: <https://www.rfc-editor.org/rfc/rfc6838>
- RFC 6839, *Additional Media Type Structured Syntax Suffixes*, Hansen, Melnikov, IETF, jan. 2013: <https://www.rfc-editor.org/rfc/rfc6839>
- IANA-registratieformulier voor mediatypes: <https://www.iana.org/form/media-types>
- Richtlijn 2002/58/EG (ePrivacy), art. 5 lid 3: <https://eur-lex.europa.eu/eli/dir/2002/58/oj>
- Verordening (EU) 2016/679 (AVG), hoofdstuk V: <https://eur-lex.europa.eu/eli/reg/2016/679/oj>

*De externe bronnen zijn in deze sessie niet live geopend, omdat het netwerk geblokkeerd is. Ze komen uit mijn kennis en moeten vóór gebruik gecontroleerd worden.*
