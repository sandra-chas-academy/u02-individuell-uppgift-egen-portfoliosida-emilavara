# Deployad på: https://emilavara.github.io/

***
# Instruktioner

Denna uppgift går ut på att du bygga vidare uppgift u01 - Portfoliosida utifrån designskiss med Javascript. Du är nu fri att ändra till egen design / layout, samt eget innehåll. Det är dock viktigt att du behåller en sektion för CV ("About me") och en sektion med projekt ("Projects") eftersom du ska vidareutveckla sidan med Javascript på dessa sektioner. 

## Vad du ska göra

Du ska bygga vidare på  u01 - Portfoliosida utifrån designskiss med Javascript. och se till att du följer följande kravställningar: 

### CV i en fil:
Dina egna utbildningar och tidigare arbetsplatser ska nu ersätta "About me"-sidan. Ta med så mycket som möjligt att ditt "riktiga CV", men iallafall minst tre poster av varje.
Vilka utbildningar du läst och vilka tidigare arbeten du haft ska ligga i en separat fil i JSON-format. Denna JSON-fil ska läsas och och generera ditt CV på den tidigare motsvarigheten av "About me" sidan.


### Interaktiva scripts:
Din CV-sida ska innehålla minst två interaktiva JavaScript. Exempel kan vara en modal, slideshow, scroll-effekt, dölja/visa element, o.s.v

### Portfolio:
 Du publicerar minst två uppgifter / projekt från tidigare eller nuvarande studier / arbete inom HTML /CSS

### 👉  VG-krav

Din portfolio ska utökas så att den hämtar in publika projekt som finns i din egen Github via API. Den ska visa dessa projekt i din portfolio med namn och beskrivning.

Du får gärna ha både dessa projekt och andra som genereras utifrån JSON-data om du känner för det, eller så ersätter du projekten så det bara är dina Github-projekt. Eventuellt kan du behöva komplettera datan från Github API med t.ex bilder ifrån JSON-datan.

När hämtningen av projekten sker ska det finnas information om att projekten håller på att ladda in så att besökaren inte undrar varför sidan först är tom.



### Tekniska krav:
* Validerad med 0 fel på https://validator.w3.org
* Inga errors i Console

### Sammanfattning av projekt + teoretiska frågor

Jag har valt att skriva u02 helt från grunden. Jag hade en skiss för min portfolio som låg liggandes. Så jag tänkte att detta var ett ypperligt tillfälle att göra en (även om jag hellre använt mitt kära Vue).  

Jag använde en multi-page lösning för detta projekt. Sidorna är indelade i en intro sida, som håller lite länkar och min portfolio. Sedan en allmän “om” sida, och en kontakt sida.

Jag har använt GitHubs API för att hämta och displaya mina repos som finns där. Jag har även valt att visa några projekt som inte finns på GitHub. Detta löste jag genom att ha en statisk lokal array med projekt som inte finns på GitHub, sedan så populerar jag mina repos in till denna array.

Fetching och rendering sker async, så render funktionen körs inte förens fetch-funktionen är färdig.

Jag har också en lokal .json fil för mitt CV, denna laddas in på “Om-sidan" och renderar ut utbildningar och tjänster jag har haft.
Jag har också använt ett av mina favorit bibliotek, Lenis för “smooth scrolling”. Jag har även använt @view-transitions. Något relativt nytt, och stöds bara i Chrome för tillfället. Men den tillåter att spela animationer mellan page transitions.

Jag har även använt mig av vanilla Web Components för header, mobile navigation och footer. Allt de gör egenligen är att injicera HTML, detta för att undvika repetition, och för att göra HTML lite mer klena.

I övrigt är jag relativt nöjd med resultatet, kanske lite överambitiöst. Videosarna för portfolio tumnagelbilderna tog alldeles för lång tid för att vara värd mödan.

**Vad kan man utveckla m.h.a Javascript inom frontend?**
JavaScript kan användas för att bygga i stort sett vad som helst. JavaScript är ett av de viktigaste språken inom frontendutveckling och används för att skapa dynamiska och interaktiva webbsidor. Det gör det möjligt att skapa funktioner som reagerar baserat på användarens actions, manipulera sidans struktur och styles i realtid, men också för att integrera data från externa ställen. 

JavaScript används också för att bygga avancerade applikationer som SPAs, där sidan uppdateras utan att laddas om, vilket förbättrar användarupplevelsen.

**Vad är JSON och hur används det inom frontend?**
JSON, som står för JavaScript Object Notation, är ett textbaserat format som används för att lagra och överföra data. Det är lättläst, både för människor och datorer, och fungerar som standard för datautbyte mellan klient och server. 

Inom frontendutveckling används JSON främst för att hämta och skicka data via API:er. Det är också användbart för att lagra information lokalt i webbläsaren eller som en del av config-filer i projekt. JSON:s simplicitet och kompatibilitet gör det till ett bra verktyg för att hantera data effektivt inom webbutveckling.

**Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?**
HTTP, som står för HyperText Transfer Protocol, är protokollet som möjliggör dataöverföring mellan klienter och servrar och är en grundläggande del av webben. Det fungerar genom en “begäran-svar-modell” där klienten requestar resurser och servern svarar med innehåll eller felmeddelanden. 

Frontendutvecklare behöver förstå HTTP-metoder som GET och POST, vilka används för att hämta och skicka data. Dessutom är kunskap om HTTP-statuskoder, som indikerar resultatet av en request, viktig för att felsöa och hantera fel.
Förståelse för HTTP-headers är också avgörande, eftersom de innehåller metadata om requesten och svart man får, vilket påverkar allt från säkerhet till caching. Caching, till exempel, förbättrar prestanda genom att minska antalet serverförfrågningar. Vidare är kunskap om HTTPS, den säkrare varianten av HTTP, egentligen viktig för att skydda en användas data och säkerställa att webbapplikationer uppfyller moderna säkerhetskrav.


## Kriterier för bedömning


Icke Godkänd (IG), Godkänd (G) eller Väl Godkänd (VG)

### Godkänd (G)
Din portfolio-sida uppfyller alla krav enligt kravspecifikationen.
Du visar att du kan utan allvarliga brister eller missar utveckla denna portfoliosida enligt kraven
Du sammanfattar ditt projekt samt ger ett översiktligt och korrekt svar på frågorna


### Väl Godkänd (VG)

Din portfolio-sida uppfyller alla krav enligt kravspecifikationen samt VG-kraven
Du uppvisar en mer avancerad förståelse för Git genom att jobba med en developer-branch som du sedan mergar i main
Du visar att du kan utan brister, eller bara i sådan omfattning att de knappt märks eller påverkar slutresultatet


### Börja uppgift / Din inlämning
* Du börjar och lämnar in din uppgift genom Github Classroom på denna länk.
* Återkoppling ges i Canvas











# 
