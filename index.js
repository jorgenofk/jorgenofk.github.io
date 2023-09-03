// index.js

const allPokemon = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
    "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
    "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata",
    "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu",
    "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidorino",
    "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff",
    "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras",
    "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian",
    "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine",
    "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
    "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
    "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke",
    "Slowbro", "Magnemite", "Magneton", "Farfetch’d", "Doduo", "Dodrio", "Seel",
    "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter",
    "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode",
    "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan",
    "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie",
    "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros",
    "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon",
    "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl",
    "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite",
    "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava",
    "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret",
    "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat",
    "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic",
    "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill",
    "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom",
    "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon",
    "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig",
    "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull",
    "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa",
    "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid",
    "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom",
    "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue",
    "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou",
    "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi",
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip",
    "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone",
    "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre",
    "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull",
    "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish",
    "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja",
    "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile",
  "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric",
  "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot",
  "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal",
  "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea",
  "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock",
  "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep",
  "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon",
  "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol",
  "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl",
  "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence",
  "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias",
  "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig",
  "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup",
  "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot",
  "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos",
  "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee",
  "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos",
  "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny",
  "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky",
  "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot",
  "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario",
  "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak",
  "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile",
  "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar",
  "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z",
  "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit",
  "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina (Altered)", "Giratina (Origin)", "Cresselia",
  "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy",
  "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott",
  "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin",
  "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour",
  "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika",
  "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill",
  "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad",
  "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede",
  "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin",
  "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus",
  "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus",
  "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua",
  "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis",
  "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe",
  "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus",
  "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed",
  "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross",
  "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure",
  "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk",
  "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp",
  "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant",
  "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion",
  "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus (Therian)", "Kyurem",
  "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught",
  "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby",
  "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa",
  "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat",
  "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade",
  "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar",
  "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile",
  "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha",
  "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant",
  "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas",
  "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Rowlet", "Dartrix",
  "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina",
  "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug",
  "Vikavolt", "Crabrawler", "Crabominable", "Oricorio", "Cutiefly", "Ribombee",
  "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray", "Mudsdale",
  "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit",
  "Salazzle", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey",
  "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast", "Palossand",
  "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru",
  "Mimikyu", "Bruxish", "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o",
  "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo",
  "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela",
  "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow", "Poipole", "Naganadel",
  "Stakataka", "Blacephalon", "Zeraora", "Meltan", "Melmetal", "Grookey", "Thwackey",
  "Rillaboom", "Scorbunny", "Raboot", "Cinderace", "Sobble", "Drizzile", "Inteleon",
  "Skwovet", "Greedent", "Rookidee", "Corvisquire", "Corviknight", "Blipbug",
  "Dottler", "Orbeetle", "Nickit", "Thievul", "Gossifleur", "Eldegoss", "Wooloo",
  "Dubwool", "Chewtle", "Drednaw", "Yamper", "Boltund", "Rolycoly", "Carkol", "Coalossal",
  "Applin", "Flapple", "Appletun", "Silicobra", "Sandaconda", "Cramorant", "Arrokuda",
  "Barraskewda", "Toxel", "Toxtricity", "Sizzlipede", "Centiskorch", "Clobbopus",
  "Grapploct", "Sinistea", "Polteageist", "Hatenna", "Hattrem", "Hatterene", "Impidimp",
  "Morgrem", "Grimmsnarl", "Obstagoon", "Perrserker", "Cursola", "Sirfetch'd",
  "Mr. Rime", "Runerigus", "Milcery", "Alcremie", "Falinks", "Pincurchin",
  "Snom", "Frosmoth", "Stonjourner", "Eiscue", "Indeedee", "Morpeko", "Cufant",
  "Copperajah", "Dracozolt", "Arctozolt", "Dracovish", "Arctovish", "Duraludon",
  "Dreepy", "Drakloak", "Dragapult", "Zacian", "Zamazenta", "Eternatus", "Kubfu",
  "Urshifu", "Zarude", "Regieleki", "Regidrago", "Glastrier", "Spectrier", "Calyrex", "Stunfisk (Galarian)",
  "Slowpoke (Galarian)",
  "Slowbro (Galarian)",
  "Articuno (Galarian)",
  "Zapdos (Galarian)",
  "Moltres (Galarian)",
  "Meowth (Galarian)",
  "Ponyta (Galarian)",
  "Rapidash (Galarian)",
  "Farfetch'd (Galarian)",
  "Weezing (Galarian)",
  "Mr. Mime (Galarian)",
  "Corsola (Galarian)",
  "Zigzagoon (Galarian)",
  "Linoone (Galarian)",
  "Darumaka (Galarian)",
  "Yamask (Galarian)", 
"Bulbasaur (Shadow)", "Ivysaur (Shadow)", "Venusaur (Shadow)", "Charmander (Shadow)", "Charmeleon (Shadow)", "Charizard (Shadow)", 
"Squirtle (Shadow)", "Wartortle (Shadow)", "Blastoise (Shadow)", "Weedle (Shadow)", "Kakuna (Shadow)", "Beedrill (Shadow)", 
"Rattata (Shadow)", "Alolan Rattata (Shadow)", "Raticate (Shadow)", "Alolan Raticate (Shadow)", "Ekans (Shadow)", "Arbok (Shadow)", 
"Sandshrew (Shadow)", "Alolan Sandshrew (Shadow)", "Sandslash (Shadow)", "Nidoran♀ (Shadow)", "Nidorina (Shadow)", "Nidoqueen (Shadow)",
 "Nidoran♂ (Shadow)", "Nidorino (Shadow)", "Nidoking (Shadow)", "Vulpix (Shadow)", "Ninetales (Shadow)", "Zubat (Shadow)", 
 "Golbat (Shadow)", "Oddish (Shadow)", "Gloom (Shadow)", "Vileplume (Shadow)", "Venonat (Shadow)", "Venomoth (Shadow)", 
 "Diglett (Shadow)", "Alolan Diglett (Shadow)", "Dugtrio (Shadow)", "Alolan Dugtrio (Shadow)", "Meowth (Shadow)", 
 "Persian (Shadow)", "Psyduck (Shadow)", "Golduck (Shadow)", "Machop (Shadow)", "Machoke (Shadow)", "Machamp (Shadow)", 
 "Bellsprout (Shadow)", "Weepinbell (Shadow)", "Victreebel (Shadow)", "Geodude (Shadow)", "Graveler (Shadow)", "Golem (Shadow)", 
 "Slowpoke (Shadow)", "Slowbro (Shadow)", "Magnemite (Shadow)", "Magneton (Shadow)", "Grimer (Shadow)", "Muk (Shadow)", 
 "Shellder (Shadow)", "Cloyster (Shadow)", "Onix (Shadow)", "Drowzee (Shadow)", "Hypno (Shadow)", "Voltorb (Shadow)", 
 "Electrode (Shadow)", "Exeggcute (Shadow)", "Exeggutor (Shadow)", "Alolan Exeggutor (Shadow)", "Cubone (Shadow)", 
 "Marowak (Shadow)", "Alolan Marowak (Shadow)", "Hitmonlee (Shadow)", "Hitmonchan (Shadow)", "Koffing (Shadow)", 
 "Weezing (Shadow)", "Tangela (Shadow)", "Electabuzz (Shadow)", "Magmar (Shadow)", "Lapras (Shadow)", "Snorlax (Shadow)", 
 "Dratini (Shadow)", "Dragonair (Shadow)", "Dragonite (Shadow)", "Hoothoot (Shadow)", "Noctowl (Shadow)", "Ledyba (Shadow)", 
 "Ledian (Shadow)", "Sudowoodo (Shadow)", "Sunkern (Shadow)", "Sunflora (Shadow)", "Yanma (Shadow)", "Wooper (Shadow)", 
 "Quagsire (Shadow)", "Murkrow (Shadow)", "Sneasel (Shadow)", "Gligar (Shadow)", "Teddiursa (Shadow)", "Ursaring (Shadow)", 
 "Pineco (Shadow)", "Forretress (Shadow)", "Dunsparce (Shadow)", "Gligar (Shadow)", "Steelix (Shadow)", "Snubbull (Shadow)", 
 "Granbull (Shadow)", "Qwilfish (Shadow)", "Scizor (Shadow)", "Shuckle (Shadow)", "Heracross (Shadow)", "Sneasel (Shadow)", 
 "Teddiursa (Shadow)", "Ursaring (Shadow)", "Magcargo (Shadow)", "Swinub (Shadow)", "Piloswine (Shadow)", "Corsola (Shadow)", 
 "Remoraid (Shadow)", "Octillery (Shadow)", "Delibird (Shadow)", "Mantine (Shadow)", "Skarmory (Shadow)", "Houndour (Shadow)", 
 "Houndoom (Shadow)", "Kingdra (Shadow)", "Raikou (Shadow)", "Entei (Shadow)", "Suicune (Shadow)", "Larvitar (Shadow)", 
 "Pupitar (Shadow)", "Tyranitar (Shadow)", "Lugia (Shadow)", "Ho-Oh (Shadow)", "Celebi (Shadow)", "Chikorita (Shadow)", 
 "Bayleef (Shadow)", "Meganium (Shadow)", "Cyndaquil (Shadow)", "Quilava (Shadow)", "Typhlosion (Shadow)", "Totodile (Shadow)", 
 "Croconaw (Shadow)", "Feraligatr (Shadow)", "Crobat (Shadow)", "Natu (Shadow)", "Xatu (Shadow)", "Mareep (Shadow)", 
 "Flaaffy (Shadow)", "Ampharos (Shadow)", "Bellossom (Shadow)", "Sudowoodo (Shadow)", "Politoed (Shadow)", "Hoppip (Shadow)", 
 "Skiploom (Shadow)", "Jumpluff (Shadow)", "Aipom (Shadow)", "Wooper (Shadow)", "Quagsire (Shadow)", "Espeon (Shadow)", 
 "Umbreon (Shadow)", "Murkrow (Shadow)", "Slowking (Shadow)", "Misdreavus (Shadow)", "Unown (Shadow)", "Wobbuffet (Shadow)", 
 "Girafarig (Shadow)", "Pineco (Shadow)", "Forretress (Shadow)", "Dunsparce (Shadow)", "Gligar (Shadow)", "Steelix (Shadow)", 
 "Snubbull (Shadow)", "Granbull (Shadow)", "Qwilfish (Shadow)", "Scizor (Shadow)", "Shuckle (Shadow)", "Heracross (Shadow)", 
 "Sneasel (Shadow)", "Teddiursa (Shadow)", "Ursaring (Shadow)", "Magcargo (Shadow)", "Swinub (Shadow)", "Piloswine (Shadow)", 
 "Corsola (Shadow)", "Remoraid (Shadow)", "Octillery (Shadow)", "Delibird (Shadow)", "Mantine (Shadow)", "Skarmory (Shadow)", 
 "Houndour (Shadow)", "Houndoom (Shadow)", "Kingdra (Shadow)", "Raikou (Shadow)", "Entei (Shadow)", "Suicune (Shadow)", 
 "Larvitar (Shadow)", "Pupitar (Shadow)", "Tyranitar (Shadow)", "Lugia (Shadow)", "Ho-Oh (Shadow)", "Celebi (Shadow)", 
 "Ursaluna (Shadow)", "Mudkip (Shadow)", "Swampert (Shadow)", "Torterra (Shadow)", "Mewtwo (Armored)", "Muk (Alolan) (Shadow)", 
 "Muk (Alolan)",
"Deoxys (Defense)", "Deoxys (Attack)", "Deoxys (Speed)", "Zacian (Hero)", "Mamoswine (Shadow)", "Metagross (Shadow)" // Add more Pokémon as needed
];

let leagueTeams = {
    great: [
    new Set(["Swampert", "Noctowl", "Pidgeot"]),
    new Set(["Altaria", "Azumarill", "Bastiodon"]),
    new Set(["Altaria", "Medicham", "Registeel"]),
    new Set(["Ninetales (Alolan)", "Swampert (Shadow)", "Trevenant"]),
    new Set(["Trevenant", "Bastiodon", "Drapion"]),
    new Set(["Lanturn", "Altaria", "Venusaur"]),
    new Set(["Medicham", "Noctowl", "Stunfisk (Galarian)"]),
    new Set(["Abomasnow (Shadow)", "Medicham", "Sableye"]),
    new Set(["Bastiodon", "Medicham", "Meganium"]),
    new Set(["Azumarill", "Ferrothorn", "Lickitung"]),
    new Set(["Stunfisk (Galarian)", "Noctowl", "Trevenant"]),
    new Set(["Stunfisk (Galarian)", "Altaria", "Noctowl"]),
    new Set(["Walrein", "Galvantula", "Medicham"]),
    new Set(["Ninetales (Alolan)", "Lanturn", "Umbreon"]),
    new Set(["Victreebel (Shadow)", "Bastiodon", "Lickitung"]),
    new Set(["Noctowl", "Lanturn", "Stunfisk (Galarian)"]),
    new Set(["Pelipper", "Registeel", "Stunfisk (Galarian)"]),
    new Set(["Noctowl", "Stunfisk (Galarian)", "Trevenant"]),
    new Set(["Ninetales (Alolan)", "Swampert", "Trevenant"]),
    new Set(["Trevenant", "Stunfisk (Galarian)", "Walrein"]),
    new Set(["Bastiodon", "Medicham", "Victreebel"]),
    new Set(["Bastiodon", "Medicham", "Victreebel (Shadow)"]),
    new Set(["Medicham", "Aurorus", "Walrein"]),
    new Set(["Medicham", "Bastiodon", "Stunfisk (Galarian)"]),
    new Set(["Registeel", "Pelipper", "Sableye"]),
    new Set(["Quagsire", "Froslass", "Noctowl"]),
    new Set(["Noctowl", "Lanturn", "Stunfisk (Galarian)"]),
    new Set(["Stunfisk (Galarian)", "Pelipper", "Sableye"]),
    new Set(["Stunfisk (Galarian)", "Medicham", "Sableye"]),
    new Set(["Bastiodon", "Medicham", "Trevenant"]),
    new Set(["Trevenant", "Noctowl", "Stunfisk (Galarian)"]),
    new Set(["Lanturn", "Skarmory", "Trevenant"]),
    new Set(["Swampert", "Noctowl", "Umbreon"]),
    new Set(["Trevenant", "Lanturn", "Registeel"]),
    new Set(["Noctowl", "Medicham", "Stunfisk (Galarian)"]),
    new Set(["Medicham", "Lanturn", "Noctowl"]),
    new Set(["Lanturn", "Froslass", "Noctowl"]),
    new Set(["Abomasnow", "Lanturn", "Swampert"]),
    new Set(["Altaria", "Azumarill", "Stunfisk (Galarian)"]),
    new Set(["Altaria", "Registeel", "Scrafty"]),
    new Set(["Aurorus", "Meganium", "Sableye"]),
    new Set(["Abomasnow", "Medicham", "Sableye"]),
    new Set(["Azumarill", "Altaria", "Sableye"]),
    new Set(["Altaria", "Registeel", "Stunfisk (Galarian)"]),
    new Set(["Mew", "Sirfetch'd", "Skarmory"]),
    new Set(["Altaria", "Lanturn", "Vigoroth"]),
    new Set(["Victreebel", "Bastiodon", "Wigglytuff"]),
    new Set(["Trevenant", "Azumarill", "Registeel"]),
    new Set(["Stunfisk (Galarian)", "Sableye", "Trevenant"]),
    new Set(["Ninetales (Alolan)", "Diggersby", "Sableye"]),
    new Set(["Altaria", "Lickitung", "Swampert"]),
    new Set(["Lanturn", "Noctowl", "Stunfisk (Galarian)"]),
    new Set(["Lanturn", "Noctowl", "Trevenant"]),
    new Set(["Stunfisk (Galarian)", "Noctowl", "Pelipper"]),
    new Set(["Bastiodon", "Medicham", "Sableye"]),
    new Set(["Stunfisk (Galarian)", "Medicham", "Noctowl"]),
    new Set(["Dragonite (Shadow)", "Dubwool", "Lanturn"]),
    new Set(["Stunfisk (Galarian)", "Altaria", "Medicham"]),
    new Set(["Deoxys (Defense)", "Registeel", "Sableye"]),
    new Set(["Altaria", "Sableye", "Stunfisk (Galarian)"]),
    new Set(["Noctowl", "Stunfisk (Galarian)", "Swampert"]),
    new Set(["Swampert", "Lanturn", "Noctowl"]),
    new Set(["Abomasnow", "Runerigus", "Sableye"])
    ],

    ultra: [

        new Set(["Registeel", "Pidgeot", "Virizon"]),
        new Set(["Tapu Fini", "Charizard (Shadow)", "Gliscor (Shadow)"]),
        new Set(["Gliscor (Shadow)", "Jellicent", "Registeel"]),
        new Set(["Pidgeot", "Cobalion", "Trevenant"]),
        new Set(["Gliscor (Shadow)", "Cobalion", "Jellicent"]),
        new Set(["Jellicent", "Escavalier", "Umbreon"]),
        new Set(["Tapu Fini", "Giratina (Altered)", "Registeel"]),
        new Set(["Jellicent", "Galvantula", "Mandibuzz"]),
        new Set(["Charizard", "Escavalier", "Umbreon"]),
        new Set(["Tapu Fini", "Gliscor", "Trevenant"]),
        new Set(["Giratina (Altered)", "Drapion (Shadow)", "Muk (Alolan) (Shadow)"]),
        new Set(["Deoxys (Defense)", "Stunfisk (Galarian)", "Walrein"]),
        new Set(["Charizard (Shadow)", "Kommo-o", "Scrafty"]),
        new Set(["Giratina (Altered)", "Charizard", "Mewtwo (Armored)"]),
        new Set(["Charizard (Shadow)", "Cobalion", "Virizion"]),
        new Set(["Pidgeot", "Cobalion", "Jellicent"]),
        new Set(["Pidgeot", "Cobalion", "Cresselia"]),
        new Set(["Articuno", "Registeel", "Trevenant"]),
        new Set(["Charizard", "Obstagoon", "Registeel"]),
        new Set(["Swampert", "Charizard", "Walrein"]),
        new Set(["Tapu Fini", "Registeel", "Talonflame"]),
        new Set(["Talonflame", "Perrserker", "Swampert"]),
        new Set(["Poliwrath (Shadow)", "Drapion (Shadow)", "Muk (Alolan) (Shadow)"]),
        new Set(["Obstagoon", "Giratina (Altered)", "Trevenant"]),
        new Set(["Walrein", "Charizard", "Swampert"]),
        new Set(["Escavalier", "Giratina (Altered)", "Walrein"]),
        new Set(["Tapu Fini", "Giratina (Altered)", "Registeel"]),
        new Set(["Pidgeot", "Cobalion", "Virizion"]),
        new Set(["Tapu Fini", "Talonflame", "Trevenant"]),
        new Set(["Pidgeot", "Cobalion", "Regirock"])
    ],

    master: [
new Set(["Palkia", "Metagross", "Zacian (Hero)"]),
new Set(["Giratina (Origin)", "Excadrill", "Zacian (Hero)"]),
new Set(["Zarude", "Dialga", "Kyogre"]),
new Set(["Dragonite", "Groudon", "Metagross"]),
new Set(["Dialga", "Excadrill", "Landorus (Therian)"]),
new Set(["Excadrill", "Dialga", "Lugia"]),
new Set(["Dragonite", "Excadrill", "Metagross"]),
new Set(["Zarude", "Dialga", "Kyogre"]),
new Set(["Giratina (Origin)", "Dialga", "Zacian (Hero)"]),
new Set(["Zacian (Hero)", "Dialga", "Ho-Oh"]),
new Set(["Dragonite", "Mamoswine (Shadow)", "Metagross"]),
new Set(["Giratina (Altered)", "Reshiram", "Xerneas"]),
new Set(["Kyurem", "Metagross", "Mewtwo"]),
new Set(["Gyarados", "Dragonite", "Metagross"]),
new Set(["Groudon", "Giratina (Origin)", "Snorlax (Shadow)"]),
new Set(["Dialga", "Mewtwo", "Zacian (Hero)"]),
new Set(["Dialga", "Giratina (Origin)", "Lugia"]),
new Set(["Solgaleo", "Dragonite", "Gyarados"]),
new Set(["Landorus (Therian)", "Dialga", "Kyogre"]),
new Set(["Dialga", "Giratina (Origin)", "Kyogre"]),
new Set(["Ho-Oh", "Dialga", "Zacian (Hero)"]),
new Set(["Dialga", "Giratina (Altered)", "Kyogre"]),
new Set(["Zacian (Hero)", "Mewtwo", "Yveltal"])



],

};

const input = document.getElementById("pokemon-input");
const list = document.getElementById("pokemon-list");
const selectedPokemon = new Set(); // Using a Set to store selected Pokémon for uniqueness
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const select = document.getElementById("league");

function checkLeague(){
        const selectedLeague = select.value; // Get the selected league from the dropdown
    
        if (leagueTeams[selectedLeague]) {
            allTeams = leagueTeams[selectedLeague];
        } else {
            // Handle the case when the selected league doesn't exist in the object
            allTeams = []; // You can set it to an empty array or handle this differently
        }
    }

function isSubset(subset, superset) {
    for (let item of subset) {
        if (!superset.has(item)) {
            return false;
        }
    }
    return true;}

    function filterPokemon() {
        const searchText = input.value.toLowerCase();
    
        // Clear the current list
        list.innerHTML = "";
    
        if (searchText.length >= 1) {
            // If the search text is a single letter, filter and display Pokémon starting with that letter
            const filteredPokemon = allPokemon.filter((pokemon) =>
                pokemon.toLowerCase().startsWith(searchText)
            );
    
            filteredPokemon.forEach((pokemon) => {
                const listItem = document.createElement("li");
                listItem.textContent = pokemon;
    
                // Check if the Pokémon is already selected and mark it as selected
                if (selectedPokemon.has(pokemon)) {
                    listItem.classList.add("selected");
                }
    
                // Add a click event listener to each list item
                listItem.addEventListener("click", () => {
                    if (selectedPokemon.has(pokemon)) {
                        // Remove the Pokémon
                        selectedPokemon.delete(pokemon);
                        listItem.classList.remove("selected");
                    } else {
                        // Add the Pokémon
                        selectedPokemon.add(pokemon);
                        listItem.classList.add("selected");
                    }
    
                    // Display the selected Pokémon
                    displaySelectedPokemon();
                });
    
                list.appendChild(listItem);
            });
        } else {
            // If the search text is not a single letter, display all Pokémon that include the search text
            const filteredPokemon = allPokemon.filter((pokemon) =>
                pokemon.toLowerCase().includes(searchText)
            );
    
            filteredPokemon.forEach((pokemon) => {
                const listItem = document.createElement("li");
                listItem.textContent = pokemon;
    
                // Check if the Pokémon is already selected and mark it as selected
                if (selectedPokemon.has(pokemon)) {
                    listItem.classList.add("selected");
                }
    
                // Add a click event listener to each list item
                listItem.addEventListener("click", () => {
                    if (selectedPokemon.has(pokemon)) {
                        // Remove the Pokémon
                        selectedPokemon.delete(pokemon);
                        listItem.classList.remove("selected");
                    } else {
                        // Add the Pokémon
                        selectedPokemon.add(pokemon);
                        listItem.classList.add("selected");
                    }
    
                    // Display the selected Pokémon
                    displaySelectedPokemon();
                });
    
                list.appendChild(listItem);
            });
        }
        if (input.value == ""){
        list.innerHTML = ""
        }
    }

function displaySelectedPokemon() {
    const selectedArray = Array.from(selectedPokemon);
    div1.innerHTML = selectedArray.join(", ");
}

function findTeams() {
    div2.innerHTML = "Suggested teams: <br><br>";

    if (select.value === "nothing"){
        div2.innerHTML = "You need to select a league."
        return;
    }
    
    // Loop through all predefined teams and check if they are subsets of selected Pokémon
    for (let i = 0; i < allTeams.length; i++) {
        if (isSubset(allTeams[i], selectedPokemon)) {
            // Get the names of Pokémon in the team and join them with commas
            const teamNames = Array.from(allTeams[i]).join(", ");
            div2.innerHTML += teamNames + "<br><br> ";
        }
    else {
        if (select.value === "great"){
        div2.innerHTML = "Cant find a good team with your pokemon. Get good n00b.<br><br>" +
        "Here is a list of Great League teams you should aim for:<br><br>" +
        "Swampert, Noctowl, Pidgeot<br> Altaria, Azumarill, Bastiodon<br> Altaria, Medicham, Registeel<br> Ninetales (Alolan), Swampert (Shadow), Trevenant<br>Trevenant, Bastiodon, Drapion<br>Lanturn, Altaria, Venusaur<br>Medicham, Noctowl, Stunfisk (Galarian)<br>Abomasnow (Shadow), Medicham, Sableye<br>Bastiodon, Medicham, Meganium<br>Azumarill, Ferrothorn, Lickitung<br>Stunfisk (Galarian), Noctowl, Trevenant<br>Stunfisk (Galarian), Altaria, Noctowl<br>Walrein, Galvantula, Medicham<br>Ninetales (Alolan), Lanturn, Umbreon<br>Victreebel (Shadow), Bastiodon, Lickitung<br>Noctowl, Lanturn, Stunfisk (Galarian)<br>Pelipper, Registeel, Stunfisk (Galarian)<br>Noctowl, Stunfisk (Galarian), Trevenant<br>Ninetales (Alolan), Swampert, Trevenant<br>Trevenant, Stunfisk (Galarian), Walrein<br>Bastiodon, Medicham, Victreebel<br>Bastiodon, Medicham, Victreebel (Shadow)<br>Medicham, Aurorus, Walrein<br>Medicham, Bastiodon, Stunfisk (Galarian)<br>Registeel, Pelipper, Sableye<br>Quagsire, Froslass, Noctowl<br>Noctowl, Lanturn, Stunfisk (Galarian)<br>Stunfisk (Galarian), Pelipper, Sableye<br>"
        }
    
        if (select.value === "ultra"){
        div2.innerHTML = "Cant find a good team with your pokemon. Get good n00b.<br><br>" +
        "Here is a list of Ultra League teams you should aim for:<br><br>" +
        "Registeel, Pidgeot, Virizon<br>Tapu Fini, Charizard (Shadow), Gliscor (Shadow)<br>Gliscor (Shadow), Jellicent, Registeel<br>Pidgeot, Cobalion, Trevenant<br>Gliscor (Shadow), Cobalion, Jellicent<br>Jellicent, Escavalier, Umbreon<br>Tapu Fini, Giratina (Altered), Registeel<br>Jellicent, Galvantula, Mandibuzz<br>Charizard, Escavalier, Umbreon<br>Tapu Fini, Gliscor, Trevenant<br>Giratina (Altered), Drapion (Shadow), Muk (Alolan) (Shadow)<br>Deoxys (Defense), Stunfisk (Galarian), Walrein<br>Charizard (Shadow), Kommo-o, Scrafty<br>Giratina (Altered), Charizard, Mewtwo (Armored)<br>Charizard (Shadow), Cobalion, Virizion<br>Pidgeot, Cobalion, Jellicent<br>Pidgeot, Cobalion, Cresselia<br>Articuno, Registeel, Trevenant<br>Charizard, Obstagoon, Registeel<br>Swampert, Charizard, Walrein<br>Tapu Fini, Registeel, Talonflame<br>Talonflame, Perrserker, Swampert<br>Poliwrath (Shadow), Drapion (Shadow), Muk (Alolan) (Shadow)<br>Obstagoon, Giratina (Altered), Trevenant<br>Walrein, Charizard, Swampert<br>Escavalier, Giratina (Altered), Walrein<br>Tapu Fini, Giratina (Altered), Registeel<br>Pidgeot, Cobalion, Virizion<br>Tapu Fini, Talonflame, Trevenant<br>Pidgeot, Cobalion, Regirock"
        }
    
     if (select.value === "master"){
        div2.innerHTML = "Cant find a good team with your pokemon. Get good n00b.<br><br>" +
        "Here is a list of Master League teams you should aim for:<br><br>" +
        "Palkia, Metagross, Zacian (Hero)<br>Giratina (Origin), Excadrill, Zacian (Hero)<br>Zarude, Dialga, Kyogre<br>Dragonite, Groudon, Metagross<br>Dialga, Excadrill, Landorus (Therian)<br>Excadrill, Dialga, Lugia<br>Dragonite, Excadrill, Metagross<br>Zarude, Dialga, Kyogre<br>Giratina (Origin), Dialga, Zacian (Hero)<br>Zacian (Hero), Dialga, Ho-Oh<br>Dragonite, Mamoswine (Shadow), Metagross<br>Giratina (Altered), Reshiram, Xerneas<br>Kyurem, Metagross, Mewtwo<br>Gyarados, Dragonite, Metagross<br>Groudon, Giratina (Origin), Snorlax (Shadow)<br>Dialga, Mewtwo, Zacian (Hero)<br>Dialga, Giratina (Origin), Lugia<br>Solgaleo, Dragonite, Gyarados<br>Landorus (Therian), Dialga, Kyogre<br>Dialga, Giratina (Origin), Kyogre<br>Ho-Oh, Dialga, Zacian (Hero)<br>Dialga, Giratina (Altered), Kyogre<br>Zacian (Hero), Mewtwo, Yveltal"

     }

    }
}}

function resetSelectedPokemon(){
selectedPokemon.clear();
div2.innerHTML = "Suggested teams will pop up here"
const listItems = list.querySelectorAll("li.selected");
    listItems.forEach((item) => {
        item.classList.remove("selected");
    });

displaySelectedPokemon();
}

input.addEventListener("input", filterPokemon);
document.getElementById("button").addEventListener("click", findTeams);
document.getElementById("resetButton").addEventListener("click", resetSelectedPokemon)
select.addEventListener("change", checkLeague)


filterPokemon();

