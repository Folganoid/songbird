const birdsData = [
    [       
      {
        id: 1,
        name_en: 'Raven',
        species: 'Corvus corax',
        description_en: 'Raven is a large bird. The body length reaches 70 centimeters, the wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that the day the black crows fly away from the Tower, the monarchy will collapse.',
        name_ua: 'Ворон',
        description_ua: 'Ворон - великий птах. Довжина тіла досягає 70 сантиметрів, розмах крил – до півтора метра. Ворони населяють околиці Тауера. В Англії існує повір\'я, що в день, коли чорні ворони відлетять від Тауера, монархія впаде.',
        image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
      },
      {
        id: 2,
        name_en: 'Crane',
        species: 'Grus grus',
        description_en: 'The sounds made by the crane are similar to the voiced “kur-ly - kur-ly”. Cranes most often sing in a duet - one bird begins the song with the syllable "kur", and the second picks up "ly". If a bird sings alone, then it makes only the sound of “chickens”.',
        name_ua: 'Журавель',
        description_ua: 'Звуки, що видаються журавлем, схожі на дзвінке “кур-ли – кур-ли”. Журавлі найчастіше співають дуетом – один птах починає заспівати зі складу «кур», а другий підхоплює «ли». Якщо птах співає один, він видає лише звук «кур».',
        image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
      },
      {
        id: 3,
        name_en: 'Swallow',
        species: 'Delichon urbicum',
        description_en: 'Swallows are characterized by a low chirping. The songs of the swallows do not stop throughout the summer. Researchers distinguish up to 6 chirping sounds in birds: “vit”, “vi-vit”, “chivit”, “chirivit”, etc. Swallows love to sing a duet.',
        name_ua: 'Ластівка',
        description_ua: 'Для ластівок характерно тихе щебетання. Пісні ластівок не змовкають протягом усього літа. Дослідники розрізняють у птахів до 6 звуків, що щебечуть: «віт», «ві-віт», «чівіт», «чиривіт» і т.п. Ластівки люблять співати дуетом.',
        image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
      },
      {
        id: 4,
        name_en: 'Nightjar',
        species: 'Caprimulgus europaeus',
        description_en: 'Nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattling of a motorcycle. Such rattling is heard from dusk to dawn, its tonality, frequency and volume change.',
        name_ua: 'Дрімлюга',
        description_ua: 'Дрімлюга – непомітний птах, відомий завдяки своєму голосу. Пісня Дрімлюги звучить як монотонна трель схожа на торохтіння мотоцикла. Таке деренчання чутно від заходу сонця до світанку, його тональність, частота і гучність змінюються. ',
        image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
      },
      {
        id: 5,
        name_en: 'Cuckoo',
        species: 'Cuculus canorus',
        description_en: 'The cuckoo was named so because of the peculiarities of its songs. The voiced “cuckoo” cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos throw their eggs.',
        name_ua: 'Зозуля',
        description_ua: 'Зозулю назвали так через особливості її пісень. Дзвінке «ку-ку» не сплутати ні з яким іншим птахом. Зозулі не будують гнізда, їх потомство вирощують інші види пернатих, яким зозулі підкидають свої яйця.',
        image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
      },
      {
        id: 6,
        name_en: 'Tit',
        species: 'Parus major',
        description_en: 'More than 40 different sound combinations are distinguished in the chirping of tits. They sing almost all year round, fading a little only in winter. Tits are real orderlies of the forest. One pair of tits during the nesting period protects dozens of trees from pests.',
        name_ua: 'Синиця',
        description_ua: 'У щебетанні синиць розрізняють понад 40 різних звукових поєднань. Співають вони практично цілий рік, трохи затихаючи лише взимку. Синиці справжні санітари лісу. Одна пара синиць у період гніздування оберігає від шкідників десятки дерев.',
        image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
      }
    ],
    [
      {
        id: 1,
        name_en: 'Sparrow',
        species: 'Passer domesticus',
        description_en: 'Sparrows are the most famous and recognizable birds. They are easily recognizable by their colorful plumage and perky chirping. Sparrows belong to the synotropic species - they settle close to human habitation.',
        name_ua: 'Горобець',
        description_ua: 'Горобці є найвідомішими пернатими. Їх легко впізнати по строкатому оперенню і задерикуватому цвіріньканню. Горобці відносяться до синатропного вигляду - вони селяться поблизу людського житла.',
        image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
      },
      {
        id: 2,
        name_en: 'Rook',
        species: 'Corvus frugilegus',
        description_en: 'Rooks are very smart and quick-witted birds. With the help of a beak, they create and use the simplest tools. Rooks have a developed reflex to the sounds of a tractor. Hearing "rattling", they fly to the sound - the tractor plows the ground, which means that there is a lot of food in this place.',
        name_ua: 'Грак',
        description_ua: 'Граки дуже розумні та кмітливі птахи. За допомогою дзьоба вони створюють і використовують найпростіші знаряддя. У граків розвинений рефлекс звуки трактора. Почувши «тарахтіння», вони летять на звук – трактор оре землю, отже, тут багато корму.',
        image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
      },
      {
        id: 3,
        name_en: 'Jackdaw',
        species: 'Coloeus monedula',
        description_en: 'The word "jackdaw" comes from the Old Slavonic language and is translated as "black". This word is often used to refer to ravens or other black birds. The Latin name of the jackdaw "monedula" is associated with the words coin for the bird\'s love for shiny and bright things.',
        name_ua: 'Галка',
        description_ua: 'Слово «галка» походить зі старослов\'янської мови та перекладається як «чорна». Цим словом часто називають воронів чи інших чорних птахів. Латинську назву галки «monedula» пов\'язують зі словами монета за любов птаха до блискучих та яскравих речей.',
        image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
      },
      {
        id: 4,
        name_en: 'Song thrush',
        species: 'Turdus philomelos',
        description_en: 'Thrush is the best singer from the sparrow squad. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening. Thrushes sing during the entire nesting period.',
        name_ua: 'Дрізд співочий',
        description_ua: 'Дрізд — найкращий співак серед гороб\'їних. Пісня складається лише з гарних звучних свистів та коротких трелів. Найчастіше її можна почути в ранковий та вечірній час. Співають дрозди протягом усього періоду гніздування.',
        image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
      },
      {
        id: 5,
        name_en: 'Magpie',
        species: 'Pica pica',
        description_en: 'Magpie is a very hardworking bird. She builds up to eight nests, and chooses the best of them. The entrance to the nest of magpies always falls to the south, so that it is warmer in the dwelling. Magpies are also seen as birds that recognize themselves in mirrors.',
        name_ua: 'Сорока',
        description_ua: 'Сорока дуже працьовитий птах. Вона будує до восьми гнізд, а потім вибирає з них найкраще. Вхід у гніздо сорок завжди звернений на південь, щоб у житло було тепліше. Сороки є єдиними птахами, які впізнають себе у дзеркалі.',
        image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
      },
      {
        id: 6,
        name_en: 'Jay',
        species: 'Garrulus glandarius',
        description_en: 'When the jay is worried, the tuft on her head is ruffled. The bird tries to create a frightening sight. Jays are able to imitate the voices of other birds, animals and the sounds that humans create. For the winter they make large stocks of acorns and nuts.',
        name_ua: 'Сойка',
        description_ua: 'Коли сойка хвилюється, чубчик на її голові скуйовджується. Птах намагається створити жахливе видовище. Сойки вміють імітувати голоси інших птахів, тварин та звуки, які створює людина. На зиму вони роблять великі запаси жолудів та горіхів.',
        image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
      }
    ],
    [
      {
        id: 1,
        name_en: 'Finch',
        species: 'Fringilla coelebs',
        description_en: 'There are 450 species of finches in the wild. In winter, finches lead a flocking lifestyle. Sometimes sparrows can be seen in their families. Finches sing in the spring, with the onset of the mating season. Their singing is filled with multi-minute roulades.',
        name_ua: 'Зяблик',
        description_ua: 'У дикій природі налічується 450 видів зябликів. Взимку зяблики ведуть зграйний спосіб життя. Іноді у їхніх сім\'ях можна побачити горобців. Співають зяблики навесні, з настанням шлюбного періоду. Їх спів – це заливні багатохвилинні рулади.',
        image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
      },
      {
        id: 2,
        name_en: 'Crossbill',
        species: 'Loxia curvirostra',
        description_en: 'Crossbills are called "Christmas" birds. Under natural conditions, they give birth in winter - in January. These birds insulate their nests with moss and animal hair, so the chicks are not cold. In search of cones crossbills can fly 3500 km from the nest.',
        name_ua: 'Шишкар',
        description_ua: 'Шишкарів називають «різдвяними» птахами. У природних умовах вони дають потомство взимку – у січні. Ці птахи утеплюють свої гнізда мохом та шерстю тварин, тому пташенятам не холодно. У пошуках шишок шишкарі можуть відлітати за 3500 км від гнізда.',
        image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
      },
      {
        id: 3,
        name_en: 'Dove',
        species: 'Streptopelia turtur',
        description_en: 'The dove lives in mixed and broad-leaved forests, as well as in city parks and towns. Birds often choose places of life next to humans and easily get used to people. Due to the melodic pleasant singing of turtle doves, they are often bred at home.',
        name_ua: 'Горлиця',
        description_ua: 'Горлиця мешкає у змішаних та широколистяних лісах, а також у міських парках та селищах. Птахи часто вибирають місця життя поряд із людиною та легко звикають до людей. Завдяки мелодійному приємному співу горлиць часто розводять у домашніх умовах.',
        image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
      },
      {
        id: 4,
        name_en: 'Woodpecker',
        species: 'Dendrocopos major',
        description_en: 'The woodpecker is a conspicuous and noisy bird that often lives next to humans. From mid-January to the end of June, you can hear the "drum roll" of woodpeckers - a trill from the vibration of branches under the quick beats of the bird\'s beak. In good weather, the shot can be heard within a radius of 1.5 km.',
        name_ua: 'Дятел',
        description_ua: 'Дятел – помітний і галасливий птах, часто живе поруч із людиною. З середини січня до кінця червня можна почути «барабанний дріб» дятлів – трель від вібрації гілок під швидкими ударами дзьоба птаха. У хорошу погоду дріб чути в радіусі 1,5 км.',
        image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
      },
      {
        id: 5,
        name_en: 'Hoopoe',
        species: 'Upupa epops',
        description_en: 'Hoopoe prefer to live in open landscapes with individual trees or groves. The most convenient for the bird are the forest-steppe and savannah. A hoopoe can choose a place of residence next to a person: pastures, vineyards, orchards.',
        name_ua: 'Удод',
        description_ua: 'Удоди вважають за краще жити на відкритих ландшафтах з окремими деревами або гаями. Найбільш зручними для птиці є лісостеп та савана. Удод може вибирати місця проживання поруч із людиною: пасовища, виноградники, фруктові сади.',
        image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
      },
      {
        id: 6,
        name_en: 'Swift',
        species: 'Apus apus',
        description_en: 'Swift can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
        name_ua: 'Серпокрилець',
        description_ua: 'Серпокрильця можна побачити практично в кожному куточку планети. Вони живуть як у лісових зонах, і на відкритих місцевостях. Живуть стрижі великими зграями. Великі колонії цих птахів можна побачити в містах або прибережних скелях.',
        image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
      }
    ],
    [
      {
        id: 1,
        name_en: 'Lark',
        species: 'Alauda arvensis',
        description_en: 'Larks are migratory birds. From the beginning of September, they fly south. They return at the beginning of March, regardless of whether the snow has melted or not. By the arrival of the larks, they determined the onset of spring and the time when it was time to plow the land.',
        name_ua: 'Жайворонок',
        description_ua: 'Жайворонки — перелітні птахи. З початку вересня вони відлітають на південь. Повертаються вони на початку березня, незалежно від того, зійшов сніг чи ні. Після прильоту жайворонків визначали настання весни і пору, коли час орати землю.',
        image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
      },
      {
        id: 2,
        name_en: 'Nightingale',
        species: 'Luscinia luscinia',
        description_en: 'Nightingales sing from the beginning of May until the end of summer. Each song of the nightingale consists of 12 repeating elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
        name_ua: 'Соловей',
        description_ua: 'Солов\'ї співають з початку травня до кінця літа. Кожна пісня соловейка складається з 12 елементів, що повторюються, які ще називають колінами. Крім власних трелів, солов\'ї легко і добре переймають спів інших птахів.',
        image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
      },
      {
        id: 3,
        name_en: 'Starling',
        species: 'Sturnus vulgaris',
        description_en: 'Starlings are migratory birds. Synchronous flight of large flocks of starlings is called murmuration. This is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate shapes that decrease and increase in the sky.',
        name_ua: 'Шпак',
        description_ua: 'Шпаки - перелітні птахи. Синхронний переліт великих зграй шпаків називається мурмурацією. Це красиве і зачаровує явище – безліч птахів ніби танцюють у повітрі, утворюючи хитромудрі фігури, які зменшуються і збільшуються в небі.',
        image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
      },
      {
        id: 4,
        name_en: 'Oriole',
        species: 'Oriolus oriolus',
        description_en: 'The melody of the oriole\'s voice is compared to the sound of a flute. It is difficult for a person to see the oriole, as it lives high in the trees. The oriole is not only a very beautiful, but also a useful bird. It destroys poisonous caterpillars that other birds do not eat.',
        name_ua: 'Вивільга',
        description_ua: 'Мелодійність голосу Вивільги порівнюють із звучанням флейти. Людині складно розглянути вивільгу, оскільки вона мешкає високо на деревах. Вивільга не тільки дуже гарний, але й корисний птах. Вона знищує отруйних гусениць, яких не поїдають інші птахи.',
        image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
      },
      {
        id: 5,
        name_en: 'Waxwing',
        species: 'Bombycilla garrulus',
        description_en: 'The waxwing has very tenacious claws, which helps the bird to stay on the branches and peck at the berries that are the hardest to get. During courtship, the male offers the female a berry or other treat. If the female accepts it, then the birds create a pair.',
        name_ua: 'Омелюх',
        description_ua: 'У омелюха дуже чіпкі кігтики, що допомагає птаху утримуватися на гілках і скльовувати ягоди, які найважче дістати. У період догляду самець пропонує самці ягоду або інше частування. Якщо самка його приймає, то птахи створюють пару.',
        image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
      },
      {
        id: 6,
        name_en: 'Goldfinche',
        species: 'Carduelis carduelis',
        description_en: 'Goldfinches sing beautifully and melodiously. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills are distinguished in the singing of the goldfinch. Goldfinches get used to people, and can even return to the owner after they are released into the wild.',
        name_ua: 'Щиглик',
        description_ua: 'Щиглики співають красиво та мелодійно. І в природі, і в неволі вони щебечуть майже цілий рік. У співі щиглика розрізняють понад 20 переливчастих трелів. Щиглики звикають до людей, і навіть можуть повернутися до господаря після того, як їх випустили на волю.',
        image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
      }
    ],
    [
      {
        id: 1,
        name_en: 'Eagle',
        species: 'Aquila nipalensis',
        description_en: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, while their speed can reach 240 km / h. The illusion of slow movement is due to the flight altitude - more than 700 meters',
        name_ua: 'Орел',
        description_ua: 'У давнину орел був символом сонця. Орли часто парить над землею, при цьому швидкість їх переміщення може досягати 240 км/год. Ілюзія повільного руху відбувається через висоти польоту – понад 700 метрів',
        image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
      },
      {
        id: 2,
        name_en: 'Kite',
        species: 'Milvus migrans',
        description_en: 'Kites are large predators, they reach a height of about half a meter, and the weight of adults reaches 1 kg. The wings are narrow and long, their span is 1.5 m. Kites often nest in large flocks and even form large colonies.',
        name_ua: 'Шуліка',
        description_ua: 'Шуліки – великі хижаки, у висоту вони досягають близько півметра, а вага дорослих особин досягає 1 кг. Крила вузькі і довгі, їх розмах становить 1,5 м. Шуліки часто гніздяться великими зграями і навіть утворюють великі колонії.',
        image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
      },
      {
        id: 3,
        name_en: 'Harrier',
        species: 'Circus cyaneus',
        description_en: 'Harrier is a small falcon. It feeds mainly on mouse-like rodents, the basis of its diet is voles, hamsters, and mice. The plumage of the Harrier may be ash grey. The comparison "gray-haired like a harrier" is associated with such a bird.',
        name_ua: 'Лунь',
        description_ua: 'Лунь – це невеликий сокіл. Харчується здебільшого мишоподібними гризунами, основа його раціону – полівки, хом\'яки, миші. Оперення луня може бути попелясто-сірим. З таким птахом пов\'язане порівняння «сивий, як лунь».',
        image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
      },
      {
        id: 4,
        name_en: 'Falcon',
        species: 'Falco peregrinus',
        description_en: 'The Latin name of the falcon Falco comes from the word "sickle" because of the sickle-shaped wings. Long and wide wings allow the falcon to rise high into the sky and soar freely. The flight speed of the falcon reaches 280-320 kilometers per hour.',
        name_ua: 'Сокіл',
        description_ua: 'Латинська назва сокола Falco походить від слова серп через серпоподібну форму крил. Довгі та широкі крила дозволяють соколу високо підніматися у небо та вільно парити. Швидкість польоту сокола досягає 280-320 кілометрів на годину.',
        image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
      },
      {
        id: 5,
        name_en: 'Hawk',
        species: 'Accipiter gentilis',
        description_en: 'All hawks are characterized by wide and short wings. Another distinguishing feature is the white "eyebrows" above the eyes. Slavic warriors placed the image of a hawk on their banners as a symbol of courage, power and ruthlessness towards enemies.',
        name_ua: 'Яструб',
        description_ua: 'Для всіх яструбів характерні широкі та короткі крила. Ще одна відмітна ознака – білі «брови» над очима. Слов\'янські дружинники розміщували зображення яструба на своїх прапорах, як символ відваги, мощі та безжалісності до ворогів.',
        image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
      },
      {
        id: 6,
        name_en: 'Eagle-owl',
        species: 'Bubo bubo',
        description_en: 'The flight of the eagle owl is silent, the eyesight is very sharp. These features make the bird an unsurpassed night hunter. The eagle owl has no natural enemies, not a single animal preys on adult birds. But foxes and wolves attack the chicks.',
        name_ua: 'Пугач',
        description_ua: 'Політ пугача безшумний, зір дуже гострий. Ці особливості роблять птаха неперевершеним нічним мисливцем. У пугача немає природних ворогів, жоден звір не полює на дорослих птахів. А ось на пташенят нападають лисиці та вовки.',
        image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
      }
    ],
    [
      {
        id: 1,
        name_en: 'Albatross',
        species: 'Diomedea exulans',
        description_en: 'Albatross is the largest flying bird in the world. The wingspan reaches three and a half, weight - ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances above the ocean.',
        name_ua: 'Альбатрос',
        description_ua: 'Альбатрос - найбільший літаючий птах у світі. Розмах крил сягає три з половиною метри, вага – десять кілограмів. Більшість життя альбатроси проводять у повітрі, долаючи над океанськими просторами величезні відстані',
        image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
      },
      {
        id: 2,
        name_en: 'Sulidae',
        species: 'Sula nebouxii',
        description_en: 'A feature of the blue-footed booby is not only the rich bright blue color of the legs, but also the fact that they are very warm. While other species of birds warm the clutches with their bodies, the blue-footed booby does this with the help of its paws.',
        name_ua: 'Сула',
        description_ua: 'Особливістю голубоногої сули є не лише насичений яскраво-синій колір лапок, але ще й той факт, що вони дуже теплі. У той час як інші види птахів гріють кладки своїм тілом, блакитнога сула робить це за допомогою лапок',
        image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
      },    
      {
        id: 3,
        name_en: 'Petrel',
        species: 'Puffinus griseus',
        description_en: 'The sizes of petrels are different. The smallest of them are up to 25 cm long, the largest - up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of a petrel in the air portends a storm, as the very name of the bird indicates.',
        name_ua: 'Буревісник',
        description_ua: 'Розміри буревісникових різні. Найменші з них у довжину становлять до 25 см, найбільші - до 1 м, при розмаху крил близько 2 м. Існує повір\'я, що поява буревісника в повітрі віщує бурю, про що говорить сама назва птиці.',
        image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
      },
      {
        id: 4,
        name_en: 'Pelican',
        species: 'Pelecanus',
        description_en: 'Pelicans are inhabitants of the seas and rivers. They walk awkwardly, but fly and swim well. They feed mainly on fish, organize collective hunts - lining up in a semicircle, they flap their wings and beaks on the water and force out the frightened fish in shallow water.',
        name_ua: 'Пелікан',
        description_ua: 'Пелікани - мешканці морів та річок. Ходять вони незграбно, але добре літають та плавають. Харчуються в основному рибою, влаштовують колективні полювання - вишикувавшись півколом ляскають по воді крилами і дзьобами і витісняють налякану рибу на мілководді.',
        image: 'https://farm4.staticflickr.com/3917/14782586322_b9fa226da1_b.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
      },
      {
        id: 5,
        name_en: 'Penguin',
        species: 'Aptenodytes forsteri',
        description_en: 'The male emperor penguin reaches a height of 130 cm, its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin\'s diet consists of fish, squid and krill. Birds hunt in the ocean in large groups.',
        name_ua: 'Пінгвін',
        description_ua: 'Самець імператорського пінгвіна досягає зростання 130 см, його маса може наближатися до 50 кг. З усіх сучасних пінгвінів цей вид найбільший. Харчування пінгвіна складається з риби, кальмарів та криля. Полюють птахи в океані великими групами.',
        image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
      },
      {
        id: 6,
        name_en: 'Seagull',
        species: 'Larus argentatus',
        description_en: 'Seagulls inhabit the shores of the seas, lakes, rivers, reservoirs, swamps, often nest on islands. Since the end of the last century, seagulls began to appear in large cities, where they nest on the roofs of buildings. All seagulls lead a colonial lifestyle.',
        name_ua: 'Мартин',
        description_ua: 'Мартини населяють береги морів, озер, річок, водосховищ, боліт, часто гніздяться на островах. З кінця минулого сторіччя мартини стали з\'являтися у великих містах, де влаштовують гнізда на дахах будівель. Всі мартини ведуть колоніальний спосіб життя.',
        image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
      }
    ]
  ];
  
  export default birdsData;