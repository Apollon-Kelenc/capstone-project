export const quiz = {
  start: {
    question: 'Was möchtest du Essen?',
    remaining: 3,
    answers: [
      {
        label: 'Seafood',
        nextQuestion: 'seafood',
        filter: 'Seafood',
      },
      {
        label: 'Fleisch',
        nextQuestion: 'fleisch',
        filter: 'Fleisch',
      },
      {
        label: 'Vegetarisch',
        nextQuestion: 'vegetarisch',
        filter: 'Vegetarisch',
      },
      {
        label: 'Käse',
        nextQuestion: 'käse',
        filter: 'Käse',
      },
      {
        label: 'Nachtisch',
        nextQuestion: 'nachtisch',
        filter: 'Nachtisch',
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
        filter: 'Thunfisch',
      },
      {
        label: 'Lachs',
        nextQuestion: 'wein',
        filter: 'Lachs',
      },
      {
        label: 'Muscheln',
        nextQuestion: 'wein',
        filter: 'Muscheln',
      },
      {
        label: 'Hummer',
        nextQuestion: 'wein',
        filter: 'Hummer',
      },
      {
        label: 'Kraben',
        nextQuestion: 'wein',
        filter: 'Kraben',
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
        filter: 'Hähnchen',
      },
      {
        label: 'Ente',
        nextQuestion: 'wein',
        filter: 'Ente',
      },
      {
        label: 'Schwein',
        nextQuestion: 'wein',
        filter: 'Schwein',
      },
      {
        label: 'Lamm',
        nextQuestion: 'wein',
        filter: 'Lamm',
      },
      {
        label: 'Rind',
        nextQuestion: 'wein',
        filter: 'Rind',
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
        filter: 'Salat',
      },
      {
        label: 'Kartoffeln',
        nextQuestion: 'wein',
        filter: 'Kartoffeln',
      },
      {
        label: 'Plize',
        nextQuestion: 'wein',
        filter: 'Plize',
      },
      {
        label: 'Chillis',
        nextQuestion: 'wein',
        filter: 'Chillis',
      },
      {
        label: 'Pasta',
        nextQuestion: 'wein',
        filter: 'Pasta',
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
        filter: 'Ziegenkäse',
      },
      {
        label: 'Parmesan',
        nextQuestion: 'wein',
        filter: 'Parmesan',
      },
      {
        label: 'Cheddar',
        nextQuestion: 'wein',
        filter: 'Cheddar',
      },
      {
        label: 'Blauschimmel',
        nextQuestion: 'wein',
        filter: 'Blauschimmel',
      },
      {
        label: 'Brie',
        nextQuestion: 'wein',
        filter: 'Brie',
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
        filter: 'Früchte',
      },
      {
        label: 'Schokolade',
        nextQuestion: 'wein',
        filter: 'Schokolade',
      },
      {
        label: 'Kuchen',
        nextQuestion: 'wein',
        filter: 'Kuchen',
      },
    ],
  },
  wein: {
    question: 'Wähle deine Wein vorliebe',
    remaining: 1,
    answers: [
      {
        label: 'Trocken',
        filter: 'Trocken',
      },
      {
        label: 'Süß',
        filter: 'Süß',
      },
    ],
  },
};

// urls:
/*

/index.js  => /
/quiz/[question].js => /quiz/start, /quiz/seafood


*/
