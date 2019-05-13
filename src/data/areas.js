import bangkok from '../assets/bangkok-ploy.jpg';
import chiangmai from '../assets/chiangmai.jpg';
import kanchanaburi from '../assets/kanchanaburi-ploy.jpg';
import central from '../assets/central.jpg';
import eastern from '../assets/Santuaryoftruth2.jpg';
import western from '../assets/western-ploy.jpg';
import southern from '../assets/southern.jpg';
import northern from '../assets/northern.jpg';
import isan from '../assets/isan.jpg';

const AREAS = [
  {
    id: 1,
    location: 'Bangkok',
    anchor: 'Bangkok',
    title: 'City of Angels',
    description: 'Bangkok - A fun packed lively city, that has hidden treasures for all!',
    link: 'https://en.wikipedia.org/wiki/Bangkok',
    info: 'Bangkok is the capital city of Thailand and is a popular tourist destination, transport hub and business centre. There is something for everyone here. Some highlights include the following: <ul><li>Sukhumvit Road - This long road is the centre of town. Find bars, restaurants, shopping malls, schools and corporate offices.</li><li>Khoasan Road - This infamous road is known for attracting backpackers, tourists and gawkers.</li><li>Transport - A skytrain (BTS), underground train (MRT), Airport link, Canal boats and many others run through the town. See Transport page for more information.</li><li>The Jungle in Bangkok - Bang Krachao is a beautiful peaceful jungle in the heart of Bangkok across the river. Great for bike reading, seeing local markets and coffee shops overlooking the river. <a href="https://migrationology.com/bang-krachao-bangkok-bike-tour/">Bang Krachao blog</a></li></ul>',
    imageInfo: 'Bangkok by <strong>@gypsypianist</strong> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://www.instagram.com/gypsypianist_ploiiiibz/">Instagram Profile</a>',
    image: bangkok
  },
  {
    id: 2,
    location: 'Chiang Mai',
    anchor: 'ChiangMai',
    title: 'The Chill of Chiang Mai',
    description: 'The slow pace and vibe of this city will never leave you.',
    link: 'https://en.wikipedia.org/wiki/Chiang_Mai',
    info: 'Chiang Mai is one of the most loved places in Thailand. It is well known for its laid back lifestyle and is always always a popular choice whenever the question arises for "What is your favourite place in Thailand?". There are markets, great places to go shopping, eat great Thai food (Khao Soi dish is a must), drink, see wildlife, visit National Parks and laze beneath the stars.  Some highlights and recommendations include the following: <ul><li>Old Town - This area, popular with the tourists, is surronded by a big square wall. Coffee shops, bars, restaurants inside and outside the walls makes this a must on your visit.</li><li>Nimmanhemin Road - To the North-West just outside the Old Town, is this hip street for shopping, restaurants, bars and more..</li><li>National Parks - There are quite a few big National parks that take up the Chiang Mai province. Recommend visiting the Doi Pui-Doi Suthep, Pha Daeng and Doi Inthanon national parks (doi Inthanon also has the highest mountain in Thailand).</li><li>Doi Suthep - This buddhest temple by the national park gives you a fantastic view of the city and the environment. </li><li>Hill Tribe, Treks and Hiking Tours - There are many tours to go hiking in the parks, hike, see and stay with the hill tribes, go trekking with elephants. Search on our home page for more information.</li></ul>',  
    imageInfo: 'Mae Ya Waterfall by <a href="//commons.wikimedia.org/w/index.php?title=User:Lestermandersson&amp;action=edit&amp;redlink=1" class="new" title="User:Lestermandersson (page does not exist)">Lester Mathias Andersson</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=23992028">Link</a>',
    image: chiangmai
  },
  {
    id: 3,
    location: 'Kanchanaburi',
    anchor: 'Kanchanaburi',
    title: 'Town by the River',
    description: 'Kanchanaburi is the place to relax and chill by the river.',
    link: 'https://wikitravel.org/en/Kanchanaburi',
    info: 'Kanchanaburi is a provincce 2-3 hours west of Bangkok. The main town itself, is a lively but also relaxing place to spend, thanks to the river that runs through it and the national parks that are not too far away.  Some highlights and recommendations include the following: <ul><li>River Kwai Bridge - This famous bridge which is also known as the Death Railway bridge or the Burma Railway has lots of history and been made into 2 or 3 movies over the last century.</li><li>National parks and Waterfalls - A drive away you have a couple of National parks, filled with great places to relax, stay, trek and also spend time in the waterfalls. Erawan National Park has also arguably the best waterfall in Thailand with, that climbs 7 tiers.</li><li>River - As the river runs through the town and into deeper parts of the province and into the National Parks, you get lots of accomodation by the river and on river rafts. Imagine a warm evening, clear skies, a hammock on the balcony of your river raft; you get the drift.</li><li>Museums - As this place has a lot of history when it comes to World War 2, a visit to the museums dedicated to the war are definitely worth a visit.</li></ul>',
    imageInfo: 'Train to Kanchanaburi by <strong>@gypsypianist</strong> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://www.instagram.com/gypsypianist_ploiiiibz/">Instagram Profile</a>',
    image: kanchanaburi
  },
  {
    id: 4,
    location: 'Central Thailand',
    anchor: 'CThailand',
    title: 'Ayuttaya, Lopburi and more',
    description: 'See the temple cities such as Ayuttihaya and Lopburi.',
    link: 'https://en.wikipedia.org/wiki/Central_Thailand',
    info: 'Central Thailand is divided into 22 provinces and the area played a pivotal role in Thai history. It is home to the capital city, Bangkok and Greater Bangkok.  Some places and recommendations include the following: <ul><li>Sukhothai - Is known for its historical monuments, mountain ranges and national parks.<a href="https://en.wikipedia.org/wiki/Sukhothai_Province"> Read more...</a></li><li>Ayuttaya - This place is famous for its temples and historical ruins. <a href="https://en.wikipedia.org/wiki/Phra_Nakhon_Si_Ayutthaya_Province"> Read more...</a></li><li>Lopburi - If Thai history is of interest to you, then visiting the hostorical monuments and temples is a must visit. And if you like monkeys, there are loads of monkeys to be found!<a href="https://en.wikipedia.org/wiki/Lopburi_Province"> Read more...</a></li><li>Nonthaburi - Nonthaburi is directly to the North of Bangkok and is a place many locals who work in Bangkok live for cheaper cost of living than the capitol.<a href="https://en.wikipedia.org/wiki/Nonthaburi_Province"> Read more...</a></li></ul>',
    imageInfo: 'Wat chaiwatthanaram by <a href="//commons.wikimedia.org/w/index.php?title=User:%E0%B9%80%E0%B8%81%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%8A%E0%B8%B1%E0%B8%A2_%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%9B%E0%B8%AD&amp;action=edit&amp;redlink=1" class="new" title="User:เกริกชัย อินทร์ปอ (page does not exist)">เกริกชัย อินทร์ปอ</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=28390166">Link</a>',
    image: central
  },
  {
    id: 5,
    location: 'Eastern Thailand',
    anchor: 'EThailand',
    title: 'Chonburi, Pattaya, Rayong and more',
    description: 'Head to the National parks and beaches that line up the East side.',
    link: 'https://en.wikipedia.org/wiki/Eastern_Thailand',
    info: 'Eastern Thailand is one of the most interesting parts of Thailand as you have national parks, cities, sleepy towns and islands.  Some places and recommendations include the following: <ul><li>Chonburi - Chonburi is very diverse with many cities and towns as well as famous beaches. If you fancy a beach 1-2 hours from Bangkok, check out Bang Saen .<a href="https://en.wikipedia.org/wiki/Chonburi_Province"> Read more...</a></li><li>Pattaya - The infamous beach town is full of nice resorts, restaurants and bars. Once a fishing town, now a very popular R&R stop. <a href="https://en.wikipedia.org/wiki/Pattaya"> Read more...</a></li><li>Rayong / Ko Samet - Rayong has some lovely beaches and places to visit. The jewel in the crown is Ko Samet, which is a National Park island which is a fantastic getaway.<a href="https://en.wikipedia.org/wiki/Ko_Samet"> Read more...</a></li><li>Ko Chang - Ko Chang and its surrounding islands is a favourite for many.<a href="https://en.wikipedia.org/wiki/Ko_Chang_District"> Read more...</a></li></ul>',
    imageInfo: 'Sanctury of Truth by <a href="https://en.wikipedia.org/wiki/User:Marlinjuice" class="extiw" title="wikipedia:User:Marlinjuice">Marlinjuice</a> at <a href="https://en.wikipedia.org/wiki/" class="extiw" title="wikipedia:">English Wikipedia</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=12991549">Link</a>',
    image: eastern
  },
  {
    id: 6,
    location: 'Western Thailand',
    anchor: 'WThailand',
    title: 'Kanchanaburi, Phetchaburi, Prachuap Khiri Khan etc',
    description: 'National Parks, lush lakes, rivers and the idyllic west coast',
    link: 'https://en.wikipedia.org/wiki/Western_Thailand',
    info: 'Western Thailand is my favourite place in Thailand; you have Kanchanaburi district and its National Parks and rivers and all that is West of there, you then head down south west of Bangkok along the coast and to the beach towns of Cha-am, Hua-Hin and all those National Parks.  Some places and recommendations include the following: <ul><li>Kanchanaburi Province - Kanchanaburi is detailed above.<a href="https://wikitravel.org/en/Kanchanaburi"> Read more...</a></li><li>Sangkhlaburi - To the west of Kanchanburi you have gorgeous sleepy lakes and National parks. Need relaxation? Here you go. <a href="https://wikitravel.org/en/Sangkhlaburi"> Read more...</a></li><li>Cha-am / Hua-Hin - Hua Hin is a favourite for Thais and foreigners alike. This beach town attracts the crowds. Cha-am not far away, is also worth visiting, though caters more to Thais than foreginers.<a href="https://en.wikipedia.org/wiki/Hua_Hin_District"> Read more...</a></li><li>Prachuap Khiri Khan - There are some quiet hidden spots around here worth visiting, especially the quiet beaches like Sam Roi Yot.<a href="https://en.wikipedia.org/wiki/Prachuap_Khiri_Khan_Province"> Read more...</a></li></ul>.',
    imageInfo: 'Phetchaburi by <strong>@gypsypianist</strong> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://www.instagram.com/gypsypianist_ploiiiibz/">Instagram Profile</a>',
    image: western
  },
  {
    id: 7,
    location: 'Southern Thailand',
    anchor: 'SThailand',
    title: 'Hat Yai, Satun, Naknon Si Thammarat, Krabi and more.',
    description: 'Beautiful islands, beaches and Southern Thai life',
    link: 'https://en.wikipedia.org/wiki/Southern_Thailand',
    info: 'Southern Thailand takes up a lot of area. With amazing beaches, islands, national parks and interesting Thai cluture to be found, there is so much here to be explored and visit.  Some places and recommendations include the following: <ul><li>Phuket - Phuket is the most popular island for tourists and families. You have the Similan islands to the North West and Krabi and their islands to the south, so there is a lot to do explore.<a href="https://en.wikipedia.org/wiki/Phuket_Province"> Read more...</a></li><li>Krabi - Krabi is a personal favourite of mine, due to the place called Railay, which is like an island but is in fact part of the land that cannot be reached by foot. You also have neighbouring islands such as Phi Phi, Ko Lanta and Krabi town itself. <a href="https://en.wikipedia.org/wiki/Krabi_Province"> Read more...</a></li><li>Chumphon - Chumphon\'s airport makes it a popular destination for exploring the islands to to the East (Ko Samui etc) and for venturing further down South or up the Eastern coast where many seclded spots can be found.<a href="https://en.wikipedia.org/wiki/Chumphon_Province"> Read more...</a></li><li>Ko Samui - Ko Samui, Ko Pha Ngan and Ko Tao make up this 3 very famous islands to the East. Samui is for the families, tourists and party lovers, Pha Ngan is for the ones who wish to visit the Full Moon Party in the south of the island, though the North of the island is quiet and beautiful for those wanting the tranquil and Ko Tao is infamous for diving and is a favourite for many travellers and locals.<a href="https://en.wikipedia.org/wiki/Ko_Samui"> Read more...</a></li><li>Nakhon Si Thammarat - This is a province that is known for being hilly but has some nice untouched secluded beaches to be found.<a href="https://en.wikipedia.org/wiki/Nakhon_Si_Thammarat_Province"> Read more...</a></li><li>Satun - Satun is a Southern Province which contaons some goregous beaches and is near the Malaysian border.<a href="https://en.wikipedia.org/wiki/Satun_Province"> Read more...</a></li><li>Trang - Trang has some great coastline and some National parks.<a href="https://en.wikipedia.org/wiki/Trang_Province"> Read more...</a></li><li>Phang Nga - This is a collection of islands on the west side and also includes the infamous James Bond island.<a href="https://en.wikipedia.org/wiki/Phang_Nga_Province"> Read more...</a></li></ul>',
    imageInfo: 'Khao Sok National Park Surat Thani Province by <a href="//commons.wikimedia.org/w/index.php?title=User:KOSIN_SUKHUM&amp;action=edit&amp;redlink=1" class="new" title="User:KOSIN SUKHUM (page does not exist)">KOSIN SUKHUM</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=49525585"> Read more...</a>',
    image: southern
  },
  {
    id: 8,
    location: 'Northern Thailand',
    anchor: 'NThailand',
    title: 'Chiang Mai, Chiang Rai, Pai and more',
    description: 'Northern Thailand is a beautiful and lush place to visit',
    link: 'https://en.wikipedia.org/wiki/Northern_Thailand',
    info: 'Northern Thailand with Myanmar to the West and Laos to the East, is a place with mountains, national parks, rivers and villages. Some of the places to recommend are:<ul><li>Chiang Mai - A favourite for many. See above for more details on Chiang Mai. <a href="https://en.wikipedia.org/wiki/Chiang_Mai_Province"> Read more...</a></li><li>Chiang Rai - Full of hills, rain forests and remote villages. This place is a must visit along with the Golden Triangle, where Myanmar, Laos and Thailand border each other.<a href="https://en.wikipedia.org/wiki/Chiang_Rai_Province"> Read more...</a></li><li>Mae Hong Son - Mae Hong Son is a popular drop off point before visiting the hill tribes and is well known for the village Pai, where many couples and tourists go for water rafting and more. <a href="https://en.wikipedia.org/wiki/Mae_Hong_Son"> Read more...</a></li></ul>',
    imageInfo: 'Intanon 03 by <a href="//commons.wikimedia.org/w/index.php?title=User:Khunkay&amp;action=edit&amp;redlink=1" class="new" title="User:Khunkay (page does not exist)">Khunkay</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=41144230">Link</a>',
    image: northern
  },
  {
    id: 9,
    location: 'North Eastern Thailand',
    anchor: 'NEThailand',
    title: 'Ubon Ratchasima, Sisaket, Khon Kaen, Surin etc',
    description: 'Isan is an Authentic and beautiful area of fields and Thai life.',
    link: 'https://en.wikipedia.org/wiki/Isan',
    info: 'North Eastern Thailand, known as Isan, borders Cambodia and Laos and though it contains a third of Thailand\'s population is is also the poorest region. Isan is filled with many towns, villages and farms. Some of the places to recommend are:<ul><li>Ubon Ratchathani - Ubon Ratchathani or Ubon as the locals like to call it, is probably the most well known place in Isan and houses mountains, national parks and villages.<a href="https://en.wikipedia.org/wiki/Ubon_Ratchathani_Province"> Read more...</a></li><li>Udon Thani -One of Isan\'s most well known cities. <a href="https://en.wikipedia.org/wiki/Udon_Thani_Province"> Read more...</a></li><li>Khon Kaen - A place in central Isan with multi sub-districts.<a href="https://en.wikipedia.org/wiki/Khon_Kaen_Province"> Read more...</a></li></ul>',
    imageInfo: 'Pha Lom Sak by Original uploader <a href="https://en.wikipedia.org/wiki/User:Billybobmac" class="extiw" title="en:User:Billybobmac">Billybobmac</a> at <a class="external text" href="http://en.wikipedia.org">en.wikipedia</a> - Transferred from <a class="external text" href="http://en.wikipedia.org">en.wikipedia</a>, Public Domain, <a href="https://commons.wikimedia.org/w/index.php?curid=3713236">Link</a>',
    image: isan
  }
];

export default AREAS;
