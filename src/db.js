const db = {
  burgers: [
    {
      id: 1,
      name: {
        eng: "Hamburger",
        ru: "Гамбургер",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Hamburger.jpg"
      },
      engridients: {
        bread: 2,
        cutlet: 1,
        cucumber: 2,
        cheese: 0,
        cutletXL: 0,
        salad: 0,
        onion: 0
      },
      totalCost: 16
    },
    {
      id: 2,
      name: {
        eng: "Cheeseburger",
        ru: "Чизбургер",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Cheeseburger.jpg"
      },
      engridients: {
        bread: 2,
        cutlet: 1,
        cucumber: 2,
        cheese: 1,
        cutletXL: 0,
        salad: 0,
        onion: 0
      },
      totalCost: 19
    },
    {
      id: 3,
      name: {
        eng: "BigMac",
        ru: "Бигмак",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg"
      },
      engridients: {
        bread: 3,
        cutlet: 2,
        cucumber: 3,
        cheese: 1,
        cutletXL: 0,
        salad: 1,
        onion: 0
      },
      totalCost: 37
    },
    {
      id: 4,
      name: {
        eng: "Royal Cheesburger",
        ru: "РоялЧизбургер",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Quarter-Pounder-with-Cheese.jpg"
      },
      engridients: {
        bread: 2,
        cutlet: 0,
        cucumber: 2,
        cheese: 1,
        cutletXL: 1,
        salad: 0,
        onion: 1
      },
      totalCost: 30
    },
    {
      id: 5,
      name: {
        eng: "Royal Cheesburger Delux",
        ru: "РоялЧизбургер Делюкс",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-qpc-deluxe-burger.jpg"
      },
      engridients: {
        bread: 2,
        cutlet: 0,
        cucumber: 3,
        cheese: 2,
        cutletXL: 1,
        salad: 2,
        onion: 1
      },
      totalCost: 45
    },
    {
      id: 6,
      name: {
        eng: "Double Cheeseburger",
        ru: "ДаблЧизбургер",
        imgUrl:
          "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Cheeseburger.jpg"
      },
      engridients: {
        bread: 2,
        cutlet: 2,
        cucumber: 2,
        cheese: 1,
        cutletXL: 0,
        salad: 0,
        onion: 1
      },
      totalCost: 30
    }
  ],
  cost: {
    main: 5,
    bread: 1,
    cutlet: 10,
    cucumber: 2,
    cheese: 3,
    cutletXL: 20,
    salad: 5,
    onion: 1
  },
  currentBurger: {},
  order: []
};

export default db;
