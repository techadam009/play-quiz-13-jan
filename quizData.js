// Quiz Data
const quizCategories = [
  {
    id: "general-knowledge",
    name: "General Knowledge",
    description: "Test your knowledge on a variety of topics",
    icon: "brain",
    questions: [
      {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3
      },
      {
        id: 4,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "science",
    name: "Science",
    description: "Explore the wonders of scientific knowledge",
    icon: "microscope",
    questions: [
      {
        id: 1,
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "sports",
    name: "Sports",
    description: "Challenge yourself with sports trivia",
    icon: "trophy",
    questions: [
      {
        id: 1,
        question: "How many players are on a soccer team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "In which sport would you perform a slam dunk?",
        options: ["Tennis", "Basketball", "Volleyball", "Baseball"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "How many Grand Slam tournaments are there in tennis?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 1
      },
      {
        id: 4,
        question: "What is the diameter of a basketball hoop in inches?",
        options: ["16", "18", "20", "22"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Germany", "Brazil", "France", "Argentina"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "movies",
    name: "Movies",
    description: "Test your cinema and film knowledge",
    icon: "film",
    questions: [
      {
        id: 1,
        question: "Who directed the movie 'Inception'?",
        options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Martin Scorsese"],
        correctAnswer: 1
      },
      {
        id: 2,
        question: "Which movie won the Academy Award for Best Picture in 2020?",
        options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What is the name of the fictional African country in Black Panther?",
        options: ["Wakanda", "Zamunda", "Genovia", "Latveria"],
        correctAnswer: 0
      },
      {
        id: 4,
        question: "How many Lord of the Rings movies are there?",
        options: ["2", "3", "4", "5"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "history",
    name: "History",
    description: "Journey through time with historical facts",
    icon: "book",
    questions: [
      {
        id: 1,
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2
      },
      {
        id: 2,
        question: "Who was the first President of the United States?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correctAnswer: 2
      },
      {
        id: 3,
        question: "What year did the Titanic sink?",
        options: ["1910", "1911", "1912", "1913"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "Which ancient wonder of the world still stands today?",
        options: ["Hanging Gardens of Babylon", "Great Pyramid of Giza", "Colossus of Rhodes", "Lighthouse of Alexandria"],
        correctAnswer: 1
      },
      {
        id: 5,
        question: "Who was known as the 'Maid of Orléans'?",
        options: ["Marie Antoinette", "Joan of Arc", "Catherine the Great", "Queen Elizabeth I"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "geography",
    name: "Geography",
    description: "Discover countries, capitals, and landmarks",
    icon: "globe",
    questions: [
      {
        id: 1,
        question: "What is the largest country by area?",
        options: ["Canada", "China", "United States", "Russia"],
        correctAnswer: 3
      },
      {
        id: 2,
        question: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: 1
      },
      {
        id: 3,
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2
      },
      {
        id: 4,
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correctAnswer: 2
      },
      {
        id: 5,
        question: "Mount Everest is located in which mountain range?",
        options: ["Alps", "Andes", "Rockies", "Himalayas"],
        correctAnswer: 3
      }
    ]
  }
];
