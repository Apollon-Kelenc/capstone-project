export const quiz = {
  start: {
    question: 'Was möchtest du Essen?',
    remaining: 3,
    answers: [
      {
        label: 'Seafood',
        nextQuestion: 'seafood',
      },
      {
        label: 'Fleisch',
        nextQuestion: 'fleisch',
      },
      {
        label: 'Vegetarisch',
        nextQuestion: 'vegetarisch',
      },
      {
        label: 'Käse',
        nextQuestion: 'käse',
      },
      {
        label: 'Nachtisch',
        nextQuestion: 'nachtisch',
      },
    ],
  },
  seafood: {
    question: 'Wähle dein Seafood',
    remaining: 2,
    answers: [
      {
        label: 'Tunfisch',
        nextQuestion: 'wine',
      },
      {
        label: 'Lachs',
        nextQuestion: 'wine',
      },
      {
        label: 'Muscheln',
        nextQuestion: 'random',
      },
      {
        label: 'Hummer',
        nextQuestion: 'wine',
      },
      {
        label: 'Kraben',
        nextQuestion: 'wine',
      },
    ],
  },
  fleisch: {
    question: 'Wähle deine Fleischsorte',
    remaining: 2,
    answers: [
      {
        label: 'Hähnchen',
        nextQuestion: 'wine',
      },
      {
        label: 'Ente',
        nextQuestion: 'wine',
      },
      {
        label: 'Schwein',
        nextQuestion: 'wine',
      },
      {
        label: 'Lamm',
        nextQuestion: 'wine',
      },
      {
        label: 'Rind',
        nextQuestion: 'wine',
      },
    ],
  },
  vegetarisch: {
    question: 'Wähle eine Zutat aus',
    remaining: 2,
    answers: [
      {
        label: 'Salat',
        nextQuestion: 'wine',
      },
      {
        label: 'Kartoffeln',
        nextQuestion: 'wine',
      },
      {
        label: 'Plize',
        nextQuestion: 'wine',
      },
      {
        label: 'Chillis',
        nextQuestion: 'wine',
      },
      {
        label: 'Pasta',
        nextQuestion: 'wine',
      },
      {
        label: 'Kürbis',
        nextQuestion: 'wine',
      },
    ],
  },
  käse: {
    question: 'Wähle deine Käsesorte',
    remaining: 2,
    answers: [
      {
        label: 'Ziegenkäse',
        nextQuestion: 'wine',
      },
      {
        label: 'Parmesan',
        nextQuestion: 'wine',
      },
      {
        label: 'Cheddar',
        nextQuestion: 'wine',
      },
      {
        label: 'Blauschimmel',
        nextQuestion: 'wine',
      },
      {
        label: 'Brie',
        nextQuestion: 'wine',
      },
    ],
  },
  nachtisch: {
    question: 'Wähle dein Nachtisch',
    remaining: 2,
    answers: [
      {
        label: 'Früchte',
        nextQuestion: 'wine',
      },
      {
        label: 'Schokolade',
        nextQuestion: 'wine',
      },
      {
        label: 'Kuchen',
        nextQuestion: 'wine',
      },
    ],
  },
  wine: {
    question: 'Wähle deine Wein vorliebe',
    remaining: 1,
    answers: [
      {
        label: 'Trocken',
        nextQuestion: 'wine',
      },
      {
        label: 'Süß',
        nextQuestion: 'wine',
      },
    ],
  },
};

// urls:
/*

/index.js  => /
/quiz/[question].js => /quiz/start, /quiz/seafood


*/
