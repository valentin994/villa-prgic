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
            escapeValue: false,
        },

        resources: {
            en: {
                translation: {
                    navigation: ["home", "apartments", "region", "contact"],
                    desc: [
                        "A three bedroom apartment for six people",
                        "A two bedroom apartment for four people",
                        "A one bedroom apartment for two people"
                    ],
                    summary: [
                        "This spacious 3-bedroom apartment offers comfortable living with a well-equipped kitchen, a private balcony, cozy bedrooms, a living room, and a modern bathroom, providing a convenient and inviting home for everyday life. The layout ensures plenty of room for relaxation and functionality, making it an ideal option for families or groups seeking both comfort and convenience.",
                        "This inviting two-bedroom apartment provides a cozy living space with a functional kitchen, inviting bedrooms, and a stylish bathroom, offering comfort and practicality for daily living. The thoughtful layout is perfect for small families or roommates seeking a warm and well-equipped home.",
                        "This charming one-bedroom apartment offers a cozy living environment with a well-appointed kitchen, a welcoming living area, and a sleek bathroom, ideal for individuals or couples seeking comfort and convenience. Its compact yet functional layout maximizes the space, providing a practical and enjoyable home."
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
                            "Ante is your friendly host, passionate about sharing the beauty of his seaside apartments. Always ready to help with local tips and recommendations, he ensures your stay is enjoyable and relaxing. With years of experience hosting guests, Ante knows how to make everyone feel welcome and at home.",
                        mirjanaInfo:
                            "Mirjana is your welcoming host, ensuring every detail of her seaside apartments reflects warmth and comfort. With a deep knowledge of the local area and a passion for hospitality, she is always available to assist you, making your stay pleasant and memorable through thoughtful care and kindness.",
                    },
                    apartments: {
                        welcome: "Welcome",
                        welcomeInfo:
                            "Our charming house offers three comfortable apartments tailored to various needs. With friendly hosts, a welcoming environment, and convenient amenities, it’s the ideal place to unwind and enjoy your stay by the sea. Choose the perfect space for your vacation and make yourself at home.",
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
                    region: {
                        heading: "Discover Croatia",
                        dSplit: "Discover Split: The Heart of the Dalmatian Coast",
                        splitInfo:
                            "Nestled on Croatia’s stunning Dalmatian coast, Split is a city where ancient history meets modern Mediterranean life. Its centerpiece, Diocletian’s Palace, is one of the most impressive and best-preserved Roman structures in the world. Around every corner, you’ll find charming stone streets, vibrant squares, and breathtaking sea views. Whether you're exploring ancient sites, enjoying local cuisine, or discovering hidden beaches, Split offers something unforgettable for every traveler.",
                        attractions: "Top attractions in Split",
                        dPalace: "Diocletian’s Palace 🏛",
                        dPalaceInfo:
                            "The centerpiece of Split, Diocletian’s Palace, was built in the 4th century by the Roman Emperor Diocletian as his retirement residence. The palace complex includes the Peristyle, the Cathedral of St. Domnius, the Temple of Jupiter, underground cellars, gated entrances, and various courtyards. A street called the Cardo runs from north to south, dividing the palace into eastern and western quarters.",
                        riva: "Riva Promenade 🌊",
                        rivaInfo:
                            "A vibrant waterfront promenade perfect for walking and enjoying the view. With numerous cafes and restaurants overlooking the sea, it's a popular place for both locals and tourists. The Riva becomes especially lively during festivals and summer evenings.",
                        marjan: "Marjan Hill 🌿",
                        marjanInfo:
                            "A green escape offering scenic views and outdoor activities. Whether you're hiking, jogging, or simply enjoying nature, Marjan provides beautiful overlooks of the city, sea, and surrounding islands.",
                        bacvice: "Bacvice Beach 🏖",
                        bacviceInfo:
                            "A famous sandy beach known for the traditional game Picigin. Its shallow waters, numerous cafes, and vibrant nightlife make it one of the most beloved beaches in Split.",
                        mestrovic: "Mestrovic Gallery 🎨",
                        mestrovicInfo:
                            "A museum dedicated to famous Croatian sculptor Ivan Meštrović. The gallery showcases his sculptures, drawings, and architectural works in a beautiful seaside villa.",
                    },
                },
            },
        },
    });

export default i18n;
