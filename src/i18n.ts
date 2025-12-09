import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
resources: {
      en: {
        translation: {
          navigation: ["home", "apartments", "region", "contact"],
          desc: [
            "A one bedroom apartment for two plus two people",
            "A three bedroom apartment for six people",
            "A one bedroom apartment for two people",
          ],
          summary: [
            "This spacious 3-bedroom apartment offers comfortable living with a well-equipped kitchen, a private balcony for outdoor relaxation, and access to a refreshing pool for leisure. Additionally, it includes a modern bathroom for convenience, making it an ideal choice for those seeking a comfortable and enjoyable living space.",
            "This inviting two-bedroom apartment provides a cozy living space with a functional kitchen, a private balcony for outdoor enjoyment, and access to a communal pool for recreation. With two comfortable bedrooms, it's perfect for a small family or roommates seeking a convenient and comfortable place to call home.",
            "This charming one-bedroom apartment offers a cozy living environment with a well-appointed kitchen, a private balcony for personal relaxation, and access to communal amenities like a pool. Ideal for singles or couples, it provides a convenient and comfortable living space for those looking for a smaller, more intimate home.",
          ],
          hero: {
            part1: "Find your ideal stay",
            part2: "Ideal stay",
          },
          apartman: "Apartment",
          istrazi: "Explore",
          cta: {
            part1: "Book now",
            part2: "your ideal",
            part3: "stay",
            dateA: "Full Name",
            dateD: "Departure date",
            sendI: "Send inquiry",
          },
          hosts: {
            your: "Your",
            hosts: "Hosts",
            anteInfo:
              "Ante is your friendly host, passionate about sharing the beauty of his seaside apartments. A local fishing enthusiast, he’s always happy to share tips or stories about life by the sea. Ante is dedicated to making your stay comfortable and memorable!",
            mirjanaInfo:
              "Mirjana is your welcoming host, ensuring every detail of her seaside apartments reflects warmth and comfort. She loves meeting new people and takes pride in creating a relaxing getaway for her guests. With Mirjana, you’ll feel right at home by the sea!",
          },
          apartments: {
            welcome: "Welcome",
            welcomeInfo:
              "Our charming house offers three comfortable apartments, each thoughtfully designed to feel like home. Whether you’re looking for a one-bedroom retreat or more space to share, you’ll find an apartment that fits your needs.",
            a1Info: "A one bedroom apartment for two plus two people.",
            a2Info: "A three bedroom apartment for six people.",
            a3Info: "A one bedroom apartment for two people.",
            details: {
              nearby: "Nearby",
              near: [
                "Krka National Park",
                "Marshal Marmont's Gloriette",
                "St. Mark’s Tower",
                "Malaria Park",
                "Kamerlengo Tower",
                "Fortin Park",
              ],
              bath: "Bathroom",
              bathroom: [
                "Toilet paper",
                "Towels",
                "Shower cabin",
                "Private bathroom",
                "Toilet",
                "Free toiletries",
                "Hairdryer",
              ],
              wifi: "WiFi is available and free throughout the property",
              bedroom: "Bedroom",
              bedroomInfo: ["Bed linen", "Wardrobe"],
              kitchen: "Kitchen",
              kitchenInfo: [
                "Dining table",
                "Coffee machine",
                "Cleaning products",
                "Toaster",
                "Stovetop",
                "Oven",
                "Kitchenware",
                "Electric kettle",
                "Dishwasher",
                "Microwave",
                "Refrigerator",
              ],
            },
          },
          region: {
            heading: "Discover Croatia",
            dSplit: "Discover Split: The Heart of the Dalmatian Coast",
            splitInfo:
              "Nestled on Croatia’s stunning Dalmatian coast, Split is a city where ancient history meets modern Mediterranean life. As the country’s second-largest city, it boasts a perfect blend of culture, history, and vibrant seaside charm. With its UNESCO-listed Old Town, crystal-clear Adriatic waters, and lively atmosphere, Split is a must-visit destination. Top Attractions in Split",
            attractions: "Top attractions in Split",
            dPalace: "Diocletian’s Palace 🏛",
            dPalaceInfo:
              "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls.",
            riva: "Riva Promenade 🌊",
            rivaInfo:
              "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls.",
            marjan: "Marjan Hill 🌿",
            marjanInfo:
              "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls.",
            bacvice: "Bacvice Beach 🏖",
            bacviceInfo:
              "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls.",
            mestrovic: "Mestrovic Gallery 🎨",
            mestrovicInfo:
              "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian. Today, this massive ancient structure forms the heart of the Old Town, with narrow alleys, charming cafés, and historic landmarks hidden within its walls.",
            rogoznica: "Rogoznica: A Hidden Gem on the Dalmatian Coast",
            rogoznicaInfo:
              "Located between Split and Šibenik, Rogoznica is a charming seaside town known for its pristine beaches, crystal-clear waters, and a laid-back Mediterranean vibe. Unlike larger tourist hotspots, Rogoznica offers a peaceful retreat with stunning natural beauty, traditional Dalmatian charm, and plenty of activities for visitors.",
            rAttractions: "Top Attractions in Rogoznica",
            marina: "Marina Frapa ⛵",
            marinaInfo:
              "One of the most beautiful marinas in the Adriatic, Marina Frapa is the heart of Rogoznica’s social and nightlife scene. It’s a top destination for yachters and visitors looking to enjoy waterfront restaurants, bars, and luxury amenities.",
            dragon: "Dragon’s Eye Lake (Zmajevo Oko) 🌊",
            dragonInfo:
              "This natural saltwater lake is surrounded by cliffs and filled with legends. Locals say the lake has mysterious properties, and its waters change color due to unique biological activity. It’s a great spot for swimming and cliff diving.",
            oldTown: "Rogoznica Old Town 🏡",
            oldTownInfo:
              "Strolling through Rogoznica’s old stone streets, you’ll find charming houses, cozy cafés, and a traditional Dalmatian atmosphere. The town retains its fishing village feel, offering a glimpse into authentic Croatian coastal life.",
            promenada: "Promenade & Beaches 🏖",
            promenadaInfo:
              "The town boasts a beautiful seaside promenade, perfect for sunset walks, lined with bars and restaurants. Nearby, you'll find stunning pebble and rocky beaches like Šepurina Beach and Miline Beach, known for their crystal-clear waters and family-friendly environment.",
            planka: "Cape Planka 🌅",
            plankaInfo:
              "The southernmost point of Rogoznica, Cape Planka, is where winds and sea currents collide, creating dramatic waves and stunning views. It’s a historical place, mentioned in ancient maritime records.",
          },
        },
      },
      de: {
        translation: {
          navigation: ["startseite", "apartments", "region", "kontakt"],
          desc: [
            "Eine Zwei-Zimmer-Apartment für zwei plus zwei Personen",
            "Eine Drei-Zimmer-Apartment für sechs Personen",
            "Eine Ein-Zimmer-Apartment für zwei Personen",
          ],
          summary: [
            "Diese einladende ein-Zimmer-Apartment bietet einen gemütlichen Wohnraum mit einer funktionalen Küche, einem privaten Balkon zum Genießen im Freien und Zugang zu einem Gemeinschaftspool zur Erholung. Mit eine komfortablen Schlafzimmern ist sie perfekt für eine kleine Familie mit 2 Kindern bis 12 Jahre, die ein praktisches und bequemes Zuhause suchen.",
            "Diese geräumige drei-Zimmer-Apartment bietet komfortables Wohnen mit einer gut ausgestatteten Küche, einem privaten Balkon zur Entspannung im Freien und Zugang zu einem erfrischenden Pool zur Freizeitgestaltung. Zusätzlich verfügt sie über ein modernes Badezimmer für Bequemlichkeit – ideal für alle, die ein angenehmes und komfortables Zuhause suchen.",
            "Diese charmante ein-Zimmer-Apartment bietet ein gemütliches Wohnumfeld mit einer gut ausgestatteten Küche, einem privaten Balkon zur persönlichen Entspannung und Zugang zu gemeinschaftlichen Annehmlichkeiten wie einem Pool. Ideal für Singles oder Paare, bietet sie ein praktisches und komfortables Zuhause für alle, die ein kleineres, intimeres Heim suchen.",
          ],
          hero: {
            part1: "Finden Sie Ihren idealen Aufenthalt",
            part2: "idealen Aufenthalt",
          },
          apartman: "Apartment",
          istrazi: "Erkunde",
          cta: {
            part1: "vollständiger Name",
            part2: "idealen",
            part3: "Aufenthalt",
            dateA: "Ankunftsdatum",
            dateD: "Abreisedatum",
            sendI: "Anfrage senden",
          },
          hosts: {
            your: "Ihre",
            hosts: "Gastgeber",
            anteInfo:
              "Ante ist Ihr freundlicher Gastgeber, der mit Leidenschaft die Schönheit seiner Apartments am Meer teilt. Als begeisterter Angler gibt er gerne Tipps oder erzählt Geschichten über das Leben am Meer. Ante setzt alles daran, Ihren Aufenthalt angenehm und unvergesslich zu machen!",
            mirjanaInfo:
              "Mirjana ist Ihre herzliche Gastgeberin, die darauf achtet, dass jedes Detail ihrer Apartments am Meer Wärme und Komfort ausstrahlt. Sie liebt es, neue Menschen kennenzulernen, und ist stolz darauf, ihren Gästen eine erholsame Auszeit zu bieten. Bei Mirjana fühlen Sie sich direkt wie zu Hause am Meer!",
          },
          apartments: {
            welcome: "Willkommen",
            welcomeInfo:
              "Unser charmantes Haus bietet drei komfortable Apartments, die alle mit viel Liebe zum Detail gestaltet wurden, damit Sie sich wie zu Hause fühlen. Ob Sie eine Einzimmer-Oase oder mehr Platz zum Teilen suchen – hier finden Sie die passende Unterkunft für Ihre Bedürfnisse.",
            a1Info: "Ein Apartment mit ein Schlafzimmern für zwei plus zwei Personen.",
            a2Info: "Ein Apartment mit drei Schlafzimmern für sechs Personen",
            a3Info: "Ein Apartment mit einem Schlafzimmern für zwei Personen",
            details: {
              nearby: "In der Nähe",
              near: [
                "Nationalpark Krka",
                "Gloriette von Marschall Marmont",
                "Turm St. Mark",
                "Park Malaria",
                "Turm Kamerlengo",
                "Park Fortin",
              ],
              bath: "Badezimmer",
              bathroom: [
                "Toilettenpapier",
                "Handtücher",
                "Duschkabine",
                "Eigenes Badezimmer",
                "WC",
                "Kostenlose Pflegeprodukte",
                "Haartrockner",
              ],
              wifi: "WLAN ist auf dem gesamten Grundstück kostenlos verfügbar",
              bedroom: "Schlafzimmer",
              bedroomInfo: ["Bettwäsche", "Schrank"],
              kitchen: "Küche",
              kitchenInfo: [
                "Esstisch",
                "Kaffeemaschine",
                "Reinigungsmittel",
                "Toaster",
                "Kochplatten",
                "Backofen",
                "Küchenutensilien",
                "Wasserkocher",
                "Geschirrspüler",
                "Mikrowelle",
                "Kühlschrank",
              ],
            },
          },
          region: {
            heading: "Entdecke Kroatien",
            dSplit: "Entdecke Split: Das Herz der dalmatinischen Küste",
            splitInfo:
              "Eingebettet an Kroatiens atemberaubender dalmatinischer Küste ist Split eine Stadt, in der antike Geschichte auf modernes mediterranes Leben trifft. Als zweitgrößte Stadt des Landes bietet sie eine perfekte Mischung aus Kultur, Geschichte und lebendigem Küstencharme. Mit ihrer zum UNESCO-Weltkulturerbe gehörenden Altstadt, dem kristallklaren Adriatischen Meer und ihrer lebhaften Atmosphäre ist Split ein absolutes Muss für jeden Besucher.",
            attractions: "Top-Sehenswürdigkeiten in Split",
            dPalace: "Diokletianspalast 🏛",
            dPalaceInfo:
              "Das Herzstück von Split ist der Diokletianspalast, der im 4. Jahrhundert vom römischen Kaiser Diokletian erbaut wurde. Heute bildet dieser riesige antike Bau das Zentrum der Altstadt, mit engen Gassen, charmanten Cafés und historischen Sehenswürdigkeiten, die sich in seinen Mauern verbergen.",
            riva: "Riva-Promenade 🌊",
            rivaInfo:
              "Ein lebendiger Treffpunkt direkt am Meer – die Riva ist ideal zum Flanieren, Leute beobachten oder einfach einen Kaffee mit Aussicht zu genießen.",
            marjan: "Marjan-Hügel 🌿",
            marjanInfo:
              "Ein grünes Paradies mit Wanderwegen, atemberaubender Aussicht über die Stadt und versteckten Buchten – perfekt für Naturliebhaber.",
            bacvice: "Strand Bačvice 🏖",
            bacviceInfo:
              "Ein beliebter Stadtstrand, bekannt für seinen feinen Sand, das klare Wasser und das traditionelle Ballspiel „Picigin“.",
            mestrovic: "Mestrovic-Galerie 🎨",
            mestrovicInfo:
              "Ein Museum, das dem berühmten kroatischen Bildhauer Ivan Meštrović gewidmet ist, mit eindrucksvollen Kunstwerken und herrlichem Blick auf die Küste.",
            rogoznica:
              "Rogoznica: Ein verstecktes Juwel an der dalmatinischen Küste",
            rogoznicaInfo:
              "Zwischen Split und Šibenik gelegen, ist Rogoznica ein charmantes Küstenstädtchen, bekannt für seine unberührten Strände, kristallklares Wasser und entspannte mediterrane Atmosphäre. Im Gegensatz zu größeren Touristenzielen bietet Rogoznica einen ruhigen Rückzugsort mit natürlicher Schönheit, traditionellem dalmatinischen Flair und vielen Aktivitäten für Besucher.",
            rAttractions: "Top-Sehenswürdigkeiten in Rogoznica",
            marina: "Marina Frapa ⛵",
            marinaInfo:
              "Eine der schönsten Marinas an der Adria – das Herz des Nachtlebens von Rogoznica mit Restaurants, Bars und luxuriösen Annehmlichkeiten direkt am Wasser.",
            dragon: "Drachenaugensee (Zmajevo Oko) 🌊",
            dragonInfo:
              "Ein natürlicher Salzwassersee mit mysteriösen Legenden. Das Wasser ändert seine Farbe – perfekt zum Schwimmen und Klippenspringen.",
            oldTown: "Altstadt Rogoznica 🏡",
            oldTownInfo:
              "Spazieren Sie durch enge Gassen mit traditionellen Steinhäusern, Cafés und dalmatinischer Authentizität.",
            promenada: "Promenade & Strände 🏖",
            promenadaInfo:
              "Wunderschöne Küstenpromenade für romantische Spaziergänge, mit nahegelegenen Stränden wie Šepurina und Miline, ideal für Familien.",
            planka: "Kap Planka 🌅",
            plankaInfo:
              "Der südlichste Punkt von Rogoznica, bekannt für seine dramatischen Wellen und geschichtliche Bedeutung in alten Seefahrtsberichten.",
          },
        },
      },
      hr: {
        translation: {
          navigation: ["početna", "apartmani", "regija", "kontakt"],
          desc: [
            "Jednosoban apartman za dvije plus dvije osobe",
            "Trosoban apartman za šest osoba",
            "Jednosoban apartman za dvije osobe",
          ],
          summary: [
            "Ovaj ugodan jednosobni stan pruža topao životni prostor s funkcionalnom kuhinjom, privatnim balkonom za uživanje na otvorenom i pristupom zajedničkom bazenu za rekreaciju. S jednom udobnom spavaćom sobom, savršen je za manju obitelj sa dvoje djece do 12 godina, koji traže praktičan i ugodan dom.",
            "Ovaj prostrani trosobni stan nudi udoban život za šest osoba s dobro opremljenom kuhinjom, privatnim balkonom za opuštanje na otvorenom i pristupom osvježavajućem bazenu za razonodu. Također uključuje moderno kupatilo za dodatnu udobnost, što ga čini idealnim izborom za one koji traže ugodan i udoban dom.",
            "Ovaj šarmantni jednosobni stan nudi ugodno životno okruženje s dobro opremljenom kuhinjom, privatnim balkonom za osobno opuštanje i pristupom zajedničkim sadržajima poput bazena. Idealan za samce ili parove, pruža praktičan i udoban životni prostor za one koji traže manji i intimniji dom.",
          ],
          hero: {
            part1: "Za vaš odmor iz snova",
            part2: "idealni smještaj",
          },
          apartman: "Apartman",
          istrazi: "Istraži",
          cta: {
            part1: "Rezervirajte sada",
            part2: "vaš idealni",
            part3: "smještaj",
            dateA: "Puno ime",
            dateD: "Datum odlaska",
            sendI: "Pošalji upit",
          },
          hosts: {
            your: "Vaši",
            hosts: "Domaćini",
            anteInfo:
              "Ante je vaš ljubazan domaćin, strastven u dijeljenju ljepote svojih apartmana uz more. Kao lokalni zaljubljenik u ribolov, uvijek rado dijeli savjete ili priče o životu uz more. Ante je predan tome da vaš boravak bude ugodan i nezaboravan!",
            mirjanaInfo:
              "Mirjana je vaša gostoljubiva domaćica, koja se brine da svaki detalj njezinih apartmana uz more odiše toplinom i udobnošću. Voli upoznavati nove ljude i ponosna je što stvara opuštajuće utočište za svoje goste. S Mirjanom ćete se osjećati kao kod kuće uz more!",
          },
          apartments: {
            welcome: "Dobrodošli",
            welcomeInfo:
              "Naša šarmantna kuća nudi tri udobna apartmana, svaki pažljivo dizajniran da se osjećate kao kod kuće. Bilo da tražite jednosobno utočište ili više prostora za dijeljenje, pronaći ćete apartman koji odgovara vašim potrebama.",
            a1Info: "Apartman sa 3 spavaće sobe za šest osoba",
            a2Info: "Apartman sa jednom spavaćom sobom za dvije plus dvije osobe",
            a3Info: "Apartman sa jednom spavaćom sobom za dvoje ljudi",
            details: {
              nearby: "U blizini",
              near: [
                "Nacionalni park Krka",
                "Glorijet maršala Marmonta",
                "Kula sv. Marka",
                "Park Malarija",
                "Kula Kamerlengo",
                "Park Fortin",
              ],
              bath: "Kupaonica",
              bathroom: [
                "Toaletni papir",
                "Ručnici",
                "Tuš kabina",
                "Vlastita kupaonica",
                "WC",
                "Besplatni toaletni pribor",
                "Sušilo za kosu",
              ],
              wifi: "Wifi je dostupan i besplatan na cijelom imanju",
              bedroom: "Spavaća soba",
              bedroomInfo: ["Posteljina", "Ormar"],
              kitchen: "Kuhinja",
              kitchenInfo: [
                "Kuhinjski stol",
                "Aparat za kavu",
                "Sredstvo za čišćenje",
                "Toster",
                "Ploča za kuhanje",
                "Pećnica",
                "Kuhinjski pribor",
                "Kuhalo za vodu",
                "Perilica posuđa",
                "Mikrovalna pećnica",
                "Hladnjak",
              ],
            },
          },


          region: {
            heading: "Otkrijte Hrvatsku",
            dSplit: "Otkrijte Split: Srce Dalmacije",
            splitInfo:
              "Smješten na zadivljujućoj dalmatinskoj obali, Split je grad u kojem se drevna povijest susreće s modernim mediteranskim životom. Kao drugi najveći grad u Hrvatskoj, nudi savršen spoj kulture, povijesti i živahnog obalnog šarma. S povijesnom jezgrom pod zaštitom UNESCO-a, kristalno čistim Jadranskim morem i živopisnom atmosferom, Split je destinacija koju morate posjetiti.",
            attractions: "Najpoznatije atrakcije u Splitu",
            dPalace: "Dioklecijanova palača 🏛",
            dPalaceInfo:
              "Središte Splita čini Dioklecijanova palača, izgrađena u 4. stoljeću od strane rimskog cara Dioklecijana. Danas ovaj golemi antički kompleks čini srce stare gradske jezgre, s uskim uličicama, šarmantnim kafićima i povijesnim znamenitostima skrivenim unutar zidina.",
            riva: "Riva – gradska šetnica 🌊",
            rivaInfo:
              "Živahno mjesto uz more idealno za šetnju, kavu i promatranje prolaznika uz predivan pogled na more.",
            marjan: "Brdo Marjan 🌿",
            marjanInfo:
              "Zeleni raj s brojnim stazama za šetnju i biciklizam te nevjerojatnim pogledom na grad i more – omiljeno mjesto za bijeg u prirodu.",
            bacvice: "Plaža Bačvice 🏖",
            bacviceInfo:
              "Najpoznatija gradska plaža s plićakom i finim pijeskom, savršena za kupanje i igru „picigin“.",
            mestrovic: "Galerija Meštrović 🎨",
            mestrovicInfo:
              "Muzej posvećen slavnom hrvatskom kiparu Ivanu Meštroviću, s impresivnim djelima i pogledom na more.",
            rogoznica: "Rogoznica: Skriveni dragulj Dalmacije",
            rogoznicaInfo:
              "Smještena između Splita i Šibenika, Rogoznica je šarmantni obalni gradić poznat po netaknutim plažama, kristalno čistom moru i opuštenoj mediteranskoj atmosferi. Za razliku od većih turističkih središta, Rogoznica nudi mirno utočište s prirodnim ljepotama, tradicionalnim dalmatinskim ugođajem i mnoštvom aktivnosti za posjetitelje.",
            rAttractions: "Najpoznatije atrakcije u Rogoznici",
            marina: "Marina Frapa ⛵",
            marinaInfo:
              "Jedna od najljepših marina na Jadranu – središte društvenog i noćnog života Rogoznice, s restoranima, barovima i luksuznim sadržajima.",
            dragon: "Zmajevo Oko 🌊",
            dragonInfo:
              "Prirodno slano jezero okruženo stijenama, puno legendi. Voda mijenja boju, a jezero je popularno za kupanje i skakanje.",
            oldTown: "Stari grad Rogoznica 🏡",
            oldTownInfo:
              "Šetnja kamenim ulicama starog grada otkriva šarmantne kuće, kafiće i autentičan dalmatinski duh.",
            promenada: "Šetnica i plaže 🏖",
            promenadaInfo:
              "Prekrasna šetnica uz more idealna za zalaske sunca. U blizini se nalaze plaže poput Šepurine i Miline, poznate po kristalno čistom moru.",
            planka: "Rt Planka 🌅",
            plankaInfo:
              "Najjužnija točka Rogoznice, gdje se susreću vjetrovi i morski struje. Mjesto s bogatom pomorskom poviješću i spektakularnim pogledima.",
          },
        },
      },
    }
  });

export default i18n;
