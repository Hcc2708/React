import React from 'react'
import Newsitem from './Newsitem'

export default function () {
    const articles = [
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETtech",
            "title": "Challenge Accepted: Mark Zuckerberg ready to fight Elon Musk in a cage match",
            "description": "Recently, 51-year-old Musk had tweeted that he would be “up for a cage fight” with Zuckerberg. The 39-year-old Meta CEO, who is an aspiring mixed martial arts (MMA) fighter, shot back by posting a screenshot of Musk’s tweet on Instagram, with the caption: “se…",
            "url": "https://economictimes.indiatimes.com/tech/technology/challenge-accepted-mark-zuckerberg-ready-to-fight-elon-musk-in-a-cage-match/articleshow/101182199.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101182178,width-1070,height-580,imgsize-52970,overlay-ettech/photo.jpg",
            "publishedAt": "2023-06-22T06:03:13Z",
            "content": "The slightly built Meta (Facebook-Instagram-WhatsApp) chief Mark Zuckerberg says he is ready to take on beefy Tesla-SpaceX-Twitter boss Elon Musk in a cage match, accepting a challenge thrown down by… [+1782 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Netzpolitik.org"
            },
            "author": "Markus Reuter",
            "title": "Crowd-Recherche: Wir wollen wissen, was Autohersteller über moderne Autos speichern",
            "description": "Welche Daten sammeln Autohersteller über Dich und Dein Auto? (Symbolbild) – Alle Rechte vorbehalten IMAGO / Ralph Peters\r\nWenns ums Auto geht, sind die Deutschen kompromisslos. Gilt das auch für die Daten, welche die Automobilkonzerne über uns und unsere Auto…",
            "url": "https://netzpolitik.org/2023/crowd-recherche-wir-wollen-wissen-was-autohersteller-ueber-moderne-autos-speichern/",
            "urlToImage": "https://cdn.netzpolitik.org/wp-upload/2023/06/imago-auto-datenschutz-e1687349190951-1200x675.jpg",
            "publishedAt": "2023-06-22T06:00:41Z",
            "content": "Moderne Autos sind fahrende Datensauger. Wir wissen kaum etwas darüber, welche Datenfülle bei modernen Autos entsteht. Diese Daten werden von Autoherstellern regelmäßig abgerufen, gespeichert und aus… [+6509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Businessinsider.de"
            },
            "author": "Nina Anika Klotz",
            "title": "Stroh statt Strom: Tüftler aus Brandenburg baut neuartige Ladestation für E-Autos",
            "description": "Die grauen Kästen von me energy erzeugen Strom für eine halbe Erdumrundung. Dabei sind sie aber stromnetzunabhängig. Wie geht das?",
            "url": "https://www.businessinsider.de/gruenderszene/automotive-mobility/strom-aus-stroh-startup-me-energy/",
            "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2023/06/me-energy-titel-scaled.jpeg?ver=1687288543",
            "publishedAt": "2023-06-22T06:00:00Z",
            "content": "Alles alte Hüte: Bis 2030 werden laut Schätzung der Bundesregierung 15 Millionen E-Autos auf deutschen Straßen fahren. Um die zu tanken fehlen irgendwas zwischen 400.000 und 800.000 Ladesäulen. Und: … [+2014 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Finn McRedmond",
            "title": "It didn’t work for Boris Johnson, but ‘obesity drug’ Ozempic is a cause for celebration",
            "description": "It is easy to assume the world is getting progressively worse. And then along comes a huge leap forward in science or medicine to challenge the misery",
            "url": "https://www.irishtimes.com/opinion/2023/06/22/it-didnt-work-for-boris-johnson-but-obesity-drug-ozempic-is-a-cause-for-celebration/",
            "urlToImage": "https://www.irishtimes.com/resizer/89zX6dXHLgRl_dRSMRHe4-OXY5M=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/TUQHBXV67IJS6HXSSQ7NHGO6EM.jpg",
            "publishedAt": "2023-06-22T06:00:00Z",
            "content": "Boris Johnson made his official debut as a Daily Mail columnist on Saturday. His first piece caught us all by surprise: it was not a takedown of his political rivals nor a lofty musing on the state o… [+4922 chars]"
        },
        {
            "source": {
                "id": "rt",
                "name": "RT"
            },
            "author": "RT en Español\n , RT en Español",
            "title": "Musk desafía a Zuckerberg a un combate en jaula y recibe una respuesta",
            "description": "El magnate hizo la propuesta al comentar un post sobre una nueva aplicación de Zuckerberg que, según se rumorea, podría ser una \"respuesta a Twitter\".",
            "url": "https://actualidad.rt.com/actualidad/470877-elon-musk-desafiar-mark-zuckerberg-pelea",
            "urlToImage": "https://mf.b37mrtl.ru/actualidad/public_images/2023.06/article/6493c41359bf5b79e8306ec2.jpg",
            "publishedAt": "2023-06-22T05:58:36Z",
            "content": "El propietario de Twitter, Elon Musk, retó este miércoles al director ejecutivo de Meta*, Mark Zuckerberg, que practica jiu-jitsu, a \"un combate en jaula\".\r\nEl empresario lanzó la propuesta al coment… [+865 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "entrepreneur.com",
            "title": "Ford CEO Slams Tesla's 'Silicon Valley' Cybertruck",
            "description": "In an interview with CNBC, Jim Farley said his company wasn't threatened by Tesla's entry into the pickup market. Ford CEO Jim Farley has a message for Elon Musk's Tesla: Your fancy new Cybertruck doesn't keep me up at night. Appearing on CNBC's Mad Money fro…",
            "url": "https://biztoc.com/x/7da8517fd5c0adb0",
            "urlToImage": "https://c.biztoc.com/p/7da8517fd5c0adb0/s.webp",
            "publishedAt": "2023-06-22T05:56:04Z",
            "content": "In an interview with CNBC, Jim Farley said his company wasn't threatened by Tesla's entry into the pickup market.Ford CEO Jim Farley has a message for Elon Musk's Tesla: Your fancy new Cybertruck doe… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Lisa Pham",
            "title": "Nvidia Now Tops Tesla as ESG Funds Ratchet Up Exposure to AI",
            "description": "(Bloomberg) -- Nvidia Corp.’s stratospheric ascent has lured at least 100 more ESG funds in recent weeks, transforming the company into one of the most...",
            "url": "https://finance.yahoo.com/news/nvidia-more-popular-tesla-another-190000799.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_markets_842/30251671f39c6a71a0e731b9c8911575",
            "publishedAt": "2023-06-22T05:53:46Z",
            "content": "(Bloomberg) -- Nvidia Corp.s stratospheric ascent has lured at least 100 more ESG funds in recent weeks, transforming the company into one of the most popular stocks among asset managers who integrat… [+4957 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sudinfo.be"
            },
            "author": "Par Yannick Hallet",
            "title": "Voitures électriques: voici les occasions qui cartonnent",
            "description": "Le marché de l’occasion progresse au niveau des voitures électriques. L’offre est poussée par les véhicules de démonstration.",
            "url": "https://www.sudinfo.be/id679616/article/2023-06-22/voitures-electriques-voici-les-occasions-qui-cartonnent",
            "urlToImage": "https://spgeng.rosselcdn.net/sites/default/files/dpistyles_v2/FirstImageUrl/2023/06/21/node_679616/54892104/public/2023/06/21/B9734584060Z.1_20230621215340_000%2BGQ3N0LMJ3.1-0.jpg?itok=IlA4nXwU1687377232",
            "publishedAt": "2023-06-22T05:53:00Z",
            "content": "Entre le 1er janvier et le 31 mai 2023, 4.287 voitures électriques ont été vendues doccasion, soit un peu moins de 2 % de lensemble du marché de loccasion, selon Traxio, la fédération du commerce aut… [+3062 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ROD McGUIRK Associated Press",
            "title": "Australian online safety watchdog demands answers from Twitter on how it tackles online hate",
            "description": "Australia’s online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk bought the platform",
            "url": "https://abcnews.go.com/Technology/wireStory/australian-online-safety-watchdog-demands-answers-twitter-tackles-100296769",
            "urlToImage": "https://s.abcnews.com/images/International/wirestory_aabc32d69db1658a5b95c8f4314b444d_16x9_992.jpg",
            "publishedAt": "2023-06-22T05:50:26Z",
            "content": "CANBERRA, Australia -- Australias online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since T… [+4357 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ROD McGUIRK Associated Press",
            "title": "Australian online safety watchdog demands answers from Twitter on how it tackles online hate",
            "description": "Australia’s online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk bought the platform",
            "url": "https://abcnews.go.com/Business/wireStory/australian-online-safety-watchdog-demands-answers-twitter-tackles-100296768",
            "urlToImage": "https://s.abcnews.com/images/International/wirestory_aabc32d69db1658a5b95c8f4314b444d_16x9_992.jpg",
            "publishedAt": "2023-06-22T05:50:21Z",
            "content": "CANBERRA, Australia -- Australias online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since T… [+4357 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "ROD McGUIRK Associated Press",
            "title": "Australian online safety watchdog demands answers from Twitter on how it tackles online hate",
            "description": "Australia’s online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk bought the platform",
            "url": "https://abcnews.go.com/International/wireStory/australian-online-safety-watchdog-demands-answers-twitter-tackles-100296767",
            "urlToImage": "https://s.abcnews.com/images/International/wirestory_aabc32d69db1658a5b95c8f4314b444d_16x9_992.jpg",
            "publishedAt": "2023-06-22T05:50:12Z",
            "content": "CANBERRA, Australia -- Australias online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since T… [+4357 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "apnews.com",
            "title": "Australian online safety watchdog demands answers from Twitter on how it tackles online hate",
            "description": "Australia’s online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk bought the platform. Australia’s eSafety Commission describes i…",
            "url": "https://biztoc.com/x/486be09df3e3d5ee",
            "urlToImage": "https://c.biztoc.com/p/486be09df3e3d5ee/s.webp",
            "publishedAt": "2023-06-22T05:50:04Z",
            "content": "Australias online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk boug… [+301 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "鉅亨網編譯段智恆",
            "title": "〈美股早盤〉Fed主席鮑爾亮鷹爪 主要指數開低",
            "description": "聯準會（Fed）主席鮑爾昨在利率路徑上堅持鷹派立場，稍後將出席參議院銀行委員會聽證會備受市場矚目，美股主要指數周四（22 日）開低。",
            "url": "https://tw.stock.yahoo.com/news/%E7%BE%8E%E8%82%A1%E6%97%A9%E7%9B%A4-fed%E4%B8%BB%E5%B8%AD%E9%AE%91%E7%88%BE%E4%BA%AE%E9%B7%B9%E7%88%AA-%E4%B8%BB%E8%A6%81%E6%8C%87%E6%95%B8%E9%96%8B%E4%BD%8E-134829581.html",
            "urlToImage": "https://media.zenfs.com/ko/cnyes.com.tw/6503960d4df0a5b9981057c89cc69428",
            "publishedAt": "2023-06-22T05:48:29Z",
            "content": "Fed22 \r\n 100 0.3% 160 1.2% 500 0.5% 2.7%\r\nanimal spirits\r\n 3 \r\nFed \r\nBOE 2 50 4.5% 5% 15 2 1980 2 40% 1 25 \r\nBOE 7 2 7 2\r\n22 21 \r\n<ul><li> 102.35 0.30% 33,951.52 \r\n</li><li> 165.10 1.21% 13,502.20 \r\n… [+606 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "特斯拉创建 Tesla AI 推特账户，称下月开始生产 Dojo 超级计算机",
            "description": "IT之家 6 月 22 日消息，特斯拉公司创建了一个名为 @Tesla AI 的推特账户，并称“特斯拉正在制造自主机器人的基础模型”，特斯拉 CEO 埃隆・马斯克也关注了该账户。该账户发布了一系列推文，称公司将于 2023 年 7 月开始生产 Dojo 超级计算机。Dojo 是特斯拉为了提升自动驾驶和智能机器人等人工智能产品的性能而开发的一款强大的计算平台。在相关推文下，马斯克回复称，无论从硬件还是软件方面看，特斯拉的人工智能都比大多数专家意识到的要先进得多。IT之家注意到，该账号主要介绍了特斯拉在人工智能领域的…",
            "url": "https://www.ithome.com/0/701/433.htm",
            "urlToImage": null,
            "publishedAt": "2023-06-22T05:46:48Z",
            "content": "IT 6 22 @Tesla AI CEO \r\n2023 7 Dojo Dojo \r\nIT\r\n AI Dojo 2024 1 2024 10 100 exaflops \r\nDojo CEO Elon Musk 2020 Dojo Autopilot Full Self-DrivingDojo Optimus Optimus"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Rod McGuirk",
            "title": "Australian online safety watchdog demands answers from Twitter on how it tackles online hate",
            "description": "Australia’s online safety watchdog has issued a legal notice to Twitter demanding an explanation of what the social media giant is doing to tackle a surge in online hate since Tesla CEO Elon Musk bought the platform",
            "url": "https://www.independent.co.uk/news/twitter-ap-elon-musk-australian-indigenous-australians-b2362087.html",
            "urlToImage": "https://static.independent.co.uk/2023/06/22/06/Australia_Twitter_32692.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2023-06-22T05:39:47Z",
            "content": "For free real time breaking news alerts sent straight to your inbox sign up to our breaking news emails\r\nSign up to our free breaking news emails\r\nAustralias online safety watchdog has issued a legal… [+4481 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cornucopia.se"
            },
            "author": "Lars Wilderang",
            "title": "Fortsatt nedåt i Asien under torsdagsmorgonen – e-handeln minskade med 12%",
            "description": "Börserna fortsätter backa i de asiatiska tidszonerna, men den svenska kronan stärks något och drar ner guldpriset trots högre amerikanska räntor. E-handeln föll med 12% i maj rapporterar Svensk Handel, och man kan fundera på om de höjda räntorna nu börjar ge …",
            "url": "https://cornucopia.se/2023/06/fortsatt-nedat-i-asien-under-torsdagsmorgonen-e-handeln-minskade-med-12/",
            "urlToImage": "https://cornucopia.se/wp-content/uploads/2023/05/teknik_kartonger_dustin.jpeg",
            "publishedAt": "2023-06-22T05:37:14Z",
            "content": "27Denna artikel innehåller betallänkar för Lysa, min huvudsakliga tjänst för sparande, både privatoch för företaget.\r\nBörserna fortsätter backa i de asiatiska tidszonerna, men den svenska kronan stär… [+2845 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TheWrap"
            },
            "author": "Ross A. Lincoln",
            "title": "Elon Musk Agrees to Fight Mark Zuckerberg: ‘Vegas Octogon’",
            "description": "Tesla/Twitter CEO Elon Musk might have been joking, but as always it's hard to tell",
            "url": "http://www.thewrap.com/elon-musk-mark-zuckerberg-fight-vegas-octogon/",
            "urlToImage": "https://www.thewrap.com/wp-content/uploads/2023/03/elon-musk.jpg",
            "publishedAt": "2023-06-22T05:36:43Z",
            "content": "Despite repeatedly describing himself as a defender of comedy, Elon Musk famouslyisn’t all that good at actually being funny. Which is why we think, but we can’t be sure, that he was joking when he c… [+1349 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hibridosyelectricos.com"
            },
            "author": "Javier Gómara",
            "title": "Los datos del Volkswagen ID.7 con motor dual esconden algo extraño para ser los de una versión 'deportiva'",
            "description": "Con cuatro modelos eléctricos lanzados en Europa; ID.3, ID.4, ID.5 e ID.Buzz, todas las miradas están puestas en el nuevo integrante. Volkswagen confía en que su quinto modelo eléctrico europeo, el sexto a nivel mundial, relance la división de eléctricos con …",
            "url": "https://www.hibridosyelectricos.com/coches/volkswagen-id7-motor-dual-algo-extrano-version-deportiva_69816_102.html",
            "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/47/31/81/volkswagen-id7-lateral_6_489x275.jpeg",
            "publishedAt": "2023-06-22T05:32:52Z",
            "content": "Con cuatro modelos eléctricos lanzados en Europa; ID.3, ID.4, ID.5 e ID.Buzz, todas las miradas están puestas en el nuevo integrante.  Volkswagen confía en que su quinto modelo eléctrico europeo, el … [+3751 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Online",
            "title": "On 'Thalapathy' Vijay's 49th birthday, fans gush over star's rugged look as 1st look of action thriller 'Leo' unveiled",
            "description": "'Leo's first-look poster shows Vijay accompanied by a hyaena and wielding a bloodied sledgehammer. Fans went gaga on Vijay’s “beast mode” on Twitter.",
            "url": "https://economictimes.indiatimes.com/magazines/panache/on-thalapathy-vijays-49th-birthday-fans-gush-over-stars-rugged-look-as-1st-look-of-action-thriller-leo-unveiled/articleshow/101181180.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101181126,width-1070,height-580,imgsize-30604,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-06-22T05:30:10Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Japan Times"
            },
            "author": "Paul Lienert",
            "title": "For EV batteries, lithium iron phosphate narrows the gap with nickel and cobalt",
            "description": "Technological advances have reduced the performance gap with more widely used materials.",
            "url": "https://www.japantimes.co.jp/news/2023/06/22/business/tech/ev-batteries-lithium-iron-phosphate/",
            "urlToImage": "https://cdn-japantimes.com/wp-content/uploads/2023/06/np_file_234625-870x489.jpeg",
            "publishedAt": "2023-06-22T05:26:51Z",
            "content": "DETROIT – As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery … [+819 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETMarkets.com",
            "title": "Share market update: Most active stocks on D-Street today in terms of volume",
            "description": "The NSE Nifty index was trading 3.15 points  up  at 18860.0",
            "url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/share-market-update-most-active-stocks-on-d-street-today-in-terms-of-volume/articleshow/101181145.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-83735827,width-1070,height-580,imgsize-166342,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T05:26:28Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Golem.de"
            },
            "author": "Andreas Donath",
            "title": "Autonomes Fahren: Teslas sollen einen geheimen Elon-Modus haben",
            "description": "Eine neu entdeckte Fahrfunktion führt angeblich dazu, dass der Tesla-Autopilot immer aktiv ist, auch wenn die Hände nicht am Lenkrad sind. (Tesla, Elektroauto)",
            "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fautonomes-fahren-teslas-sollen-einen-geheimen-elon-modus-haben-2306-175171.html&referer=https%3A%2F%2Ft.co%2F8a582e82f4",
            "urlToImage": null,
            "publishedAt": "2023-06-22T05:23:02Z",
            "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Christoph M. Schwarzer",
            "title": "Batterien für Elektroautos: Natrium-Zellen auf dem Vormarsch?",
            "description": "Natrium-basierte Traktionsbatterien kosten weniger als LFP-Zellen, einige Eigenschaften sind besser. Hat LFP da noch eine Chance?",
            "url": "https://www.heise.de/hintergrund/Batterien-fuer-Elektroautos-Natrium-Zellen-auf-dem-Vormarsch-9187640.html?wt_mc=rss.red.autos.autos.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/5/5/5/9/7/SIB01-3d968a411e27ba7e.jpg",
            "publishedAt": "2023-06-22T05:14:00Z",
            "content": "Inhaltsverzeichnis\r\n(This article is also available in English)\r\nDrei Prozent aller neuen Elektroautos im Jahr 2030 fahren mit Natrium-basierten Traktionsbatterien. Das prognostiziert Prof. Dr. Marku… [+7225 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "heise online"
            },
            "author": "Christoph M. Schwarzer",
            "title": "Batterien für Elektroautos: Natrium-Zellen auf dem Vormarsch?",
            "description": "Natrium-basierte Traktionsbatterien kosten weniger als LFP-Zellen, einige Eigenschaften sind besser. Hat LFP da noch eine Chance?",
            "url": "https://www.heise.de/hintergrund/Batterien-fuer-Elektroautos-Natrium-Zellen-auf-dem-Vormarsch-9187640.html?wt_mc=rss.red.ho.ho.atom.beitrag.beitrag",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/5/5/5/9/7/SIB01-3d968a411e27ba7e.jpg",
            "publishedAt": "2023-06-22T05:14:00Z",
            "content": "Inhaltsverzeichnis\r\n(This article is also available in English)\r\nDrei Prozent aller neuen Elektroautos im Jahr 2030 fahren mit Natrium-basierten Traktionsbatterien. Das prognostiziert Prof. Dr. Marku… [+7225 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Paul Lienert",
            "title": "Analysis: For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery material of choice.",
            "url": "https://www.reuters.com/business/autos-transportation/ev-batteries-lithium-iron-phosphate-narrows-gap-with-nickel-cobalt-2023-06-22/",
            "urlToImage": "https://www.reuters.com/resizer/pC6fYAhYPKu3lZB4AG6LMONKJfQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EF3NIIBHEVI6PBF2HB6EVCXW7A.jpg",
            "publishedAt": "2023-06-22T05:13:33Z",
            "content": "DETROIT, June 22 (Reuters) - As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction… [+4166 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Aristeguinoticias.com"
            },
            "author": "Redacción AN / CCGL",
            "title": "Mark Zuckerberg acepta reto de pelea ‘en jaula’ contra Elon Musk",
            "description": "Mark Zuckerberg practica el arte marcial Jiu-jitsu y en redes sociales ha compartido algunos de sus triunfos que ha logrado en esta disciplina.",
            "url": "https://aristeguinoticias.com/2106/mundo/mark-zuckerberg-acepta-reto-de-pelea-en-jaula-contra-elon-musk/",
            "urlToImage": "https://editorial.aristeguinoticias.com/wp-content/uploads/2023/06/mensaje-musk-zuckerberg-21062023.jpg",
            "publishedAt": "2023-06-22T05:12:18Z",
            "content": "Luego de que el dueño de Tesla, Elon Musk, lanzara un reto a Mark Zuckerberg sobre una pelea dentro de “una jaula”, ahora el CEO de Facebook aceptó el desafío a través de una publicación en una histo… [+1855 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Factbox-As electric cars take off, makers pledge $14.3 billion for US lithium iron phosphate",
            "description": "Factbox-As electric cars take off, makers pledge $14.3 billion for US lithium iron phosphate",
            "url": "https://www.investing.com/news/stock-market-news/factboxas-electric-cars-take-off-makers-pledge-143-billion-for-us-lithium-iron-phosphate-3110674",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXMPED040R3_L.jpg",
            "publishedAt": "2023-06-22T05:10:41Z",
            "content": "By Paul Lienert\r\n(Reuters) - Interest and investment in lithium iron phosphate (LFP) battery cells and materials, used to power electric vehicles, continue to climb in the United States. LFP is a low… [+1385 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "India records 95 Covid cases in a day",
            "description": "The national COVID-19 recovery rate has been recorded at 98.81 per cent, according to the health ministry website. The number of people who have recuperated from the disease surged to 4,44,60,082, while the case fatality rate was recorded at 1.18 per cent.",
            "url": "https://economictimes.indiatimes.com/news/india/india-records-95-covid-cases-in-a-day/articleshow/101180623.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101180649,width-1070,height-580,imgsize-2293955,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-22T05:06:21Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investing.com"
            },
            "author": "Reuters",
            "title": "Analysis-For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "Analysis-For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "url": "https://www.investing.com/news/stock-market-news/analysisfor-ev-batteries-lithium-iron-phosphate-narrows-the-gap-with-nickel-cobalt-3110673",
            "urlToImage": "https://i-invdn-com.investing.com/news/LYNXNPEC9O0PR_L.jpg",
            "publishedAt": "2023-06-22T05:06:06Z",
            "content": "By Paul Lienert\r\nDETROIT (Reuters) - As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining … [+4050 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNA"
            },
            "author": null,
            "title": "Analysis:For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "DETROIT : As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery material of choice. The popularity of the chemical compound …",
            "url": "https://www.channelnewsasia.com/business/analysisfor-ev-batteries-lithium-iron-phosphate-narrows-gap-nickel-cobalt-3579511",
            "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--GerIVsYv--/fl_relative,g_south_east,l_one-cms:core:watermark:reuters,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/2023-06-22t050413z_1_lynxmpej5l045_rtroptp_3_autos-electric-batteries.jpg?itok=kiv4AuQC",
            "publishedAt": "2023-06-22T05:04:13Z",
            "content": "DETROIT : As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining traction as the EV battery … [+3988 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Paul Lienert",
            "title": "Analysis-For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is...",
            "url": "https://finance.yahoo.com/news/analysis-ev-batteries-lithium-iron-050413475.html",
            "urlToImage": "https://media.zenfs.com/en/reuters-finance.com/c17dae0210b54c0abf67017b20e613fa",
            "publishedAt": "2023-06-22T05:04:13Z",
            "content": "By Paul Lienert\r\nDETROIT (Reuters) - As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining … [+4069 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Paul Lienert",
            "title": "Analysis-For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is...",
            "url": "https://finance.yahoo.com/news/analysis-ev-batteries-lithium-iron-050413824.html",
            "urlToImage": "https://media.zenfs.com/en/reuters.com/c17dae0210b54c0abf67017b20e613fa",
            "publishedAt": "2023-06-22T05:04:13Z",
            "content": "By Paul Lienert\r\nDETROIT (Reuters) - As the auto industry scrambles to produce more affordable electric vehicles, whose most expensive components are the batteries, lithium iron phosphate is gaining … [+4069 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Autocar"
            },
            "author": "John Evans",
            "title": "Jet lag for EV drivers as Heathrow shuts chargers",
            "description": "Heathrow's 25-strong Pod Point chargers have been switched off; neither airport nor the charging company say why\n\nAirlines may be keen to demonstrate their green credentials by adopting bio-fuels and more efficient engines but at ground level, drivers of elec…",
            "url": "https://www.autocar.co.uk/car-news/consumer/jet-lag-ev-drivers-heathrow-shuts-chargers",
            "urlToImage": "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/podpoint_chargers_in_a_carpark.jpg",
            "publishedAt": "2023-06-22T05:01:46Z",
            "content": "Airlines may be keen to demonstrate their green credentials by adopting bio-fuels and more efficient engines but at ground level, drivers of electric cars using Britain's busiest airport are discover… [+2664 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETMarkets.com",
            "title": "ICICI Lombard shares gain 0.74% as Sensex rises",
            "description": "The stock quoted a 52-week high of Rs 1369.0 and a 52-week low of Rs 1049.1.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/icici-lombard-shares-gain-0-74-as-sensex-rises/articleshow/101180500.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-78620279,width-1070,height-580,imgsize-275381,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T05:01:15Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "Reuters",
            "title": "For EV batteries, lithium iron phosphate narrows the gap with nickel, cobalt",
            "description": "(marketscreener.com) As the auto industry\nscrambles to produce more affordable electric vehicles, whose\nmost expensive components are the batteries, lithium iron\nphosphate is gaining traction as the EV battery material of\nchoice.\n The popularity of the chemic…",
            "url": "https://www.marketscreener.com/quote/commodity/LME-NICKEL-CASH-16165/news/For-EV-batteries-lithium-iron-phosphate-narrows-the-gap-with-nickel-cobalt-44163011/",
            "urlToImage": "https://img.zonebourse.com/reuters/2022-08/2022-08-09T180855Z_1_LYNXMPEI780V5_RTROPTP_3_FORD-MOTOR-PRICES.JPG",
            "publishedAt": "2023-06-22T05:00:00Z",
            "content": "DETROIT, June 22 (Reuters) - As the auto industry\r\nscrambles to produce more affordable electric vehicles, whose\r\nmost expensive components are the batteries, lithium iron\r\nphosphate is gaining tract… [+4148 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marketscreener.com"
            },
            "author": "Reuters",
            "title": "As electric cars take off, makers pledge $14.3 billion for US lithium iron phosphate",
            "description": "(marketscreener.com) Interest and investment in lithium\niron phosphate battery cells and materials, used to power\nelectric vehicles, continue to climb in the United States. LFP\nis a lower-cost competitor to nickel cobalt manganese cells.\n Seven companies have…",
            "url": "https://www.marketscreener.com/quote/stock/ICL-GROUP-LTD-6491698/news/As-electric-cars-take-off-makers-pledge-14-3-billion-for-US-lithium-iron-phosphate-44163009/",
            "urlToImage": "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
            "publishedAt": "2023-06-22T05:00:00Z",
            "content": "June 22 (Reuters) - Interest and investment in lithium\r\niron phosphate (LFP) battery cells and materials, used to power\r\nelectric vehicles, continue to climb in the United States. LFP\r\nis a lower-cos… [+1420 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cool3c.com"
            },
            "author": "Mash Yang",
            "title": "Tesla 充電樁開放使用 吸引通用、福特、Rivian加入",
            "description": "Tesla的充電樁現已開放給其他電動車品牌使用，通用、福特以及Rivian已確認將採用，顯示Tesla的充電規格可能成為美國電動車的標準。 Tesla在今年2月與美國政府達成協商，向其他品牌電動車開放使用其充電樁之後，目前已經吸引通用、福特及Rivian在內業者加入使用。 除了通用與福特本身是從傳統油車轉入電車發展，本身就是以電車發展的Rivian宣布採用Tesla充電規格，更象徵Tesla充電規格將成為美國境內電動車使用標準，並且能透過Tesla在美國境內超過7500座的超級充電樁補充電力，並且加快美國境內電動…",
            "url": "https://www.cool3c.com/article/195169",
            "urlToImage": "https://sw.cool3c.com/article/2023/395ae3c9-bc2d-4702-9d77-a0c34ae585fa.jpg?fit=max&w=1400&q=80",
            "publishedAt": "2023-06-22T04:59:44Z",
            "content": "TeslaRivianTesla\r\nTesla2Rivian\r\nRivianTeslaTeslaTesla7500\r\nRivian202412000Tesla2025Tesla\r\nTeslaRivianTesla\r\nTesla (NACS)Tesla60%Tesla"
        },
        {
            "source": {
                "id": null,
                "name": "Lalibre.be"
            },
            "author": "Belga -",
            "title": "L'Australie menace Twitter d'amendes pour non-régulation de la haine en ligne",
            "description": "L'Australie a donné jeudi 28 jours à Twitter pour montrer que la plateforme lutte sérieusement contre la haine en ligne, sous peine d'une amende de près d'un demi-million de dollars par jour de retard.",
            "url": "https://www.lalibre.be/international/oceanie/2023/06/22/laustralie-menace-twitter-damendes-pour-non-regulation-de-la-haine-en-ligne-QBFWQPYDLRHLZD4SMC7OWI6E7Q/",
            "urlToImage": "https://www.lalibre.be/resizer/UvQNIuBBQfaSs6jQfElDu_na3aM=/1200x630/filters:format(jpeg):focal(251x175.5:261x165.5):watermark(cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/BJHEN36IPZENPF43EEHTEVACCM.png,0,-0,0,100)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/FCGXAOXHAVHKZOSKGU6FBP52MA.jpg",
            "publishedAt": "2023-06-22T04:59:28Z",
            "content": "Selon elle, un tiers des plaintes déposées en Australie pour discours haineux en ligne renvoient à des propos publiés sur la plateforme à l'oiseau bleu.\r\n\"Twitter semble ne pas être à la hauteur en c… [+956 chars]"
        },
        {
            "source": {
                "id": "next-big-future",
                "name": "Next Big Future"
            },
            "author": "Brian Wang",
            "title": "Tesla Dojo Supercomputers Will Provide 100 Exaflops in 2024",
            "description": "Tesla is starting production of the Dojo AI training Supercomputer next month. Tesla will have 13 Exaflops of AI training by the end of 2023 and 100 Exaflops by the end of 2024. Jan 2023 3 Exaflops of AI compute, 10,000 Nvidia A100 June 2023 5.5 Exaflops, 17,…",
            "url": "https://www.nextbigfuture.com/2023/06/tesla-dojo-supercomputers-will-provide-100-exaflops-in-2024.html",
            "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2023/06/Screen-Shot-2023-06-21-at-9.40.19-PM-1-1024x543.jpg",
            "publishedAt": "2023-06-22T04:51:30Z",
            "content": "Tesla is starting production of the Dojo AI training Supercomputer next month. Tesla will have 13 Exaflops of AI training by the end of 2023 and 100 Exaflops by the end of 2024.\r\nJan 2023 3 Exaflops … [+2984 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "futurezone.at"
            },
            "author": "futurezone.at",
            "title": "Ford-Chef zieht über Cybertruck her",
            "description": "Jim Farley sieht in dem Tesla-Wagen keinen Konkurrenten für den Ford-E-Pick-up F-150 Lightning.",
            "url": "https://futurezone.at/digital-life/ford-chef-jim-farley-e-pick-ups-cybertruck-f-150-lightning/402495538",
            "urlToImage": "https://image.futurezone.at/images/facebook/7975027/46-183092780.jpg",
            "publishedAt": "2023-06-22T04:50:45Z",
            "content": "Jim Farley sieht in dem Tesla-Wagen keinen Konkurrenten für den Ford-E-Pick-up F-150 Lightning."
        },
        {
            "source": {
                "id": null,
                "name": "Levelup.com"
            },
            "author": "Mardokeo Galván",
            "title": "Elon Musk reta a Mark Zuckerberg a una pelea; el creador de Facebook acepta y está listo",
            "description": "Las personas multimillonarias suelen llamar la atención ya sea involuntaria o voluntariamente, aunque es más frecuente que la busquen ellos mismos. Tal es el caso de Elon Musk, que acaba de invitar al creador de Facebook a pelear y al parecer el evento se lle…",
            "url": "https://www.levelup.com/noticias/743713/Elon-Musk-reta-a-Mark-Zuckerberg-a-una-pelea-el-creador-de-Facebook-acepta-y-esta-listo",
            "urlToImage": "https://cl.buscafs.com/www.levelup.com/public/uploads/images/802491/802491_600x315.jpg",
            "publishedAt": "2023-06-22T04:47:00Z",
            "content": "Las personas multimillonarias suelen llamar la atención ya sea involuntaria o voluntariamente, aunque es más frecuente que la busquen ellos mismos. Tal es el caso de Elon Musk, que acaba de invitar a… [+2842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iletaitunepub.fr"
            },
            "author": "Asra Tombo",
            "title": "Elon Musk : cette question d’Anne-Sophie Lapix qui a agacé le milliardaire",
            "description": "Ce lundi 19 juin 2023, Anne-Sophie Lapix a eu l’occasion d’interviewer le très controversé Elon Musk. La journaliste n’a pas hésité à poser des questions franches concernant l’acquisition de Twitter par le milliardaire. Elle a même osé le contredire. Mais c’e…",
            "url": "https://iletaitunepub.fr/actualites-people/277109-elon-musk-cette-question-danne-sophie-lapix-qui-a-agace-le-milliardaire/",
            "urlToImage": "https://iletaitunepub.fr/wp/wp-content/uploads/2023/06/photo-de-elon-musk-sur-france-2.jpg",
            "publishedAt": "2023-06-22T04:42:42Z",
            "content": "Afficher Masquer le sommaire\r\nCe lundi 19 juin 2023, Anne-Sophie Lapix a eu l’occasion d’interviewer le très controversé Elon Musk. La journaliste n’a pas hésité à poser des questions franches concer… [+4975 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETMarkets.com",
            "title": "ICICI Pru Life shares rise 1.01% as Sensex slides",
            "description": "A total of 24,926 shares changed hands on the counter till 10:10AM (IST)",
            "url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/icici-pru-life-shares-rise-1-01-as-sensex-slides/articleshow/101179910.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-82267819,width-1070,height-580,imgsize-142669,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T04:40:30Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Just Jared"
            },
            "author": "Just Jared",
            "title": "Mark Zuckerberg Agrees to Fight Elon Musk in Cage Match",
            "description": "Mark Zuckerberg is ready to take on Elon Musk. On Tuesday night (June 20), the 51-year-old Tesla CEO jokingly said that he’d be up for fighting Mark in a cage match. A day later, Mark responded with a post on Instagram. Keep reading to find out what he said… …",
            "url": "https://www.justjared.com/2023/06/22/mark-zuckerberg-agrees-to-fight-elon-musk-in-cage-match/",
            "urlToImage": "https://cdn.justjared.com/wp-content/uploads/headlines/2023/06/mark-zuckerberg-elon-musk-cage-match-1.jpg",
            "publishedAt": "2023-06-22T04:37:27Z",
            "content": "Mark Zuckerberg is ready to take on Elon Musk. \r\nOn Tuesday night (June 20), the 51-year-old Tesla CEO jokingly said that he’d be up for fighting Mark in a cage match. \r\nA day later, Mark responded w… [+648 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": null,
            "title": "PM Modi's US visit may encourage more American firms to invest in India",
            "description": "The United States is the third largest source of foreign investment for India, with over $60 billion invested between 2000 and 2023, according to official data",
            "url": "https://www.business-standard.com/india-news/pm-modi-s-us-visit-may-encourage-more-american-firms-to-invest-in-india-123062200248_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/22/full/1687409179-6973.jpg",
            "publishedAt": "2023-06-22T04:35:13Z",
            "content": "(Reuters) - Indian Prime Minister Narendra Modi's visit to the United States may encourage more American companies to consider investing in the South Asian country as they look to reduce their relian… [+3165 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tom's Guide"
            },
            "author": "David Douïeb",
            "title": "Un mode Elon dans les Tesla, un plan pour éliminer PlayStation, le 1080p Premium de YouTube, c’est le récap’",
            "description": "Un pirate découvre un mode caché qui débride l'Autopilot des Tesla, le rachat d'Activision-Blizzard par Microsoft serait un complot anti-Sony, le 1080p Premium s'invite sur l'application Android de YouTube, place au récapitulatif !\nL’article Un mode Elon dans…",
            "url": "https://www.tomsguide.fr/un-mode-elon-dans-les-tesla-un-plan-pour-eliminer-playstation-le-1080p-premium-de-youtube-cest-le-recap/",
            "urlToImage": "https://www.tomsguide.fr/content/uploads/sites/2/2023/06/recap-21juin-1.jpg",
            "publishedAt": "2023-06-22T04:30:00Z",
            "content": "Un pirate découvre un mode caché qui débride l’Autopilot des Tesla, le rachat d’Activision-Blizzard par Microsoft serait un complot anti-Sony, le 1080p Premium s’invite sur l’application Android de Y… [+1485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ithome.com"
            },
            "author": null,
            "title": "消息称特斯拉将收购德国无线充电公司 Wiferion",
            "description": "IT之家 6 月 22 日消息，根据最新的传闻，特斯拉正准备收购无线充电公司 Wiferion，这是一家位于德国弗莱堡的企业，专门提供充电和电源解决方案。Wiferion 自称是“行业领先的自动无线供电系统的供应商”，该公司自 2015 年开始研发产品以来，已经为超过 100 家公司提供了无线充电解决方案。去年，Wiferion 通过与 WiTricity 达成全球许可协议，进入了北美市场。WiTricity 曾在去年展示了其无线充电技术，使用的是一辆特斯拉汽车。据 Business Insider 的一篇报道，…",
            "url": "https://www.ithome.com/0/701/424.htm",
            "urlToImage": null,
            "publishedAt": "2023-06-22T04:26:59Z",
            "content": "IT 6 22 WiferionWiferion 2015 100 \r\nWiferion WiTricity WiTricity \r\n Business Insider Wiferion Tesla International BV Wiferion \r\nIT2019 Maxwell Technologies 2021 2019 Hibar Systems"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": null,
            "title": "From marinated millets to stuffed mushrooms, White House menu for PM Modi",
            "description": "White House Dinner for PM Modi: Discover the details of the special all-vegetarian menu prepared by Chef Nina Curtis for Prime Minister Narendra Modi's State visit to the White House. From marinated millets to stuffed mushrooms, the culinary experience will b…",
            "url": "https://www.business-standard.com/india-news/white-house-dinner-for-pm-modi-exquisite-vegetarian-menu-and-indian-inspired-decor-123062200225_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/22/full/1687399432-8983.jpg",
            "publishedAt": "2023-06-22T04:08:36Z",
            "content": "Keeping in mind his food preferences, First Lady Jill Biden said that she had asked her chef Nina Curtis to prepare a stunning vegetarian menu\r\nBS Web TeamNew DelhiPM Modi with US First Lady Jill Bid… [+2355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lewrockwell.com"
            },
            "author": "Jayant Bhandari",
            "title": "Modi Arrives in the US",
            "description": "The Indian Prime Minister, Narendra Modi, is visiting the USA. In India, this event is being heralded as the event of the century. Gina Raimondo, the US Secretary of Commerce, recently gave a speech in India about who she considers the most admired person in …",
            "url": "https://www.lewrockwell.com/2023/06/jayant-bhandari/modi-arrives-in-the-us/",
            "urlToImage": "https://lrc-cdn.s3.amazonaws.com/assets/2021/02/LRC-share.jpg",
            "publishedAt": "2023-06-22T04:01:00Z",
            "content": "The Indian Prime Minister, Narendra Modi, is visiting the USA. In India, this event is being heralded as the event of the century.\r\nGina Raimondo, the US Secretary of Commerce, recently gave a speech… [+8102 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Ciarán Hancock",
            "title": "Ireland’s top 1,000 companies: One hugely profitable technology company leads the rankings",
            "description": "Big tech firms dominate the rankings of Ireland’s biggest companies",
            "url": "https://www.irishtimes.com/business/2023/06/22/irelands-top-1000-companies-one-hugely-profitable-technology-company-leads-the-rankings/",
            "urlToImage": "https://www.irishtimes.com/resizer/4xfofa-7tAzHx8axqbbTIsuh2gQ=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/VTR7F56L6BBHPME4PO4BULHC5U.jpg",
            "publishedAt": "2023-06-22T04:00:00Z",
            "content": "Big technology companies continued to dominate the Top 1,000 rankings of companies published by The Irish Times on Thursday, with Apple once again leading the way in terms of both turnover and profit… [+2840 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Ciarán Hancock",
            "title": "Apple once again biggest company in Ireland with profits of just under €70bn",
            "description": "Top 1000 survey of companies shows that Apple was the biggest entity with revenue last year of €223bn and big tech groups taking five of the top 10 rankings",
            "url": "https://www.irishtimes.com/business/2023/06/22/apple-once-again-biggest-company-in-ireland-with-profits-of-just-under-70bn/",
            "urlToImage": "https://www.irishtimes.com/resizer/4xfofa-7tAzHx8axqbbTIsuh2gQ=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/VTR7F56L6BBHPME4PO4BULHC5U.jpg",
            "publishedAt": "2023-06-22T04:00:00Z",
            "content": "Big technology companies continued to dominate the Top 1,000 rankings of companies published by The Irish Times on Thursday, with Apple once again leading the way in terms of both turnover and profit… [+2749 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "L'Express"
            },
            "author": "Frédéric Filloux",
            "title": "Voitures électriques : mais quelle est donc la \"méthode Tesla\"?",
            "description": "Voitures électriques : mais quelle est donc la \"méthode Tesla\"?",
            "url": "https://www.lexpress.fr/podcasts/controlf/mais-quelle-est-donc-la-methode-tesla-MCC4UJFWDFHGNOO5KEPIYGZH2Y/",
            "urlToImage": "https://www.lexpress.fr/resizer/cz6EoiQNW-6f5E_MRImR9iRzRR4=/1200x630/filters:focal(1055x619:1065x629)/cloudfront-eu-central-1.images.arcpublishing.com/lexpress/Q44V3WX77ZDAFBT67NYEXCRKAQ.jpg",
            "publishedAt": "2023-06-22T04:00:00Z",
            "content": "Depuis dix ans, Tesla fait la course en tête dans le domaine des voitures électriques. Tous les autres constructeurs - américains, européens - sont loin derrière. Seuls les Chinois, qui ont bien inté… [+1524 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Navdeep Singh",
            "title": "Sensex, Nifty start on cautious note as Powell bats for more rate hikes",
            "description": "From the Sensex pack, Infosys, Power Grid, Tech Mahindra, Kotak Bank, HUL, and HCL Tech opened with cuts, while Tata Steel, M&M, HDFC Bank, ICICI Bank, HDFC, Bajaj Finserv opened with gains.",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/sensex-nifty-start-on-cautious-note-as-powell-bats-for-more-rate-hikes/articleshow/101178948.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101178968,width-1070,height-580,imgsize-38204,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T03:58:50Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Alyssa Guzman",
            "title": "Ford CEO slams Elon Musk's Tesla Cybertruck as a car for 'Silicon Valley people'",
            "description": "Jim Farley insists his company 'make trucks for real people who do real work' and said Elon Musk's vehicle is a 'different kind of truck.'",
            "url": "https://www.dailymail.co.uk/news/article-12221223/Ford-CEO-slams-Elon-Musks-Tesla-Cybertruck-car-Silicon-Valley-people.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/03/72399119-0-image-a-32_1687401016287.jpg",
            "publishedAt": "2023-06-22T03:33:34Z",
            "content": "Ford's CEO has slammed Elon Musk's Tesla Cybertruck as a car for 'Silicon Valley people,' while boasting his company's electric F-150 is built for 'real people who do real work.' \r\nJim Farley told MS… [+2623 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Japan Times"
            },
            "author": "Subhadip Sircar",
            "title": "Modi meets Elon Musk and Ray Dalio in U.S. as India draws global investment",
            "description": "The nation of 1.4 billion people stands out amid a slowing global economy, with its appeal burnished by China’s tepid post-pandemic recovery and Beijng's tensions with the West.",
            "url": "https://www.japantimes.co.jp/news/2023/06/22/business/modi-meets-musk/",
            "urlToImage": "https://cdn-japantimes.com/wp-content/uploads/2023/06/np_file_234564-870x489.jpeg",
            "publishedAt": "2023-06-22T03:22:41Z",
            "content": "Indian Prime Minister Narendra Modis trip to the U.S. couldnt have come at a better time. A buzzing economy, equity benchmarks at record highs and a rapidly growing consumer market all make for a gre… [+1207 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vnexpress.net"
            },
            "author": "Huy Đức",
            "title": "Elon Musk thách Mark Zuckerberg đấu võ",
            "description": "Ông chủ Twitter nói sàng quyết đấu trên võ đài với Mark Zuckerberg và CEO Meta đã chấp thuận lời thách thức.",
            "url": "https://vnexpress.net/elon-musk-thach-mark-zuckerberg-dau-vo-4620257.html",
            "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/06/21/170725-elon-musk-mark-zuckerbe-3725-3338-1687363861.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=w9HOc_tVS4L_7eREIQdAZw",
            "publishedAt": "2023-06-22T03:20:13Z",
            "content": "Ông ch Twitter nói sàng quyt u trên võ ài vi Mark Zuckerberg và CEO Meta ã chp nhn li thách thc.Trên mng xã hi ang xut hin thông tin Meta sp công b Threads - nn tng c xem là i th ca Twitter. Ngày 21/… [+1974 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "FRANCE 24 English"
            },
            "author": "NEWS WIRES",
            "title": "Biden rolls out the red carpet for Indian PM Modi's White House visit",
            "description": "US President Joe Biden and Indian Prime Minister Narendra Modi are expected to deepen defense and technology cooperation between their countries during Modi's official visit to the White House, despite lingering concerns about human rights in India.",
            "url": "https://www.france24.com/en/americas/20230622-biden-rolls-out-the-red-carpet-for-indian-pm-modi-s-white-house-visit",
            "urlToImage": "https://s.france24.com/media/display/d50a2452-10a9-11ee-a3d1-005056bf30b7/w:1280/p:16x9/2023-06-21T235715Z_1271360991_RC2ZN1AFNV1T_RTRMADP_3_USA-INDIA-1.JPG",
            "publishedAt": "2023-06-22T03:10:50Z",
            "content": "US President Joe Biden and Indian Prime Minister Narendra Modi are expected to deepen defense and technology cooperation between their countries during Modi's official visit to the White House, despi… [+4945 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIE WELT"
            },
            "author": "Anja Ettel, Holger Zschäpitz",
            "title": "Die Neun-Billionen-Wette bei Bitcoin und der klumpenlose Wunder-ETF",
            "description": "In der heutigen Folge „Alles auf Aktien“ sprechen die Finanzjournalisten Anja Ettel und Holger Zschäpitz über eine schwarze Konjunkturprognose für Deutschland, Kursverluste bei Tesla und eine gesprungene Platte bei Fed-Chef Powell.",
            "url": "https://www.welt.de/podcasts/alles-auf-aktien/article246000780/Boersen-Podcast-Bitcoin-ueber-30-000-Neue-Krypto-Ambitionen-bei-Blackrock-Deutsche-Bank-Co.html",
            "urlToImage": "https://img.welt.de/img/podcasts/alles-auf-aktien/mobile228293627/5361351857-ci16x9-w1200/DWO-Podcast-AllesaufAktien-Zschaepitz-Ettel.jpg",
            "publishedAt": "2023-06-22T03:02:33Z",
            "content": "Außerdem geht es um Mayr Melnhof, Lanxess, BASF, Covestro, SGL Carbon, ZoomInfo, Ether, Blackrock, Deutsche Bank, L&amp;G Gerd Kommer Multifactor Equity ETF thesaurierend (WKN: WELT0A), L&amp;G Gerd … [+242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Volkskrant.nl"
            },
            "author": "Maral Noshad Sharifi",
            "title": "Witte Huis trekt alle registers open voor Indiase premier Modi, ‘een van belang­rijkste bezoeken van onze tijd’",
            "description": "President Joe Biden ontvangt premier Narendra Modi van India donderdagavond in het Witte Huis. Met de rechts-nationalistische Modi drijft India ste...",
            "url": "https://www.volkskrant.nl/nieuws-achtergrond/witte-huis-trekt-alle-registers-open-voor-indiase-premier-modi-een-van-de-belangrijkste-bezoeken-van-onze-tijd~b80f578b/",
            "urlToImage": "https://img.volkskrant.nl/f3db893e935b7e24b8f0641b92d1ea07850b55fd/witte-huis-trekt-alle-registers-open-voor-indiase-premier-modi-een-van-de-belangrijkste-bezoeken-van-onze-tijd",
            "publishedAt": "2023-06-22T03:00:44Z",
            "content": "President Biden en premier Modi vorig jaar op de G20-top op Bali.Beeld Prasetyo Utomo / Anadolu Agency via Getty\r\nDe rode loper zal zijn uitgerold. Een sterrenkok heeft een smaakvol diner voorbereid.… [+3447 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Bureau",
            "title": "Masai Mara, Yala or Yellowstone: Visit these best wildlife destinations in the world",
            "description": "Several places worldwide offer opportunities to witness wildlife in their natural habitat and increase appreciation for the environment. In Southern Africa, India, South America, and Southeast Asia, visitors can encounter unique animals such as coyotes, eleph…",
            "url": "https://economictimes.indiatimes.com/magazines/travel/masai-mara-yala-or-yellowstone-visit-these-best-wildlife-destinations-in-the-world/articleshow/101167264.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101167235,width-1070,height-580,imgsize-111320,overlay-etpanache/photo.jpg",
            "publishedAt": "2023-06-22T02:56:00Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Sun"
            },
            "author": "Cheyenne R. Ubiera",
            "title": "Elon Musk ramps up Mark Zuckerberg fight talk as Twitter boss suggests Las Vegas Octagon for bizarre MMA face off",
            "description": "ELON Musk has named a venue for a fight against Mark Zuckerberg after the tech bosses challenged one another to a match-up. The Tesla CEO referenced a foreseeable bout between the two after it was …",
            "url": "https://www.thesun.co.uk/tech/22771829/elon-musk-mark-zuckerberg-mma-fight/",
            "urlToImage": "https://www.thesun.co.uk/wp-content/uploads/2023/06/AB-EM-OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2023-06-22T02:53:43Z",
            "content": "ELON Musk has named a venue for a fight against Mark Zuckerberg after the tech bosses challenged one another to a match-up.\r\nThe Tesla CEO referenced a foreseeable bout between the two after it was r… [+2245 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The-sun.com"
            },
            "author": "Cheyenne R. Ubiera",
            "title": "Elon Musk ramps up Mark Zuckerberg fight talk as Twitter boss suggests Las Vegas Octogan for bizarre MMA face off",
            "description": "ELON Musk has named a venue for a fight against Mark Zuckerberg after the tech bosses challenged one another to a match-up. The Tesla CEO referenced a foreseeable bout between the two after it was …",
            "url": "https://www.the-sun.com/tech/8427943/elon-musk-mark-zuckerberg-mma-fight/",
            "urlToImage": "https://www.the-sun.com/wp-content/uploads/sites/6/2023/06/AB-EM-OP.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
            "publishedAt": "2023-06-22T02:53:43Z",
            "content": "ELON Musk has named a venue for a fight against Mark Zuckerberg after the tech bosses challenged one another to a match-up.\r\nThe Tesla CEO referenced a foreseeable bout between the two after it was r… [+2245 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": null,
            "title": "एक झटके में 'गरीब' हो गए एलन मस्क, 8,77,97,78,00,000 रुपये स्वाहा, अंबानी-अडानी की नेटवर्थ बढ़ी",
            "description": "एलन मस्क की नेटवर्थ में मंगलवार को 9.95 अरब डॉलर की तेजी आई थी। प्रधानमंत्री नरेंद्र मोदी से मुलाकात के बाद टेस्ला ने भारत में भारी निवेश के संकेत दिए थे। इससे कंपनी के शेयरों में भारी उछाल आई थी। लेकिन मस्क ने मंगलवार को जितना कमाया था, उससे ज्यादा बुधवार को…",
            "url": "https://navbharattimes.indiatimes.com/business/business-news/elon-musk-lost-10-7-billion-dollar-on-wednesday/articleshow/101176660.cms",
            "urlToImage": "https://navbharattimes.indiatimes.com/photo/msid-101176832,imgsize-41620/pic.jpg",
            "publishedAt": "2023-06-22T02:39:24Z",
            "content": "Curated by \r\n| . | Updated: 22 Jun 2023, 8:09 am\r\n: (Elon Musk) (Prime Minister Narendra Modi) (Tesla) 9.95 5.46 10.7 8,77,97,78,00,000 232 95 (SpaceX) (Solarcity) (Twitter) \r\n12 (Mukesh Ambani) (Gau… [+594 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Twitter resumes paying Google Cloud",
            "description": "Twitter has resumed paying Alphabet's Google Cloud for its services, according to a person familiar with the matter.",
            "url": "https://economictimes.indiatimes.com/tech/technology/twitter-resumes-paying-google-cloud/articleshow/101176592.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101176890,width-1070,height-580,imgsize-404075,overlay-ettech/photo.jpg",
            "publishedAt": "2023-06-22T02:29:16Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newsonjapan.com"
            },
            "author": null,
            "title": "Top Meme Coins: Communities Transforming Meme Coins and Introducing Caged Beasts, Dogecoin, and Pepe Coin",
            "description": "Observe how communities can influence meme coins. Dogecoin (DOGE) and Pepe Coin (PEPE) are excellent illustrations of how fervent communities can transform meme projects into lucrative cryptocurrency businesses.\n (newsonjapan.com)",
            "url": "https://newsonjapan.com/html/newsdesk/article/137759.php",
            "urlToImage": null,
            "publishedAt": "2023-06-22T02:23:50Z",
            "content": "Caged Beasts (BEASTS) is entering the scene and quickly becoming well-known because of its intriguing premise and alluring referral scheme. As Caged Beasts roars into the crypto world, take in the sy… [+3416 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Timothy Rapp",
            "title": "Mark Zuckerberg Offers to Fight Elon Musk in Jiu Jitsu Cage Match; 'Send Me Location'",
            "description": "In a piece of news that will take the celebrity fight trend to brand new heights (or perhaps an all-time low), Meta chairmen and CEO Mark Zuckerberg has…",
            "url": "https://bleacherreport.com/articles/10080222-mark-zuckerberg-offers-to-fight-elon-musk-in-jiu-jitsu-cage-match-send-me-location",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1687400217/g1evqvkgdgvsmn2bglvk.jpg",
            "publishedAt": "2023-06-22T02:23:36Z",
            "content": "Chesnot/Getty Images\r\nIn a piece of news that will take the celebrity fight trend to brand new heights (or perhaps an all-time low), Meta chairmen and CEO Mark Zuckerberg has challenged Tesla CEO and… [+780 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Life.ru"
            },
            "author": "Лариса Сафронова",
            "title": "Маск готов сразиться в клетке с Цукербергом из-за планов создать конкурента Twitter",
            "description": "Миллиардер Илон Маск готов сразиться в клетке с медиамагнатом Марком Цукербергом из-за того, что компания последнего создаёт конкурента Twitter. Об этом глава Tesla и SpaceX написал в соцсети в комментарии к посту одного из пользователей.Читать далее...",
            "url": "https://life.ru/p/1588393",
            "urlToImage": "https://static.life.ru/publications/2023/6/22/1559714221966.474.jpg",
            "publishedAt": "2023-06-22T02:18:59Z",
            "content": "- , Twitter. Tesla SpaceX .\r\n , , Meta*, \" - \".\r\n , : \" \".\r\n , Twitter . , \"\" . , , .\r\n* Meta ."
        },
        {
            "source": {
                "id": null,
                "name": "Techweb.com.cn"
            },
            "author": "新喀鸦",
            "title": "宁德时代：公司被踢出特斯拉供应链相关消息不属实",
            "description": "【TechWeb】6月22日消息，近期有传闻称宁德时代电池存在重大缺陷，已被特斯拉暂停供货。在深交所互动易平台上，有投资者提问：“从市场传出的消息来看，与特斯拉在美国享受的一则补贴有关。6月3日Tesla官网更新Model3 RWD补贴从3750美元提升至7500美元。这是否意味着公司被剔除出特斯拉供应链？这是否是影响公司股价的重大新闻，是否应履行信息披露义务？”对此宁德时代给与回应称：“投资者您好，消息不属实，公司与客户战略合作关系没有发生变化，会持续深化和提升，谢谢。”据悉，之所以出现上述传闻是因为特斯拉美国…",
            "url": "http://www.techweb.com.cn/it/2023-06-22/2929129.shtml",
            "urlToImage": "http://upload1.techweb.com.cn/s/120/imgs/2023/0622/1687400224140.jpg",
            "publishedAt": "2023-06-22T02:17:20Z",
            "content": "TechWeb62263TeslaModel3 RWD37507500\r\nModel 37500Model 3Performance75003750\r\nModel 3PerformanceModel 3"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Wall Street extends sell-off as Powell hints at further rate hikes",
            "description": "The three major US stock indexes declined for a third straight day, with tech-related shares weighing heavily, after Federal Reserve Chairman Jerome Powell reinforced the central bank's commitment to reducing inflation and hinted at further interest rate incr…",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/wall-street-extends-sell-off-as-powell-hints-at-further-rate-hikes/articleshow/101176277.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101176320,width-1070,height-580,imgsize-67772,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T02:13:06Z",
            "content": "U.S. stocks closed lower on Wednesday as Federal Reserve Chairman Jerome Powell's congressional testimony reinforced the central bank's objective to rein in inflation as he hinted at the likelihood o… [+3479 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Tesla Luxury Rival Mercedes Benz Has Discouraging News on Its EVs",
            "description": "Automobile mechanical problems can be inconvenient events when a car owner needs to deliver their vehicles to a dealer for repairs. But in some instances, a problem might be an over-the-air software update not needing a visit to a repair shop. Tesla (TSLA) - …",
            "url": "https://biztoc.com/x/e787f24b63f4544b",
            "urlToImage": "https://c.biztoc.com/p/e787f24b63f4544b/s.webp",
            "publishedAt": "2023-06-22T02:12:15Z",
            "content": "Automobile mechanical problems can be inconvenient events when a car owner needs to deliver their vehicles to a dealer for repairs. But in some instances, a problem might be an over-the-air software … [+293 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Navarre Bartz",
            "title": "An Unexpected Upset in EV Charging Standards",
            "description": "Last November, Tesla open-sourced parts of its charging infrastructure, not-so-humbly unveiling it as the North American Charging Standard (NACS). It’s finally taking off with a number of manufacturers signing on. …read more",
            "url": "https://hackaday.com/2023/06/21/an-unexpected-upset-in-ev-charging-standards/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2022/11/car_chargers_AdobeStock_449890707.jpeg",
            "publishedAt": "2023-06-22T02:00:35Z",
            "content": "Last November, Tesla open-sourced parts of its charging infrastructure, not-so-humbly unveiling it as the North American Charging Standard (NACS). It’s finally taking off with a number of manufacture… [+1169 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iltalehti.fi"
            },
            "author": null,
            "title": "Halpa hinta, pitkä toimintamatka – Tällainen on 35 000 euron BYD Dolphin",
            "description": "Mikäli ilmoitetut alustavat hintatiedot toteutuvat, kiinalaisvalmistaja on tulossa markkinoille ryminällä. Etenkin kun auton materiaaleista ja laadusta hintaa ei ainakaan huomaa. Kilpailu kompaktikokoisten sähköautojen luokassa vaikuttaa kiihtyvän ja kunnolla…",
            "url": "https://www.iltalehti.fi/sahkoautot/a/5388294b-2798-4872-b302-4216a8f8eb45",
            "urlToImage": "https://img.ilcdn.fi/cBwcX_by6yKAD4USauxREj8Lobw=/1200x630/top/filters:watermark(assets.ilcdn.fi/ilsome_v2.jpg,25,0,0)/img-s3.ilcdn.fi/b3fd5080e3152f338363eeab5b13c99a04d3a9cf8f2af6a657ccb26d1e87449f.jpg",
            "publishedAt": "2023-06-22T02:00:06Z",
            "content": "Kilpailu kompaktikokoisten sähköautojen luokassa vaikuttaa kiihtyvän ja kunnolla. Hiljattain Volvo esitteli B-segmentin katumaasturimallinsa EX30:n ja nyt kiinalaisvalmistaja BYD paljasti piirun verr… [+3235 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "David Waterworth",
            "title": "Great Wall ORA Test Drive",
            "description": "Although Great Wall Motor has marketed a whole litter of “Cats” in China (Good, Black, White, and IQ), Australia is only receiving one version. It will be marketed as the GWM ORA. I hope that the other versions will make it here eventually. In the meantime, w…",
            "url": "https://cleantechnica.com/2023/06/21/great-wall-ora-test-drive/",
            "urlToImage": "https://cleantechnica.com/files/2023/06/Tesla-Model-3-and-Ora-Cat-Australia.jpeg",
            "publishedAt": "2023-06-22T02:00:01Z",
            "content": "Although Great Wall Motor has marketed a whole litter of “Cats” in China (Good, Black, White, and IQ), Australia is only receiving one version. It will be marketed as the GWM ORA. I hope that the oth… [+6970 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Freerepublic.com"
            },
            "author": "Nextrush Free",
            "title": "News Summary-Intelligence Report Wednesday 6/21/2023 Druze Farmers Clash With Police Over Wind Farm, China Sees Provocation In New Biden Remarks, Drones Brought Down In Moscow Area",
            "description": "In Oregon the Democrat controlled state legislature approving liberal but amended legislation on firearms, abortion and gender changing medical treatment... US politics the US House censuring Democrat Congressman Adam Schiff... The Massachusetts Air National …",
            "url": "https://freerepublic.com/focus/f-bloggers/4162592/posts",
            "urlToImage": null,
            "publishedAt": "2023-06-22T01:58:04Z",
            "content": "Skip to comments.\r\nNews Summary-Intelligence Report Wednesday 6/21/2023 Druze Farmers Clash With Police Over Wind Farm, China Sees Provocation In New Biden Remarks, Drones Brought Down In Moscow Area… [+3314 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Notebookcheck.net"
            },
            "author": "Julian van der Merwe",
            "title": "Ford CEO slams Tesla Cybertruck as 'truck for Silicon Valley people' says F-150 Lightning is for 'people who do real work'",
            "description": "Despite recently reaching an agreement with Tesla to include NACS charging hardware, Ford's CEO, Jim Farley, has had some choice words about the Cybertruck, all but dismissing its viability as competition for the F-150 Lightning as a work truck. According to …",
            "url": "https://www.notebookcheck.net/Ford-CEO-slams-Tesla-Cybertruck-as-truck-for-Silicon-Valley-people-says-F-150-Lightning-is-for-people-who-do-real-work.727399.0.html",
            "urlToImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/cybertruck_f_150_teaser.jpeg",
            "publishedAt": "2023-06-22T01:56:00Z",
            "content": "Mere weeks after going live on Twitter with Tesla CEO, Elon Musk, to announce that Ford would switch to Tesla's NACS charging hardware, Ford CEO, Jim Farley, has shot down the viability of Tesla's Cy… [+1977 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "In PM Modi's US Visit, A Gift For Indian Economy And Markets",
            "description": "Prime Minister Narendra Modi's trip to the US couldn't have come at a better time. A buzzing economy, equity benchmarks at record highs and a rapidly growing consumer market all make for a great advertisement as he pitches the country's potential to",
            "url": "https://www.ndtv.com/india-news/pm-narendra-modi-meets-with-elon-musk-ray-dalio-as-global-money-flocks-to-india-4142042",
            "urlToImage": "https://c.ndtvimg.com/2023-06/s8mkv398_modi-musk_625x300_20_June_23.jpg",
            "publishedAt": "2023-06-22T01:52:50Z",
            "content": "Prime Minister Narendra Modi's trip to the US couldn't have come at a better time. A buzzing economy, equity benchmarks at record highs and a rapidly growing consumer market all make for a great adve… [+4319 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BFMTV"
            },
            "author": null,
            "title": "L'Australie pose un ultimatum et menace Twitter d'amendes pour non-régulation de la haine en ligne",
            "description": "D'ici fin juillet, le réseau social d'Elon Musk devra monter à l'agence australienne de la sécurité en ligne qu'il lutte sérieusement contre la haine en ligne.",
            "url": "https://www.bfmtv.com/international/oceanie/australie/l-australie-pose-un-ultimatum-et-menace-twitter-d-amendes-pour-non-regulation-de-la-haine-en-ligne_AD-202306220034.html",
            "urlToImage": "https://images.bfmtv.com/XOiFtWCrQiJ18yvFvG4-5lRG8lQ=/4x34:1252x736/1248x0/images/-198748.jpg",
            "publishedAt": "2023-06-22T01:46:00Z",
            "content": "D'ici fin juillet, le réseau social d'Elon Musk devra monter à l'agence australienne de la sécurité en ligne qu'il lutte sérieusement contre la haine en ligne.\r\nL'Australie a donné jeudi 28 jours à T… [+1473 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Hope Sloop",
            "title": "PA college hockey player who wrote 'So I raped you' on woman's Facebook is still on the run",
            "description": "The former college hockey player who messaged a woman on Facebook saying he was responsible for her rape is still on the run two years after he was charged.",
            "url": "https://www.dailymail.co.uk/news/article-12220805/PA-college-hockey-player-wrote-raped-womans-Facebook-run.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/00/72396007-0-image-a-32_1687391879310.jpg",
            "publishedAt": "2023-06-22T01:43:01Z",
            "content": "The former college hockey player who messaged a woman on Facebook saying he was responsible for her rape is still on the run two years after he was charged. \r\nIan Cleary, 30, messaged Shannon Keeler,… [+4019 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETtech",
            "title": "Big banks eye QR codes amid fintechs’ credit push; Google’s senior VP on AI regulation, and the future of search",
            "description": "With fintechs such as Paytm and PhonePe entering the credit ecosystem, ICICI Bank, Axis Bank, HDFC Bank and others are trying to get merchants to opt for their QR codes. But will merchants using Paytm or PhonePe’s black-and-white squares switch to their bank’…",
            "url": "https://economictimes.indiatimes.com/tech/newsletters/morning-dispatch/big-banks-eye-qr-codes-amid-fintechs-credit-push-googles-senior-vp-on-ai-regulation-and-the-future-of-search/articleshow/101175633.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101175633,width-1070,height-580,imgsize-2584657,overlay-ettech/photo.jpg",
            "publishedAt": "2023-06-22T01:37:54Z",
            "content": "With fintechs such as Paytm and PhonePe entering the credit ecosystem, ICICI Bank, Axis Bank, HDFC Bank and others are trying to get merchants to opt for their QR codes. This and more in todays ETtec… [+10808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "newsbtc.com",
            "title": "Dogecoin Signal Bullish Momentum On Daily Chart, What’s Next?",
            "description": "Dogecoin emerged as a highly popular cryptocurrency, originating from the world of internet memes. Despite its initially modest beginnings and relatively low value, it has amassed a large and enthusiastic community of followers. Dogecoin has gained significan…",
            "url": "https://biztoc.com/x/e97e5e75fcda757f",
            "urlToImage": "https://c.biztoc.com/p/e97e5e75fcda757f/s.webp",
            "publishedAt": "2023-06-22T01:34:05Z",
            "content": "Dogecoin emerged as a highly popular cryptocurrency, originating from the world of internet memes. Despite its initially modest beginnings and relatively low value, it has amassed a large and enthusi… [+252 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "Matt Novak, Contributor, \n Matt Novak, Contributor\n https://www.forbes.com/sites/mattnovak/",
            "title": "Elon Musk And Mark Zuckerberg Vow To Fight In Cage Match (Seriously)",
            "description": "Elon Musk and Mark Zuckerberg might soon stage a physical fight, according to social media posts by both billionaires. It seems like both men are serious.",
            "url": "https://www.forbes.com/sites/mattnovak/2023/06/21/elon-musk-and-mark-zuckerberg-vow-to-fight-in-cage-match-seriously/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6493a43df81af96ccf7b6850/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2023-06-22T01:33:29Z",
            "content": "This combo of file images shows Facebook CEO Mark Zuckerberg, left, and Tesla and SpaceX CEO Elon ... [+] Musk. (AP Photo/Manu Fernandez, Stephan Savoia)\r\nAssociated Press\r\nElon Musk and Mark Zuckerb… [+1591 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tinhte.vn"
            },
            "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
            "title": "Lại thêm các tính năng nho nhỏ thú vị trên iOS 17 có thể anh em chưa biết",
            "description": "Viết 2 bài rồi nhưng thấy iOS 17 vẫn còn những tính năng nhỏ nhỏ thú vị khác nên viết thêm bài thứ 3. Anh em có thể xem lại 2 bài trước ở dưới:\n\nNhững thay đổi và tính năng thú vị trên iOS 17 có thể anh em chưa biết\nThêm những tính năng thú vị trên…",
            "url": "https://tinhte.vn/thread/lai-them-cac-tinh-nang-nho-nho-thu-vi-tren-ios-17-co-the-anh-em-chua-biet.3683598/",
            "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2023/06/6470896_cover-Tinh-Nang-Moi-iOS-17-tinhte.jpg",
            "publishedAt": "2023-06-22T01:24:47Z",
            "content": "Trên iOS 17 thì app Apple Maps s nhc ngi dùng thit lp các h thng trm sc u tiên cho chic xe in ca h t mt danh sách các tu chn bao gm Electrify America, Chargepoint hay Tesla Supercharger chng hn... Sa… [+366 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Zachary Shahan",
            "title": "NIO Unleashes Another Wonderful, Beautiful Electric Car",
            "description": "I’m not going to lie — if NIO sold cars in the USA, at least one of its models would be on my shortlist. The latest drool-worthy electric model it’s brought to market (not in the US) is the ET5 Touring. The company claims this is the “first smart electric tou…",
            "url": "https://cleantechnica.com/2023/06/21/nio-unleashes-another-wonderful-beautiful-electric-car/",
            "urlToImage": "http://cleantechnica.com/files/2023/06/NIO-ET5-Tourer-Europe.jpeg",
            "publishedAt": "2023-06-22T01:23:49Z",
            "content": "I’m not going to lie if NIO sold cars in the USA, at least one of its models would be on my shortlist. The latest drool-worthy electric model it’s brought to market (not in the US) is the ET5 Touring… [+5212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Elon Musk Gets a Challenge",
            "description": "When Elon Musk and Ford CEO Jim Farley flaunted their camaraderie last month during a live audio event on Twitter Spaces to announce an unprecedented agreement between their two companies, fans of industrial warfare were disappointed. They thought then that t…",
            "url": "https://biztoc.com/x/6d01cbb031f1813c",
            "urlToImage": "https://c.biztoc.com/p/6d01cbb031f1813c/s.webp",
            "publishedAt": "2023-06-22T01:16:10Z",
            "content": "When Elon Musk and Ford CEO Jim Farley flaunted their camaraderie last month during a live audio event on Twitter Spaces to announce an unprecedented agreement between their two companies, fans of in… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Alyssa Guzman",
            "title": "Elon Musk says he's 'up for a cage match' with jiu-Mark Zuckerberg as Meta considers Twitter rival",
            "description": "The challenge came after Musk commented on a Twitter post about Zuckerberg's reported in-development Twitter rival app, Threads.",
            "url": "https://www.dailymail.co.uk/news/article-12220937/Elon-Musk-says-hes-cage-match-jiu-Mark-Zuckerberg-Meta-considers-Twitter-rival.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/01/72397301-0-image-a-22_1687394755843.jpg",
            "publishedAt": "2023-06-22T01:11:41Z",
            "content": "Twitter CEO Elon Musk has challenged jiu-jitsu-trained Mark Zuckerberg to a 'cage match.' \r\nMusk, 51, offered up the physical match after commenting under a post about Zuckerberg's newest suspected p… [+3914 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "wsj.com",
            "title": "It’s Getting Riskier to Do Business in China",
            "description": "Foreign executives who visit China lately are getting the royal treatment. A photo of Tim Cook shaking hands with customers at a Beijing Apple store went viral on Weibo in March. Chinese social-media users showered Tesla CEO Elon Musk with compliments during …",
            "url": "https://biztoc.com/x/8a28ba87b0984920",
            "urlToImage": "https://c.biztoc.com/p/8a28ba87b0984920/s.webp",
            "publishedAt": "2023-06-22T01:06:05Z",
            "content": "Foreign executives who visit China lately are getting the royal treatment. A photo of Tim Cook shaking hands with customers at a Beijing Apple store went viral on Weibo in March. Chinese social-media… [+285 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thehillstimes.in"
            },
            "author": "The Hills Times",
            "title": "Tesla looking to make a significant investment in India",
            "description": "NEW YORK, June 21 (PTI): Tesla Inc, the world’s largest electric car producer, is looking to make a significant investment in India, said its chief Elon Musk, who saw India as holding more promise than any other large country around the globe. Musk, after mee…",
            "url": "https://thehillstimes.in/business/tesla-looking-to-make-a-significant-investment-in-india",
            "urlToImage": "https://thehillstimes.in/wp-content/uploads/2023/06/lead-13.jpg",
            "publishedAt": "2023-06-22T00:50:13Z",
            "content": "NEW YORK, June 21 (PTI): Tesla Inc, the worlds largest electric car producer, is looking to make a significant investment in India, said its chief Elon Musk, who saw India as holding more promise tha… [+3733 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "youtube.com",
            "title": "Elon Musk Meets India's Modi in New York",
            "description": "Tesla Inc. is likely to make a significant investment in India, Chief Executive Officer Elon Musk said after meeting with Narendra Modi during the Indian Prime Minister’s US visit to promote development in the world’s most populous country. “I’m confident tha…",
            "url": "https://biztoc.com/x/f50e6b418362b1dd",
            "urlToImage": "https://c.biztoc.com/p/f50e6b418362b1dd/s.webp",
            "publishedAt": "2023-06-22T00:46:04Z",
            "content": "Tesla Inc. is likely to make a significant investment in India, Chief Executive Officer Elon Musk said after meeting with Narendra Modi during the Indian Prime Ministers US visit to promote developme… [+306 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ET Bureau",
            "title": "Hot Stocks: These stocks to return 10-18% as per analysts’ price targets",
            "description": "Stock has consolidated near Rs 360-375 and currently has indicated a bullish candle pattern. Much upside potential; attractive on charts",
            "url": "https://economictimes.indiatimes.com/markets/stocks/news/hot-stocks-these-stocks-to-return-10-18-as-per-analysts-price-targets/articleshow/101175358.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-101175387,width-1070,height-580,imgsize-605584,overlay-etmarkets/photo.jpg",
            "publishedAt": "2023-06-22T00:43:03Z",
            "content": "Local Indices End at Record Peaks on HDFC, IT GainsIndias key stock benchmarks closed at record highs amid choppy trade on Wednesday, bucking the bearish mood in other Asian markets, as merger-bound … [+633 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tass.ru"
            },
            "author": "ТАСС",
            "title": "Panasonic может начать поставлять Mazda аккумуляторы для электромобилей",
            "description": "Продукция японской корпорации будет обладать пятикратной энергоемкостью по сравнению с аккумуляторами, которые автоконцерн использует сейчас. Это существенно увеличит длительность поездок",
            "url": "https://tass.ru/ekonomika/18083851",
            "urlToImage": "https://cdn-storage-media.tass.ru/thumb/ru/ekonomika/18083851?u=2023-06-22T00:42:49.648942",
            "publishedAt": "2023-06-22T00:42:49Z",
            "content": ", 22 . //. Panasonic 2024 Mazda .  Nikkei.\r\n , Panasonic , , . Mazda . , Panasonic , 2030   2,5 ( $17,6 ) , Tesla.\r\n Nikkei , , , . , Panasonic 445 ."
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "finance.yahoo.com",
            "title": "Rivian Brings Tesla Another Step Closer To Changing The Charging Standard",
            "description": "On Tuesday, Amazon.com Inc (NASDAQ: AMZN)-backed EV maker Rivian Automotive Inc (NASDAQ: RIVN) revealed it is following the footsteps of legendary automakers Ford Motor (NYSE: F) and General Motors (NYSE: GM) in adopting the charging standard of the EV king, …",
            "url": "https://biztoc.com/x/08a9d87d50d95a04",
            "urlToImage": "https://c.biztoc.com/p/08a9d87d50d95a04/og.webp",
            "publishedAt": "2023-06-22T00:36:06Z",
            "content": "On Tuesday, Amazon.com Inc (NASDAQ: AMZN)-backed EV maker Rivian Automotive Inc (NASDAQ: RIVN) revealed it is following the footsteps of legendary automakers Ford Motor (NYSE: F) and General Motors (… [+327 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Reader's Digest"
            },
            "author": "Lauren Cahn",
            "title": "185+ Bird Names That Soar Above the Rest",
            "description": "Why do people say \"for the birds\" like it's a bad thing? All these bird names, which are very much for the birds, are absolutely adorable!\nThe post 185+ Bird Names That Soar Above the Rest appeared first on Reader's Digest.",
            "url": "https://www.rd.com/article/bird-names/",
            "urlToImage": "https://www.rd.com/wp-content/uploads/2023/06/Bird-Names-FT-GettyImages-582715480.jpg",
            "publishedAt": "2023-06-22T00:34:10Z",
            "content": "Dogs may be mans best friend, but dogs love pretty much everyone. Birds, on the other hand, are monogamous creatures by nature, according to veterinarian and bird enthusiast Maria Baker, DVM. Accordi… [+10825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "El Financiero"
            },
            "author": "Felipe Gazcón",
            "title": "Hacienda ‘promete’ mantener deuda bajo control: ‘México es un país de bajo riesgo’",
            "description": "El funcionario agregó que en los estados del norte también se está invirtiendo en la infraestructura de autopistas y en la modernización de las aduanas para facilitar el comercio con Estados Unidos.",
            "url": "https://www.elfinanciero.com.mx/economia/2023/06/21/hacienda-promete-mantener-deuda-bajo-control-mexico-es-un-pais-de-bajo-riesgo/",
            "urlToImage": "https://www.elfinanciero.com.mx/resizer/Rdw1nDg52x63DQ6y1Se4o-noRro=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/DAPC2QNVFBDLZGMQPWDT4FUPDQ.jpg",
            "publishedAt": "2023-06-22T00:25:14Z",
            "content": "En el año y medio de lo que queda de la administración de Andrés Manuel López Obrador, el Gobierno federal trabajará para mantener estable la macroeconomía, la deuda y las finanzas públicas, aseguró … [+1820 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Biztoc.com"
            },
            "author": "thestreet.com",
            "title": "Ford CEO Offers a Challenge to Elon Musk",
            "description": "When Elon Musk and Ford CEO Jim Farley flaunted their camaraderie last month during a live audio event on Twitter Spaces to announce an unprecedented agreement between their two companies, fans of industrial warfare were disappointed. They thought then that t…",
            "url": "https://biztoc.com/x/ee0d8ceae12e041c",
            "urlToImage": "https://c.biztoc.com/p/ee0d8ceae12e041c/s.webp",
            "publishedAt": "2023-06-22T00:20:16Z",
            "content": "When Elon Musk and Ford CEO Jim Farley flaunted their camaraderie last month during a live audio event on Twitter Spaces to announce an unprecedented agreement between their two companies, fans of in… [+297 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CleanTechnica"
            },
            "author": "Guest Contributor",
            "title": "USA Needs To Protect Its Farmworkers From “Danger Season”",
            "description": "Farmworkers face many hazards while performing the labor that props up the $1.264 trillion US food and farm economy, yet a new analysis by the Union of Concerned Scientists (UCS) found that federal agencies focused on agriculture and health invested an averag…",
            "url": "https://cleantechnica.com/2023/06/21/the-united-states-needs-to-protect-its-farmworkers-from-danger-season/",
            "urlToImage": "http://cleantechnica.com/files/2022/08/garden-Cynthia-Shahan-1.jpg",
            "publishedAt": "2023-06-22T00:01:53Z",
            "content": "Farmworkers face many hazards while performing the labor that props up the $1.264 trillion US food and farm economy, yet a new analysis by the Union of Concerned Scientists (UCS) found that federal a… [+11424 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abril.com.br"
            },
            "author": "Guia do Estudante",
            "title": "O que daria para fazer com a fortuna dos bilionários?",
            "description": "Entenda por que bilionários são diferentes de ricos comuns - e como o problema vai muito além de visitas ao Titanic",
            "url": "https://guiadoestudante.abril.com.br/atualidades/o-que-daria-para-fazer-com-a-fortuna-dos-bilionarios/",
            "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2023/06/21/1476435632-ellon-musk-bilionario.jpg",
            "publishedAt": "2023-06-21T23:43:35Z",
            "content": "O homem mais rico do mundo, Bernard Arnault, acumula uma fortuna estimada em 211 bilhões de dólares - mais de um trilhão de reais, na cotação atual. O dinheiro vem principalmente da gigante do mercad… [+7258 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vnexpress.net"
            },
            "author": "VnExpress",
            "title": "Apple thiết kế lại khóa dây an toàn trên ôtô",
            "description": "Bằng sáng chế mới của Apple liên quan hệ thống đèn báo trạng thái sử dụng của dây đai an toàn trên xe.",
            "url": "https://vnexpress.net/apple-thiet-ke-lai-khoa-day-an-toan-tren-oto-4620271.html",
            "urlToImage": "https://vcdn1-sohoa.vnecdn.net/2023/06/22/a1-4321-1687390187.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=sldmXwGq0tRxUa560JnIgA",
            "publishedAt": "2023-06-21T23:35:26Z",
            "content": "Bng sáng ch mi ca Apple liên quan h thng èn báo trng thái s dng ca dây ai an toàn trên xe.Cha xác nhn s sn xut xe hi, nhng Apple ang nghiên cu rt nhiu công ngh liên quan. B phn mi nht c cp bng sáng c… [+1697 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "feedfeeder",
            "title": "Dow Jones Futures: Nasdaq Leads Market Retreat As Tesla Skids; Nvidia, AMD Diverge | Investor's Business Daily - Investor's Business Daily",
            "description": "Dow Jones Futures: Nasdaq Leads Market Retreat As Tesla Skids; Nvidia, AMD Diverge | Investor's Business DailyInvestor's Business Daily Tech leads stock dip as Powell points to more rate hikes: Stock market news todayYahoo Finance NASDAQ 100, Dow Jones, S&P 5…",
            "url": "https://slashdot.org/firehose.pl?op=view&amp;id=171218152",
            "urlToImage": null,
            "publishedAt": "2023-06-21T23:33:49Z",
            "content": "Just about every computer on the market today runs Unix, except the Mac\r\n(and nobody cares about it).\r\n-- Bill Joy 6/21/85"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Tom Leonard",
            "title": "The millionaire tech nerds who became the drug-fuelled swingers of Silicon Valley",
            "description": "Bob Lee, who made his millions as a cryptocurrency pioneer and founder of Cash App,  was carousing with a beautiful and glamorous friend, 37-year-old Khazar Elyassnia.",
            "url": "https://www.dailymail.co.uk/news/article-12220283/The-millionaire-tech-nerds-drug-fuelled-swingers-Silicon-Valley.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2023/06/22/00/72394989-0-image-a-22_1687389933596.jpg",
            "publishedAt": "2023-06-21T23:27:22Z",
            "content": "The millionaire lords of Silicon Valley are not restrained by the conventions that govern us mere mortals. \r\nAnd so it was, according to prosecutors in San Francisco, that at 3.30pm on a Monday after… [+12698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Statetimes.in"
            },
            "author": "statetimes_editor",
            "title": "World’s richest man Elon Musk praises PM Modi vision and leadership",
            "description": "Thakur Abhijeet Jasrotia Elon Musk is the world famous name. Among top influential names of world. Elon Reeve Musk (born on June 28, 1971) is a business magnate and investor. He is the founder, CEO and chief engineer of SpaceX; angel investor, CEO and product…",
            "url": "https://statetimes.in/worlds-richest-man-elon-musk-praises-pm-modi-vision-and-leadership/",
            "urlToImage": "https://statetimes.in/wp-content/uploads/2023/06/THAKUR-1.jpg",
            "publishedAt": "2023-06-21T23:27:09Z",
            "content": "Thakur Abhijeet Jasrotia\r\nElon Musk is the world famous name. Among top influential names of world. Elon Reeve Musk (born on June 28, 1971) is a business magnate and investor. He is the founder, CEO … [+4301 chars]"
        }
    ]
  return (
    <div className='container'>
        <h2> Hc News channel</h2>
        <div className = "row">
            {
                articles.map((element, index)=>{
                    return <div className='col-md-4'>
                        <Newsitem title = {element.title} description={element.description}image ={element.urlToImage} link = {element.url}></Newsitem>
                    </div>
                })
            }
        </div>
    </div>
  )
}
