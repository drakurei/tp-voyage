// Photos de la galerie : Wikimedia Commons
const commons = "https://thumb.wikimedia.org/wikipedia/commons/thumb/";

export const destinations = [
  {
    id: 1,
    slug: "japan",
    name: "Japon",
    region: "Asie",
    capital: "Tokyo",
    description:
      "Le Japon mélange traditions anciennes, temples, mégalopoles modernes et paysages naturels spectaculaires.",
    image: "https://cdn.pixabay.com/photo/2020/01/31/20/03/japan-4808857_1280.jpg",
    details:
      "Tokyo impressionne par son énergie, ses quartiers lumineux et ses transports d'une ponctualité rare. À quelques heures de train, Kyoto conserve plus de mille temples, des jardins zen et les célèbres portiques rouges du sanctuaire Fushimi Inari. Le mont Fuji, visible par temps clair, reste le symbole du pays. La meilleure période pour partir est le printemps, pendant la floraison des cerisiers, ou l'automne pour les érables rouges.",
    gallery: [
      {
        src: commons + "0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/960px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg",
        alt: "Allée de portiques au sanctuaire Fushimi Inari, Kyoto",
      },
      {
        src: commons + "d/de/Water_reflection_of_Kinkaku-ji_Temple_a_sunny_day%2C_Kyoto%2C_Japan.jpg/960px-Water_reflection_of_Kinkaku-ji_Temple_a_sunny_day%2C_Kyoto%2C_Japan.jpg",
        alt: "Le pavillon d'or Kinkaku-ji, Kyoto",
      },
      {
        src: commons + "5/53/Chureito_Pagoda_and_Mount_Fuji_2023-03-07.jpg/960px-Chureito_Pagoda_and_Mount_Fuji_2023-03-07.jpg",
        alt: "La pagode Chureito devant le mont Fuji",
      },
    ],
  },
  {
    id: 2,
    slug: "france",
    name: "France",
    region: "Europe",
    capital: "Paris",
    description:
      "De Paris aux villages de Provence, la France offre musées, gastronomie, châteaux et côtes variées.",
    image: "https://cdn.pixabay.com/photo/2015/10/06/18/26/eiffel-tower-975004_1280.jpg",
    details:
      "Paris concentre une grande partie des monuments les plus visités au monde, du Louvre à la tour Eiffel. Mais le pays se découvre aussi en région : le Mont-Saint-Michel entre Normandie et Bretagne, les châteaux de la Loire comme Chambord, ou les champs de lavande du plateau de Valensole en Provence. Chaque région a sa cuisine et ses produits, ce qui fait de la France une destination idéale pour voyager en prenant son temps.",
    gallery: [
      {
        src: commons + "0/0d/Mont_St_Michel_at_sunrise.jpg/960px-Mont_St_Michel_at_sunrise.jpg",
        alt: "Le Mont-Saint-Michel au lever du soleil",
      },
      {
        src: commons + "2/28/Lavender_field_near_Valensole_2.jpg/960px-Lavender_field_near_Valensole_2.jpg",
        alt: "Champ de lavande près de Valensole, Provence",
      },
      {
        src: commons + "4/47/Chambord_Castle_Northwest_facade.jpg/960px-Chambord_Castle_Northwest_facade.jpg",
        alt: "Le château de Chambord",
      },
    ],
  },
  {
    id: 3,
    slug: "iceland",
    name: "Islande",
    region: "Europe",
    capital: "Reykjavik",
    description:
      "Une île de volcans, de glaciers et de geysers, où l'on peut observer les aurores boréales en hiver.",
    image: "https://cdn.pixabay.com/photo/2017/03/02/16/54/iceland-2111811_1280.jpg",
    details:
      "L'Islande se parcourt souvent par la route circulaire qui fait le tour de l'île. On y croise des cascades comme Skógafoss, le lagon glaciaire de Jökulsárlón où flottent des icebergs, et le geyser Strokkur qui jaillit toutes les quelques minutes. L'été offre des journées presque sans nuit, tandis que l'hiver est la saison des aurores boréales. Reykjavik, petite capitale très vivante, sert de point de départ à la plupart des voyages.",
    gallery: [
      {
        src: commons + "7/79/Sk%C3%B3gafoss_Waterfall%2C_Iceland%2C_20240720_1330_2993.jpg/960px-Sk%C3%B3gafoss_Waterfall%2C_Iceland%2C_20240720_1330_2993.jpg",
        alt: "La cascade de Skógafoss",
      },
      {
        src: commons + "e/e1/037_Icebergs_at_J%C3%B6kuls%C3%A1rl%C3%B3n_%28Iceland%29_Photo_by_Giles_Laurent.jpg/960px-037_Icebergs_at_J%C3%B6kuls%C3%A1rl%C3%B3n_%28Iceland%29_Photo_by_Giles_Laurent.jpg",
        alt: "Icebergs sur le lagon de Jökulsárlón",
      },
      {
        src: commons + "6/63/Strokkur_geyser_eruption%2C_close-up_view.jpg/960px-Strokkur_geyser_eruption%2C_close-up_view.jpg",
        alt: "Éruption du geyser Strokkur",
      },
    ],
  },
  {
    id: 4,
    slug: "usa",
    name: "États-Unis",
    region: "Amérique du Nord",
    capital: "Washington",
    description:
      "Des gratte-ciel de New York aux grands parcs de l'Ouest, un pays immense aux paysages très différents.",
    image: "https://cdn.pixabay.com/photo/2017/06/07/15/47/new-york-city-2380683_1280.jpg",
    details:
      "New York est souvent la porte d'entrée du pays, avec Manhattan, Central Park et ses quartiers très différents les uns des autres. À l'ouest, les paysages changent complètement : le Grand Canyon en Arizona, les formations rocheuses de Monument Valley ou le Golden Gate Bridge à San Francisco. Les distances sont grandes, il vaut donc mieux choisir une région plutôt que de vouloir tout voir en un seul voyage.",
    gallery: [
      {
        src: commons + "1/12/Grand_Canyon_South_Rim_at_Sunset.jpg/960px-Grand_Canyon_South_Rim_at_Sunset.jpg",
        alt: "Le Grand Canyon au coucher du soleil",
      },
      {
        src: commons + "b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/960px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg",
        alt: "Le Golden Gate Bridge, San Francisco",
      },
      {
        src: commons + "7/78/Monument_Valley%2C_Utah%2C_USA_%2823611451292%29.jpg/960px-Monument_Valley%2C_Utah%2C_USA_%2823611451292%29.jpg",
        alt: "Monument Valley, Utah",
      },
    ],
  },
  {
    id: 5,
    slug: "czech-republic",
    name: "République tchèque",
    region: "Europe",
    capital: "Prague",
    description:
      "Prague et son centre historique, ses ponts sur la Vltava et son château dominant la ville.",
    image: "https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_1280.jpg",
    details:
      "Prague a gardé un centre historique remarquablement préservé. On traverse la Vltava par le pont Charles, bordé de statues, avant de monter vers le château. La place de la Vieille-Ville et son horloge astronomique attirent du monde à chaque heure. Hors de la capitale, la petite ville de Český Krumlov, avec ses toits rouges et son château au bord de la rivière, mérite largement le détour.",
    gallery: [
      {
        src: commons + "2/22/Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg/960px-Prague_07-2016_view_from_Lesser_Town_Tower_of_Charles_Bridge_img3.jpg",
        alt: "Le pont Charles vu depuis la tour de Malá Strana",
      },
      {
        src: commons + "6/63/Blick_auf_das_Stadtzentrum_von_Krumau_%282026%29.jpg/960px-Blick_auf_das_Stadtzentrum_von_Krumau_%282026%29.jpg",
        alt: "Le centre de Český Krumlov",
      },
      {
        src: commons + "4/44/Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg/960px-Prague_07-2016_View_from_Old_Town_Hall_Tower_img3.jpg",
        alt: "La place de la Vieille-Ville de Prague",
      },
    ],
  },
  {
    id: 6,
    slug: "maldives",
    name: "Maldives",
    region: "Asie",
    capital: "Malé",
    description:
      "Un archipel de l'océan Indien connu pour ses lagons turquoise, ses plages de sable blanc et ses récifs.",
    image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg",
    details:
      "Les Maldives comptent près de 1 200 îles réparties en atolls, dont la plupart sont à peine au-dessus du niveau de la mer. Malé, la capitale, est l'une des villes les plus denses du monde. Ailleurs, on vient surtout pour la plongée et le snorkeling : les récifs abritent raies, tortues et poissons tropicaux. La saison sèche, de décembre à avril, est la période la plus agréable pour s'y rendre.",
    gallery: [
      {
        src: commons + "8/83/Mal%C3%A9.jpg/960px-Mal%C3%A9.jpg",
        alt: "Vue aérienne de Malé",
      },
      {
        src: commons + "c/c7/Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg/960px-Diamonds_Thudufushi_Beach_and_Water_Villas%2C_May_2017_-03.jpg",
        alt: "Bungalows sur pilotis, île de Thudufushi",
      },
      {
        src: commons + "e/e2/Eriyadu_Island._View_from_the_south._Maldives.jpg/960px-Eriyadu_Island._View_from_the_south._Maldives.jpg",
        alt: "Ponton de l'île d'Eriyadu",
      },
    ],
  },
];

export default destinations;
