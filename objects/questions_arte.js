const questionsArte = [
  {
    question: "Quantos quadros pintou Leonardo da Vinci, segundo registros históricos?",
    answer: 20,
    fact: "Leonardo é conhecido por obras-primas como 'Mona Lisa' e 'A Última Ceia'.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Michelangelo Buonarroti?",
    answer: 34,
    fact: "Michelangelo esculpiu obras como 'David' e 'Pietà'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas compõem a série 'Nenúfares' de Claude Monet?",
    answer: 250,
    fact: "Os 'Nenúfares' de Monet são ícones do Impressionismo.",
    category: "Arte"
  },
  {
    question: "Quantos autorretratos pintou Vincent van Gogh?",
    answer: 37,
    fact: "Van Gogh usou autorretratos para explorar sua identidade e técnica.",
    category: "Arte"
  },
  {
    question: "Quantas obras de Pablo Picasso estão catalogadas até 2025?",
    answer: 50000,
    fact: "Picasso produziu pinturas, esculturas, cerâmicas e desenhos em vários estilos.",
    category: "Arte"
  },
  {
    question: "Quantos afrescos pintou Rafael nas Salas do Vaticano?",
    answer: 4,
    fact: "Os afrescos de Rafael incluem a famosa 'Escola de Atenas'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Caravaggio estão preservadas em 2025?",
    answer: 80,
    fact: "Caravaggio é conhecido pelo uso dramático de luz e sombra no Barroco.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Frida Kahlo em sua carreira?",
    answer: 143,
    fact: "Frida Kahlo expressou sua dor e identidade em autorretratos vibrantes.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu do Louvre em 2025?",
    answer: 380000,
    fact: "O Louvre é o museu mais visitado do mundo, abrigando a 'Mona Lisa'.",
    category: "Arte"
  },
  {
    question: "Quantos painéis compõem o 'Jardim das Delícias Terrenas' de Hieronymus Bosch?",
    answer: 3,
    fact: "A obra de Bosch é um tríptico surreal do Renascimento, cheio de simbolismo.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Hermitage em São Petersburgo em 2025 (em milhões)?",
    answer: 3,
    fact: "O Hermitage possui uma das maiores coleções de arte do mundo.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Johannes Vermeer, segundo registros históricos?",
    answer: 34,
    fact: "Vermeer é conhecido por 'Moça com Brinco de Pérola' e seu uso de luz.",
    category: "Arte"
  },
  {
    question: "Quantos movimentos artísticos principais surgiram no século XX?",
    answer: 15,
    fact: "Movimentos como Cubismo, Surrealismo e Expressionismo marcaram o século XX.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas de Auguste Rodin estão catalogadas até 2025?",
    answer: 700,
    fact: "Rodin é famoso por 'O Pensador' e 'O Beijo'.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Edvard Munch em sua carreira?",
    answer: 1000,
    fact: "'O Grito' de Munch é uma das obras mais icônicas do Expressionismo.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Metropolitan Museum of Art em 2025?",
    answer: 2000000,
    fact: "O Met, em Nova York, abrange arte de todas as eras e culturas.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Gustav Klimt em sua carreira?",
    answer: 230,
    fact: "Klimt é conhecido por 'O Beijo' e seu estilo decorativo com ouro.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Diego Rivera estão catalogadas até 2025?",
    answer: 300,
    fact: "Rivera foi um muralista mexicano que retratou a história e a cultura do México.",
    category: "Arte"
  },
  {
    question: "Quantos afrescos compõem a Capela Sistina, pintados por Michelangelo?",
    answer: 9,
    fact: "O teto da Capela Sistina inclui cenas como 'A Criação de Adão'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de Andy Warhol estão catalogadas até 2025?",
    answer: 10000,
    fact: "Warhol foi um ícone da Pop Art, conhecido por 'Latas de Sopa Campbell'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Rembrandt van Rijn estão preservadas em 2025?",
    answer: 300,
    fact: "Rembrandt é conhecido por 'A Ronda Noturna' e seu uso de chiaroscuro.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu do Prado em Madri em 2025?",
    answer: 8000,
    fact: "O Prado abriga obras de Goya, Velázquez e El Greco.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Pierre-Auguste Renoir em sua carreira?",
    answer: 4000,
    fact: "Renoir foi um dos principais pintores do Impressionismo.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Gian Lorenzo Bernini?",
    answer: 60,
    fact: "Bernini foi um mestre do Barroco, conhecido por 'Apolo e Dafne'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Paul Cézanne estão catalogadas até 2025?",
    answer: 900,
    fact: "Cézanne é considerado um precursor do Cubismo e do Modernismo.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no British Museum em 2025 (em milhões)?",
    answer: 8,
    fact: "O British Museum possui artefatos como a Pedra de Roseta.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Henri Matisse em sua carreira?",
    answer: 1000,
    fact: "Matisse foi um líder do Fauvismo, conhecido por cores vibrantes.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Salvador Dalí estão catalogadas até 2025?",
    answer: 1500,
    fact: "Dalí foi um ícone do Surrealismo, famoso por 'A Persistência da Memória'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Uffizi em Florença em 2025?",
    answer: 10000,
    fact: "O Uffizi abriga obras-primas do Renascimento, como 'O Nascimento de Vênus' de Botticelli.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Wassily Kandinsky, pioneiro do abstracionismo?",
    answer: 600,
    fact: "Kandinsky explorou a relação entre cor, forma e emoção.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Constantin Brâncuși?",
    answer: 50,
    fact: "Brâncuși é conhecido por obras minimalistas como 'Pássaro no Espaço'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Jean-Michel Basquiat estão catalogadas até 2025?",
    answer: 2000,
    fact: "Basquiat foi um ícone do Neoexpressionismo, misturando arte de rua e crítica social.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Nacional de Tóquio em 2025?",
    answer: 110000,
    fact: "O museu abriga arte japonesa, incluindo ukiyo-e e cerâmicas.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Mary Cassatt em sua carreira?",
    answer: 300,
    fact: "Cassatt foi uma impressionista americana, conhecida por retratar mulheres e crianças.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Francisco Goya estão preservadas em 2025?",
    answer: 700,
    fact: "Goya é conhecido por 'Os Fuzilamentos de 3 de Maio' e suas 'Pinturas Negras'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Egípcio do Cairo em 2025?",
    answer: 120000,
    fact: "O museu abriga tesouros como o tesouro de Tutancâmon.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Paul Gauguin em sua carreira?",
    answer: 500,
    fact: "Gauguin é conhecido por suas pinturas vibrantes de Tahiti.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Donatello no Renascimento?",
    answer: 20,
    fact: "Donatello esculpiu obras como 'São Jorge' e 'Davi'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Jackson Pollock estão catalogadas até 2025?",
    answer: 400,
    fact: "Pollock foi um líder do Expressionismo Abstrato, conhecido por sua técnica de dripping.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte Moderna (MoMA) em 2025?",
    answer: 200000,
    fact: "O MoMA abriga obras modernas como 'Noite Estrelada' de Van Gogh.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Élisabeth Vigée Le Brun em sua carreira?",
    answer: 600,
    fact: "Le Brun foi uma retratista famosa na corte de Maria Antonieta.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Titian (Ticiano) estão preservadas em 2025?",
    answer: 400,
    fact: "Titian foi um mestre do Renascimento veneziano, conhecido por 'Vênus de Urbino'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Getty em Los Angeles em 2025?",
    answer: 7000,
    fact: "O Getty possui coleções de arte europeia e antiguidades.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Marc Chagall em sua carreira?",
    answer: 1000,
    fact: "Chagall misturou surrealismo e folclore em obras como 'Eu e a Aldeia'.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Henry Moore?",
    answer: 900,
    fact: "Moore é conhecido por suas esculturas abstratas e orgânicas.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Georgia O'Keeffe estão catalogadas até 2025?",
    answer: 2000,
    fact: "O'Keeffe é famosa por suas flores ampliadas e paisagens do deserto.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte de São Paulo (MASP) em 2025?",
    answer: 8000,
    fact: "O MASP abriga obras de artistas como Portinari e Van Gogh.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Amedeo Modigliani em sua carreira?",
    answer: 350,
    fact: "Modigliani é conhecido por seus retratos estilizados com rostos alongados.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de El Greco estão preservadas em 2025?",
    answer: 200,
    fact: "El Greco foi um precursor do Expressionismo com obras como 'A Visão de São João'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Nacional de Arte Antiga em Lisboa em 2025?",
    answer: 4000,
    fact: "O museu abriga obras portuguesas e europeias, incluindo 'Tentações de Santo Antão'.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou John Singer Sargent em sua carreira?",
    answer: 900,
    fact: "Sargent foi um retratista americano famoso por 'Madame X'.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Alberto Giacometti?",
    answer: 300,
    fact: "Giacometti criou figuras alongadas como 'Homem Caminhando'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Roy Lichtenstein estão catalogadas até 2025?",
    answer: 5000,
    fact: "Lichtenstein foi um ícone da Pop Art, usando estética de quadrinhos.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Orsay em Paris em 2025?",
    answer: 6000,
    fact: "O Orsay é conhecido por sua coleção de arte impressionista e pós-impressionista.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Tamara de Lempicka em sua carreira?",
    answer: 300,
    fact: "Lempicka foi uma pintora Art Déco conhecida por retratos estilizados.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Diego Velázquez estão preservadas em 2025?",
    answer: 120,
    fact: "Velázquez é conhecido por 'Las Meninas' e seu realismo barroco.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Nacional da China em Pequim em 2025 (em milhões)?",
    answer: 1,
    fact: "O museu abriga artefatos e obras da história chinesa.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Fernand Léger em sua carreira?",
    answer: 400,
    fact: "Léger foi um cubista que explorou formas geométricas e cores vibrantes.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Barbara Hepworth?",
    answer: 600,
    fact: "Hepworth foi uma escultora modernista britânica, conhecida por formas orgânicas.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Norman Rockwell estão catalogadas até 2025?",
    answer: 4000,
    fact: "Rockwell ilustrou a vida americana em capas da revista Saturday Evening Post.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte Contemporânea de Barcelona (MACBA) em 2025?",
    answer: 5000,
    fact: "O MACBA foca em arte contemporânea do século XX e XXI.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Kazimir Malevich em sua carreira?",
    answer: 300,
    fact: "Malevich foi o criador do Suprematismo, com obras como 'Quadrado Negro'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Peter Paul Rubens estão preservadas em 2025?",
    answer: 1400,
    fact: "Rubens foi um mestre do Barroco, conhecido por suas cenas mitológicas.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Pergamon em Berlim em 2025?",
    answer: 10000,
    fact: "O Pergamon abriga reconstruções como o Altar de Pérgamo.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Max Ernst em sua carreira?",
    answer: 700,
    fact: "Ernst foi um surrealista que experimentou técnicas como frottage.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Jeff Koons até 2025?",
    answer: 100,
    fact: "Koons é conhecido por obras pop como 'Balloon Dog'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Claude Lorrain estão catalogadas até 2025?",
    answer: 250,
    fact: "Lorrain foi um mestre das paisagens clássicas no Barroco.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Reina Sofía em Madri em 2025?",
    answer: 20000,
    fact: "O Reina Sofía abriga 'Guernica' de Picasso e arte contemporânea.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou William Turner em sua carreira?",
    answer: 2000,
    fact: "Turner foi um mestre do Romantismo, conhecido por suas paisagens luminosas.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Anish Kapoor até 2025?",
    answer: 200,
    fact: "Kapoor é conhecido por obras como 'Cloud Gate' em Chicago.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Artemisia Gentileschi estão preservadas em 2025?",
    answer: 60,
    fact: "Gentileschi foi uma pintora barroca conhecida por 'Judite e Holofernes'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte Islâmica em Doha em 2025?",
    answer: 4500,
    fact: "O museu abriga arte de diversas culturas islâmicas ao longo de séculos.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Egon Schiele em sua carreira?",
    answer: 300,
    fact: "Schiele foi um expressionista austríaco conhecido por retratos intensos.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Canaletto estão catalogadas até 2025?",
    answer: 200,
    fact: "Canaletto foi famoso por suas vistas detalhadas de Veneza.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Van Gogh em Amsterdã em 2025?",
    answer: 2000,
    fact: "O museu possui a maior coleção de obras de Van Gogh no mundo.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Keith Haring em sua carreira?",
    answer: 10000,
    fact: "Haring foi um ícone da arte de rua, conhecido por figuras estilizadas.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Louise Bourgeois?",
    answer: 1000,
    fact: "Bourgeois é conhecida por suas aranhas gigantes e temas psicológicos.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Joan Miró estão catalogadas até 2025?",
    answer: 2000,
    fact: "Miró foi um surrealista catalão conhecido por formas abstratas e cores vibrantes.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte de Cleveland em 2025?",
    answer: 45000,
    fact: "O museu abriga coleções de arte asiática, europeia e americana.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou George Seurat em sua carreira?",
    answer: 200,
    fact: "Seurat foi o criador do Pontilhismo, com obras como 'Tarde de Domingo na Ilha de Grande Jatte'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Tintoretto estão preservadas em 2025?",
    answer: 350,
    fact: "Tintoretto foi um mestre do Maneirismo veneziano, conhecido por 'Paraíso'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu Nacional de Antropologia no México em 2025?",
    answer: 20000,
    fact: "O museu abriga artefatos pré-colombianos, como a Pedra do Sol asteca.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Edward Hopper em sua carreira?",
    answer: 400,
    fact: "Hopper é conhecido por 'Nighthawks' e suas cenas de isolamento urbano.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Claes Oldenburg?",
    answer: 100,
    fact: "Oldenburg criou esculturas pop de objetos cotidianos, como 'Colher e Cereja'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de René Magritte estão catalogadas até 2025?",
    answer: 400,
    fact: "Magritte foi um surrealista famoso por 'A Traição das Imagens'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Belas Artes de Boston em 2025?",
    answer: 450000,
    fact: "O museu abriga coleções de arte egípcia, asiática e americana.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Camille Pissarro em sua carreira?",
    answer: 1500,
    fact: "Pissarro foi um impressionista que influenciou gerações de artistas.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de William Blake estão preservadas em 2025?",
    answer: 200,
    fact: "Blake foi um visionário do Romantismo, conhecido por gravuras poéticas.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu do Vaticano em 2025?",
    answer: 70000,
    fact: "O Vaticano abriga coleções de arte sacra e clássica, incluindo a Capela Sistina.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Henri de Toulouse-Lautrec em sua carreira?",
    answer: 700,
    fact: "Toulouse-Lautrec capturou a vida boêmia de Paris em pôsteres e pinturas.",
    category: "Arte"
  },
  {
    question: "Quantas esculturas principais criou Alexander Calder?",
    answer: 2000,
    fact: "Calder foi pioneiro dos móbiles, esculturas cinéticas.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Gustav Courbet estão catalogadas até 2025?",
    answer: 500,
    fact: "Courbet foi um líder do Realismo, conhecido por 'O Enterro em Ornans'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte de Filadélfia em 2025?",
    answer: 240000,
    fact: "O museu é famoso por sua escadaria icônica e coleções de arte europeia.",
    category: "Arte"
  },
  {
    question: "Quantos quadros pintou Franz Marc em sua carreira?",
    answer: 200,
    fact: "Marc foi um expressionista alemão, conhecido por 'Cavalos Azuis'.",
    category: "Arte"
  },
  {
    question: "Quantas pinturas de Sandro Botticelli estão preservadas em 2025?",
    answer: 50,
    fact: "Botticelli foi um mestre do Renascimento, conhecido por 'Primavera'.",
    category: "Arte"
  },
  {
    question: "Quantas obras de arte estão no Museu de Arte Nacional de Catalunha em 2025?",
    answer: 250000,
    fact: "O museu abriga arte românica e modernista catalã.",
    category: "Arte"
  }
];