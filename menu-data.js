const MENU_DATA = [
  {
    "category": "Small Dishes",
    "items": [
      {
        "name": "Spicy Edamame",
        "price": "99,-",
        "desc": "Krydrede soyabønner med chili og havsalt",
        "lines": [],
        "allergens": "Allergener: Soya, gluten"
      },
      {
        "name": "Edamame",
        "price": "95,-",
        "desc": "Steamed Edamame beans served with salt",
        "lines": [],
        "allergens": "Allergener: Soya"
      },
      {
        "name": "NEW Salmon Tataki",
        "price": "209,-",
        "desc": "Lett flambert laks, salatmix, yuzu ponzu, sterk kizami wasabi, røkt sildekaviar og gressløk.",
        "lines": [],
        "allergens": "Allergener: Fish, soya, sennep"
      },
      {
        "name": "NEW Tuna Tataki",
        "price": "235,-",
        "desc": "Sesamstekt tunfisk, yuzu ponzu, sriracha, syltet japansk takuan og gressløk.",
        "lines": [],
        "allergens": "Allergener: Fish, soya, sesam"
      },
      {
        "name": "Seaweed Salad",
        "price": "79,-",
        "desc": "Wakame Salad",
        "lines": [],
        "allergens": "Allergener: Soya, sesam, hvete (gluten)"
      },
      {
        "name": "Tempura Starter",
        "price": "149,-",
        "desc": "Tempura scampi servert med agurk, avokado, sjøgressalat, wasabi mayo og kimchi teriyaki saus",
        "lines": [],
        "allergens": "Allergener: Gluten (hvete), skalldyr, egg, soya, sesam"
      },
      {
        "name": "Scallop Starter",
        "price": "159,-",
        "desc": "Frityrstekt kamskjell servert med agurk, avokado, sjøgressalat, yuzu mayo og kimchi teriyaki",
        "lines": [],
        "allergens": "Allergener: Gluten (hvete), bløtdyr, egg, soya, sesam"
      },
      {
        "name": "Spring Roll: Chicken",
        "price": "119,-",
        "desc": "2 stk vårruller med kylling, servert med sweet chili saus",
        "lines": [],
        "allergens": "Allergener: Gluten (hvete), egg"
      },
      {
        "name": "Spring Roll: Vegetarian",
        "price": "99,-",
        "desc": "2 stk vegetariske vårruller, servert med sweet chili saus",
        "lines": [],
        "allergens": "Allergener: Gluten (hvete), egg"
      },
      {
        "name": "Yakitori Sticks",
        "price": "129,-",
        "desc": "3 stk kyllingspyd, servert med sjøgressalat, yuzu mayo, kimchi teriyaki og sesamfrø",
        "lines": [],
        "allergens": "Allergener: Gluten (hvete), soya, sesam"
      }
    ]
  },
  {
    "category": "Poke Bowl",
    "items": [
      {
        "name": "Poke Bowl Vegetarian",
        "price": "235,-",
        "desc": "Sushiris, salatmiks, sjøgressalat, syltet daikonreddik, edamame, jordbær, avokado, agurk, wasabimajones og teriyakisaus",
        "lines": [],
        "allergens": "Allergener: Gluten, egg, soya, sesam, sennep"
      },
      {
        "name": "Poke Bowl Salmon",
        "price": "255,-",
        "desc": "Sushiris, salatmix, agurk, avokado, sjøgressalat, edamame, ponzusaus, chilimajones og teriyakisaus",
        "lines": [],
        "allergens": "Allergener: fish, egg, soya, sesam, gluten"
      },
      {
        "name": "Poke Bowl Tempura",
        "price": "249,-",
        "desc": "Sushiris, salatmix, agurk, avokado, sjøgressalat, edamame, tempura scampi, chilimajones og teriyakisaus",
        "lines": [],
        "allergens": "Allergener: Gluten, shellfish, egg, soya, sesam"
      },
      {
        "name": "Poke Bowl Mix",
        "price": "269,-",
        "desc": "Sushiris, salatmix, agurk, avokado, sjøgressalat, edamame, laks, tunfisk og hamachi, ponzusaus, chilimajones og teriyakisaus",
        "lines": [],
        "allergens": "Allergener: fish, egg, soya, sesam"
      }
    ]
  },
  {
    "category": "Sashimi Special / 6 skiver",
    "items": [
      {
        "name": "Sashimi Salmon",
        "price": "199,-",
        "desc": "Laks med jalapeno saus, yuzu mayo og sitronskall",
        "lines": [],
        "allergens": "Allergener: fish"
      },
      {
        "name": "NEW Hamachi",
        "price": "239,-",
        "desc": "Hamachi med ponzu, kizami wasabi, togarashi og gressløk",
        "lines": [],
        "allergens": "Allergener: fish, sennep, soya"
      },
      {
        "name": "Sashimi Tuna",
        "price": "219,-",
        "desc": "Tunfisk med sjøgressalat, trøffel-ponzu, sprøstekt løk og vårløk",
        "lines": [],
        "allergens": "Allergener: fish, soya, gluten, sesam"
      },
      {
        "name": "Sashimi Scallop",
        "price": "229,-",
        "desc": "Kamskjell med sjøgressalat, yuzu-ponzu, furikake, gressløk og røkt silderogn",
        "lines": [],
        "allergens": "Allergener: molluscs, soya, gluten, sesam"
      }
    ]
  },
  {
    "category": "Nigiri / 2 biter",
    "items": [
      { "name": "Nigiri Salmon", "price": "75,-", "desc": "", "lines": [], "allergens": "Allergener: fish, soya, gluten" },
      { "name": "Nigiri Tuna", "price": "85,-", "desc": "", "lines": [], "allergens": "Allergener: fish, soya, gluten" },
      { "name": "NEW Hamachi", "price": "95,-", "desc": "", "lines": [], "allergens": "Allergener: fish, soya, gluten" },
      { "name": "Nigiri Ebi", "price": "75,-", "desc": "", "lines": [], "allergens": "Allergener: shellfish, soya, gluten" },
      { "name": "Nigiri Scallop", "price": "85,-", "desc": "", "lines": [], "allergens": "Allergener: molluscs, soya, gluten" }
    ]
  },
  {
    "category": "Nigiri Flambert / 2 biter",
    "items": [
      { "name": "Flambeed Nigiri Salmon", "price": "85,-", "desc": "Grilled Salmon belly with yuzu mayo, kimchi teriyaki, fried onion, lemon zest", "lines": [], "allergens": "Allergener: fish, soya" },
      { "name": "Flambeed Nigiri Scallop", "price": "95,-", "desc": "Grilled scallop with yuzu mayo, kimchi teriyaki, fried onion, lemon zest", "lines": [], "allergens": "Allergener: molluscs, egg, soya" },
      { "name": "Flambeed Nigiri Hamachi", "price": "115,-", "desc": "Grilled hamachi with yuzu mayo, kimchi teriyaki", "lines": [], "allergens": "Allergener: fish, soya" }
    ]
  },
  {
    "category": "Futo Rolls / 6 biter",
    "items": [
      { "name": "Softshell Maki", "price": "185,-", "desc": "Fritert softshell krabbe, agurk, avokado, tobiko og chilimajones", "lines": [], "allergens": "Allergener: shellfish, soya, sesam, gluten" },
      { "name": "Hot Roll (fried)", "price": "185,-", "desc": "Laks med agurk, vårløk, sriracha, spicy mayo og gressløk", "lines": [], "allergens": "Allergener: fish, gluten, egg, soya, sesam" },
      { "name": "NEW Lava Salmon", "price": "219,-", "desc": "Laksetartar med sjøgressalat, spicy mayo, togarashi, ørretrogn og gressløk", "lines": [], "allergens": "Allergener: gluten, fish, egg, sesam, soya" },
      { "name": "NEW Lava Shrimp", "price": "219,-", "desc": "Scampitartar med tobiko, spicy mayo, togarashi, teriyakisaus og gressløk", "lines": [], "allergens": "Allergener: gluten, shellfish, egg, sesam, soya, fish" }
    ]
  },
  {
    "category": "Ura Rolls / 8 biter",
    "items": [
      { "name": "Vegan roll", "price": "129,-", "desc": "Avokado, agurk, paprika og yuzu-emulsjon", "lines": [], "allergens": "Allergener: sesam" },
      { "name": "Tempura Roll", "price": "179,-", "desc": "Tempura scampi og avokado", "lines": [], "allergens": "Allergener: Gluten, shellfish, egg, sesam" },
      { "name": "NEW Spicy Hamachi", "price": "195,-", "desc": "Hamachi, vårløk, sriracha og cherrytomater", "lines": [], "allergens": "Allergener: fish" },
      { "name": "Spicy Tuna", "price": "195,-", "desc": "Tunfisk, vårløk og chilimajones", "lines": [], "allergens": "Allergener: fish, egg, sesam" },
      { "name": "Spicy Salmon", "price": "185,-", "desc": "Laks, vårløk og chilimajones", "lines": [], "allergens": "Allergener: fish, egg, sesam" },
      { "name": "Spicy Scallop", "price": "195,-", "desc": "Scallop, chili mayo, spring onion", "lines": [], "allergens": "Allergener: molluscs, egg, sesam" },
      { "name": "California Roll", "price": "175,-", "desc": "Kokt scampi, agurk, avokado, wasabi mayo", "lines": [], "allergens": "Allergener: shellfish, egg, sesam, soya, sennep, gluten" },
      { "name": "Rainbow Roll", "price": "199,-", "desc": "Kokt scampi, agurk, avokado, toppet med laks, tunfisk, kveite, wasabi mayo", "lines": [], "allergens": "Allergener: shellfish, fish, egg, sesam" },
      { "name": "Fried Salmon Roll", "price": "169,-", "desc": "Fritert laks, vårløk, chilimajones og teriyakisaus", "lines": [], "allergens": "Allergener: fish, soya, sesam, gluten, egg" }
    ]
  },
  {
    "category": "Special Rolls / 8 biter",
    "items": [
      { "name": "Vegetarian Special", "price": "185,-", "desc": "Avocado, cucumber, apple topped with philadelphia, strawberry", "lines": [], "allergens": "Allergener: dairy, egg, soya, sesam" },
      { "name": "NEW Crunchy Tuna", "price": "195,-", "desc": "Tunfisk, syltet reddik (daikon), sriracha og masago arare", "lines": [], "allergens": "Allergener: fish, sesam" },
      { "name": "Tempura Special", "price": "219,-", "desc": "Tempura scampi, avokado og toppet med flamberet laks, yuzu-majones og teriyakisaus", "lines": [], "allergens": "Allergener: shellfish, fish, gluten, egg, soya, sesam" },
      { "name": "Tempura Strawberry", "price": "209,-", "desc": "Tempura scampi, avokado, kremost og jordbær, wasabi-majones og teriyakisaus", "lines": [], "allergens": "Allergener: shellfish, gluten, dairy, egg, soya, sesam, sennep" },
      { "name": "Salmon Strawberry", "price": "209,-", "desc": "Laks, avokado, kremost og jordbær, wasabi-majones og teriyakisaus", "lines": [], "allergens": "Allergener: fish, dairy, egg, soya, sesam, sennep" },
      { "name": "Crunchy Roll", "price": "215,-", "desc": "Fritert kamskjell og flamberet laks, yuzu-majones og teriyakisaus", "lines": [], "allergens": "Allergener: molluscs, gluten, egg, soya, sesam, fish" },
      { "name": "Special Tuna", "price": "219,-", "desc": "Tempura scampi, sjøgressalat, tunfisk, wasabi-majones og sriracha", "lines": [], "allergens": "Allergener: shellfish, fish, gluten, egg, sesam, sennep" },
      { "name": "Philadelphia Roll", "price": "195,-", "desc": "Laks, vårløk og kremost", "lines": [], "allergens": "Allergener: fish, dairy, sesam" },
      { "name": "Duck Roll", "price": "209,-", "desc": "Frityrstekt andebryst, agurk, kremost, jordbær, wasabi-majones og teriyakisaus", "lines": [], "allergens": "Allergener: Gluten, dairy, egg, soya, sesam, sennep" },
      { "name": "Dragon Roll", "price": "209,-", "desc": "Tempura scampi, kremost, agurk og avokado, toppet med teriyakisaus", "lines": [], "allergens": "Allergener: shellfish, wheat, dairy, egg, soya, sesam" }
    ]
  },
  {
    "category": "Set Menu",
    "items": [
      { "name": "Salmon Deluxe", "price": "429,-", "desc": "4 sashimi laks, 4 nigiri laks (2 flamberte, 2 normal), 1 salmon maki", "lines": ["4 sashimi laks/salmon", "4 nigiri laks/salmon (2 flamberte/torched, 2 normal)", "1 salmon/laks maki"], "allergens": "" },
      { "name": "Sushi Roll Mix", "price": "549,-", "desc": "6 sashimi (kokkens valg), 4 nigiri (kokkens valg), 1 maki (kokkens valg)", "lines": ["6 sashimi (kokkens valg/chefs choice)", "4 nigiri (kokkens valg/chefs choice)", "1 maki (kokkens valg/chefs choice)"], "allergens": "" },
      { "name": "Maki Set (32 biter)", "price": "759,-", "desc": "Spicy tuna, Fried salmon, Tempura special, Tempura strawberry", "lines": ["Spicy tuna", "Fried salmon", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Maki Set (46 biter)", "price": "1099,-", "desc": "Hot roll, Spicy salmon, Spicy tuna, Fried salmon, Tempura special, Tempura strawberry", "lines": ["Hot roll", "Spicy salmon", "Spicy tuna", "Fried salmon", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Maki Set (54 biter)", "price": "1299,-", "desc": "Hot roll, Spicy Salmon, Spicy tuna, Fried salmon, Crunchy roll, Tempura special, Tempura strawberry", "lines": ["Hot roll", "Spicy Salmon", "Spicy tuna", "Fried salmon", "Crunchy roll", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Spesial set for 2 pers", "price": "1225,-", "desc": "Tempurasalat, 6 sashimi, 6 nigiri, 24 biter maki (kokkens valg)", "lines": ["Tempurasalad", "6 sashimi", "6 nigiri", "24 pieces maki (chef's choice)"], "allergens": "" },
      { "name": "Spesial set for 3 pers", "price": "1449,-", "desc": "Tempurasalat, 9 sashimi, 6 nigiri, 30 biter maki (kokkens valg)", "lines": ["Tempurasalat", "9 sashimi", "6 nigiri", "30 pieces maki (chef's choice)"], "allergens": "" }
    ]
  },
  {
    "category": "Sauces",
    "items": [
      { "name": "Teriyaki Sauce", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" },
      { "name": "Chili Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergener: egg, sesam" },
      { "name": "Spicy Mayo", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Egg, soya, fish, gluten" },
      { "name": "Jalapeno Sauce", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Ingen kjente allergener" },
      { "name": "Ponzu Sauce", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" },
      { "name": "Yuzu Ponzu Sauce", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" },
      { "name": "Sweet Truffle Ponzu", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" },
      { "name": "Yuzu Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergener: Egg, soya" },
      { "name": "Wasabi Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergener: egg, sennep" },
      { "name": "Onion Yuzu Dressing", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Ingen kjente allergener" },
      { "name": "Yuzu Emulsion (Vegan)", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergener: Ingen kjente allergener" },
      { "name": "Sweet Chili Sauce", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergener: Ingen kjente allergener" },
      { "name": "Soya", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" },
      { "name": "Glutenfree Soya", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergener: Soya" }
    ]
  },
  {
    "category": "Minerals 0,33l",
    "items": [
      { "name": "Cola", "price": "50,-", "desc": "", "lines": [], "allergens": "" },
      { "name": "Cola Zero", "price": "50,-", "desc": "", "lines": [], "allergens": "" }
    ]
  }
];
