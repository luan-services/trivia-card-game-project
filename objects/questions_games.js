const questionsGames = [
  {
    question: "Quantas cópias de 'Minecraft' foram vendidas até 2025 (em milhões)?",
    answer: 300,
    fact: "'Minecraft' é o jogo mais vendido de todos os tempos, com um mundo de blocos infinito.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Grand Theft Auto' foram lançados até 2025?",
    answer: 7,
    fact: "A série GTA é famosa por seus mundos abertos e narrativas controversas.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Tetris' foram vendidas até 2025 (em milhões)?",
    answer: 500,
    fact: "'Tetris' é um dos jogos mais icônicos, jogado em quase todas as plataformas.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Super Smash Bros. Ultimate'?",
    answer: 89,
    fact: "'Super Smash Bros. Ultimate' reúne personagens de várias franquias da Nintendo.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'The Legend of Zelda: Breath of the Wild' foram vendidas até 2025 (em milhões)?",
    answer: 30,
    fact: "'Breath of the Wild' revolucionou os jogos de mundo aberto com sua liberdade.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Pokémon' principal foram lançados até 2025?",
    answer: 9,
    fact: "A série principal de Pokémon inclui jogos como 'Red/Blue' e 'Scarlet/Violet'.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'GTA V' foram vendidas até 2025 (em milhões)?",
    answer: 200,
    fact: "'GTA V' é um dos jogos mais lucrativos da história, com um modo online robusto.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Super Mario Bros.' original?",
    answer: 32,
    fact: "'Super Mario Bros.' de 1985 é um marco dos jogos de plataforma.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Fortnite' foram baixadas até 2025 (em milhões)?",
    answer: 500,
    fact: "'Fortnite' popularizou o gênero battle royale e a cultura de jogos gratuitos.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Call of Duty' foram lançados até 2025?",
    answer: 18,
    fact: "A série 'Call of Duty' é conhecida por seus jogos de tiro em primeira pessoa.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'The Witcher 3: Wild Hunt' foram vendidas até 2025 (em milhões)?",
    answer: 75,
    fact: "'The Witcher 3' é elogiado por sua narrativa profunda e mundo detalhado.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Street Fighter V' em 2025?",
    answer: 45,
    fact: "'Street Fighter V' é um dos jogos de luta mais populares do mundo.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Animal Crossing: New Horizons' foram vendidas até 2025 (em milhões)?",
    answer: 45,
    fact: "'Animal Crossing: New Horizons' explodiu em popularidade durante a pandemia de 2020.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Final Fantasy' principal foram lançados até 2025?",
    answer: 16,
    fact: "'Final Fantasy' é uma das séries de RPG mais influentes da história.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Red Dead Redemption 2' foram vendidas até 2025 (em milhões)?",
    answer: 61,
    fact: "'Red Dead Redemption 2' é elogiado por seu mundo aberto detalhado e história épica.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Sonic the Hedgehog' original?",
    answer: 19,
    fact: "'Sonic the Hedgehog' de 1991 lançou o mascote da Sega ao estrelato.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'FIFA 23' foram vendidas até 2025 (em milhões)?",
    answer: 35,
    fact: "'FIFA 23' é um dos jogos de esportes mais populares, com milhões de jogadores online.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Resident Evil' foram lançados até 2025?",
    answer: 10,
    fact: "'Resident Evil' é uma das séries mais icônicas do gênero survival horror.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Cyberpunk 2077' foram vendidas até 2025 (em milhões)?",
    answer: 25,
    fact: "'Cyberpunk Rabbit' teve um lançamento conturbado, mas se recuperou com atualizações.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Overwatch' em 2025?",
    answer: 38,
    fact: "'Overwatch' é um jogo de tiro em equipe com heróis únicos e habilidades variadas.",
    category: "Games"
  },
  {
    question: 26,
    fact: "'Super Mario Odyssey' é um dos jogos mais aclamados do Nintendo Switch.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Assassin's Creed' foram lançados até 2025?",
    answer: 13,
    fact: "'Assassin's Creed' é conhecido por suas histórias históricas e mundos abertos.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Among Us' foram baixadas até 2025 (em milhões)?",
    answer: 500,
    fact: "'Among Us' virou febre em 2020, com sua jogabilidade de traição e trabalho em equipe.",
    category: "Games"
  },
  {
    question: 50,
    fact: "'Portal 2' é elogiado por seus puzzles inteligentes e narrativa divertida.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Elden Ring' foram vendidas até 2025 (em milhões)?",
    answer: 25,
    fact: "'Elden Ring' é um RPG de ação aclamado, criado pela FromSoftware e George R.R. Martin.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'The Elder Scrolls' principal foram lançados até 2025?",
    answer: 5,
    fact: "'The Elder Scrolls V: Skyrim' é um dos jogos mais icônicos da série.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Wii Sports' foram vendidas até 2025 (em milhões)?",
    answer: 82,
    fact: "'Wii Sports' foi um marco para o Nintendo Wii, popularizando jogos com controles de movimento.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Mortal Kombat 11' em 2025?",
    answer: 37,
    fact: "'Mortal Kombat 11' é conhecido por seus combates brutais e fatalities.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Horizon Zero Dawn' foram vendidas até 2025 (em milhões)?",
    answer: 20,
    fact: "'Horizon Zero Dawn' apresenta um mundo pós-apocalíptico com criaturas robóticas.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'FIFA' foram lançados até 2025?",
    answer: 30,
    fact: "A série 'FIFA' é a mais popular entre jogos de futebol, lançada anualmente.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'The Legend of Zelda: Tears of the Kingdom' foram vendidas até 2025 (em milhões)?",
    answer: 20,
    fact: "'Tears of the Kingdom' é a sequência de 'Breath of the Wild', lançada em 2023.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Tekken 8' em 2025?",
    answer: 32,
    fact: "'Tekken 8' continua a tradição de combates intensos da série de luta.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Spider-Man' (2018) foram vendidas até 2025 (em milhões)?",
    answer: 20,
    fact: "'Spider-Man' de 2018 é um dos jogos mais aclamados do PS4.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Dark Souls' foram lançados até 2025?",
    answer: 3,
    fact: "'Dark Souls' é conhecido por sua dificuldade implacável e design brilhante.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'God of War' (2018) foram vendidas até 2025 (em milhões)?",
    answer: 23,
    fact: "'God of War' reinventou a série com uma narrativa emocional e combates épicos.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Super Mario World'?",
    answer: 96,
    fact: "'Super Mario World' de 1990 é um clássico do Super Nintendo.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Halo Infinite' foram vendidas até 2025 (em milhões)?",
    answer: 15,
    fact: "'Halo Infinite' trouxe de volta o Master Chief com um modo multiplayer gratuito.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Metal Gear Solid' foram lançados até 2025?",
    answer: 6,
    fact: "'Metal Gear Solid' é conhecido por sua narrativa complexa e stealth.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Super Mario Kart' foram vendidas até 2025 (em milhões)?",
    answer: 8,
    fact: "'Super Mario Kart' de 1992 lançou a série de corridas da Nintendo.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Dragon Ball FighterZ' em 2025?",
    answer: 43,
    fact: "'Dragon Ball FighterZ' é um jogo de luta com gráficos inspirados no anime.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Ghost of Tsushima' foram vendidas até 2025 (em milhões)?",
    answer: 10,
    fact: "'Ghost of Tsushima' é um épico samurai de mundo aberto.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Far Cry' foram lançados até 2025?",
    answer: 6,
    fact: "'Far Cry' é conhecido por seus vilões carismáticos e mundos abertos.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Splatoon 3' foram vendidas até 2025 (em milhões)?",
    answer: 12,
    fact: "'Splatoon 3' continua a série de tiro colorida da Nintendo.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Celeste'?",
    answer: 700,
    fact: "'Celeste' é um indie aclamado por sua jogabilidade e narrativa emocional.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Sekiro: Shadows Die Twice' foram vendidas até 2025 (em milhões)?",
    answer: 10,
    fact: "'Sekiro' é um jogo de ação desafiador da FromSoftware.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Battlefield' foram lançados até 2025?",
    answer: 12,
    fact: "'Battlefield' é conhecido por suas batalhas em grande escala.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Stardew Valley' foram vendidas até 2025 (em milhões)?",
    answer: 20,
    fact: "'Stardew Valley' é um indie de simulação de fazenda amado por milhões.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Genshin Impact' em 2025?",
    answer: 80,
    fact: "'Genshin Impact' é um RPG gratuito com um vasto mundo aberto.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Hollow Knight' foram vendidas até 2025 (em milhões)?",
    answer: 4,
    fact: "'Hollow Knight' é um metroidvania indie com uma atmosfera única.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Mass Effect' principal foram lançados até 2025?",
    answer: 4,
    fact: "'Mass Effect' é conhecido por sua narrativa de ficção científica épica.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Persona 5' foram vendidas até 2025 (em milhões)?",
    answer: 8,
    fact: "'Persona 5' é um RPG japonês aclamado por seu estilo visual.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Super Meat Boy'?",
    answer: 300,
    fact: "'Super Meat Boy' é um indie de plataforma conhecido por sua dificuldade.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Monster Hunter: World' foram vendidas até 2025 (em milhões)?",
    answer: 18,
    fact: "'Monster Hunter: World' popularizou a série globalmente.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Gran Turismo' foram lançados até 2025?",
    answer: 7,
    fact: "'Gran Turismo' é a série de corrida mais realista da PlayStation.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Rocket League' foram baixadas até 2025 (em milhões)?",
    answer: 75,
    fact: "'Rocket League' combina futebol com carros em um jogo gratuito.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Apex Legends' em 2025?",
    answer: 25,
    fact: "'Apex Legends' é um battle royale da Respawn Entertainment.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Bloodborne' foram vendidas até 2025 (em milhões)?",
    answer: 7,
    fact: "'Bloodborne' é um exclusivo de PS4 com uma atmosfera gótica.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Uncharted' foram lançados até 2025?",
    answer: 5,
    fact: "'Uncharted' é conhecido por suas aventuras cinematográficas.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Super Smash Bros. for Wii U' foram vendidas até 2025 (em milhões)?",
    answer: 5,
    fact: "'Super Smash Bros. for Wii U' precedeu o 'Ultimate' na série.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Cuphead'?",
    answer: 30,
    fact: "'Cuphead' é um indie com estilo de animação dos anos 1930.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'The Last of Us Part II' foram vendidas até 2025 (em milhões)?",
    answer: 10,
    fact: "'The Last of Us Part II' é elogiado por sua narrativa emocional.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'BioShock' foram lançados até 2025?",
    answer: 3,
    fact: "'BioShock' é conhecido por sua narrativa distópica e imersiva.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Mario Party Superstars' foram vendidas até 2025 (em milhões)?",
    answer: 10,
    fact: "'Mario Party Superstars' reviveu tabuleiros clássicos da série.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Naruto: Ultimate Ninja Storm 4'?",
    answer: 106,
    fact: "'Naruto: Ultimate Ninja Storm 4' é um jogo de luta baseado no anime.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Death Stranding' foram vendidas até 2025 (em milhões)?",
    answer: 5,
    fact: "'Death Stranding' é uma obra única de Hideo Kojima.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Dragon Quest' principal foram lançados até 2025?",
    answer: 11,
    fact: "'Dragon Quest' é uma das séries de RPG mais populares do Japão.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Fallout 4' foram vendidas até 2025 (em milhões)?",
    answer: 15,
    fact: "'Fallout 4' é um RPG pós-apocalíptico da Bethesda.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Geometry Dash'?",
    answer: 21,
    fact: "'Geometry Dash' é um jogo de plataforma rítmico e desafiador.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Nier: Automata' foram vendidas até 2025 (em milhões)?",
    answer: 7,
    fact: "'Nier: Automata' é um RPG de ação com uma narrativa filosófica.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Kingdom Hearts' foram lançados até 2025?",
    answer: 13,
    fact: "'Kingdom Hearts' mistura personagens da Disney e Final Fantasy.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Destiny 2' foram baixadas até 2025 (em milhões)?",
    answer: 40,
    fact: "'Destiny 2' é um shooter online com expansões regulares.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'Valorant' em 2025?",
    answer: 24,
    fact: "'Valorant' é um shooter tático gratuito da Riot Games.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Undertale' foram vendidas até 2025 (em milhões)?",
    answer: 3,
    fact: "'Undertale' é um indie RPG com uma narrativa única.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Tomb Raider' principal foram lançados até 2025?",
    answer: 12,
    fact: "'Tomb Raider' segue as aventuras de Lara Croft.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Luigi's Mansion 3' foram vendidas até 2025 (em milhões)?",
    answer: 12,
    fact: "'Luigi's Mansion 3' é um jogo de aventura da Nintendo.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Hades'?",
    answer: 69,
    fact: "'Hades' é um roguelike indie com uma narrativa mitológica.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Control' foram vendidas até 2025 (em milhões)?",
    answer: 4,
    fact: "'Control' é um jogo de ação com elementos sobrenaturais.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Yakuza' principal foram lançados até 2025?",
    answer: 8,
    fact: "'Yakuza' é conhecido por sua narrativa de máfia japonesa.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Bayonetta 3' foram vendidas até 2025 (em milhões)?",
    answer: 3,
    fact: "'Bayonetta 3' é um jogo de ação exclusivo do Nintendo Switch.",
    category: "Games"
  },
  {
    question: "Quantos jogos da série 'Metroid' principal foram lançados até 2025?",
    answer: 6,
    fact: "'Metroid' é uma série de aventura e exploração, liderada por Samus Aran.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'Fire Emblem: Three Houses' foram vendidas até 2025 (em milhões)?",
    answer: 4,
    fact: "'Fire Emblem: Three Houses' é um RPG tático de grande sucesso.",
    category: "Games"
  },
  {
    question: "Quantos personagens jogáveis tem 'League of Legends' em 2025?",
    answer: 165,
    fact: "'League of Legends' é um dos maiores jogos de MOBA do mundo.",
    category: "Games"
  },
  {
    question: "Quantas cópias de 'DOOM Eternal' foram vendidas até 2025 (em milhões)?",
    answer: 6,
    fact: "'DOOM Eternal' é um shooter frenético com combates intensos.",
    category: "Games"
  },
  {
    question: "Quantos níveis tem o jogo 'Ori and the Will of the Wisps'?",
    answer: 12,
    fact: "'Ori and the Will of the Wisps' é um metroidvania com visuais deslumbrantes.",
    category: "Games"
  }
];