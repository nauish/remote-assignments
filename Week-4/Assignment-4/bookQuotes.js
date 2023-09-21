const bookQuotes = [
  {
    title: "To Kill a Mockingbird",
    quote:
      "You never really understand a person until you consider things from his point of view.",
  },
  {
    title: "1984",
    quote: "War is peace. Freedom is slavery. Ignorance is strength.",
  },
  {
    title: "Pride and Prejudice",
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  },
  {
    title: "The Great Gatsby",
    quote:
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
  },
  {
    title: "The Catcher in the Rye",
    quote: "All morons hate it when you call them a moron.",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    quote: "It does not do to dwell on dreams and forget to live.",
  },
  {
    title: "The Lord of the Rings",
    quote: "Not all those who wander are lost.",
  },
  {
    title: "The Hobbit",
    quote: "In a hole in the ground, there lived a hobbit.",
  },
  {
    title: "Moby-Dick",
    quote: "Call me Ishmael.",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    quote: "Don't panic.",
  },
  {
    title: "Brave New World",
    quote: "Happiness is a hard master—particularly other people's happiness.",
  },
  {
    title: "The Road",
    quote:
      "You forget what you want to remember, and you remember what you want to forget.",
  },
  {
    title: "Frankenstein",
    quote:
      "I do know that for the sympathy of one living being, I would make peace with all. I have love in me the likes of which you can scarcely imagine.",
  },
  {
    title: "The Shining",
    quote: "All work and no play makes Jack a dull boy.",
  },
  {
    title: "The Old Man and the Sea",
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
  },
  {
    title: "Alice's Adventures in Wonderland",
    quote:
      "If you don’t know where you are going, any road can take you there.",
  },
  {
    title: "Fahrenheit 451",
    quote:
      "There must be something in books, things we can’t imagine, to make a woman stay in a burning house; there must be something there. You don’t stay for nothing.",
  },
  {
    title: "The Road Less Traveled",
    quote:
      "Life is difficult. This is a great truth, one of the greatest truths.",
  },
  {
    title: "The Alchemist",
    quote:
      "And, when you want something, all the universe conspires in helping you to achieve it.",
  },
  {
    title: "The Little Prince",
    quote:
      "One sees clearly only with the heart. What is essential is invisible to the eye.",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    quote: "Once a king or queen of Narnia, always a king or queen of Narnia.",
  },
  {
    title: "The Road Not Taken",
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.",
  },
  {
    title: "The Grapes of Wrath",
    quote:
      "And the great owners, who must lose their land in an upheaval, the great owners with access to history, with eyes to read history and to know the great fact: when property accumulates in too few hands it is taken away.",
  },
  {
    title: "One Hundred Years of Solitude",
    quote: "It's enough for me to be sure that you and I exist at this moment.",
  },
  {
    title: "The Giver",
    quote:
      "The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.",
  },
  {
    title: "The Art of War",
    quote: "The supreme art of war is to subdue the enemy without fighting.",
  },
  {
    title: "The Odyssey",
    quote:
      "Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.",
  },
  {
    title: "Crime and Punishment",
    quote: "Man grows used to everything, the scoundrel!",
  },
  {
    title: "The Sun Also Rises",
    quote:
      "You can't get away from yourself by moving from one place to another.",
  },
  {
    title: "The Picture of Dorian Gray",
    quote: "The only way to get rid of a temptation is to yield to it.",
  },
  {
    title: "The Scarlet Letter",
    quote:
      "No man, for any considerable period, can wear one face to himself and another to the multitude, without finally getting bewildered as to which may be the true.",
  },
  {
    title: "The Count of Monte Cristo",
    quote: "All human wisdom is contained in these two words - Wait and Hope.",
  },
  {
    title: "A Tale of Two Cities",
    quote: "It was the best of times, it was the worst of times.",
  },
  {
    title: "The Brothers Karamazov",
    quote:
      "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
  },
  {
    title: "Anna Karenina",
    quote:
      "All happy families are alike; each unhappy family is unhappy in its own way.",
  },
  {
    title: "The Grapes of Wrath",
    quote: "I ain't never gonna be scared no more. I was, though.",
  },
  {
    title: "The Adventures of Huckleberry Finn",
    quote:
      "Persons attempting to find a motive in this narrative will be prosecuted; persons attempting to find a moral in it will be banished; persons attempting to find a plot in it will be shot.",
  },
  {
    title: "The Divine Comedy",
    quote: "In His will is our peace.",
  },
  {
    title: "Wuthering Heights",
    quote: "Whatever our souls are made of, his and mine are the same.",
  },
  {
    title: "The Iliad",
    quote:
      "There is the heat of Love, the pulsing rush of Longing, the lover’s whisper, irresistible—magic to make the sanest man go mad.",
  },
  {
    title: "The Odyssey",
    quote:
      "Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.",
  },
  {
    title: "The Catcher in the Rye",
    quote: "People always clap for the wrong things.",
  },
  {
    title: "The Road",
    quote: "You have to carry the fire.",
  },
  {
    title: "The Old Man and the Sea",
    quote:
      "But man is not made for defeat. A man can be destroyed but not defeated.",
  },
  {
    title: "One Hundred Years of Solitude",
    quote: "It's enough for me to be sure that you and I exist at this moment.",
  },
  {
    title: "The Giver",
    quote:
      "The worst part of holding the memories is not the pain. It's the loneliness of it. Memories need to be shared.",
  },
  {
    title: "The Art of War",
    quote: "The supreme art of war is to subdue the enemy without fighting.",
  },
  {
    title: "The Odyssey",
    quote:
      "Of all creatures that breathe and move upon the earth, nothing is bred that is weaker than man.",
  },
  {
    title: "Crime and Punishment",
    quote: "Man grows used to everything, the scoundrel!",
  },
  {
    title: "The Sun Also Rises",
    quote:
      "You can't get away from yourself by moving from one place to another.",
  },
  {
    title: "The Handmaid's Tale",
    quote:
      "Nolite te bastardes carborundorum. Don't let the bastards grind you down.",
  },
  {
    title: "Slaughterhouse-Five",
    quote: "So it goes.",
  },
  {
    title: "The Road Less Traveled",
    quote:
      "Life is difficult. This is a great truth, one of the greatest truths.",
  },
  {
    title: "The Alchemist",
    quote:
      "And, when you want something, all the universe conspires in helping you to achieve it.",
  },
  {
    title: "The Little Prince",
    quote:
      "One sees clearly only with the heart. What is essential is invisible to the eye.",
  },
  {
    title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
    quote: "Once a king or queen of Narnia, always a king or queen of Narnia.",
  },
  {
    title: "The Road Not Taken",
    quote:
      "Two roads diverged in a wood, and I—I took the one less traveled by, and that has made all the difference.",
  },
  {
    title: "The Grapes of Wrath",
    quote:
      "And the great owners, who must lose their land in an upheaval, the great owners with access to history, with eyes to read history and to know the great fact: when property accumulates in too few hands it is taken away.",
  },
];

module.exports = bookQuotes;
