const MENU_DATA = [
  {
    "category": "Small Dishes",
    "items": [
      { "name": "Spicy Edamame", "price": "99,-", "desc": "Spiced soybeans with chili and sea salt", "lines": [], "allergens": "Allergens: soy, gluten" },
      { "name": "Edamame", "price": "95,-", "desc": "Steamed edamame beans served with salt", "lines": [], "allergens": "Allergens: soy" },
      { "name": "NEW Salmon Tataki", "price": "209,-", "desc": "Lightly flambéed salmon, salad mix, yuzu ponzu, hot kizami wasabi, smoked herring caviar and chives.", "lines": [], "allergens": "Allergens: fish, soy, mustard" },
      { "name": "NEW Tuna Tataki", "price": "235,-", "desc": "Sesame-seared tuna, yuzu ponzu, sriracha, pickled Japanese takuan and chives.", "lines": [], "allergens": "Allergens: fish, soy, sesame" },
      { "name": "Seaweed Salad", "price": "79,-", "desc": "Wakame salad", "lines": [], "allergens": "Allergens: soy, sesame, wheat (gluten)" },
      { "name": "Tempura Starter", "price": "149,-", "desc": "Tempura scampi served with cucumber, avocado, seaweed salad, wasabi mayo and kimchi teriyaki sauce", "lines": [], "allergens": "Allergens: gluten (wheat), shellfish, egg, soy, sesame" },
      { "name": "Scallop Starter", "price": "159,-", "desc": "Deep-fried scallops served with cucumber, avocado, seaweed salad, yuzu mayo and kimchi teriyaki", "lines": [], "allergens": "Allergens: gluten (wheat), molluscs, egg, soy, sesame" },
      { "name": "Spring Roll: Chicken", "price": "119,-", "desc": "2 chicken spring rolls, served with sweet chili sauce", "lines": [], "allergens": "Allergens: gluten (wheat), egg" },
      { "name": "Spring Roll: Vegetarian", "price": "99,-", "desc": "2 vegetarian spring rolls, served with sweet chili sauce", "lines": [], "allergens": "Allergens: gluten (wheat), egg" },
      { "name": "Yakitori Sticks", "price": "129,-", "desc": "3 chicken skewers, served with seaweed salad, yuzu mayo, kimchi teriyaki and sesame seeds", "lines": [], "allergens": "Allergens: gluten (wheat), soy, sesame" }
    ]
  },
  {
    "category": "Poke Bowl",
    "items": [
      { "name": "Poke Bowl Vegetarian", "price": "235,-", "desc": "Sushi rice, salad mix, seaweed salad, pickled daikon radish, edamame, strawberries, avocado, cucumber, wasabi mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: gluten, egg, soy, sesame, mustard" },
      { "name": "Poke Bowl Salmon", "price": "255,-", "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, ponzu sauce, chili mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: fish, egg, soy, sesame, gluten" },
      { "name": "Poke Bowl Tempura", "price": "249,-", "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, tempura scampi, chili mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: gluten, shellfish, egg, soy, sesame" },
      { "name": "Poke Bowl Mix", "price": "269,-", "desc": "Sushi rice, salad mix, cucumber, avocado, seaweed salad, edamame, salmon, tuna and hamachi, ponzu sauce, chili mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: fish, egg, soy, sesame" }
    ]
  },
  {
    "category": "Sashimi Special / 6 slices",
    "items": [
      { "name": "Sashimi Salmon", "price": "199,-", "desc": "Salmon with jalapeño sauce, yuzu mayo and lemon zest", "lines": [], "allergens": "Allergens: fish" },
      { "name": "NEW Hamachi", "price": "239,-", "desc": "Hamachi with ponzu, kizami wasabi, togarashi and chives", "lines": [], "allergens": "Allergens: fish, mustard, soy" },
      { "name": "Sashimi Tuna", "price": "219,-", "desc": "Tuna with seaweed salad, truffle ponzu, crispy fried onion and spring onion", "lines": [], "allergens": "Allergens: fish, soy, gluten, sesame" },
      { "name": "Sashimi Scallop", "price": "229,-", "desc": "Scallops with seaweed salad, yuzu ponzu, furikake, chives and smoked herring roe", "lines": [], "allergens": "Allergens: molluscs, soy, gluten, sesame" }
    ]
  },
  {
    "category": "Nigiri / 2 pieces",
    "items": [
      { "name": "Nigiri Salmon", "price": "75,-", "desc": "", "lines": [], "allergens": "Allergens: fish, soy, gluten" },
      { "name": "Nigiri Tuna", "price": "85,-", "desc": "", "lines": [], "allergens": "Allergens: fish, soy, gluten" },
      { "name": "NEW Hamachi", "price": "95,-", "desc": "", "lines": [], "allergens": "Allergens: fish, soy, gluten" },
      { "name": "Nigiri Ebi", "price": "75,-", "desc": "", "lines": [], "allergens": "Allergens: shellfish, soy, gluten" },
      { "name": "Nigiri Scallop", "price": "85,-", "desc": "", "lines": [], "allergens": "Allergens: molluscs, soy, gluten" }
    ]
  },
  {
    "category": "Flambéed Nigiri / 2 pieces",
    "items": [
      { "name": "Flambeed Nigiri Salmon", "price": "85,-", "desc": "Grilled salmon belly with yuzu mayo, kimchi teriyaki, fried onion, lemon zest", "lines": [], "allergens": "Allergens: fish, soy" },
      { "name": "Flambeed Nigiri Scallop", "price": "95,-", "desc": "Grilled scallop with yuzu mayo, kimchi teriyaki, fried onion, lemon zest", "lines": [], "allergens": "Allergens: molluscs, egg, soy" },
      { "name": "Flambeed Nigiri Hamachi", "price": "115,-", "desc": "Grilled hamachi with yuzu mayo, kimchi teriyaki", "lines": [], "allergens": "Allergens: fish, soy" }
    ]
  },
  {
    "category": "Futo Rolls / 6 pieces",
    "items": [
      { "name": "Softshell Maki", "price": "185,-", "desc": "Deep-fried soft-shell crab, cucumber, avocado, tobiko and chili mayo", "lines": [], "allergens": "Allergens: shellfish, soy, sesame, gluten" },
      { "name": "Hot Roll (fried)", "price": "185,-", "desc": "Salmon with cucumber, spring onion, sriracha, spicy mayo and chives", "lines": [], "allergens": "Allergens: fish, gluten, egg, soy, sesame" },
      { "name": "NEW Lava Salmon", "price": "219,-", "desc": "Salmon tartare with seaweed salad, spicy mayo, togarashi, trout roe and chives", "lines": [], "allergens": "Allergens: gluten, fish, egg, sesame, soy" },
      { "name": "NEW Lava Shrimp", "price": "219,-", "desc": "Scampi tartare with tobiko, spicy mayo, togarashi, teriyaki sauce and chives", "lines": [], "allergens": "Allergens: gluten, shellfish, egg, sesame, soy, fish" }
    ]
  },
  {
    "category": "Ura Rolls / 8 pieces",
    "items": [
      { "name": "Vegan roll", "price": "129,-", "desc": "Avocado, cucumber, bell pepper and yuzu emulsion", "lines": [], "allergens": "Allergens: sesame" },
      { "name": "Tempura Roll", "price": "179,-", "desc": "Tempura scampi and avocado", "lines": [], "allergens": "Allergens: gluten, shellfish, egg, sesame" },
      { "name": "NEW Spicy Hamachi", "price": "195,-", "desc": "Hamachi, spring onion, sriracha and cherry tomatoes", "lines": [], "allergens": "Allergens: fish" },
      { "name": "Spicy Tuna", "price": "195,-", "desc": "Tuna, spring onion and chili mayo", "lines": [], "allergens": "Allergens: fish, egg, sesame" },
      { "name": "Spicy Salmon", "price": "185,-", "desc": "Salmon, spring onion and chili mayo", "lines": [], "allergens": "Allergens: fish, egg, sesame" },
      { "name": "Spicy Scallop", "price": "195,-", "desc": "Scallop, chili mayo, spring onion", "lines": [], "allergens": "Allergens: molluscs, egg, sesame" },
      { "name": "California Roll", "price": "175,-", "desc": "Boiled scampi, cucumber, avocado, wasabi mayo", "lines": [], "allergens": "Allergens: shellfish, egg, sesame, soy, mustard, gluten" },
      { "name": "Rainbow Roll", "price": "199,-", "desc": "Boiled scampi, cucumber, avocado, topped with salmon, tuna, halibut, wasabi mayo", "lines": [], "allergens": "Allergens: shellfish, fish, egg, sesame" },
      { "name": "Fried Salmon Roll", "price": "169,-", "desc": "Deep-fried salmon, spring onion, chili mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: fish, soy, sesame, gluten, egg" }
    ]
  },
  {
    "category": "Special Rolls / 8 pieces",
    "items": [
      { "name": "Vegetarian Special", "price": "185,-", "desc": "Avocado, cucumber, apple topped with Philadelphia, strawberry", "lines": [], "allergens": "Allergens: dairy, egg, soy, sesame" },
      { "name": "NEW Crunchy Tuna", "price": "195,-", "desc": "Tuna, pickled radish (daikon), sriracha and masago arare", "lines": [], "allergens": "Allergens: fish, sesame" },
      { "name": "Tempura Special", "price": "219,-", "desc": "Tempura scampi, avocado, topped with flambéed salmon, yuzu mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: shellfish, fish, gluten, egg, soy, sesame" },
      { "name": "Tempura Strawberry", "price": "209,-", "desc": "Tempura scampi, avocado, cream cheese and strawberry, wasabi mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: shellfish, gluten, dairy, egg, soy, sesame, mustard" },
      { "name": "Salmon Strawberry", "price": "209,-", "desc": "Salmon, avocado, cream cheese and strawberry, wasabi mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: fish, dairy, egg, soy, sesame, mustard" },
      { "name": "Crunchy Roll", "price": "215,-", "desc": "Deep-fried scallop and flambéed salmon, yuzu mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: molluscs, gluten, egg, soy, sesame, fish" },
      { "name": "Special Tuna", "price": "219,-", "desc": "Tempura scampi, seaweed salad, tuna, wasabi mayo and sriracha", "lines": [], "allergens": "Allergens: shellfish, fish, gluten, egg, sesame, mustard" },
      { "name": "Philadelphia Roll", "price": "195,-", "desc": "Salmon, spring onion and cream cheese", "lines": [], "allergens": "Allergens: fish, dairy, sesame" },
      { "name": "Duck Roll", "price": "209,-", "desc": "Deep-fried duck breast, cucumber, cream cheese, strawberry, wasabi mayo and teriyaki sauce", "lines": [], "allergens": "Allergens: gluten, dairy, egg, soy, sesame, mustard" },
      { "name": "Dragon Roll", "price": "209,-", "desc": "Tempura scampi, cream cheese, cucumber and avocado, topped with teriyaki sauce", "lines": [], "allergens": "Allergens: shellfish, wheat, dairy, egg, soy, sesame" }
    ]
  },
  {
    "category": "Set Menu",
    "items": [
      { "name": "Salmon Deluxe", "price": "429,-", "desc": "4 salmon sashimi, 4 salmon nigiri (2 flambéed, 2 regular), 1 salmon maki", "lines": ["4 salmon sashimi", "4 salmon nigiri (2 flambéed, 2 regular)", "1 salmon maki"], "allergens": "" },
      { "name": "Sushi Roll Mix", "price": "549,-", "desc": "6 sashimi (chef's choice), 4 nigiri (chef's choice), 1 maki (chef's choice)", "lines": ["6 sashimi (chef's choice)", "4 nigiri (chef's choice)", "1 maki (chef's choice)"], "allergens": "" },
      { "name": "Maki Set (32 pieces)", "price": "759,-", "desc": "Spicy tuna, Fried salmon, Tempura special, Tempura strawberry", "lines": ["Spicy tuna", "Fried salmon", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Maki Set (46 pieces)", "price": "1099,-", "desc": "Hot roll, Spicy salmon, Spicy tuna, Fried salmon, Tempura special, Tempura strawberry", "lines": ["Hot roll", "Spicy salmon", "Spicy tuna", "Fried salmon", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Maki Set (54 pieces)", "price": "1299,-", "desc": "Hot roll, Spicy Salmon, Spicy tuna, Fried salmon, Crunchy roll, Tempura special, Tempura strawberry", "lines": ["Hot roll", "Spicy Salmon", "Spicy tuna", "Fried salmon", "Crunchy roll", "Tempura special", "Tempura strawberry"], "allergens": "" },
      { "name": "Special set for 2", "price": "1225,-", "desc": "Tempura salad, 6 sashimi, 6 nigiri, 24 pieces maki (chef's choice)", "lines": ["Tempura salad", "6 sashimi", "6 nigiri", "24 pieces maki (chef's choice)"], "allergens": "" },
      { "name": "Special set for 3", "price": "1449,-", "desc": "Tempura salad, 9 sashimi, 6 nigiri, 30 pieces maki (chef's choice)", "lines": ["Tempura salad", "9 sashimi", "6 nigiri", "30 pieces maki (chef's choice)"], "allergens": "" }
    ]
  },
  {
    "category": "Sauces",
    "items": [
      { "name": "Teriyaki Sauce", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: soy" },
      { "name": "Chili Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergens: egg, sesame" },
      { "name": "Spicy Mayo", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: egg, soy, fish, gluten" },
      { "name": "Jalapeno Sauce", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: no known allergens" },
      { "name": "Ponzu Sauce", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergens: soy" },
      { "name": "Yuzu Ponzu Sauce", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergens: soy" },
      { "name": "Sweet Truffle Ponzu", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: soy" },
      { "name": "Yuzu Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergens: egg, soy" },
      { "name": "Wasabi Mayo", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergens: egg, mustard" },
      { "name": "Onion Yuzu Dressing", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: no known allergens" },
      { "name": "Yuzu Emulsion (Vegan)", "price": "40,-", "desc": "", "lines": [], "allergens": "Allergens: no known allergens" },
      { "name": "Sweet Chili Sauce", "price": "35,-", "desc": "", "lines": [], "allergens": "Allergens: no known allergens" },
      { "name": "Soya", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergens: soy" },
      { "name": "Glutenfree Soya", "price": "30,-", "desc": "", "lines": [], "allergens": "Allergens: soy" }
    ]
  },
  {
    "category": "Soft drinks 0.33l",
    "items": [
      { "name": "Cola", "price": "50,-", "desc": "", "lines": [], "allergens": "" },
      { "name": "Cola Zero", "price": "50,-", "desc": "", "lines": [], "allergens": "" }
    ]
  }
];
