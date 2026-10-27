// ===== EDIT ME: everything on the site comes from this file =====
// To add an item: copy a line inside a list, paste below it, change the text. Mind the commas.
// To add a photo: put it in the images/ folder, then write its path like "images/mypic.jpg".
const SITE = {
  lines: [  // the rotating lines on the home page
    "I hunt tiny shapes inside giant graphs.",
    "I write poems. Same brain, different bugs.",
    "Theory person. Yes, the fun kind."
  ],
  quote: ["कहकशां की हर अदा को शिद्दतें जब रास आईं,", "चुनौतियां उन जगनुओं की आफ़ताब को भी भाईं", "— अज़ीज़"],
  research: "Take a big graph and a tiny pattern (a path, a cycle). Does the pattern hide inside? And how fast can we find out? I use polynomial methods and automorphism parity to answer that.",
  thesis: [
    ["Semester 1: Data", "Single-linkage clustering on high-dimensional data. Coded in Python, tested on real institutional datasets."],
    ["Semester 2: Music", "Ranking Swara permutations in Rev-Colex order, plus their metrical patterns. Also coded in Python."]
  ],
  preprints: [  {title:"Faster Algorithms for Finding Small Induced Patterns in Sparse Host Graphs", info:"P. Agrawal, B. Komarath · IIT Gandhinagar/arXiv", link:"https://arxiv.org/abs/2610.00567"}
  ],
  conferences_attended: [
    ["2026", "FSTTCS, BITS Pilani Goa"], ["2025", "Frontiers of Graph Algorithms, IISc Bangalore"],
    ["2024", "FSTTCS, IIT Gandhinagar"], ["2024", "Frontiers of Geometric Algorithms, IISc Bangalore"]
  ],
  teaching: [["5 semesters", "Teaching Assistant, IIT Gandhinagar"] , ["2024-25","Discrete Mathematics"], ["2024-25","Data Structures and Algorithms 2"], ["2025-26","Algorithms"], ["2025-26","Theory of computing"],["2026-27","Operating Systems"], ], // add course names here
  roles: [
    ["2025–26", "LitSoc Secretary, Literary Club, IITGN"], ["2025–26", "Co-organiser, CS Theory Seminar Series"],
    ["2024", "Content Analyst, TEDxIITGandhinagar"], ["now", "Core member, Ahmedabad Literary Society"]
  ],
  education: [
    ["2024–", "PhD, Computer Science · IIT Gandhinagar"], ["2022–24", "M.Sc. Mathematics · IIT Gandhinagar"],
    ["2019–22", "B.Sc. Mathematics · St. Xavier's, Ahmedabad"]
  ],
  wins: {
    "Academic": [
      "World Rank 47, State Rank 1: International Informatics Olympiad (2017)",
      "Early Admit M.Sc., IITGN, out of 500 applicants (2022)",
      "A.R. Rao Mathematics Competition: certified (2022)",
      "Zonal Topper: Mimamsa, IISER Pune (2022)",
      "Gold ×2: Insight Coding Competition, LDCE (2020, 2022)"
    ],
    "Cultural": [
      "Unkahi, IITGN: winner (2023–2026)",
      "Kavyanjali, PDEU: winner",
      "Poetry, DA-IICT Cultural Meet: winner (2025)",
      "Top 16 Poets of India: Kshitij Poetry Foundation (2023)",
      "Inter IIT Cultural Meet 7.0: wrote & directed the winning street play",
      "Inter IIT Cultural Meet 8.0: participant"
    ],
    "Sports & service": [
      "Wushu: 2× Gold (District), 2× Bronze (State), 2014–15",
      "NCC: Leading Cadet, 'A' grade in B & C certificates",
      "NSS volunteer, 2019–22"
    ]
  },
  hobbies: [ // t=title, d=one-liner, img=photo path (or ""), icon=shown when there's no photo
    {t: "Poetry", d: "Words that rhyme on purpose.", img: "images/poet.jpeg", icon: "book"},
    {t: "Rap", d: "Poetry, with a beat and fewer apologies.", img: "", icon: "mic"},
    {t: "Instruments", d: "Flute, guitar, harmonium, kalimba. Self-taught.", img: "images/flute.jpeg", icon: "flute"},
    {t: "Cubing", d: "2×2 and 3×3, blindfolded. Yes, really.", img: "", icon: "cube"},
    {t: "3D Origami", d: "Paper, patience, one very proud peacock.", img: "images/peacock.jpeg", icon: "cube"},
    {t: "Stories & books", d: "I write short stories and read a lot.", img: "", icon: "book"},
    {t: "Gym · swim · cycle", d: "The counterweight to all the sitting.", img: "", icon: "bell"}
  ],
  gallery: [ // src, caption
    {src: "images/performance-mic.jpeg", cap: "On the mic"},
    {src: "images/kavyanjali.png", cap: "Kavyanjali"},
    {src: "images/feministlitfest.jpeg", cap: "Feminist Lit Fest opening poem, 8 Mar 2026"},
    {src: "images/street.jpeg", cap: "Inter IIT Cultural Meet"},
    {src: "images/IIScpoem.jpeg", cap: "Even TCS talks come with poetry. IISc Bangalore"},
    {src: "images/IISc.jpeg", cap: "IISc Bangalore"},
    {src: "images/peacock.jpeg", cap: "3D origami peacock"},
    {src: "images/portrait-night.jpeg", cap: ""}
  ],
  poems: [ // {title, date, text}. Use \n for line breaks, or write between backticks ` ` to paste with real line breaks.
    {title: "Poem title", date: "2026", text: "Coming soon."},
    {title: "Another title", date: "2026", text: "Coming soon."}
  ],
  contact: [
    ["email", "agrawalpriyanshi@iitgn.ac.in", "mailto:agrawalpriyanshi@iitgn.ac.in"],
    ["linkedin", "priyanshicode", "https://www.linkedin.com/in/priyanshicode/"],
    ["instagram", "@kalakaarazeez", "https://www.instagram.com/kalakaarazeez/"]
  ]
};
