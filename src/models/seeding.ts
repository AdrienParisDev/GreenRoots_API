import { PrismaClient, Role, OrderStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ============================
  // User Types
  // ============================
  console.log("🌱🌱🌱 Starting seeding UserType...🌱🌱");

  await prisma.userType.createMany({
    data: [
      { code: "PART", label: "Particulier", tva_rate: 20.0 },
      { code: "ASSO", label: "Association", tva_rate: 5.5 },
      { code: "ENT", label: "Entreprise", tva_rate: 20.0 },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Seeding UserType Done ✅");

  // ============================
  // Users (10)
  // ============================
  console.log("🌱🌱🌱 Starting seeding Users...🌱🌱");

  await prisma.user.createMany({
    data: [
      {
        firstname: "admin",
        lastname: "admin",
        email: "admin@admin.com",
        email_validated : true,
        password:
          "$2b$10$nY7OHHb/TS21LeCSGdc4A.f9UgvrrjfCkvSCpg59my4j2StLQrMAO",

        role: Role.admin,
        user_type_id: 1,
      },
      {
        firstname: "member",
        lastname: "member",
        email: "member@member.com",
        email_validated : true,
        password:
          "$2b$10$nY7OHHb/TS21LeCSGdc4A.f9UgvrrjfCkvSCpg59my4j2StLQrMAO",

        role: Role.member,
        user_type_id: 2,
      },
      {
        firstname: "Claire",
        lastname: "Dupont",
        email: "claire@example.com",
        email_validated : true,
        password:
          "$2b$10$nY7OHHb/TS21LeCSGdc4A.f9UgvrrjfCkvSCpg59my4j2StLQrMAO",

        role: Role.member,
        user_type_id: 3,
      },
      {
        firstname: "guillaume",
        lastname: "ferard",
        email: "guillaume@ferard.com",
        email_validated : true,
        password:
          "$2b$10$nY7OHHb/TS21LeCSGdc4A.f9UgvrrjfCkvSCpg59my4j2StLQrMAO",

        role: Role.member,
        user_type_id: 3,
      },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Seeding Users Done ✅");

  const users = await prisma.user.findMany();

  // ============================
  // Locations (10)
  // ============================
  console.log("🌱🌱🌱 Starting seeding Locations...🌱🌱");

  await prisma.location.createMany({
    data: [
      // Nord
      { name: "Terrain Lille", latitude: 50.6292, longitude: 3.0573 },
      { name: "Terrain Amiens", latitude: 49.895, longitude: 2.3023 },

      // Île-de-France
      { name: "Terrain Paris", latitude: 48.8566, longitude: 2.3522 },
      { name: "Terrain Versailles", latitude: 48.8049, longitude: 2.1204 },

      // Ouest
      { name: "Terrain Nantes", latitude: 47.2184, longitude: -1.5536 },
      { name: "Terrain Rennes", latitude: 48.1173, longitude: -1.6778 },

      // Sud-Ouest
      { name: "Terrain Bordeaux", latitude: 44.8378, longitude: -0.5792 },
      { name: "Terrain Toulouse", latitude: 43.6047, longitude: 1.4442 },

      // Sud-Est
      { name: "Terrain Marseille", latitude: 43.2965, longitude: 5.3698 },
      { name: "Terrain Nice", latitude: 43.7102, longitude: 7.262 },

      // Est
      { name: "Terrain Lyon", latitude: 45.764, longitude: 4.8357 },
      { name: "Terrain Strasbourg", latitude: 48.5734, longitude: 7.7521 },

      // Centre
      { name: "Terrain Clermont-Ferrand", latitude: 45.7772, longitude: 3.087 },
      { name: "Terrain Orléans", latitude: 47.9029, longitude: 1.9093 },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Seeding Locations Done ✅");

  const locations = await prisma.location.findMany();

  // ============================
  // Products (20 arbres)
  // ============================
  console.log("🌱🌱🌱 Starting seeding Products...🌱🌱");

  await prisma.product.createMany({
  data: [
    {
      name: "Chêne pédonculé",
      slug: "chene-pedoncule",
      price: 90,
      description:
        "Le chêne pédonculé est un arbre emblématique d'Europe, symbole de force, de longévité et de stabilité. Il abrite une biodiversité remarquable, notamment de nombreux insectes et oiseaux. Sa silhouette majestueuse et son feuillage dense en font une essence très recherchée dans les forêts et les parcs.",
      image_paths: [
        "uploads/arbres/chene-pedoncule.webp",
        "uploads/arbres/chene-pedoncule_2.webp",
        "uploads/arbres/chene-pedoncule_3.webp",
      ],
      stock: 0,
      scientific_name: "Quercus robur",
      carbon: 30,
      available: false,
      best_seller: true,
    },
    {
      name: "Hêtre commun",
      slug: "hetre-commun",
      price: 80,
      description:
        "Le hêtre commun est un arbre élégant aux feuilles ondulées, très répandu dans les forêts tempérées d’Europe. Son bois dur et clair est prisé en menuiserie, tandis que son feuillage dense crée des zones d’ombre favorables à la biodiversité forestière.",
      image_paths: [
        "uploads/arbres/hetre.webp",
        "uploads/arbres/hetre_2.webp",
        "uploads/arbres/hetre_3.webp",
      ],
      stock: 1,
      scientific_name: "Fagus sylvatica",
      carbon: 25,
      best_seller: false,
    },
    {
      name: "Sapin pectiné",
      slug: "sapin-pectine",
      price: 85,
      description:
        "Le sapin pectiné, également appelé sapin blanc, est un conifère majestueux des montagnes françaises. Il se distingue par ses aiguilles vert sombre et ses cônes dressés. Adapté aux climats froids et humides, il joue un rôle clé dans la stabilisation des sols et le stockage du carbone.",
      image_paths: [
        "uploads/arbres/sapin.webp",
        "uploads/arbres/sapin_2.webp",
      ],
      stock: 70,
      scientific_name: "Abies alba",
      carbon: 28,
      best_seller: true,
    },
    {
      name: "Châtaignier",
      slug: "chataignier",
      price: 95,
      description:
        "Le châtaignier est un arbre robuste et productif, réputé pour ses fruits comestibles et son bois résistant. Présent dans les régions tempérées, il enrichit les sols et favorise une grande diversité d’espèces. Ses châtaignes nourrissent la faune et sont très appréciées de l’homme.",
      image_paths: [
        "uploads/arbres/chataignier.webp",
        "uploads/arbres/chataignier_2.webp",
      ],
      stock: 60,
      scientific_name: "Castanea sativa",
      carbon: 27,
      best_seller: false,
    },
    {
      name: "Peuplier",
      slug: "peuplier",
      price: 75,
      description:
        "Le peuplier est un arbre à croissance rapide, souvent utilisé pour le reboisement et la production de bois léger. Ses racines stabilisent les berges et améliorent la qualité de l’air. Il s’adapte aisément aux zones humides et joue un rôle écologique essentiel dans les plaines alluviales.",
      image_paths: ["uploads/arbres/peuplier.webp"],
      stock: 120,
      scientific_name: "Populus alba",
      carbon: 22,
      best_seller: false,
    },
    {
      name: "Frêne commun",
      slug: "frene-commun",
      price: 85,
      description:
        "Le frêne commun est un arbre élancé au bois souple et résistant. Il pousse rapidement et s’adapte à divers environnements. Très utile à la biodiversité, il abrite de nombreux insectes et oiseaux. Son bois est souvent utilisé en ébénisterie et pour la fabrication d’outils.",
      image_paths: ["uploads/arbres/frene.webp"],
      stock: 90,
      scientific_name: "Fraxinus excelsior",
      carbon: 23,
      best_seller: false,
    },
    {
      name: "Orme champêtre",
      slug: "orme-champetre",
      price: 100,
      description:
        "L’orme champêtre est un arbre noble autrefois omniprésent dans les campagnes européennes. Il se distingue par son feuillage dense et sa résistance aux vents. Bien qu’affaibli par la graphiose, il reste un symbole de résilience et un élément important de la trame bocagère.",
      image_paths: ["uploads/arbres/orme.webp"],
      stock: 50,
      scientific_name: "Ulmus minor",
      carbon: 26,
      best_seller: false,
    },
    {
      name: "Platane",
      slug: "platane",
      price: 95,
      description:
        "Le platane est un arbre ornemental emblématique des boulevards et places d’Europe. Sa croissance rapide et son feuillage généreux en font un excellent purificateur d’air. Son tronc tacheté et son port majestueux apportent fraîcheur et ombre en milieu urbain.",
      image_paths: ["uploads/arbres/platane.webp"],
      stock: 70,
      scientific_name: "Platanus acerifolia",
      carbon: 24,
      best_seller: false,
    },
    {
      name: "Tilleul",
      slug: "tilleul",
      price: 85,
      description:
        "Le tilleul est un arbre mellifère très apprécié pour ses fleurs odorantes, utilisées en infusion. Il joue un rôle écologique majeur en nourrissant les abeilles. Son feuillage dense crée des zones d’ombre idéales dans les parcs et les villages.",
      image_paths: [
        "uploads/arbres/tilleul.webp",
        "uploads/arbres/tilleul_2.webp",
        "uploads/arbres/tilleul_3.webp",
      ],
      stock: 100,
      scientific_name: "Tilia cordata",
      carbon: 21,
      best_seller: false,
    },
    {
      name: "Bouleau verruqueux",
      slug: "bouleau-verruqueux",
      price: 70,
      description:
        "Le bouleau verruqueux, reconnaissable à son écorce blanche, est une espèce pionnière des forêts européennes. Il colonise les terrains pauvres et favorise la régénération des sols. Son port léger et gracieux en fait un arbre ornemental très apprécié.",
      image_paths: [
        "uploads/arbres/bouleau-verruqueux.webp",
        "uploads/arbres/bouleau_verruqueux_2.webp",
        "uploads/arbres/bouleau_verruqueux_3.webp",
      ],
      stock: 110,
      scientific_name: "Betula pendula",
      carbon: 18,
      best_seller: false,
    },
    {
      name: "Érable sycomore",
      slug: "erable-sycomore",
      price: 80,
      description:
        "L’érable sycomore est un grand arbre à croissance rapide, fréquent dans les forêts tempérées. Son feuillage large et lumineux crée des zones d’ombre agréables. Il supporte bien la pollution et contribue à la dépollution de l’air urbain.",
      image_paths: [
        "uploads/arbres/erable_sycomore.webp",
        "uploads/arbres/erable_sycomore_2.webp",
        "uploads/arbres/erable_sycomore_3.webp",
      ],
      stock: 85,
      scientific_name: "Acer pseudoplatanus",
      carbon: 24,
      best_seller: false,
    },
    {
      name: "Aulne glutineux",
      slug: "aulne-glutineux",
      price: 70,
      description:
        "L’aulne glutineux pousse près des zones humides, où il contribue à stabiliser les berges et à filtrer les eaux. Son bois imputrescible était autrefois utilisé pour les constructions hydrauliques. Il enrichit les sols en azote grâce à ses racines symbiotiques.",
      image_paths: [
        "uploads/arbres/aulne_glutineux.webp",
        "uploads/arbres/aulne_glutineux_2.webp",
        "uploads/arbres/aulne_glutineux_3.webp",
      ],
      stock: 75,
      scientific_name: "Alnus glutinosa",
      carbon: 20,
      best_seller: false,
    },
    {
      name: "Saule pleureur",
      slug: "saule-pleureur",
      price: 95,
      description:
        "Le saule pleureur est un arbre ornemental aux longues branches retombantes, souvent planté en bord d’eau. Il incarne la sérénité et la souplesse. Très résistant, il stabilise les rives et abrite une faune variée, tout en apportant une touche poétique au paysage.",
      image_paths: [
        "uploads/arbres/saule_pleureur.webp",
        "uploads/arbres/saule_pleureur_2.webp",
        "uploads/arbres/saule_pleureur_3.webp",
      ],
      stock: 60,
      scientific_name: "Salix babylonica",
      carbon: 22,
      best_seller: false,
    },
    {
      name: "Cèdre de l'Atlas",
      slug: "cedre-de-l-atlas",
      price: 120,
      description:
        "Le cèdre de l’Atlas est un conifère majestueux originaire d’Afrique du Nord, aujourd’hui répandu en Europe. Sa silhouette imposante, son feuillage persistant et son bois aromatique en font un arbre symbolique de force et de longévité. Il joue un rôle écologique et paysager essentiel.",
      image_paths: [
        "uploads/arbres/cedre_atlas.webp",
        "uploads/arbres/cedre_atlas_2.webp",
        "uploads/arbres/cedre_atlas_3.webp",
      ],
      stock: 50,
      scientific_name: "Cedrus atlantica",
      carbon: 35,
      best_seller: true,
    },
    {
      name: "Noyer commun",
      slug: "noyer-commun",
      price: 100,
      description:
        "Le noyer commun est un arbre majestueux cultivé autant pour ses fruits que pour son bois précieux. Ses noix sont riches en nutriments et son feuillage dégage une agréable odeur. Il apprécie les sols profonds et bien drainés, et joue un rôle économique et écologique notable.",
      image_paths: [
        "uploads/arbres/noyer_commun.webp",
        "uploads/arbres/noyer_commun_2.webp",
        "uploads/arbres/noyer_commun_3.webp",
      ],
      stock: 65,
      scientific_name: "Juglans regia",
      carbon: 28,
      best_seller: false,
    },
    {
      name: "Charme commun",
      slug: "charme-commun",
      price: 85,
      description:
        "Le charme commun est un arbre solide et rustique, souvent utilisé pour former des haies ou des alignements. Son feuillage dense et persistant jusqu’en hiver en fait un excellent brise-vent. Il pousse dans de nombreux types de sols et favorise la biodiversité locale.",
      image_paths: [
        "uploads/arbres/charme_commun.webp",
        "uploads/arbres/charme_commun_2.webp",
        "uploads/arbres/charme_commun_3.webp",
      ],
      stock: 90,
      scientific_name: "Carpinus betulus",
      carbon: 23,
      best_seller: false,
    },
    {
      name: "Pin sylvestre",
      slug: "pin-sylvestre",
      price: 80,
      description:
        "Le pin sylvestre est un conifère robuste à l’écorce orangée, très présent dans les régions montagneuses et les sols sablonneux. Résistant au froid et à la sécheresse, il joue un rôle essentiel dans la stabilisation des sols et la protection contre l’érosion. Son bois, léger et résineux, est largement utilisé dans la construction.",
      image_paths: [
        "uploads/arbres/pin_sylvestre.webp",
        "uploads/arbres/pin_sylvestre_2.webp",
        "uploads/arbres/pin_sylvestre_3.webp",
      ],
      stock: 95,
      scientific_name: "Pinus sylvestris",
      carbon: 26,
      best_seller: false,
    },
    {
      name: "Épicéa commun",
      slug: "epicea-commun",
      price: 85,
      description:
        "L’épicéa commun est un conifère majestueux des montagnes européennes, reconnaissable à sa silhouette élancée et à ses aiguilles rigides. Il constitue une ressource économique majeure pour le bois d’œuvre et la pâte à papier. Très apprécié pour les sapins de Noël, il abrite également une riche faune forestière.",
      image_paths: [
        "uploads/arbres/epicea_commun.webp",
        "uploads/arbres/epicea_commun_2.webp",
      ],
      stock: 80,
      scientific_name: "Picea abies",
      carbon: 29,
      best_seller: false,
    },
    {
      name: "Cerisier sauvage",
      slug: "cerisier-sauvage",
      price: 90,
      description:
        "Le cerisier sauvage est un arbre gracieux à floraison printanière spectaculaire. Ses fleurs blanches attirent de nombreux pollinisateurs, et ses fruits servent de nourriture à la faune. Son bois rougeâtre est prisé en ébénisterie, et il symbolise la beauté et le renouveau dans les paysages européens.",
      image_paths: [
        "uploads/arbres/cerisier_sauvage.webp",
        "uploads/arbres/cerisier_sauvage_2.webp",
      ],
      stock: 70,
      scientific_name: "Prunus avium",
      carbon: 20,
      best_seller: false,
    },
    {
      name: "Pommier sauvage",
      slug: "pommier-sauvage",
      price: 75,
      description:
        "Le pommier sauvage est un petit arbre fruitier indigène en Europe, connu pour ses fleurs rosées et ses petits fruits acidulés. Il constitue une ressource alimentaire importante pour les oiseaux et les insectes. Sa rusticité lui permet de s’adapter à des sols variés et aux climats tempérés.",
      image_paths: [
        "uploads/arbres/pommier_sauvage.webp",
        "uploads/arbres/pommier_sauvage_2.webp",
      ],
      stock: 85,
      scientific_name: "Malus sylvestris",
      carbon: 19,
      best_seller: false,
    },
    {
      name: "Aubépine commune",
      slug: "aubepine-commune",
      price: 60,
      description:
        "L’aubépine commune est un arbuste buissonnant aux fleurs blanches et aux baies rouges vives. Très résistante, elle sert souvent de haie naturelle et abrite une multitude d’oiseaux. Elle est aussi réputée pour ses propriétés médicinales, notamment apaisantes et cardioprotectrices.",
      image_paths: [
        "uploads/arbres/aubepine_commune.webp",
        "uploads/arbres/aubepine_commune_2.webp",
      ],
      stock: 120,
      scientific_name: "Crataegus monogyna",
      carbon: 14,
      best_seller: false,
    },
    {
      name: "Érable champêtre",
      slug: "erable-champetre",
      price: 70,
      description:
        "L’érable champêtre est un petit arbre rustique, souvent planté en haies ou en bordure de champs. Son feuillage dense se pare de magnifiques teintes dorées à l’automne. Très adaptable, il supporte bien la taille et contribue à la biodiversité des paysages ruraux.",
      image_paths: [
        "uploads/arbres/erable_champetre.webp",
        "uploads/arbres/erable_champetre_2.webp",
      ],
      stock: 90,
      scientific_name: "Acer campestre",
      carbon: 21,
      best_seller: false,
    },
    {
      name: "Poirier sauvage",
      slug: "poirier-sauvage",
      price: 80,
      description:
        "Le poirier sauvage est un arbre élégant, à floraison printanière blanche et abondante. Il pousse naturellement dans les haies et les lisières. Ses fruits petits et âpres sont prisés par les oiseaux. Son bois dense et dur est apprécié pour les objets tournés et la marqueterie.",
      image_paths: [
        "uploads/arbres/poirier_sauvage.webp",
        "uploads/arbres/poirier_sauvage_2.webp",
      ],
      stock: 60,
      scientific_name: "Pyrus pyraster",
      carbon: 18,
      best_seller: false,
    },
    {
      name: "Alisier torminal",
      slug: "alisier-torminal",
      price: 85,
      description:
        "L’alisier torminal est un arbre rare et élégant des forêts européennes, reconnaissable à ses feuilles lobées et à ses fruits bruns. Il affectionne les sols calcaires et secs. Son bois dense et durable est très recherché pour la menuiserie fine et le tournage sur bois.",
      image_paths: [
        "uploads/arbres/alisier_torminal.webp",
        "uploads/arbres/alisier_torminal_2.webp",
      ],
      stock: 55,
      scientific_name: "Sorbus torminalis",
      carbon: 25,
      best_seller: false,
    },
  ],
  skipDuplicates: true,
});


  console.log("✅ Seeding Products Done ✅");

  const products = await prisma.product.findMany();

  // ============================
  // Product-Location relations
  // ============================
  console.log("🌱 Linking Products to Locations...");
  await prisma.productLocation.createMany({
    data: [
      // 1. Chêne pédonculé
      { product_id: products[0].id, location_id: locations[0].id },
      { product_id: products[0].id, location_id: locations[1].id },

      // 2. Hêtre commun
      { product_id: products[1].id, location_id: locations[2].id },
      { product_id: products[1].id, location_id: locations[3].id },

      // 3. Sapin pectiné
      { product_id: products[2].id, location_id: locations[4].id },
      { product_id: products[2].id, location_id: locations[5].id },

      // 4. Châtaignier
      { product_id: products[3].id, location_id: locations[6].id },
      { product_id: products[3].id, location_id: locations[7].id },

      // 5. Peuplier
      { product_id: products[4].id, location_id: locations[8].id },
      { product_id: products[4].id, location_id: locations[9].id },

      // 6. Frêne commun
      { product_id: products[5].id, location_id: locations[10].id },
      { product_id: products[5].id, location_id: locations[11].id },

      // 7. Orme champêtre
      { product_id: products[6].id, location_id: locations[12].id },
      { product_id: products[6].id, location_id: locations[13].id },

      // 8. Platane
      { product_id: products[7].id, location_id: locations[0].id },
      { product_id: products[7].id, location_id: locations[1].id },

      // 9. Tilleul
      { product_id: products[8].id, location_id: locations[2].id },
      { product_id: products[8].id, location_id: locations[3].id },

      // 10. Bouleau verruqueux
      { product_id: products[9].id, location_id: locations[4].id },
      { product_id: products[9].id, location_id: locations[5].id },

      // 11. Érable sycomore
      { product_id: products[10].id, location_id: locations[6].id },
      { product_id: products[10].id, location_id: locations[7].id },

      // 12. Aulne glutineux
      { product_id: products[11].id, location_id: locations[8].id },
      { product_id: products[11].id, location_id: locations[9].id },

      // 13. Saule pleureur
      { product_id: products[12].id, location_id: locations[10].id },
      { product_id: products[12].id, location_id: locations[11].id },

      // 14. Cèdre de l’Atlas
      { product_id: products[13].id, location_id: locations[12].id },
      { product_id: products[13].id, location_id: locations[13].id },

      // 15. Noyer commun
      { product_id: products[14].id, location_id: locations[0].id },
      { product_id: products[14].id, location_id: locations[2].id },

      // 16. Charme commun
      { product_id: products[15].id, location_id: locations[4].id },
      { product_id: products[15].id, location_id: locations[6].id },
    ],
    skipDuplicates: true,
  });

  console.log("✅ Product-Location relations seeded");

  // ============================
  // Orders (20 commandes)
  // ============================
  console.log("🌱🌱🌱 Starting seeding Orders...🌱🌱");

  for (let i = 0; i < 20; i++) {
    const user = users[i % users.length];

    // Sélectionner entre 3 et 5 produits différents
    const nbItems = 3 + (i % 3); // 3, 4 ou 5
    const chosenProducts = products.slice(i, i + nbItems);

    // Construire les items avec quantités progressives
    const items = chosenProducts.map((product, idx) => ({
      quantity: 10 + idx + i, // quantités progressives
      unit_price: product.price,
      product: { connect: { id: product.id } },
    }));

    // Calculer le total
    const total = items.reduce(
      (sum, item) => sum + item.quantity * Number(item.unit_price),
      0
    );

    await prisma.order.create({
      data: {
        status: i % 2 === 0 ? OrderStatus.paid : OrderStatus.pending,
        total,
        user: { connect: { id: user.id } },
        items: { create: items },
      },
    });
  }

  console.log("✅ Seeding Orders Done ✅");

  console.log("🚀🚀🚀 Seeding finished 🚀🚀🚀");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
