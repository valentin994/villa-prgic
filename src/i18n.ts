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
            dateA: "Arrival date",
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
            a1Info: "A three bedroom apartment for six people.",
            a2Info: "A two bedroom apartment for four people.",
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
        },
      },
      de: {
        translation: {
          navigation: ["startseite", "wohnungen", "region", "kontakt"],
          hero: {
            part1: "Finden Sie Ihren idealen Aufenthalt",
            part2: "idealen Aufenthalt",
          },
          apartman: "Wohnung",
          istrazi: "Erkunden",
          cta: {
            part1: "Jetzt buchen",
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
            a1Info: "Ein Apartment mit drei Schlafzimmern für sechs Personen.",
            a2Info: "Ein Apartment mit zwei Schlafzimmern für vier Personen",
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
        },
      },
      hr: {
        translation: {
          navigation: ["početna", "apartmani", "regija", "kontakt"],
          hero: {
            part1: "Za vas odmor iz snova",
            part2: "idealni smjestaj",
          },
          apartman: "Apartman",
          istrazi: "Istrazi",
          cta: {
            part1: "Rezervirajte sada",
            part2: "vas idealni",
            part3: "smjestaj",
            dateA: "Datum dolaska",
            dateD: "Datum odlaska",
            sendI: "Posalji upit",
          },
          hosts: {
            your: "Vasi",
            hosts: "Domacini",
            anteInfo:
              "Ante je vaš ljubazan domaćin, strastven u dijeljenju ljepote svojih apartmana uz more. Kao lokalni zaljubljenik u ribolov, uvijek rado dijeli savjete ili priče o životu uz more. Ante je predan tome da vaš boravak bude ugodan i nezaboravan!",
            mirjanaInfo:
              "Mirjana je vaša gostoljubiva domaćica, koja se brine da svaki detalj njezinih apartmana uz more odiše toplinom i udobnošću. Voli upoznavati nove ljude i ponosna je što stvara opuštajuće utočište za svoje goste. S Mirjanom ćete se osjećati kao kod kuće uz more!",
          },
          apartments: {
            welcome: "Dobrodosli",
            welcomeInfo:
              "Naša šarmantna kuća nudi tri udobna apartmana, svaki pažljivo dizajniran da se osjećate kao kod kuće. Bilo da tražite jednosobno utočište ili više prostora za dijeljenje, pronaći ćete apartman koji odgovara vašim potrebama.",
            a1Info: "Apartman sa 3 spavace sobe za sestero ljudi",
            a2Info: "Apartman sa dvije spavace sobe za cetvero ljudi",
            a3Info: "Apartman sa jednom spavacom sobom za dvoje ljudi",
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
              bedroom: "Spavaca soba",
              bedroomInfo: ["Posteljina", "Ormar"],
              kitchen: "Kuhinja",
              kitchenInfo: [
                "Kuhinjski stol",
                "Aparat za kavu",
                "Sredstvo za čišćenje",
                "Toster",
                "Ploče za kuhanje",
                "Pećnica",
                "Kuhinjski pribor",
                "Kuhalo za vodu",
                "Perilica posuđa",
                "Mikrovalna pećnica",
                "Hladnjak",
              ],
            },
          },
        },
      },
    },
  });

export default i18n;
