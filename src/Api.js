
/// --------- seven wonder ------------------ >

import taj from "./images/taj.jpg";
import taj2 from "./images/taj2.jpg";
import taj3 from "./images/taj3.jpg";
import china from "./images/china.jpg";
import china2 from "./images/china2.jpg";
import china3 from "./images/china3.jpg";
import china4 from "./images/china4.jpg";
import china5 from "./images/china5.jpg";
import ameri from "./images/ameri.jpg";
import ameri2 from "./images/ameri2.jpg";
import ameri3 from "./images/ameri3.jpg";
import ameri4 from "./images/ameri4.jpg";
import ameri5 from "./images/ameri5.jpg";
import partra from "./images/patra.jpg";
import partra2 from "./images/patra2.jpg";
import partra3 from "./images/patra3.jpg";
import partra4 from "./images/patra4.jpg";
import fore from "./images/fore.jpg";
import fore2 from "./images/fore2.jpg";
import fore3 from "./images/fore3.jpg";
import fore4 from "./images/fore4.jpg";
import wall from "./images/wall.jpg";
import wall2 from "./images/wall2.jpg";
import wall3 from "./images/wall3.jpg";
import wall4 from "./images/wall4.jpg";
import closeam from "./images/closeam.jpg";
import closeam2 from "./images/closeam2.jpg";
import closeam3 from "./images/closeam3.jpg";
import closeam4 from "./images/closeam4.jpg";
import closeam5 from "./images/closeam5.jpg";

///// river -------------------- >
import burj from "./images/burj.jpg";
import burj2 from "./images/burj2.jpg";
import burj3 from "./images/burj3.jpg";
import merdeka  from "./images/merdeka.jpg";
import merdeka2  from "./images/merdeka2.jpg";
import merdeka3  from "./images/merdeka3.jpg";
import shanghai1  from "./images/shanghai.jpg";
import shanghai2  from "./images/shanghai2.jpg";

//// building ------------------ >
import nile from "./images/nile.jpg";
import amazone from "./images/amazone.jpg";

//// falls --------------------- >
import angel1 from "./images/angel.jpg";
import victoria1  from "./images/victoria2.jpg";
import iguazu1  from "./images/Iguazu.jpg";
import iguazu2  from "./images/Iguazu2.jpg";
import iguazu3  from "./images/Iguazu3.jpg";

export const nav = [
   {
   text:"Home",
   path:"/"
   },
   {
   text:"Wonder",
   path:"/wonder"
   },
   {
   text:"Tallest Building",
   path:"/building"
   },
   {
   text:"Longest River",
   path:"/river"
   },
   {
   text:"Highest Waterfalls",
   path:"/falls"
   }
]

export const data = [
   {
     id:1,
     name:"Taj Mahal",
     category:"wonder",
     img:taj,
     desc:"This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child. It took about 22 years and 20,000 workers to construct the complex, which includes an immense garden with a reflecting pool. The mausoleum is made of white marble that features semiprecious stones in geometric and floral patterns. Its majestic central dome is surrounded by four smaller domes. According to some reports, Shah Jahān wished to have his own mausoleum made out of black marble. However, he was deposed by one of his sons before any work began.",
     country:"India",
     list: [
        {image:taj},
        {image:taj2},
        {image:taj3}
     ],
   },
   {
    id:2,
    name:"Great Wall of China",
    category:"wonder",
    img:china,
    desc:"Great might be an understatement. One of the world's largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. Although called a “wall,” the structure actually features two parallel walls for lengthy stretches. In addition, watchtowers and barracks dot the bulwark. One not-so-great thing about the wall, however, was its effectiveness. Although it was built to prevent invasions and raids, the wall largely failed to provide actual security. Instead, scholars have noted that it served more as “political propaganda.”",
    country:"China",
    list: [
       {image:china},
       {image:china2},
       {image:china3},
       {image:china4},
       {image:china5}
    ],
  },
  {
    id:3,
    name:"Chichen Itza",
    category:"wonder",
    img:ameri,
    desc:"Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza. A testament to the Mayans’ astronomical abilities, the structure features a total of 365 steps, the number of days in the solar year. During the spring and autumnal equinoxes, the setting sun casts shadows on the pyramid that give the appearance of a serpent slithering down the north stairway; at the base is a stone snake head. Life there was not all work and science, however. Chichén Itzá is home to the largest tlachtli (a type of sporting field) in the Americas. On that field the residents played a ritual ball game popular throughout pre-Columbian",
    country:"Mexico",
    list: [
       {image:ameri},
       {image:ameri2},
       {image:ameri3},
       {image:ameri4},
       {image:ameri5}
    ],
  },
  {
    id:4,
    name:"Petra",
    category:"wonder",
    img:partra,
    desc:"The ancient city of Petra, Jordan, is located in a remote valley, nestled among sandstone mountains and cliffs. It was purported to be one of the places where Moses struck a rock and water gushed forth. Later the Nabataeans, an Arab tribe, made it their capital, and during this time it flourished, becoming an important trade center, especially for spices. Noted carvers, the Nabataeans chiseled dwellings, temples, and tombs into the sandstone, which changed color with the shifting sun. In addition, they constructed a water system that allowed for lush gardens and farming. At its height, Petra reportedly had a population of 30,000. The city began to decline, however, as trade routes shifted. A major earthquake in 363 CE caused more difficulty, and after another tremor hit in 551, Petra was gradually abandoned. Although rediscovered in 1912, it was largely ignored by archaeologists until the late 20th century, and many questions remain about the city.",
    country:"Jordan",
    list: [
       {image:partra},
       {image:partra2},
       {image:partra3},
       {image:partra4}
    ],
  },
  {
    id:5,
    name:"Machu Picchu",
    category:"wonder",
    img:fore,
    desc:"This Incan site near Cuzco, Peru, was “discovered” in 1911 by Hiram Bingham, who believed it was Vilcabamba, a secret Incan stronghold used during the 16th-century rebellion against Spanish rule. Although that claim was later disproved, the purpose of Machu Picchu has confounded scholars. Bingham believed it was home to the “Virgins of the Sun,” women who lived in convents under a vow of chastity. Others think that it was likely a pilgrimage site, while some believe it was a royal retreat. (One thing it apparently should not be is the site of a beer commercial. In 2000 a crane being used for such an ad fell and cracked a monument.) What is known is that Machu Picchu is one of the few major pre-Columbian ruins found nearly intact. Despite its relative isolation high in the Andes Mountains, it features agricultural terraces, plazas, residential areas, and temples.",
    country:"Peru",
    list: [
       {image:fore},
       {image:fore2},
       {image:fore3},
       {image:fore4}
    ],
  },
  {
    id:6,
    name:"Christ the Redeemer",
    category:"wonder",
    img:wall,
    desc:"Christ the Redeemer, a colossal statue of Jesus, stands atop Mount Corcovado in Rio de Janeiro. Its origins date to just after World War I, when some Brazilians feared a “tide of godlessness.” They proposed a statue, which was ultimately designed by Heitor da Silva Costa, Carlos Oswald, and Paul Landowski. Construction began in 1926 and was completed five years later. The resulting monument stands 98 feet (30 meters) tall—not including its base, which is about 26 feet (8 meters) high—and its outstretched arms span 92 feet (28 meters). It is the largest Art Deco sculpture in the world. Christ the Redeemer is made of reinforced concrete and is covered in approximately six million tiles. Somewhat disconcertingly, the statue has often been struck by lightning, and in 2014 the tip of Jesus’s right thumb was damaged during a storm.",
    country:"Brazil",
    list: [
       {image:wall},
       {image:wall2},
       {image:wall3},
       {image:wall4}
    ],
  },
  {
    id:7,
    name:"Colosseum",
    category:"wonder",
    img:closeam,
    desc:"The Colosseum in Rome was built in the first century by order of the Emperor Vespasian. A feat of engineering, the amphitheater measures 620 by 513 feet (189 by 156 meters) and features a complex system of vaults. It was capable of holding 50,000 spectators, who watched a variety of events. Perhaps most notable were gladiator fights, though men battling animals was also common. In addition, water was sometimes pumped into the Colosseum for mock naval engagements. However, the belief that Christians were martyred there—namely, by being thrown to lions—is debated. According to some estimates, about 500,000 people died in the Colosseum. Additionally, so many animals were captured and then killed there that certain species reportedly became extinct.",
    country:"Italy",
    list: [
       {image:closeam},
       {image:closeam2},
       {image:closeam3},
       {image:closeam4},
       {image:closeam5}
    ],
  },
  {
    id:8,
    name:"Burj Khalifa",
    category:"Building",
    height:829.8,
    img:burj3,
    desc:"The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament. The building was opened in 2010 as part of a new development called Downtown Dubai. It was designed to be the centerpiece of large-scale, mixed-use development. The decision to construct the building was based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.[citation needed] The building is named in honor of the former president of the United Arab Emirates, Khalifa bin Zayed Al Nahyan. Abu Dhabi and the UAE government lent Dubai money to pay its debts. The building broke numerous height records, including its designation as the tallest building in the world",
    country:"Dubai",
    list: [
       {image:burj},
       {image:burj2},
       {image:burj3}
    ],
  },
   {
    id:9,
    name:"Merdeka 118",
    category:"Building",
    height:678.9,
    img:merdeka2,
    desc:"he Merdeka 118 (the whole precinct's) development is a 19 acres (7.7 ha) land funded by Permodalan Nasional Berhad (PNB) with a budget of RM5 billion.[2] When completed in 2023,[14] the tower became the tallest building in Malaysia.[15] It was constructed in three phases and consists of 400,000 square metres (4,300,000 square feet) of residential, hotel and commercial space. The building is a mix of office spaces, hotels, and retail outlets and an observatory floor which will be the highest observation deck in Southeast Asia. It has two observation decks, the first inside the building and the second inside the spire, and a retail business center (118 Mall). It will be surrounded by four acres of urban and linear parks. The non-rentable space consists of elevators, recreational and maintenance facilities, as well as parking spaces for up to 8,500 cars. Sixty out of the 80 storeys of office space will be reserved for Permodalan Nasional Berhad (PNB), the developer of the project, and its subsidiaries.",
    country:"Malaysiz",
    list: [
       {image:merdeka},
       {image:merdeka2},
       {image:merdeka3}
    ],
  },
   {
    id:10,
    name:"Amazon River",
    category:"River",
    Lenght:6400,
    img:amazone,
    desc:"The Amazon River in South America is the largest river by discharge volume of water in the world, and the longest or second-longest river system in the world, a title which is disputed with the Nile. The headwaters of the Apurímac River on Nevado Mismi had been considered for nearly a century the Amazon basin's most distant source until a 2014 study found it to be the headwaters of the Mantaro River on the Cordillera Rumi Cruz in Peru.[24] The Mantaro and Apurímac rivers join, and with other tributaries form the Ucayali River, which in turn meets the Marañón River upstream of Iquitos, Peru, forming what countries other than Brazil consider to be the main stem of the Amazon. Brazilians call this section the Solimões River above its confluence with the Rio Negro[25] forming what Brazilians call the Amazon at the Meeting of Waters (Portuguese: Encontro das Águas) at Manaus, the largest city on the river. The Amazon River has an average discharge of about 215,000–230,000 m3/s (7,600,000–8,100,000 cu ft/s)—approximately 6,591–7,570 km3 (1,581–1,816 cu mi) per year, greater than the next seven largest independent rivers combined. Two of the top ten rivers by discharge are tributaries of the Amazon river. The Amazon represents 20% of the global riverine discharge into oceans. The Amazon basin is the largest drainage basin in the world, with an area of approximately 7,000,000 km2 (2,700,000 sq mi). The portion of the river's drainage basin in Brazil alone is larger than any other river's basin. The Amazon enters Brazil with only one-fifth of the flow it finally discharges into the Atlantic Ocean, yet already has a greater flow at this point than the discharge of any other river.",
    country:"South America",
    list: [
       {image:amazone},
       {image:amazone}
    ],
  },
   {
    id:11,
    name:"Nile",
    category:"River",
    Lenght:6650,
    img:nile,
    desc:"The Nile is a major north-flowing river in northeastern Africa. It flows into the Mediterranean Sea. The Nile is the longest river in Africa and has historically been considered the longest river in the world though this has been contested by research suggesting that the Amazon River is slightly longer Of the world's major rivers, the Nile is one of the smallest, as measured by annual flow in cubic metres of water About 6,650 km (4,130 mi) long, its drainage basin covers eleven countries: the Democratic Republic of the Congo, Tanzania, Burundi, Rwanda, Uganda, Kenya, Ethiopia, Eritrea, South Sudan, Sudan, and Egypt.[9] In particular, the Nile is the primary water source of Egypt, Sudan and South Sudan. Additionally, the Nile is an important economic river, supporting agriculture and fishing. The Nile has two major tributaries: the White Nile and the Blue Nile. The White Nile is traditionally considered to be the headwaters stream. However, the Blue Nile is the source of most of the water of the Nile downstream, containing 80% of the water and silt. The White Nile is longer and rises in the Great Lakes region. It begins at Lake Victoria and flows through Uganda and South Sudan. The Blue Nile begins at Lake Tana in Ethiopia and flows into Sudan from the southeast. The two rivers meet at the Sudanese capital of Khartoum.",
    country:"Africa",
    list: [
       {image:nile},
       {image:nile}
    ],
  },
  {
   id:12,
   name:"Shanghai Tower",
   category:"Building",
   height:632,
   img:shanghai1,
   desc:"The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament. The building was opened in 2010 as part of a new development called Downtown Dubai. It was designed to be the centerpiece of large-scale, mixed-use development. The decision to construct the building was based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.[citation needed] The building is named in honor of the former president of the United Arab Emirates, Khalifa bin Zayed Al Nahyan. Abu Dhabi and the UAE government lent Dubai money to pay its debts. The building broke numerous height records, including its designation as the tallest building in the world",
   country:"China",
   list: [
      {image:shanghai1},
      {image:shanghai2}
   ],
 },
 {
   id:13,
   name:"Angel Falls",
   category:"Falls",
   height:979,
   img:angel1,
   desc:"The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament. The building was opened in 2010 as part of a new development called Downtown Dubai. It was designed to be the centerpiece of large-scale, mixed-use development. The decision to construct the building was based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.[citation needed] The building is named in honor of the former president of the United Arab Emirates, Khalifa bin Zayed Al Nahyan. Abu Dhabi and the UAE government lent Dubai money to pay its debts. The building broke numerous height records, including its designation as the tallest building in the world",
   country:"Venezuela",
   list: [
      {image:angel1},
      {image:angel1}
   ],
 },
 {
   id:14,
   name:"Victoria Falls",
   category:"Falls",
   height:108,
   img:victoria1,
   desc:"The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament. The building was opened in 2010 as part of a new development called Downtown Dubai. It was designed to be the centerpiece of large-scale, mixed-use development. The decision to construct the building was based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.[citation needed] The building is named in honor of the former president of the United Arab Emirates, Khalifa bin Zayed Al Nahyan. Abu Dhabi and the UAE government lent Dubai money to pay its debts. The building broke numerous height records, including its designation as the tallest building in the world",
   country:"Zimbabwe",
   list: [
      {image:victoria1},
      {image:victoria1}
   ],
 },
 {
   id:15,
   name:"Iguazu Falls",
   category:"Falls",
   height:195,
   img:iguazu1,
   desc:"The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure. With a total height of 829.8 m (2,722 ft, or just over half a mile) and a roof height (excluding antenna, but including a 242.6 m spire) of 828 m (2,717 ft), the Burj Khalifa has been the tallest structure and building in the world since its topping out in 2009, surpassing Taipei 101, the previous holder of that status. Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament. The building was opened in 2010 as part of a new development called Downtown Dubai. It was designed to be the centerpiece of large-scale, mixed-use development. The decision to construct the building was based on the government's decision to diversify from an oil-based economy, and for Dubai to gain international recognition.[citation needed] The building is named in honor of the former president of the United Arab Emirates, Khalifa bin Zayed Al Nahyan. Abu Dhabi and the UAE government lent Dubai money to pay its debts. The building broke numerous height records, including its designation as the tallest building in the world",
   country:"Brazilian",
   list: [
      {image:iguazu1},
      {image:iguazu2},
      {image:iguazu3} 
   ],
 }
]
