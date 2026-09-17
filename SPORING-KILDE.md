# Sporings-IDer fra opprinnelig nettside (sushirollsandviken.no)

Hentet fra det lokale HTTrack-speilet: `../sushirollsandviken-mirror/www.sushirollsandviken.no/index.html`
(speilet 4. sep 2026, se `hts-log.txt` i mirror-mappen for detaljer).

**Ingen av disse er lagt inn i redesignet.** Verifisert med grep over hele
`sushirollsandviken-redesign/` — ingen gtag/GTM/pixel-script finnes i det
publiserte nettstedet. Denne filen er kun til referanse, f.eks. hvis kunden
tar over det nye nettstedet og vil beholde/gjenopprette samme sporing, eller
vil vite hva som lå på den gamle siden.

## Google tag (gtag.js)

- **`GT-TBBSCTLL`** — hovedcontaineren for gtag.js. Lagt inn av plugin
  **Site Kit by Google** (v1.186.0). Kildekommentar: "Google tag (gtag.js)
  snippet added by Site Kit" / "Google Analytics snippet added by Site Kit".
  `GT-` er Google sitt nyere samlede "Google tag"-format — selve
  GA4-koblingen (measurement-ID) skjer bak kulissene inne i Site
  Kit/Analytics-kontoen, ikke synlig som en egen `G-XXXXXXXXXX`-streng i
  HTML-en.

## Google Tag Manager — to separate containere

- **`GTM-KZ6DRK7J`** — lagt inn manuelt via plugin **"HFCM by 99 Robots"**
  (Insert Headers and Footers), med egen snippet i både `<head>` og
  `<body>` (kildekommentar: "HFCM by 99 Robots - Snippet # 1/2: GTM
  Head/Body").
- **`GTM-TWRR5TK4`** — en ANNEN, uavhengig GTM-container, lagt inn separat
  av Site Kit selv (kildekommentar: "Google Tag Manager snippet added by
  Site Kit").

  Merk: kildenettsiden kjørte altså to parallelle GTM-containere samtidig.
  Sannsynligvis et overlappende oppsett (HFCM-pluginet satt opp manuelt før
  eller etter at Site Kit sin egen GTM-integrasjon ble skrudd på). Ikke noe
  vi trenger å rydde i — bare verdt å vite om dersom kunden spør om
  sporingen sin.

## Annen Google-ID i kilden (ikke analytics/annonse-sporing)

- **OAuth-klient for "Sign in with Google"**:
  `867244491366-3cj64dbotui0tk602di6u4ojgrr9qiuk.apps.googleusercontent.com`
  — brukes kun til Google-innlogging på WP-admin (`wp-login.php`), en
  Site Kit-funksjon. Irrelevant for en statisk redesign uten WP-login.

## Ikke funnet i kilden

Grep (case-insensitive) etter Meta/Facebook-piksel (`fbq(`,
`connect.facebook.net`), Google Ads-konvertering (`AW-`,
`googleadservices`), Hotjar, Microsoft Clarity, LinkedIn Insight, TikTok,
Pinterest, Snapchat, Matomo/Piwik — **ingen treff**. Det ligger en tom
`<div id="fb-root">` helt nederst i `<body>` (Enfold-tema-standard), men
ingen tilhørende Facebook SDK-script eller pixel-ID er lastet noe sted.

## Kilde-plugins knyttet til sporing

- `wp-content/plugins/google-site-kit/` — Site Kit by Google v1.186.0
- HFCM (Insert Headers and Footers) by 99 Robots — kun synlig via
  injiserte HTML-kommentarer i kilden, selve plugin-mappen var ikke i
  speilet.
