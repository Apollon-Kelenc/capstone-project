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
        label: 'Thunfisch',
        nextQuestion: 'wein',
      },
      {
        label: 'Lachs',
        nextQuestion: 'wein',
      },
      {
        label: 'Muscheln',
        nextQuestion: 'wein',
      },
      {
        label: 'Hummer',
        nextQuestion: 'wein',
      },
      {
        label: 'Kraben',
        nextQuestion: 'wein',
      },
    ],
  },
  fleisch: {
    question: 'Wähle deine Fleischsorte',
    remaining: 2,
    answers: [
      {
        label: 'Hähnchen',
        nextQuestion: 'wein',
      },
      {
        label: 'Ente',
        nextQuestion: 'wein',
      },
      {
        label: 'Schwein',
        nextQuestion: 'wein',
      },
      {
        label: 'Lamm',
        nextQuestion: 'wein',
      },
      {
        label: 'Rind',
        nextQuestion: 'wein',
      },
    ],
  },
  vegetarisch: {
    question: 'Wähle eine Zutat aus',
    remaining: 2,
    answers: [
      {
        label: 'Salat',
        nextQuestion: 'wein',
      },
      {
        label: 'Kartoffeln',
        nextQuestion: 'wein',
      },
      {
        label: 'Plize',
        nextQuestion: 'wein',
      },
      {
        label: 'Chillis',
        nextQuestion: 'wein',
      },
      {
        label: 'Pasta',
        nextQuestion: 'wein',
      },
    ],
  },
  käse: {
    question: 'Wähle deine Käsesorte',
    remaining: 2,
    answers: [
      {
        label: 'Ziegenkäse',
        nextQuestion: 'wein',
      },
      {
        label: 'Parmesan',
        nextQuestion: 'wein',
      },
      {
        label: 'Cheddar',
        nextQuestion: 'wein',
      },
      {
        label: 'Blauschimmel',
        nextQuestion: 'wein',
      },
      {
        label: 'Brie',
        nextQuestion: 'wein',
      },
    ],
  },
  nachtisch: {
    question: 'Wähle dein Nachtisch',
    remaining: 2,
    answers: [
      {
        label: 'Früchte',
        nextQuestion: 'wein',
      },
      {
        label: 'Schokolade',
        nextQuestion: 'wein',
      },
      {
        label: 'Kuchen',
        nextQuestion: 'wein',
      },
    ],
  },
  wein: {
    question: 'Wähle deine Wein vorliebe',
    remaining: 1,
    answers: [
      {
        label: 'Trocken',
        nextQuestion: 'wein',
      },
      {
        label: 'Süß',
        nextQuestion: 'wein',
      },
    ],
  },
};

// urls:
/*

/index.js  => /
/quiz/[question].js => /quiz/start, /quiz/seafood


*/
