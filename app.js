 /*global p5.js*/
 //when using horizontal textAlign, set x value to 0//
 
var myData = [
  {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
    release_date: "1986",
    rt_score: "95",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe",
     link: "https://www.imdb.com/title/tt0092067/",
    image: "_images/CastleInTheSky.gif"  
  },
  {
    id: "12cfb892-aac0-4c5b-94af-521852e46d6a",
    title: "Grave of the Fireflies",
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
    director: "Isao Takahata",
    producer: "Toru Hara",
    release_date: "1988",
    rt_score: "97",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/12cfb892-aac0-4c5b-94af-521852e46d6a",
        link: "https://www.imdb.com/title/tt0095327/?ref_=nv_sr_srsg_0",
    image: "_images/GraveFireflies.gif"  
  },
  {
    id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
    title: "My Neighbor Totoro",
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1988",
    rt_score: "93",
    people: [
      "https://ghibliapi.herokuapp.com/people/986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
      "https://ghibliapi.herokuapp.com/people/d5df3c04-f355-4038-833c-83bd3502b6b9",
      "https://ghibliapi.herokuapp.com/people/3031caa8-eb1a-41c6-ab93-dd091b541e11",
      "https://ghibliapi.herokuapp.com/people/87b68b97-3774-495b-bf80-495a5f3e672d",
      "https://ghibliapi.herokuapp.com/people/d39deecb-2bd0-4770-8b45-485f26e1381f",
      "https://ghibliapi.herokuapp.com/people/591524bc-04fe-4e60-8d61-2425e42ffb2a",
      "https://ghibliapi.herokuapp.com/people/c491755a-407d-4d6e-b58a-240ec78b5061",
      "https://ghibliapi.herokuapp.com/people/f467e18e-3694-409f-bdb3-be891ade1106",
      "https://ghibliapi.herokuapp.com/people/08ffbce4-7f94-476a-95bc-76d3c3969c19",
      "https://ghibliapi.herokuapp.com/people/0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
    ],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
      "https://ghibliapi.herokuapp.com/species/603428ba-8a86-4b0b-a9f1-65df6abef3d3",
      "https://ghibliapi.herokuapp.com/species/74b7f547-1577-4430-806c-c358c8b6bcf5",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        link: "https://www.imdb.com/title/tt0096283/?ref_=nv_sr_srsg_0",
    image: "_images/Totoro.gif"
  },
  {
    id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    title: "Kiki's Delivery Service",
    description:
      "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    release_date: "1989",
    rt_score: "96",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/ea660b10-85c4-4ae3-8a5f-41cea3648e3e",
    link: "https://www.imdb.com/title/tt0097814/?ref_=nv_sr_srsg_0",
    image: "_images/Kiki.gif"
  },
  {
    id: "4e236f34-b981-41c3-8c65-f8c9000b94e7",
    title: "Only Yesterday",
    description:
      "It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1991",
    rt_score: "100",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/4e236f34-b981-41c3-8c65-f8c9000b94e7",
        link: "https://www.imdb.com/title/tt0102587/?ref_=nv_sr_srsg_0",
    image: "_images/Yesterday.gif"
  },
  {
    id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8",
    title: "Porco Rosso",
    description:
      "Porco Rosso, known in Japan as Crimson Pig (Kurenai no Buta) is the sixth animated film by Hayao Miyazaki and released in 1992. You're introduced to an Italian World War I fighter ace, now living as a freelance bounty hunter chasing 'air pirates' in the Adriatic Sea. He has been given a curse that changed his head to that of a pig. Once called Marco Pagot, he is now known to the world as 'Porco Rosso', Italian for 'Red Pig.'",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1992",
    rt_score: "94",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/ebbb6b7c-945c-41ee-a792-de0e43191bd8",
        link: "https://www.imdb.com/title/tt0104652/?ref_=nv_sr_srsg_0",
    image: "_images/Porco.gif"  
  },
  {
    id: "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
    title: "Pom Poko",
    description:
      "As the human city development encroaches on the raccoon population's forest and meadow habitat, the raccoons find themselves faced with the very real possibility of extinction. In response, the raccoons engage in a desperate struggle to stop the construction and preserve their home.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1994",
    rt_score: "78",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/1b67aa9a-2e4a-45af-ac98-64d6ad15b16c",
     link: "https://www.imdb.com/title/tt0110008/?ref_=nv_sr_srsg_0",
    image: "_images/PomPoko.gif"  
  },
  {
    id: "ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
    title: "Whisper of the Heart",
    description:
      "Shizuku lives a simple life, dominated by her love for stories and writing. One day she notices that all the library books she has have been previously checked out by the same person: 'Seiji Amasawa'. Curious as to who he is, Shizuku meets a boy her age whom she finds infuriating, but discovers to her shock that he is her 'Prince of Books'. As she grows closer to him, she realises that he merely read all those books to bring himself closer to her. The boy Seiji aspires to be a violin maker in Italy, and it is his dreams that make Shizuku realise that she has no clear path for her life. Knowing that her strength lies in writing, she tests her talents by writing a story about Baron, a cat statuette belonging to Seiji's grandfather.",
    director: "Yoshifumi Kondō",
    producer: "Toshio Suzuki",
    release_date: "1995",
    rt_score: "91",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
       link: "https://www.imdb.com/title/tt0113824/?ref_=nv_sr_srsg_0",
    image: "_images/Whisper.gif"  
  },
  {
    id: "0440483e-ca0e-4120-8c50-4c8cd9b965d6",
    title: "Princess Mononoke",
    description:
      "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "1997",
    rt_score: "92",
    people: [
      "https://ghibliapi.herokuapp.com/people/ba924631-068e-4436-b6de-f3283fa848f0",
      "https://ghibliapi.herokuapp.com/people/ebe40383-aad2-4208-90ab-698f00c581ab",
      "https://ghibliapi.herokuapp.com/people/030555b3-4c92-4fce-93fb-e70c3ae3df8b",
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b",
      "https://ghibliapi.herokuapp.com/people/e9356bb5-4d4a-4c93-aadc-c83e514bffe3",
      "https://ghibliapi.herokuapp.com/people/34277bec-7401-43fa-a00a-5aee64b45b08",
      "https://ghibliapi.herokuapp.com/people/91939012-90b9-46e5-a649-96b898073c82",
      "https://ghibliapi.herokuapp.com/people/20e3bd33-b35d-41e6-83a4-57ca7f028d38",
      "https://ghibliapi.herokuapp.com/people/8bccdc78-545b-49f4-a4c8-756163a38c91",
      "https://ghibliapi.herokuapp.com/people/116bfe1b-3ba8-4fa0-8f72-88537a493cb9",
    ],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
      "https://ghibliapi.herokuapp.com/species/6bc92fdd-b0f4-4286-ad71-1f99fb4a0d1e",
      "https://ghibliapi.herokuapp.com/species/f25fa661-3073-414d-968a-ab062e3065f7",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6",
        link: "https://www.imdb.com/title/tt0119698/?ref_=nv_sr_srsg_0",
    image: "_images/Mononoke.gif"  
  },
  {
    id: "45204234-adfd-45cb-a505-a8e7a676b114",
    title: "My Neighbors the Yamadas",
    description:
      "The Yamadas are a typical middle class Japanese family in urban Tokyo and this film shows us a variety of episodes of their lives. With tales that range from the humourous to the heartbreaking, we see this family cope with life's little conflicts, problems and joys in their own way.",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    release_date: "1999",
    rt_score: "75",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/45204234-adfd-45cb-a505-a8e7a676b114",
        link: "https://www.imdb.com/title/tt0206013/?ref_=nv_sr_srsg_0",
    image: "_images/Yamadas.gif"  
  },
  {
    id: "dc2e6bd1-8156-4886-adff-b39e6043af0c",
    title: "Spirited Away",
    description:
      "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2001",
    rt_score: "97",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/dc2e6bd1-8156-4886-adff-b39e6043af0c",
      link: "https://www.imdb.com/title/tt0245429/?ref_=nv_sr_srsg_0",
    image: "_images/Spirited.gif"  
  },
  {
    id: "90b72513-afd4-4570-84de-a56c312fdf81",
    title: "The Cat Returns",
    description:
      "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    release_date: "2002",
    rt_score: "89",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
      link: "https://www.imdb.com/title/tt0347618/?ref_=nv_sr_srsg_0",
    image: "_images/TheCat.gif"  
  },
  {
    id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    title: "Howl's Moving Castle",
    description:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2004",
    rt_score: "87",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
     link: "https://www.imdb.com/title/tt0347149/?ref_=nv_sr_srsg_0",
    image: "_images/Howls.gif"  
  },
  {
    id: "112c1e67-726f-40b1-ac17-6974127bb9b9",
    title: "Tales from Earthsea",
    description:
      "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2006",
    rt_score: "41",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/112c1e67-726f-40b1-ac17-6974127bb9b9",
      link: "https://www.imdb.com/title/tt0495596/?ref_=nv_sr_srsg_0",
    image: "_images/Earthsea.gif"  
  },
  {
    id: "758bf02e-3122-46e0-884e-67cf83df1786",
    title: "Ponyo",
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2008",
    rt_score: "92",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786",
     link: "https://www.imdb.com/title/tt0876563/?ref_=nv_sr_srsg_0",
    image: "_images/Ponyo.gif"  
  },
  {
    id: "2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
    title: "Arrietty",
    description:
      "14-year-old Arrietty and the rest of the Clock family live in peaceful anonymity as they make their own home from items 'borrowed' from the house's human inhabitants. However, life changes for the Clocks when a human boy discovers Arrietty.",
    director: "Hiromasa Yonebayashi",
    producer: "Toshio Suzuki",
    release_date: "2010",
    rt_score: "95",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/2de9426b-914a-4a06-a3a0-5e6d9d3886f6",
        link: "https://www.imdb.com/title/tt1568921/?ref_=nv_sr_srsg_0",
    image: "_images/Arrietty.gif"  
  },
  {
    id: "45db04e4-304a-4933-9823-33f389e8d74d",
    title: "From Up on Poppy Hill",
    description:
      "The story is set in 1963 in Yokohama. Kokuriko Manor sits on a hill overlooking the harbour. A 16 year-old girl, Umi, lives in that house. Every morning she raises a signal flag facing the sea. The flag means “I pray for safe voyages”. A 17 year-old boy, Shun, always sees this flag from the sea as he rides a tugboat to school. Gradually the pair are drawn to each other but they are faced with a sudden trial. Even so, they keep going without running from facing the hardships of reality.",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2011",
    rt_score: "83",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/45db04e4-304a-4933-9823-33f389e8d74d",
        link: "https://www.imdb.com/title/tt1798188/?ref_=nv_sr_srsg_0",
    image: "_images/Poppy.gif"  
  },
  {
    id: "67405111-37a5-438f-81cc-4666af60c800",
    title: "The Wind Rises",
    description:
      "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    release_date: "2013",
    rt_score: "89",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/67405111-37a5-438f-81cc-4666af60c800",
       link: "https://www.imdb.com/title/tt2013293/?ref_=nv_sr_srsg_0",
    image: "_images/Wind.gif"  
  },
  {
    id: "578ae244-7750-4d9f-867b-f3cd3d6fecf4",
    title: "The Tale of the Princess Kaguya",
    description:
      "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
    director: "Isao Takahata",
    producer: "Yoshiaki Nishimura",
    release_date: "2013",
    rt_score: "100",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/578ae244-7750-4d9f-867b-f3cd3d6fecf4",
        link: "https://www.imdb.com/title/tt2576852/?ref_=nv_sr_srsg_2",
    image: "_images/Kaguya.gif"  
  },
  {
    id: "5fdfb320-2a02-49a7-94ff-5ca418cae602",
    title: "When Marnie Was There",
    description:
      "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
    director: "Hiromasa Yonebayashi",
    producer: "Yoshiaki Nishimura",
    release_date: "2014",
    rt_score: "92",
    people: ["https://ghibliapi.herokuapp.com/people/"],
    species: [
      "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
    ],
    locations: ["https://ghibliapi.herokuapp.com/locations/"],
    vehicles: ["https://ghibliapi.herokuapp.com/vehicles/"],
    url:
      "https://ghibliapi.herokuapp.com/films/5fdfb320-2a02-49a7-94ff-5ca418cae602",
        link: "https://www.imdb.com/title/tt3398268/?ref_=nv_sr_srsg_0",
    image: "_images/Marnie.gif"  
  }
];

myData.sort((a,b) => b.rt_score-a.rt_score);

 let 
    margin = 20,
    canvasWidth = 1200,
    canvasHeight = 600,
    w = canvasWidth - 2 * margin,
    h = canvasHeight - 2 * margin,
    barWidth = (h/myData.length) * 0.8,
    barMargin = (h/myData.length) * 0.2,
    c1,
    c2,
    c3,
    c4;
    
function setup() {
  createCanvas(1000,800);
  c1 = color(255, 175, 36);
  c2 = color(219, 58, 33);
  push();
  for(let y=0; y<height; y++){
    let n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }
  pop();
}
//something strange, when set up using variables it doesnt work
//and can not use pre-defined width and height variable names

function draw () {
  // background(20,90,100);
  // textAlign(CENTER,CENTER);
  push();
  textSize(28);
  textAlign(CENTER);
  fill(202, 174, 252);
  stroke(100, 23, 252);
  strokeWeight(3);
  textFont('Carter One');
  text('Assignment 4.2 - Draw A p5 Chart', 0, 40, width, 100);
  pop();
  
  push();
  textSize(18);
  textAlign(CENTER);
  fill(100, 23, 252);
  stroke(202, 174, 252);
  strokeWeight(2);
  textFont('Nunito');
  textStyle(BOLDITALIC);
  text('Rotten Tomatoes Ratings', 0, 80, width, 100);
  pop();
  
  // translate(margin, margin);
  
  // textAlign(CENTER,CENTER);

  //draw vertical reference line
  for (var i=0; i<=10; i++) {
    let x = 790 - i * 50;
    push();
    stroke(202, 174, 252);
    line(x,150,x,height-94);
    pop();
  
  //draw tick marks
    push();
    // textAlign(LEFT);
    fill(202, 174, 252);
    textFont('Nunito');
    textSize(10);
    text((100-i*10)+'%', x-10, height-80);
    pop();
  }
  
  //draw tickline
  push();
  stroke(202, 174, 252); 
  line(290,height-94,800,height-94);
  pop();
    
  
  //draw barchart
  
  for (var i=0; i<myData.length; i++) {
    
    push();
    fill(148, 92, 250);
    noStroke();
    translate(0, i *(barWidth+barMargin));
    rect(290,150,myData[i].rt_score*5,barWidth);
    fill(255);
    textFont('Nunito');
    textStyle(BOLDITALIC);
    text(myData[i].title + ' (' + myData[i].release_date + ')',50,155,width);
    text(myData[i].rt_score + '%',255+myData[i].rt_score*5,155,width);
    textSize(10);
    textAlign(RIGHT);
    // line(270, (barWidth+barMargin)*myData.length+1, width, (barWidth+barMargin)*myData.length+1))
    // fill(255);
  // textAlign doesn't work
    pop();
  }
  
  
    
  }
  
  