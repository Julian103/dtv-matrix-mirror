export interface RawShip {
  id: string;
  slug: string;
  name: string;
  line: string;
  line_slug: string;
  ship_class: string;
  entered_service: number | string;
  year_refurbished: number | null;
  has_solo_cabins: boolean;
  space_ratio: number;
  crew_to_passenger_ratio: string;
  h1: string;
  departure_ports_normalized: string[];
  departure_port_tags: string[];
  ship_scale_category: string;
  pace_category: string;
  vibe_tags: string[];
  audience_tags: string[];
  line_hub_slug: string;
  primary_pillar: string;
  anchor_targets: string[];
  card_excerpt: string;
  short_description?: string;
  intro_summary?: string;
  sources?: string;
  images: {
    hero: string;
    hero_alt: string;
    pool?: string;
    pool_alt?: string;
    atrium?: string;
    atrium_alt?: string;
    public_space?: string;
    public_space_alt?: string;
  };
  library: {
    tags: string[];
  };
  hero: {
    description: string;
  };
  quick_view: {
    class: string;
    entered_service: string | number;
    homeports: string[];
    length: string;
    atmosphere: string;
    experience_style: string;
    best_fit: string;
    not_ideal_for: string;
    planning_advice: string;
  };
  facts: {
    decks: number | string;
    cabins: number | string;
    capacity: number | string;
  };
  advisor_snapshot: {
    scale_pacing: string;
    overall_feel: string;
    strengths: string;
    watch_outs: string;
  };
  experience_breakdown: {
    atmosphere: string;
    dining_style: string;
    crowd_flow: string;
    public_spaces: string;
  };
  cabin_considerations: {
    balcony: string;
    interior: string;
    practical_tip: string;
  };
  fit_guidance: {
    makes_sense_if: string[];
    not_ideal_if: string[];
  };
  faq: Array<{ question: string; answer: string }>;
  seo: {
    title: string;
    meta_description: string;
    canonical_url: string;
  };
  relations: {
    related_ship_slugs: string[];
    compare_ship_slugs: string[];
    anchor_targets: string[];
    primary_pillar: string;
  };
  source_meta: {
    last_updated: string;
    version: string;
  };
  venues?: Array<{
    name: string;
    deck: string;
    description?: string;
  }>;
}

export const rawShips: RawShip[] = [
  {
    id: "carnival-celebration",
    slug: "carnival-celebration",
    name: "Carnival Celebration",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Excel Class",
    entered_service: 2022,
    year_refurbished: null,
    has_solo_cabins: false,
    space_ratio: 35.1,
    crew_to_passenger_ratio: "1:3.5",
    h1: "Carnival Celebration",
    departure_ports_normalized: ["Miami, FL"],
    departure_port_tags: ["Port Canaveral", "Florida"],
    ship_scale_category: "Large Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Family Friendly", "Lively", "Festive"],
    audience_tags: ["Families", "Couples", "Groups", "Multigenerational"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Entertainment and Celebration",
    anchor_targets: ["Family Friendly Activities", "Mega Ship Amenities", "Diverse Dining", "Thrilling Entertainment"],
    card_excerpt: "Carnival Celebration is a modern, high-capacity ship built for high-energy Caribbean sailings, featuring standout areas like the BOLT roller coaster, multiple themed zones, and a wide range of casual dining. It’s a strong fit for families and social groups sailing from Orlando (Port Canaveral) who want a lively, activity-packed cruise with constant entertainment rather than a quieter, traditional experience.",
    short_description: "Carnival Celebration is a large, modern Carnival ship with many dining choices, lively entertainment, and several distinct themed zones. It suits travelers who want a big-ship resort feel and plenty to do on a weeklong Caribbean cruise.",
    intro_summary: "Carnival Celebration is one of Carnival Cruise Line's newest and largest ships. It is best for travelers who want a busy, modern cruise with plenty of food choices, entertainment, and Caribbean itineraries from Miami.",
    sources: "Carnival Cruise Line - Carnival Celebration (official) - https://www.carnival.com/cruise-ships/carnival-celebration | CruiseMapper - Carnival Celebration (reference) - https://www.cruisemapper.com/ships/Carnival-Celebration-2081 | Cruise Critic - Carnival Celebration Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=1471",
    images: {
      hero: "https://vibe.filesafe.space/1775316359191552915/attachments/32e05310-3caa-4ebe-8fe3-394d2a4513ad.png",
      hero_alt: "Carnival Celebration cruise ship sailing on a sunny day",
      pool: "https://vibe.filesafe.space/1775316359191552915/attachments/131ac234-a271-4278-b94f-81300b0cbef1.png",
      pool_alt: "Guests enjoying the pool deck on Carnival Celebration",
      atrium: "https://vibe.filesafe.space/1775316359191552915/attachments/3f1f35de-cc48-41e4-abea-fa2243ac66ec.png",
      atrium_alt: "The vibrant atrium of Carnival Celebration decorated for a festive atmosphere",
      public_space: "https://vibe.filesafe.space/1775316359191552915/attachments/4f3e9751-12d0-4816-9844-be8f3d66a8de.png",
      public_space_alt: "Lively public lounge area on Carnival Celebration with guests socializing"
    },
    library: {
      tags: ["Fun", "Family Friendly", "Lively", "Festive"]
    },
    hero: {
      description: "Carnival Celebration is one of Carnival Cruise Line's newest and largest ships. It is best for travelers who want a busy, modern cruise with plenty of food choices, entertainment, and Caribbean itineraries from Miami."
    },
    quick_view: {
      class: "Excel Class",
      entered_service: 2022,
      homeports: ["Miami, FL"],
      length: "7-night Caribbean sailings",
      atmosphere: "Lively, busy, and contemporary",
      experience_style: "Large resort-style ship with many activity and dining options",
      best_fit: "Travelers who enjoy variety, entertainment, and a social onboard atmosphere",
      not_ideal_for: "Guests seeking a quiet, small-ship, or more traditional cruise experience",
      planning_advice: "Book dining, shows, and key activities early, and expect more walking than on smaller ships."
    },
    facts: {
      decks: 20,
      cabins: 2687,
      capacity: 5374
    },
    advisor_snapshot: {
      scale_pacing: "Very large ship with a full daily schedule and steady activity from morning into late evening",
      overall_feel: "Carnival Celebration feels energetic and modern, with many venues spread across themed areas. It offers a busy vacation style rather than a quiet retreat.",
      strengths: "Wide choice of dining and bars, strong family and multigenerational appeal, modern cabins, several pools and activity areas, and many entertainment options on a new ship platform.",
      watch_outs: "Can feel crowded in popular areas at peak times, requires significant walking, and the overall atmosphere may be too loud or busy for guests who prefer a calmer setting."
    },
    experience_breakdown: {
      atmosphere: "The ship has a cheerful, upbeat Carnival style with music, social spaces, and lots of visual activity. Different zones help break up the size, but it still feels like a big resort at sea. During sea days and evenings, public areas can be quite active.",
      dining_style: "Casual and varied, with included venues, specialty restaurants, quick bites, and flexible options throughout the day. Guests who like many choices will do well here.",
      crowd_flow: "Because the ship is large and popular, elevators, buffet areas, pool decks, and headline venues can become congested at busy times. Spreading out your day and arriving early for events helps.",
      public_spaces: "Public spaces are modern and spread through several themed zones, including indoor lounges, entertainment venues, outdoor decks, pool areas, and many food and drink spots. There is good variety, but some areas stay lively for much of the day."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a practical choice on this ship for guests who want a private place to rest away from the busiest public areas. Location matters because some zones are more active than others.",
      interior: "Interior cabins can offer good value, especially for guests who spend most of their time in public areas. On a ship this active, some travelers may prefer a quieter cabin location away from elevators and busy venues.",
      practical_tip: "Study the deck plan before booking so you can choose a cabin location that matches your comfort with noise, walking distance, and elevator access."
    },
    fit_guidance: {
      makes_sense_if: [
        "You enjoy a lively ship with many dining and entertainment options",
        "You want a modern Carnival ship sailing weeklong Caribbean itineraries",
        "You are comfortable on a very large ship with more walking",
        "You like having both included and extra-fee dining choices"
      ],
      not_ideal_if: [
        "You prefer a quiet, low-key onboard atmosphere",
        "You want a smaller ship with simpler navigation",
        "You are sensitive to crowds in popular venues",
        "You value destination immersion more than onboard activities"
      ]
    },
    faq: [
      {
        question: "What is the passenger capacity of Carnival Celebration?",
        answer: "Carnival Celebration carries about 5374 guests at full capacity, which places it among the large ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What ports does Carnival Celebration primarily sail from?",
        answer: "Carnival Celebration sails from Miami, FL, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      },
      {
        question: "What unique features does Carnival Celebration offer?",
        answer: "Carnival Celebration features a fan-favorite roller coaster, enhanced dining options, and vibrant entertainment reflecting Carnival’s party atmosphere."
      }
    ],
    seo: {
      title: "Carnival Celebration Ship Review | Dream Team Vacations",
      meta_description: "Learn about Carnival Celebration, a large Carnival Cruise Line ship sailing from Miami with modern features, many dining choices, and a lively onboard atmosphere.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-celebration"
    },
    relations: {
      related_ship_slugs: ["carnival-mardi-gras", "carnival-vista", "carnival-freedom"],
      compare_ship_slugs: ["carnival-mardi-gras", "carnival-vista", "carnival-freedom"],
      anchor_targets: ["Family Friendly Activities", "Mega Ship Amenities", "Diverse Dining", "Thrilling Entertainment"],
      primary_pillar: "Entertainment and Celebration"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Family Harbor Lounge", deck: "4", description: "A private lounge for Family Harbor cabin guests, with movies, video games, a light breakfast buffet, and evening cookies and milk." },
      { name: "Camp Ocean / Night Owls", deck: "4", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Dr. Seuss Bookville", deck: "4", description: "A Dr. Seuss-themed reading and play space for families with younger children or visiting grandkids." },
      { name: "Cloud 9 Spa", deck: "5, 6", description: "A full wellness complex forward on Decks 5 and 6 with a Life Fitness gym, cycling studio, scheduled classes, saunas, steam rooms, thermal suites, and salon services." },
      { name: "Chef's Table", deck: "5", description: "An exclusive 16-seat dinner experience with galley views, offering a one-of-a-kind tasting menu at an extra cost." },
      { name: "Grand Spectrum Theater", deck: "6, 7", description: "The ship's main two-deck theater for evening productions, talks, audience games, and dance classes." },
      { name: "The Punchliner Comedy Club", deck: "6", description: "The ship's comedy club, with family-friendly early shows and adults-oriented late shows featuring stand-up comedians." },
      { name: "Piano Bar 88", deck: "6", description: "A classic piano bar for sing-alongs, requests, and a relaxed evening drink after dinner." },
      { name: "Celebration Central Atrium", deck: "6, 7, 8", description: "The ship's signature three-deck atrium with floor-to-ceiling windows, live music, LED video walls, aerial performances, and evening games." },
      { name: "Tropicale Bar", deck: "6", description: "A casual atrium-area bar for a quick drink between activities or before dinner." },
      { name: "JavaBlue Café", deck: "6", description: "A casual café for specialty coffee, pastries, milkshakes, and custom special-occasion cakes." },
      { name: "Cherry on Top", deck: "6", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "The Fun Shops", deck: "6, 7, 8", description: "The ship's main onboard shops, spread across three decks for apparel, jewelry, beauty, liquor, and Carnival logo items." },
      { name: "The Golden Jubilee", deck: "6", description: "A lounge that celebrates Carnival's 50-year history, with a stage for live entertainment, a dance floor, and a full bar." },
      { name: "Carnivale Restaurant", deck: "6", description: "A main dining room open nightly for traditional assigned-seating dinner at 5:30pm or 7:45pm, with full wait staff service." },
      { name: "Latitudes Bar", deck: "6", description: "A travel-themed bar designed like a retro airport or train station, with nightly happy hour and drinks from around the world." },
      { name: "Emeril's Bistro 1397", deck: "6", description: "A sit-down New Orleans-style bistro from chef Emeril Lagasse, with an a la carte menu at nominal extra cost." },
      { name: "Carnival Kitchen", deck: "6", description: "A hands-on cooking class and tasting venue led by ship chefs, by advance reservation at extra cost." },
      { name: "Conference Center", deck: "6", description: "Multi-function conference rooms reserved for private group functions on the ship." },
      { name: "Festivale Restaurant", deck: "6, 7", description: "The ship's aft main dining room across two decks, serving brunch, breakfast, tea, and dinner with both assigned and flexible seating." },
      { name: "Empress Casino and Bar", deck: "7", description: "The main casino with slot machines and table games, smoking and non-smoking sections, open on sea days and after departure." },
      { name: "Aquaria Casino Bar", deck: "7", description: "A bar attached to the casino, convenient for a drink while playing or passing through." },
      { name: "Limelight Lounge", deck: "7", description: "A flexible lounge that hosts live music, karaoke, late-night shows, and talks throughout the cruise." },
      { name: "Alchemy Bar", deck: "7", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Fahrenheit 555 Steakhouse", deck: "7", description: "The ship's specialty steakhouse for surf and turf, lamb, and classic steakhouse dinners, with a reservations fee." },
      { name: "Art Gallery", deck: "7", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Chibang!", deck: "8", description: "A sit-down restaurant blending Chinese and Mexican cuisines, free for your first dinner with a small fee for repeat visits." },
      { name: "Havana Lounge", deck: "8", description: "A Cuban-inspired living-room-style bar serving Cuban coffee, sodas, and cocktails, with live Latin music several nights." },
      { name: "Havana Pool Area", deck: "8", description: "An exclusive pool area for Havana cabin and Excel Presidential Suite guests only, with a quiet relaxation pool and bar." },
      { name: "Dreams Studio", deck: "8", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Bonsai Teppanyaki", deck: "8", description: "A teppanyaki restaurant with chefs preparing dishes tableside at 10-seat stations, with a reservations fee." },
      { name: "Bonsai Sushi", deck: "8", description: "A full-service sushi restaurant with Asian-inspired dishes, open late into the evening." },
      { name: "Pixels (Digital) Photo Gallery", deck: "8", description: "A digital photo gallery where cruise photos can be browsed on iPads or the HUB App and ordered as digital or print copies." },
      { name: "Cucina del Capitano", deck: "8", description: "A sit-down Italian restaurant with indoor and outdoor seating, free for your first dinner with a small fee for repeat visits." },
      { name: "Bar 820", deck: "8", description: "A retro indoor-outdoor bar with vintage Miami style, serving Cuban coffee in the morning and tropical drinks day into night." },
      { name: "Miami Slice", deck: "8", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Deco Deli", deck: "8", description: "A complimentary deli with piled-high sandwiches, sides, and Miami specialties like the Cubano and pan con lechon." },
      { name: "Rudi's Seagrill", deck: "8", description: "A specialty seafood restaurant by chef Rudi Sodamin with artistic plating, by reservation with a fee." },
      { name: "Carnival Adventures", deck: "8", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Guest Services", deck: "8", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Guy's Pig & Anchor Bar-B-Que Smokehouse | Brewhouse", deck: "8", description: "A complimentary smokehouse-and-brewery from Guy Fieri with sit-down barbecue dining, craft beers brewed on board, and live music." },
      { name: "Heroes Tribute Bar & Lounge", deck: "8", description: "A welcoming bar and lounge that honors armed services personnel and their families, with drinks and light snacks." },
      { name: "The Watering Hole", deck: "8", description: "A laid-back outdoor bar in Summer Landing with sea views, a wide beer selection, and summer-inspired drinks." },
      { name: "Summer Landings Pool Area", deck: "8", description: "An aft pool deck with the Infinity Tides Pool, two hot tubs, and a spacious outdoor Patio for loungers and umbrellas." },
      { name: "BlueIguana Cantina", deck: "16", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Seafood Shack", deck: "16", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Street Eats", deck: "16", description: "A complimentary three-station street-food stop for bao buns, kebabs, loaded fries, and other rotating lunch favorites." },
      { name: "Beach Pool", deck: "16", description: "The main Lido Deck saltwater pool with a hot tub, open from morning through late evening." },
      { name: "RedFrog Tiki Bar", deck: "16, 17", description: "A two-level South Pacific-inspired poolside tiki bar serving rum cocktails in pineapples and souvenir tiki glasses." },
      { name: "Carnival Seaside Theater | Dive-In Movies", deck: "16", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Lido Marketplace", deck: "16", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Big Chicken", deck: "16", description: "A complimentary fried chicken stand from Shaquille O'Neal, with sandwiches, sides, and all-day breakfast options." },
      { name: "Masala Tiger", deck: "16", description: "A casual Indian food stand with tandoori meats, hot naan, and vegetarian dishes, at an extra cost." },
      { name: "Empanada and Pie", deck: "16", description: "A casual food stand for empanadas and pies, served at lunch and dinner for an extra cost." },
      { name: "Tides Pool and Bar", deck: "16", description: "An aft Lido pool with two hot tubs, loungers, umbrellas, and a poolside bar open into the late evening." },
      { name: "Guy's Burger Joint", deck: "17", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "The Warehouse Arcade", deck: "17", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Circle \\\"C\\\"", deck: "17", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Club O2", deck: "17", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Serenity", deck: "18", description: "The adults-only 21+ retreat with a pool, two hot tubs, a complimentary salad station, and a full bar for a quieter sea day." },
      { name: "SportSquare", deck: "18, 19", description: "An outdoor sports complex with a ropes course, mini golf, basketball, pickleball, a jogging track, and open-air games." },
      { name: "Carnival WaterWorks", deck: "18", description: "An outdoor water park with three waterslides including a 312-foot tube slide, a spray park, and kid-scaled Mini Racer slides." },
      { name: "Loft 19", deck: "19", description: "An exclusive resort-style retreat on the top deck, with a private infinity hot tub, 108 loungers, and 12 cabanas by reservation." },
      { name: "BOLT Ultimate Sea Coaster", deck: "19", description: "An 800-foot sea-going roller coaster on the top deck reaching 40 mph, at an extra cost." },
      { name: "Self-Service Ironing Rooms", deck: "4, 5, 9, 14, 15", description: "Self-service ironing rooms on five decks; note that this ship has no guest washers or dryers — valet laundry only." },
      { name: "Medical Center", deck: "3", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-conquest",
    slug: "carnival-conquest",
    name: "Carnival Conquest",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Conquest Class",
    entered_service: 2002,
    year_refurbished: 2022,
    has_solo_cabins: false,
    space_ratio: 37,
    crew_to_passenger_ratio: "1 to 2.8",
    h1: "Carnival Conquest",
    departure_ports_normalized: ["Miami, FL"],
    departure_port_tags: ["Miami", "Florida", "Galveston", "Texas", "Port Canaveral"],
    ship_scale_category: "Large Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Casual", "Family Friendly", "Lively"],
    audience_tags: ["Families", "Couples", "Groups", "Party Goers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun and Relaxation",
    anchor_targets: ["Family Activities", "Entertainment", "Dining Options", "Pools and Waterparks"],
    card_excerpt: "Carnival Conquest is built around classic Carnival casual dining and deck attractions, making it a strong fit for Families and Couples sailing from Miami, FL who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Conquest is a large, lively Carnival ship with familiar dining, entertainment, and pool deck activities. It is a practical choice for travelers who want a mainstream cruise from Miami with short Caribbean itineraries.",
    intro_summary: "Carnival Conquest is a large, casual Carnival Cruise Line ship best known for short Caribbean cruises from Miami. It suits travelers who want a busy, familiar, and easygoing cruise experience with standard dining, entertainment, and warm-weather itineraries.",
    sources: "Carnival Cruise Line - Carnival Conquest (official) - https://www.carnival.com/cruise-ships/carnival-conquest | CruiseMapper - Carnival Conquest (reference) - https://www.cruisemapper.com/ships/Carnival-Conquest-617 | Cruise Critic - Carnival Conquest Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=171",
    images: {
      hero: "https://vibe.filesafe.space/1775316359191552915/attachments/337cfd04-09ea-4fd6-883d-d51035c82b69.png",
      hero_alt: "Carnival Conquest cruise ship sailing with bright blue sky",
      pool: "https://vibe.filesafe.space/1775316359191552915/attachments/cb58c333-6570-47f8-91eb-43a7183a9cdb.png",
      pool_alt: "Passengers enjoying the pool area with water slides on Carnival Conquest",
      atrium: "https://vibe.filesafe.space/1775316359191552915/attachments/82e67e3e-d396-4dfb-bb4c-e047c39555ff.png",
      atrium_alt: "Spacious and vibrant atrium interior of Carnival Conquest",
      public_space: "https://vibe.filesafe.space/1775316359191552915/attachments/813dac2b-e136-4410-ab3f-e3c686dcee41.png",
      public_space_alt: "Guests dining and socializing in a public lounge area on Carnival Conquest"
    },
    library: {
      tags: ["Fun", "Casual", "Family Friendly", "Lively"]
    },
    hero: {
      description: "Carnival Conquest is a large, casual Carnival Cruise Line ship best known for short Caribbean cruises from Miami. It suits travelers who want a busy, familiar, and easygoing cruise experience with standard dining, entertainment, and warm-weather itineraries."
    },
    quick_view: {
      class: "Conquest Class",
      entered_service: 2002,
      homeports: ["Miami, FL"],
      length: "3- to 5-night Caribbean sailings",
      atmosphere: "Casual, social, and busy",
      experience_style: "Mainstream resort-style cruising with plenty going on",
      best_fit: "Travelers who enjoy an active ship, simple planning, and short warm-weather getaways",
      not_ideal_for: "Guests seeking a quiet luxury feel or a small-ship experience",
      planning_advice: "Choose your cabin carefully, as the ship can be lively in central areas and around public decks. Short sailings often have a more energetic crowd."
    },
    facts: {
      decks: 13,
      cabins: 1490,
      capacity: 2980
    },
    advisor_snapshot: {
      scale_pacing: "Large ship with a steady to busy pace, especially on sea days and short sailings",
      overall_feel: "Carnival Conquest feels straightforward, active, and easy to understand. It offers a classic Carnival mix of casual dining, family-friendly fun, and evening entertainment without feeling especially upscale.",
      strengths: "Good range of included food, easy Caribbean itineraries from Miami, lively entertainment, and a familiar layout for mainstream cruise travelers.",
      watch_outs: "Short cruises can feel crowded and louder, and the ship does not offer the newest features found on newer Carnival ships."
    },
    experience_breakdown: {
      atmosphere: "The ship has a casual, upbeat atmosphere with music, pool activity, comedy, and a social feel in the evenings. During shorter sailings, the mood can be especially energetic, while daytime spaces still offer quieter corners for reading or watching the ocean.",
      dining_style: "Traditional main dining room service and buffet dining are the core options, with added casual favorites and specialty venues depending on current onboard offerings. Food style is broad and familiar rather than refined.",
      crowd_flow: "Public areas can become busy around embarkation, buffet peak times, and after evening shows. Pool decks and central indoor areas tend to draw the most traffic.",
      public_spaces: "The ship includes pool decks, lounges, bars, a theater, casino, spa, fitness area, and standard Carnival gathering spaces. Decor is more classic Carnival than modern, with large social venues rather than intimate retreat spaces."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a good fit for guests who want fresh air and a quieter personal space away from busy public decks. They can be especially helpful on short sailings when the ship feels active.",
      interior: "Interior cabins are the most economical choice and work well for travelers who plan to spend most of their time out on the ship or ashore. They offer value, but less natural light and no private outdoor space.",
      practical_tip: "For a calmer stay, avoid cabins directly under the pool deck or near elevators and late-night venues. Early dining and pre-booking activities can also make short cruises feel smoother."
    },
    fit_guidance: {
      makes_sense_if: ["You want a short Caribbean cruise from Miami", "You enjoy a casual and social onboard atmosphere", "You are comfortable on a large mainstream ship", "You want familiar dining and entertainment options"],
      not_ideal_if: ["You prefer a quiet ship with fewer announcements and less nightlife", "You want a premium or luxury onboard experience", "You prefer the newest ship design and latest attractions", "You are looking for a small-ship or destination-focused cruise"]
    },
    faq: [
      {
        question: "What amenities are available on Carnival Conquest?",
        answer: "Carnival Conquest is best understood in the context of its size, onboard style, and departure options. It makes the most sense for travelers who want classic Carnival casual dining and deck attractions and a ship experience aligned with Families and Couples, rather than a quieter, more traditional cruise."
      },
      {
        question: "Where does Carnival Conquest sail from?",
        answer: "Carnival Conquest sails from Miami, FL, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      },
      {
        question: "Is Carnival Conquest suitable for families?",
        answer: "Carnival Conquest can work well for families, but the best fit depends on whether your group wants a highly active ship or a calmer one. It is usually strongest for Families and Couples who want a more feature-driven experience rather than a quieter, more traditional cruise."
      }
    ],
    seo: {
      title: "Carnival Conquest Ship Review | Dream Team Vacations",
      meta_description: "Learn about Carnival Conquest, a large Carnival Cruise Line ship sailing from Miami with short Caribbean itineraries, casual dining, and a lively onboard atmosphere.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-conquest"
    },
    relations: {
      related_ship_slugs: ["carnival-freedom", "carnival-magic", "carnival-horizon"],
      compare_ship_slugs: ["carnival-freedom", "carnival-horizon", "carnival-magic"],
      anchor_targets: ["Family Activities", "Entertainment", "Dining Options", "Pools and Waterparks"],
      primary_pillar: "Fun and Relaxation"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Toulouse-Lutrec Lounge", deck: "3, 4, 5", description: "The ship's three-deck main theater for Playlist Productions, talks, dance classes, and audience games." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Artists' Lobby", deck: "3", description: "The central atrium lounge and main entrance, with seating, a dance floor, and live music by day and night." },
      { name: "Dreams Studio", deck: "3, 4", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Art Gallery", deck: "3", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Cassat Room", deck: "3", description: "A dining room annex used to extend the main dining experience during busy service times." },
      { name: "Renoir Restaurant", deck: "3, 4", description: "A two-deck main dining room with flexible 'Your Time' dinner seating from 5:30pm to 9:00pm, full wait service." },
      { name: "Monet Restaurant", deck: "3, 4", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and traditional assigned-seating dinner." },
      { name: "Pixels Photo Gallery", deck: "4", description: "A digital photo gallery where cruise photos can be browsed on iPads or the HUB App and ordered as digital or print copies." },
      { name: "Painters' Library", deck: "4", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Circle \"C\"", deck: "4", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Alfred's Bar", deck: "4", description: "A bar on Deck 4 for a drink between dinner and the show, with rotating hours throughout the cruise." },
      { name: "Club O2", deck: "5", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "The Warehouse Arcade", deck: "5", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "The Fun Shops", deck: "5", description: "The ship's main onboard shops for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Heroes Tribute Bar", deck: "5", description: "A sports bar with big-screen TVs for live games, plus drinks and snacks, honoring armed services personnel." },
      { name: "Cherry on Top", deck: "5", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Tahiti Casino", deck: "5", description: "The main casino with slot machines and table games, plus a non-smoking casino on the upper level." },
      { name: "Impressions Bar", deck: "5", description: "A casino-side bar with nightly live music and audience participation games for easy evenings at the casino." },
      { name: "Carnival Adventures Store", deck: "5", description: "A small shop for shore-day essentials like sunscreen, apparel, and last-minute souvenirs before heading into port." },
      { name: "Cafe Fans", deck: "5", description: "A casual café for specialty coffee, pastries, and custom special-occasion cakes." },
      { name: "Henri's Night Club", deck: "5", description: "An adults-only 18+ dance club with DJs spinning current hits and retro favorites, opening at 11pm." },
      { name: "Alchemy Bar", deck: "5", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Blues", deck: "5", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Vincent's", deck: "5", description: "A lounge with nightly live music and a dance floor, open for drinks and easy evenings." },
      { name: "Degas Lounge", deck: "5", description: "A flexible show lounge that hosts live music, karaoke, talks, and the Punchliner Comedy Club." },
      { name: "The Sun Pool", deck: "9", description: "The main midship pool deck with a saltwater pool and two hot tubs, open morning through mid-evening." },
      { name: "BlueIguana Tequila Bar", deck: "9", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "9", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "9", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "9", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "9", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Restaurant Cezanne", deck: "9, 10", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Carnival Deli", deck: "9", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Bonsai Sushi Express", deck: "9", description: "A casual grab-and-go sushi counter serving fresh sushi, sashimi, and rolls for a quick bite at an extra cost." },
      { name: "Chicken, Waffles & Waves", deck: "9", description: "A complimentary fried chicken and waffles stand for sea-day lunch, inside the main buffet." },
      { name: "Pizza Pirate", deck: "9", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Seafood Shack", deck: "9", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "The Sky Pool and Bar", deck: "9", description: "An aft Lido pool with a retractable roof, two hot tubs, and a poolside bar for sun or shelter any weather." },
      { name: "The Stars Pool", deck: "10", description: "An upper-deck saltwater pool with one hot tub, open through mid-evening for sea-day swimming." },
      { name: "Carnival's Twister Waterslide", deck: "10, 14", description: "A 214-foot spiraling tube waterslide from Deck 14 down to Deck 10, open on sea days." },
      { name: "The Point Steakhouse", deck: "10", description: "The ship's specialty steakhouse on Deck 10 for dinner, by reservation with a fee." },
      { name: "Spa Carnival", deck: "11", description: "A forward spa and fitness complex with a Life Fitness gym, classes, saunas, steam rooms, salon, and ten massage treatment rooms for European-style wellness." },
      { name: "Serenity", deck: "12, 14", description: "The adults-only 21+ sun-and-drinks deck with cabanas, two hot tubs, shaded loungers, and a full bar." },
      { name: "Camp Ocean / Night Owls", deck: "12", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Sports Activities", deck: "11, 12", description: "Outdoor sports across two decks — a 9-hole mini golf, dedicated pickleball and basketball courts, ping pong, shuffleboard, and a jogging track." },
      { name: "Self-Service Launderettes", deck: "1, 2, 6, 7, 8, 9", description: "Coin-operated guest laundry rooms with washers, dryers, and irons on six passenger decks." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-elation",
    slug: "carnival-elation",
    name: "Carnival Elation",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Fantasy Class",
    entered_service: 1998,
    year_refurbished: 2023,
    has_solo_cabins: false,
    space_ratio: 32.6,
    crew_to_passenger_ratio: "1 to 2.9",
    h1: "Carnival Elation",
    departure_ports_normalized: ["Jacksonville, FL"],
    departure_port_tags: ["Port Canaveral", "Florida"],
    ship_scale_category: "Mid-Size Ship",
    pace_category: "Active Pace",
    vibe_tags: ["Fun", "Family Friendly", "Casual", "Lively"],
    audience_tags: ["Families", "Couples", "Groups", "First Time Cruisers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "fun and value",
    anchor_targets: ["Family Activities", "Exciting Entertainment", "Casual Dining", "Thrilling Water Features"],
    card_excerpt: "Carnival Elation offers a lively, family-friendly cruise experience with plenty of fun activities, casual dining, and exciting entertainment options.",
    short_description: "Carnival Elation is a smaller, older Carnival ship sailing short trips from Jacksonville with a simple layout, casual feel, and a focus on value.",
    intro_summary: "Carnival Elation is an older Fantasy-class ship that works well for travelers who want a simple, short cruise from Jacksonville. It is not packed with the newest attractions, but it is easy to get around and offers a relaxed, familiar Carnival experience.",
    sources: "Carnival Cruise Line - Carnival Elation (official) - https://www.carnival.com/cruise-ships/carnival-elation | CruiseMapper - Carnival Elation (reference) - https://www.cruisemapper.com/ships/Carnival-Elation-582 | Cruise Critic - Carnival Elation Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=9",
    images: {
      hero: "https://vibe.filesafe.space/1775316359191552915/attachments/8b42a748-1142-4e55-841b-67a47f7ec6a8.png",
      hero_alt: "Carnival Elation cruise ship sailing on a clear blue ocean under sunny sky",
      pool: "https://vibe.filesafe.space/1775316359191552915/attachments/72875599-7eee-4e81-ac27-7675ea86ed8a.png",
      pool_alt: "Guests enjoying the swimming pool and water slides onboard Carnival Elation",
      atrium: "https://vibe.filesafe.space/1775316359191552915/attachments/c5e98256-744b-4feb-accd-00da8e7f3380.png",
      atrium_alt: "Bright and spacious atrium area on Carnival Elation with guests mingling",
      public_space: "https://vibe.filesafe.space/1775316359191552915/attachments/2a485a48-2442-4587-9467-feacc9b6588a.png",
      public_space_alt: "Lively public lounge area with comfortable seating and entertainment on Carnival Elation"
    },
    library: {
      tags: ["Fun", "Family Friendly", "Casual", "Lively"]
    },
    hero: {
      description: "Carnival Elation is an older Fantasy-class ship that works well for travelers who want a simple, short cruise from Jacksonville. It is not packed with the newest attractions, but it is easy to get around and offers a relaxed, familiar Carnival experience."
    },
    quick_view: {
      class: "Fantasy Class",
      entered_service: 1998,
      homeports: ["Jacksonville, FL"],
      length: "4 to 5 nights",
      atmosphere: "Relaxed, casual, and straightforward.",
      experience_style: "Traditional short-cruise Carnival experience on a smaller ship.",
      best_fit: "Good for travelers who want an easy, affordable cruise from Jacksonville without needing a large resort-style ship.",
      not_ideal_for: "Less ideal for travelers who want many specialty restaurants, big production venues, or the newest ship features.",
      planning_advice: "Choose this ship for itinerary and convenience rather than cutting-edge features. Book early for preferred cabin locations, especially on shorter sailings."
    },
    facts: {
      decks: 10,
      cabins: 1026,
      capacity: 2190
    },
    advisor_snapshot: {
      scale_pacing: "Small to mid-size by modern standards, with an easy pace and short walking distances.",
      overall_feel: "Carnival Elation feels familiar and manageable. It offers the core Carnival experience in a more compact setting, which can suit guests who prefer simpler navigation and a less overwhelming ship size.",
      strengths: "Easy layout, convenient Jacksonville departures, short walk between venues, casual atmosphere, and generally good value for short cruises.",
      watch_outs: "It is an older ship with fewer dining and entertainment choices than newer Carnival vessels. Some guests may find décor dated, and popular areas can feel busy on sea days."
    },
    experience_breakdown: {
      atmosphere: "The mood is friendly and informal. Expect a lively but not oversized ship environment, with a mix of families, couples, and multigenerational groups on shorter itineraries. It does not feel as expansive or feature-heavy as newer ships, but many travelers appreciate its simpler scale.",
      dining_style: "Main dining room, buffet, and a small number of casual extra-fee or quick-service options rather than a large specialty dining lineup.",
      crowd_flow: "Because the ship is smaller, getting around is usually simple. On embarkation day, sea days, and around buffet and pool areas, spaces can feel concentrated rather than spread out.",
      public_spaces: "Public spaces are compact and practical, with a central pool area, theater, lounges, casino, and standard Carnival social spaces. Seating can fill during busy periods."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are limited compared with newer ships, so they can book quickly. Travelers who want private outdoor space should reserve early.",
      interior: "Interior cabins are a practical choice for value-focused short sailings. They suit guests who plan to spend most of their time in public areas or ashore.",
      practical_tip: "If mobility or convenience matters, pick a cabin near the elevators and on a deck close to the venues you expect to use most, since older ship layouts can involve more stair transitions between some areas."
    },
    fit_guidance: {
      makes_sense_if: [
        "You want a short cruise from Jacksonville.",
        "You prefer a smaller ship that is easier to navigate.",
        "You value itinerary and price more than new ship features.",
        "You enjoy a casual, traditional Carnival atmosphere."
      ],
      not_ideal_if: [
        "You want a wide selection of specialty restaurants.",
        "You expect the newest cabins and modern ship design.",
        "You prefer large ships with many entertainment zones.",
        "You want a quiet luxury-style experience."
      ]
    },
    faq: [
      {
        question: "What is the passenger capacity of Carnival Elation?",
        answer: "Carnival Elation carries about 2190 guests at full capacity, which places it among the mid-size ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What are the main dining options on Carnival Elation, and how do they compare to newer Carnival ships?",
        answer: "Carnival Elation focuses on classic Carnival dining options, including main dining rooms, a buffet, and casual favorites like Guy’s Burger Joint and BlueIguana Cantina. Compared to newer Carnival ships, it has fewer specialty restaurants and less variety, but still covers the core options most travelers expect for a relaxed, budget-friendly cruise."
      },
      {
        question: "What entertainment can I expect on Carnival Elation?",
        answer: "Carnival Elation is centered on Guy’s Burger Joint, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      }
    ],
    seo: {
      title: "Carnival Elation Review for Mature Travelers | Dream Team Vacations",
      meta_description: "Learn about Carnival Elation, a smaller Carnival ship sailing from Jacksonville. See who it suits best, what to expect onboard, and practical planning notes.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-elation"
    },
    relations: {
      related_ship_slugs: ["carnival-celebration", "carnival-freedom", "carnival-magic"],
      compare_ship_slugs: ["carnival-conquest", "carnival-vista", "carnival-sunrise"],
      anchor_targets: ["Family Activities", "Exciting Entertainment", "Casual Dining", "Thrilling Water Features"],
      primary_pillar: "fun and value"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Grand Atrium Plaza and Bar", deck: "7", description: "The ship's central atrium lounge and main entrance, with seating and live music in the afternoons and evenings." },
      { name: "Guest Services", deck: "7", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "7", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Art Gallery", deck: "7", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "The Mikado", deck: "8, 9", description: "The ship's main two-deck theater where guests gather for evening productions, talks, dance classes, and crowd-favorite games." },
      { name: "The Fun Shops", deck: "8", description: "The ship's main onboard shopping area for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Circle \"C\"", deck: "8", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Duke's Piano Bar", deck: "8", description: "A classic piano bar for sing-alongs, requests, and a relaxed evening drink after dinner." },
      { name: "Mark Twain Library", deck: "8", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Imagination Restaurant", deck: "8", description: "A main dining room with flexible 'Your Time' open seating for dinner, plus sea-day brunch, port-day breakfast, and afternoon tea." },
      { name: "Inspiration Restaurant", deck: "8", description: "The aft main dining room, open nightly for traditional assigned-seating dinner at 6:00pm or 8:15pm." },
      { name: "Pixels Photo Gallery", deck: "9", description: "The onboard photo gallery where candid and posed cruise photos are displayed daily for browsing and purchase." },
      { name: "Arcade", deck: "9", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Club O2", deck: "9", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Bonsai Sushi Express", deck: "9", description: "A casual grab-and-go sushi counter serving fresh sushi, sashimi, and rolls for a quick bite at an extra cost." },
      { name: "Casablanca Casino", deck: "9", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Drama Bar", deck: "9", description: "A lively bar with live music nightly and audience participation games for a social evening out." },
      { name: "Elation's Way", deck: "9", description: "A casual indoor promenade with seating, tables, and chairs for a quiet spot any time, day or night." },
      { name: "Dreams Studio", deck: "9", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Romeo and Juliet Night Club", deck: "9", description: "An adults-only late-night dance club with DJs mixing current hits and retro favorites, opening at 11pm." },
      { name: "JavaBlue Cafe", deck: "9", description: "A casual café for specialty coffee, pastries, and custom cakes ordered for birthdays or special occasions onboard." },
      { name: "Cherry on Top", deck: "9", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Limelight Lounge", deck: "9", description: "A flexible lounge that hosts live music, comedy, karaoke, talks, and art auctions throughout the cruise." },
      { name: "Swarovski Boutique", deck: "9", description: "A dedicated shop selling Swarovski crystal items, open on sea days while the ship is not in port." },
      { name: "Alchemy Bar", deck: "9", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Serenity", deck: "9", description: "The adults-only 21+ aft deck retreat with loungers, umbrellas, two hot tubs, and a bar for a quieter day at sea." },
      { name: "Resort-Style Pool Area", deck: "10", description: "The main midship pool deck with a saltwater pool, two hot tubs, live music, and sea-day games." },
      { name: "BlueIguana Tequila Bar", deck: "10", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "10", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "10", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "10", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Tiffany's Bar and Grill", deck: "10", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Carnival Deli", deck: "10", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Pizza Pirate", deck: "10", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Carnival WaterWorks", deck: "11, 12", description: "An outdoor water park with a 300-foot tube slide, an 82-foot racing slide, a kiddie slide, and a spray park." },
      { name: "Cloud 9 Spa", deck: "12", description: "A full wellness complex forward on Deck 12 with a Life Fitness gym, scheduled classes, saunas, steam rooms, and ten treatment rooms for massages and salon services." },
      { name: "Camp Ocean / Night Owls", deck: "12", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Sports Activities", deck: "11, 14", description: "Complimentary outdoor sports including a 9-hole mini golf course and ping pong on the upper decks." },
      { name: "Self-Service Launderettes", deck: "6, 7", description: "Coin-operated guest laundry rooms with washers, dryers, and irons on two passenger decks." },
      { name: "Medical Center", deck: "3", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-freedom",
    slug: "carnival-freedom",
    name: "Carnival Freedom",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Conquest-class",
    entered_service: 2007,
    year_refurbished: 2023,
    has_solo_cabins: false,
    space_ratio: 35,
    crew_to_passenger_ratio: "1 to 2.3",
    h1: "Carnival Freedom",
    departure_ports_normalized: ["Orlando, FL"],
    departure_port_tags: ["Miami", "Florida", "Port Canaveral"],
    ship_scale_category: "Large Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Casual", "Family Friendly", "Energetic"],
    audience_tags: ["Families", "Couples", "Groups", "Multi Generational"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun and Affordable Cruises",
    anchor_targets: ["Overview", "Accommodations", "Dining", "Activities", "Entertainment", "Decks", "Itineraries"],
    card_excerpt: "Carnival Freedom is a budget-friendly, high-energy ship focused on classic Carnival fun, with features like the adults-only Serenity area, WaterWorks slides, and casual dining options like Guy’s Burger Joint. It’s a strong fit for families and social groups sailing from Miami or Orlando (Port Canaveral) who want a lively, no-frills cruise with plenty to do at a lower price point.",
    short_description: "Carnival Freedom is a mid-size Carnival ship that offers a lively, familiar mainstream cruise experience with a good mix of casual dining, entertainment, and easy warm-weather itineraries.",
    intro_summary: "Carnival Freedom is a Conquest-class ship that offers the familiar Carnival mix of casual dining, active pool decks, entertainment, and short Caribbean cruises from Florida. It suits travelers who want a straightforward, social cruise experience and do not need a quiet luxury setting.",
    sources: "Carnival Cruise Line - Carnival Freedom (official) - https://www.carnival.com/cruise-ships/carnival-freedom | CruiseMapper - Carnival Freedom (reference) - https://www.cruisemapper.com/ships/Carnival-Freedom-612 | Cruise Critic - Carnival Freedom Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=361",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Freedom cruise ship sailing on open water under blue sky",
      pool: "/placeholder.svg",
      pool_alt: "Guests enjoying the outdoor pool area on Carnival Freedom with lounge chairs and vibrant atmosphere",
      atrium: "/placeholder.svg",
      atrium_alt: "Spacious and bright atrium interior of Carnival Freedom with elegant decor and central staircase",
      public_space: "/placeholder.svg",
      public_space_alt: "Public lounge area on Carnival Freedom with comfortable seating and modern design"
    },
    library: {
      tags: ["Fun", "Casual", "Family Friendly", "Energetic"]
    },
    hero: {
      description: "Carnival Freedom is a Conquest-class ship that offers the familiar Carnival mix of casual dining, active pool decks, entertainment, and short Caribbean cruises from Florida. It suits travelers who want a straightforward, social cruise experience and do not need a quiet luxury setting."
    },
    quick_view: {
      class: "Conquest-class",
      entered_service: 2007,
      homeports: ["Port Canaveral, FL"],
      length: "4 to 5 nights",
      atmosphere: "Casual, social, and energetic.",
      experience_style: "Mainstream resort-style cruising with plenty of activity.",
      best_fit: "Good for travelers who want a classic Carnival experience on shorter Caribbean sailings.",
      not_ideal_for: "Less ideal for travelers seeking a quiet luxury atmosphere or a very small ship feel.",
      planning_advice: "Check the current itinerary and recent updates before booking, and choose cabin location carefully if you are sensitive to noise."
    },
    facts: {
      decks: 13,
      cabins: 1492,
      capacity: 2980
    },
    advisor_snapshot: {
      scale_pacing: "Large enough to offer variety, but still fairly easy to learn after a day or two onboard.",
      overall_feel: "Carnival Freedom feels active and approachable, with a colorful style, family-friendly energy, and a straightforward layout typical of Carnival's Conquest-class ships.",
      strengths: "Good value, familiar Carnival entertainment, several casual dining choices, and convenient shorter sailings from Florida.",
      watch_outs: "Public areas can feel busy on sea days, the atmosphere is more lively than tranquil, and some travelers may prefer newer ships with more modern features."
    },
    experience_breakdown: {
      atmosphere: "The ship has a relaxed but upbeat tone. Expect music, games, pool activity, and a social crowd rather than a quiet retreat. Even so, there are calmer moments in lounges and on outer decks if you look for them.",
      dining_style: "Dining is casual and mainstream, with included main dining room meals and buffet service plus popular extra-fee casual options. The focus is on variety and familiarity rather than fine dining.",
      crowd_flow: "Crowd flow is generally manageable, though pool decks, buffet areas, and popular entertainment venues can become crowded at peak times. Dining reservations and off-peak meal times can help.",
      public_spaces: "Public spaces include multiple bars and lounges, pool areas, theater entertainment spaces, a spa, fitness center, casino, and family activity zones. The ship offers a broad mix without feeling as oversized as the newest mega-ships."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a good choice for travelers who want private outdoor space and a quieter place to sit away from the busiest decks.",
      interior: "Interior cabins are usually the most budget-friendly option and can work well for short sailings, though they have no natural light.",
      practical_tip: "If you prefer less hallway noise and motion, look for a cabin on a lower or mid ship deck away from elevators, theaters, and late-night venues."
    },
    fit_guidance: {
      makes_sense_if: [
        "You want a shorter Florida cruise with a lively onboard atmosphere",
        "You enjoy mainstream entertainment and casual dining",
        "You prefer a ship with many familiar features but not the very largest scale",
        "You are comfortable with a social, family-friendly environment"
      ],
      not_ideal_if: [
        "You want a quiet, premium, or luxury-style ship experience",
        "You are highly sensitive to noise and busy public areas",
        "You are looking specifically for solo cabins",
        "You prefer ships with the newest large-scale attractions"
      ]
    },
    venues: [
      { name: "Victoriana Theater", deck: "3, 4, 5", description: "The ship's main three-deck theater where guests gather for evening productions, talks, dance classes, and crowd-favorite games like Bingo." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "The Millennium Lobby", deck: "3", description: "The central atrium and gathering spot, with seating, a dance floor, and live music by day and night over a drink." },
      { name: "Dreams Studio", deck: "3", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Art Gallery", deck: "3", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "The Chic Restaurant / Chic Dining Room Annex", deck: "3, 4", description: "Main dining room with flexible 'Your Time' open seating for dinner, served by a full wait staff across two decks." },
      { name: "The Posh Restaurant", deck: "3, 4", description: "The ship's aft main dining room, serving sea-day brunch, port-day breakfast, afternoon tea, and traditional assigned-seating dinners." },
      { name: "Monticello Library", deck: "4", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Circle \"C\"", deck: "4", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Pixels Photo Gallery", deck: "4", description: "The onboard photo gallery where candid and posed cruise photos are displayed daily for browsing and purchase." },
      { name: "Club O2", deck: "4", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Habana Bar", deck: "4", description: "A casual midship bar for a quiet drink or a stop between the theater and dining rooms." },
      { name: "The Fun Shops", deck: "5", description: "The ship's main onboard shopping area for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Heroes Tribute Bar & Lounge", deck: "5", description: "A welcoming bar and lounge that honors armed services personnel and their families, with drinks and light snacks." },
      { name: "Cherry on Top", deck: "5", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Babylon Casino", deck: "5", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Centuries Bar", deck: "5", description: "A lively bar with live music nightly and audience participation games for a social evening out." },
      { name: "Carnival Adventures Store", deck: "5", description: "A small shop for shore-day essentials like sunscreen, apparel, and last-minute souvenirs before heading into port." },
      { name: "JavaBlue Café", deck: "5", description: "A casual café for specialty coffee, pastries, and custom cakes ordered for birthdays or special occasions onboard." },
      { name: "RedFrog Pub", deck: "5", description: "A laid-back Caribbean-style pub with live music, karaoke, foosball, and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "The Warehouse Arcade", deck: "5", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "70's Nightclub", deck: "5", description: "An adults-only late-night dance club with DJs mixing current hits and retro favorites, opening at 11pm." },
      { name: "Alchemy Bar", deck: "5", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Scott's Piano Bar", deck: "5", description: "A classic piano bar for sing-alongs, requests, and a relaxed evening drink after dinner." },
      { name: "Swingtime Jazz Club", deck: "5", description: "A nightly live-music jazz club with a dance floor for a slower-paced, elegant evening out." },
      { name: "International Lounge", deck: "5", description: "A flexible lounge that hosts live music, karaoke, talks, and the Punchliner Comedy Club throughout the cruise." },
      { name: "Timeless Pool Area", deck: "9", description: "The main midship pool deck with a saltwater pool and two hot tubs, open from morning until midnight." },
      { name: "BlueIguana Tequila Bar", deck: "9", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "9", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "9", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "9", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "9", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Freedom Restaurant", deck: "9, 10", description: "The ship's main casual buffet, open for breakfast, lunch, dinner, and late-night snacks, with self-serve ice cream all day." },
      { name: "Carnival Deli", deck: "9", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Bonsai Sushi Express", deck: "9", description: "A casual grab-and-go sushi counter inside the buffet serving fresh sushi, sashimi, and rolls for a quick bite." },
      { name: "Chicken, Waffles & Waves", deck: "9", description: "A complimentary sea-day lunch spot for fried chicken and waffles, served inside the buffet area." },
      { name: "Pizza Pirate", deck: "9", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Seafood Shack", deck: "9", description: "A casual seafood stand with New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Endless Pool Area", deck: "9", description: "An aft saltwater pool with two hot tubs, a retractable roof for weather, and its own pool bar for drinks." },
      { name: "Stress Less Pool Area", deck: "10", description: "A smaller upper-deck saltwater pool with a hot tub, open daytime into the early evening." },
      { name: "Carnival's WaterWorks", deck: "10, 14", description: "An outdoor water park with two tall waterslides, a splash area, and a Mini Racer slide aimed at visiting grandkids." },
      { name: "Sun King Steakhouse", deck: "10", description: "The ship's specialty steakhouse, with a reservations fee for a more refined, sit-down evening dining experience." },
      { name: "Spa Carnival", deck: "11", description: "A full wellness complex forward on Deck 11 with a Life Fitness gym, scheduled classes, saunas, steam rooms, and ten treatment rooms for massages and salon services." },
      { name: "Camp Ocean / Night Owls", deck: "12", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Dr. Seuss Bookville", deck: "12", description: "A Dr. Seuss-themed reading and play space for families with younger children or visiting grandkids." },
      { name: "Serenity", deck: "12, 14", description: "The adults-only 21+ retreat with cabanas, shaded loungers, two hot tubs, and a bar for a quieter day at sea." },
      { name: "Solarium", deck: "12", description: "An outdoor aft deck area on Sun Deck 12; no additional details provided in the Carnival source document." },
      { name: "Sports Activities", deck: "11, 12", description: "Complimentary outdoor sports including mini golf, pickleball, shuffleboard, ping pong, basketball, and a padded jogging track." },
      { name: "Self-Service Launderettes", deck: "1, 2, 6, 7, 8, 9", description: "Coin-operated guest laundry rooms with washers, dryers, and irons spread across six passenger decks." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ],
    faq: [
      {
        question: "What is the passenger capacity of Carnival Freedom?",
        answer: "Carnival Freedom carries about 2980 guests at full capacity, which places it among the large ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What dining options are available on Carnival Freedom?",
        answer: "Carnival Freedom offers classic Carnival dining, including main dining rooms, a buffet, and popular casual spots like Guy’s Burger Joint and BlueIguana Cantina. Compared to newer Carnival ships, it has fewer specialty restaurants and less variety, but still covers the core dining options most travelers expect on a budget-friendly, activity-focused cruise."
      },
      {
        question: "What types of entertainment does Carnival Freedom offer?",
        answer: "Carnival Freedom is centered on WaterWorks slides, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      }
    ],
    seo: {
      title: "Carnival Freedom Ship Review | Layout, Atmosphere, Cabins & Tips",
      meta_description: "Learn about Carnival Freedom, a Carnival Cruise Line ship sailing from Port Canaveral. See its atmosphere, cabin style, strengths, and practical planning tips.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-freedom"
    },
    relations: {
      related_ship_slugs: ["carnival-conquest", "carnival-magic", "carnival-vista", "carnival-sunrise"],
      compare_ship_slugs: ["carnival-magic", "carnival-vista", "carnival-sunrise"],
      anchor_targets: ["Overview", "Accommodations", "Dining", "Activities", "Entertainment", "Decks", "Itineraries"],
      primary_pillar: "Fun and Affordable Cruises"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    }
  },
  {
    id: "carnival-horizon",
    slug: "carnival-horizon",
    name: "Carnival Horizon",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Vista Class",
    entered_service: 2018,
    year_refurbished: 2024,
    has_solo_cabins: false,
    space_ratio: 33.9,
    crew_to_passenger_ratio: "1:2.7",
    h1: "Carnival Horizon",
    departure_ports_normalized: ["Miami, FL", "Orlando, FL"],
    departure_port_tags: ["Miami", "Florida", "Barcelona", "Spain", "Valencia"],
    ship_scale_category: "Large Ship",
    pace_category: "Active Pace",
    vibe_tags: ["Fun", "Lively", "Family Friendly", "Casual"],
    audience_tags: ["Families", "Couples", "Groups", "First Timers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "fun and entertainment",
    anchor_targets: ["Family Activities", "Thrilling Dining", "Engaging Nightlife", "Exciting Shore Excursions"],
    card_excerpt: "Carnival Horizon is built around the Havana area, making it a strong fit for Families and Couples sailing from Miami, FL or Orlando, FL who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Horizon is a large, family-focused ship with many dining choices, outdoor attractions, and lively entertainment. It suits travelers who want plenty to do and do not mind a busy atmosphere.",
    intro_summary: "Carnival Horizon is one of Carnival's large modern ships, built for travelers who want variety and a casual vacation style. It offers plenty of food choices, entertainment, and outdoor activities, but it can feel busy and energetic, especially on sea days and school-holiday sailings.",
    sources: "Carnival Cruise Line - Carnival Horizon (official) - https://www.carnival.com/cruise-ships/carnival-horizon | CruiseMapper - Carnival Horizon (reference) - https://www.cruisemapper.com/ships/Carnival-Horizon-1335 | Cruise Critic - Carnival Horizon Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=1057",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Horizon cruise ship at sea under a clear blue sky",
      pool: "/placeholder.svg",
      pool_alt: "Outdoor pool deck with lounge chairs and water slides on Carnival Horizon",
      atrium: "/placeholder.svg",
      atrium_alt: "Spacious and modern atrium area with bright lighting and decorative art on Carnival Horizon",
      public_space: "/placeholder.svg",
      public_space_alt: "Vibrant public space featuring bars and seating areas filled with guests onboard Carnival Horizon"
    },
    library: {
      tags: ["Fun", "Lively", "Family Friendly", "Casual"]
    },
    hero: {
      description: "Carnival Horizon is one of Carnival's large modern ships, built for travelers who want variety and a casual vacation style. It offers plenty of food choices, entertainment, and outdoor activities, but it can feel busy and energetic, especially on sea days and school-holiday sailings."
    },
    quick_view: {
      class: "Vista Class",
      entered_service: 2018,
      homeports: ["Miami, FL", "Port Canaveral, FL"],
      length: "6 to 8 nights",
      atmosphere: "Lively, casual, and active",
      experience_style: "Big-ship resort experience with many choices",
      best_fit: "Travelers who enjoy variety, casual fun, and a busy ship",
      not_ideal_for: "Guests looking for a quiet, traditional, or very small-ship experience",
      planning_advice: "Reserve dining, shows, and popular activities early, and choose a cabin location carefully if you are sensitive to noise or long walks."
    },
    facts: {
      decks: 15,
      cabins: 1974,
      capacity: 3960
    },
    advisor_snapshot: {
      scale_pacing: "Large ship with a busy daily rhythm and many activity zones",
      overall_feel: "Carnival Horizon feels modern, casual, and energetic. Public areas are spread out, and the ship offers many places to eat, relax, or stay active.",
      strengths: "Wide range of dining, strong outdoor deck attractions, many cabin choices, and good variety for mixed-age groups",
      watch_outs: "Can feel crowded in peak times, noise levels can be high in some areas, and the ship may feel large for guests who prefer a slower pace"
    },
    experience_breakdown: {
      atmosphere: "The mood on Carnival Horizon is upbeat and social. Music, pool activity, and family programming are central to the ship's character. There are quieter spaces, but this is not a calm ship overall.",
      dining_style: "Casual and varied, with main dining rooms, buffet specialty restaurants, and quick options throughout the ship",
      crowd_flow: "Crowds build around the Lido deck, buffet, embarkation areas, and headline evening venues. Timing meals and activities outside peak hours helps.",
      public_spaces: "Public spaces include large pool decks, bars, theater venues, dining rooms, the Havana area, adults-only retreat space, and indoor lounges. There are many seating areas, but some become busy at peak times."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a strong choice on this ship, especially for guests who want a private outdoor space and a break from busy public decks. Havana and Family Harbor categories add special access or features in select areas.",
      interior: "Interior cabins are a practical lower-cost option and can work well for travelers who plan to spend most of their time in public areas or ashore. On a ship this active, they may feel dark or compact for guests who spend more time in their cabin.",
      practical_tip: "If walking long distances is difficult, compare deck plans before booking. Midship cabins near elevators can make the ship easier to manage."
    },
    fit_guidance: {
      makes_sense_if: ["You want many dining and entertainment choices", "You enjoy a casual and social cruise atmosphere", "You are traveling with family or a mixed-age group", "You like newer large ships with outdoor attractions"],
      not_ideal_if: ["You prefer a quiet ship with fewer announcements and less activity", "You want a very traditional cruise feel", "You dislike crowds or waiting at peak times", "You prefer a smaller ship that is easier to learn quickly"]
    },
    faq: [
      {
        question: "What stateroom options are available on Carnival Horizon, and who are they best suited for?",
        answer: "Carnival Horizon offers a full range of staterooms, including interior, oceanview, balcony, and suites, along with Havana staterooms that provide access to a more private, resort-style pool area. Standard cabins work well for budget-focused travelers and families, while the Havana area is a better fit for couples or adults looking for a quieter, more exclusive space compared to the rest of the ship."
      },
      {
        question: "What entertainment options are available onboard?",
        answer: "Carnival Horizon is centered on the Havana area, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      },
      {
        question: "Are there family-friendly activities on Carnival Horizon?",
        answer: "Yes, the ship offers extensive family-friendly programs including water parks, kids clubs, mini-golf, and interactive games."
      }
    ],
    seo: {
      title: "Carnival Horizon Review for Older Travelers | Dream Team Vacations",
      meta_description: "Learn about Carnival Horizon, a large Carnival Cruise Line ship with lively atmosphere, many dining choices, and practical planning notes for older travelers.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-horizon"
    },
    relations: {
      related_ship_slugs: ["carnival-vista", "carnival-magic", "carnival-freedom"],
      compare_ship_slugs: ["carnival-vista", "majestic-princess", "norwegian-joy"],
      anchor_targets: ["Family Activities", "Thrilling Dining", "Engaging Nightlife", "Exciting Shore Excursions"],
      primary_pillar: "fun and entertainment"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Family Harbor Lounge", deck: "2", description: "A private lounge for Family Harbor cabin guests, with movies, video games, a light breakfast buffet, and evening cookies and milk." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Horizon Lobby and Bar", deck: "3", description: "The central atrium lounge and main entrance, with seating, a dance floor, and live music by day and night over a drink." },
      { name: "Reflection Restaurant", deck: "3", description: "A midship main dining room open nightly for traditional assigned-seating dinner at 6:00pm or 8:15pm, with full wait staff service." },
      { name: "Chef's Table", deck: "3", description: "An exclusive 16-seat dinner experience with galley views, offering a one-of-a-kind tasting menu at an extra cost." },
      { name: "Meridian Restaurant", deck: "3, 4", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and flexible 'Your Time' dinner with a waiting-area bar." },
      { name: "Liquid Lounge and Night Club", deck: "4, 5", description: "The two-deck main theater by day and evening, then an 18+ DJ-driven nightclub from 11pm to 2am." },
      { name: "The Fun Shops", deck: "4, 5", description: "The ship's main onboard shops, spread across two decks for apparel, jewelry, beauty, liquor, and Carnival logo items." },
      { name: "Horizon Casino", deck: "4", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Club O2", deck: "4", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "SKYBOX Bar", deck: "4", description: "A sports bar with big-screen TVs showing live sports from around the world, plus drinks and snacks." },
      { name: "Art Gallery", deck: "4", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Limelight Lounge", deck: "4", description: "A flexible lounge that hosts live music, karaoke, late-night shows, talks, and the Punchliner Comedy Club." },
      { name: "Cherry on Top", deck: "5", description: "A candy and celebrations shop with made-to-order ice cream, bulk sweets, flowers, and stateroom decoration packages." },
      { name: "The Library", deck: "5", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Piano Bar 88", deck: "5", description: "A classic piano bar for sing-alongs, requests, and a relaxed evening drink after dinner." },
      { name: "Empanada and Pie", deck: "5", description: "A casual food stand for empanadas and pies, served at lunch and dinner for an extra cost." },
      { name: "Fahrenheit 555 Steakhouse", deck: "5", description: "The ship's specialty steakhouse with indoor and outdoor seating, by reservation with a fee." },
      { name: "Bonsai Teppanyaki", deck: "5", description: "A teppanyaki restaurant with chefs preparing dishes tableside at 8-seat stations, with a reservations fee." },
      { name: "Bonsai Sushi", deck: "5", description: "A full-service sushi restaurant with Asian-inspired dishes and indoor-outdoor seating, open late into the evening." },
      { name: "Alchemy Bar", deck: "5", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Pixels (Digital) Photo Gallery and Dreams Studio", deck: "5", description: "A digital photo gallery plus a professional studio offering custom photo shoots and printed story books onboard." },
      { name: "Guy's Pig & Anchor Bar-B-Que Smokehouse|Brewhouse", deck: "5", description: "A smokehouse and brewery from Guy Fieri with complimentary lunch buffet, paid sit-down dinner, craft beer, and live music." },
      { name: "JavaBlue Café", deck: "5", description: "A casual café for specialty coffee, pastries, milkshakes, and custom special-occasion cakes." },
      { name: "Ocean Plaza", deck: "5", description: "A casual central plaza with live music, a dance floor, and seating for easy evenings of snacking and socializing." },
      { name: "The Lanai", deck: "5", description: "A covered outdoor promenade running both sides of the ship with tables and chairs, open around the clock." },
      { name: "Havana Lounge", deck: "5", description: "A Cuban-themed lounge with three areas serving Cuban coffee, sodas, and cocktails, with live Latin music several nights." },
      { name: "Havana Pool Area", deck: "5", description: "An exclusive pool area for Havana cabin guests only, with an infinity pool, two hot tubs, and Caribbean-themed seating." },
      { name: "Circle \"C\"", deck: "6", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "The Warehouse Arcade", deck: "6", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "IMAX Theatre", deck: "7", description: "A three-deck-high IMAX screen showing first-run Hollywood films and classic adventures, with a full concession stand." },
      { name: "Beach Pool", deck: "10", description: "The main Lido saltwater pool, open from morning through late evening for daytime swimming and sunning." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "10", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "BlueIguana Tequila Bar", deck: "10", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "10", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "10", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "10", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Lido Marketplace", deck: "10, 11", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Carnival Deli", deck: "10", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Pizzeria del Capitano", deck: "10", description: "A complimentary pizzeria serving hand-tossed Italian-style thin-crust pies all day and late into the night." },
      { name: "Seafood Shack", deck: "10", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Tides Pool and Bar", deck: "10", description: "An aft Lido pool with two hot tubs, loungers, umbrellas, and a poolside bar open into the late evening." },
      { name: "Camp Ocean / Night Owls", deck: "11", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Dr. Seuss Bookville", deck: "11", description: "A Dr. Seuss-themed reading and play space for families with younger children or visiting grandkids." },
      { name: "Cucina del Capitano", deck: "11", description: "A sit-down Italian restaurant with a complimentary build-your-own pasta bar at lunch and a paid dinner menu." },
      { name: "Ji Ji Asian Kitchen", deck: "11", description: "A sit-down Asian specialty restaurant for soups, noodles, rice dishes, and seafood, with a reservations fee." },
      { name: "Cloud 9 Spa", deck: "12, 14", description: "A full wellness complex spanning Decks 12 and 14 with a Life Fitness gym, cycling studio, scheduled classes, saunas, thermal suites, and salon services." },
      { name: "Dr. Seuss WaterWorks", deck: "12, 15", description: "A Dr. Seuss-themed water park with two enclosed waterslides, a spray park, and Mini Racer slides for kids." },
      { name: "SportSquare", deck: "12, 14", description: "A top-deck sports complex with a SkyRide bike course, ropes courses, mini golf, basketball, and open-air games." },
      { name: "Serenity", deck: "15", description: "The adults-only 21+ retreat with two hot tubs, massage huts, a salad station, and plenty of shaded loungers and pergolas." },
      { name: "Self-Service Launderettes", deck: "1, 2, 6, 7, 8, 9", description: "Coin-operated guest laundry rooms with washers, dryers, and irons spread across six passenger decks." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-magic",
    slug: "carnival-magic",
    name: "Carnival Magic",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Dream Class",
    entered_service: 2011,
    year_refurbished: 2021,
    has_solo_cabins: false,
    space_ratio: 35.7,
    crew_to_passenger_ratio: "1 to 2.5",
    h1: "Carnival Magic",
    departure_ports_normalized: ["Miami, FL", "Orlando, FL", "Norfolk, VA"],
    departure_port_tags: ["Miami", "Florida", "Venice", "Italy"],
    ship_scale_category: "Large Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Lively", "Family Friendly", "Casual"],
    audience_tags: ["Families", "Couples", "Friends", "First Timers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun & Entertainment",
    anchor_targets: ["Diningoptions", "Activities", "Familyfriendly", "Entertainment", "Accommodations"],
    card_excerpt: "Carnival Magic is built around the Serenity adults-only retreat, making it a strong fit for Families and Couples sailing from Miami, FL and other homeports who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Magic is a large Carnival ship with a lively but manageable feel, a wide mix of dining and entertainment, and a gold range of Caribbean and Bahamas itineraries.",
    intro_summary: "Carnival Magic is a large, mainstream cruise ship that offers a broad mix of dining, entertainment, and outdoor activities. For older travelers, it can work well if you want options and do not mind a more active atmosphere, especially on sea days.",
    sources: "Carnival Cruise Line - Carnival Magic (official) - https://www.carnival.com/cruise-ships/carnival-magic | CruiseMapper - Carnival Magic (reference) - https://www.cruisemapper.com/ships/Carnival-Magic-593 | Cruise Critic - Carnival Magic Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=512",
    images: {
      hero: "https://vibe.filesafe.space/1775316359191552915/attachments/8dfa9c4c-2355-4576-a916-276622189ec8.jpg",
      hero_alt: "Carnival Magic cruise ship sailing on the ocean",
      pool: "https://vibe.filesafe.space/1775316359191552915/attachments/e97c0397-1fab-46d5-b39e-f7abe78d7689.jpg",
      pool_alt: "Guests enjoying the pool area and waterslides on Carnival Magic",
      atrium: "https://vibe.filesafe.space/1775316359191552915/attachments/ab57c96e-c419-4f6e-b8ca-4a2110f9fff1.jpg",
      atrium_alt: "Bright and lively atrium on Carnival Magic with shops and seating",
      public_space: "/placeholder.svg",
      public_space_alt: "Spacious public lounge area onboard Carnival Magic with comfortable seating"
    },
    library: {
      tags: ["Fun", "Lively", "Family Friendly", "Casual"]
    },
    hero: {
      description: "Carnival Magic is a large, mainstream cruise ship that offers a broad mix of dining, entertainment, and outdoor activities. For older travelers, it can work well if you want options and do not mind a more active atmosphere, especially on sea days."
    },
    quick_view: {
      class: "Dream Class",
      entered_service: 2011,
      homeports: ["Miami, FL", "Port Canaveral, FL", "Norfolk, VA"],
      length: "6 to 8 nights",
      atmosphere: "Casual, upbeat, and family-friendly, with busy pool decks and active evening entertainment.",
      experience_style: "Mainstream resort-style cruising with many dining, activity, and entertainment choices.",
      best_fit: "Good for travelers who want a large ship with plenty to do and familiar Carnival style.",
      not_ideal_for: "Less suited to travelers seeking a quiet luxury atmosphere or a very small ship experience.",
      planning_advice: "Pick cabin location carefully, as this is a large active ship and some areas can be noisy or require more walking."
    },
    facts: {
      decks: 14,
      cabins: 1845,
      capacity: 3690
    },
    advisor_snapshot: {
      scale_pacing: "Large ship with a busy pace in central areas, but quieter spots can still be found.",
      overall_feel: "Carnival Magic feels energetic and social without being as overwhelming as the newest mega-ships. It offers a broad mix of food, entertainment, and outdoor spaces in a familiar Carnival layout.",
      strengths: "Good variety of casual dining, strong deck attractions, solid entertainment mix, and enough size to offer choices without requiring the newest giant-ship format.",
      watch_outs: "Pool and buffet areas can get crowded on sea days, noise can carry near entertainment zones, and some guests may find the atmosphere more active than relaxing."
    },
    experience_breakdown: {
      atmosphere: "The ship has a cheerful, informal atmosphere typical of Carnival. Daytime centers on pools, outdoor activities, and casual meals, while evenings bring comedy, music, bars, and production shows. It tends to suit guests who enjoy a social setting more than those looking for a hushed environment.",
      dining_style: "Dining is varied and casual, with main dining rooms, buffet service, and several popular extra-fee specialty choices. The approach is flexible and easy to understand, with plenty of familiar options.",
      crowd_flow: "Traffic is heaviest around the Lido deck, buffet, atrium, and main entertainment venues. Guests who prefer less congestion may want to dine early or late and use outdoor deck areas during peak indoor times.",
      public_spaces: "Public areas include the atrium, theater, comedy club, casino, multiple bars and lounges, pool decks, sports and activity zones, spa, and adults-only Serenity area. There is a gold spread of indoor and outdoor places to sit, though prime spots fill early on sea days."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a strong choice on this ship, especially for longer Caribbean sailings. They provide a private place to rest away from the ship's busier public areas.",
      interior: "Interior cabins can be a practical value on Carnival Magic, especially for guests who plan to spend most of the day around the ship or ashore. Light sleepers should review deck plans before booking to avoid noise near public venues.",
      practical_tip: "Check the deck plan before booking and try to choose a cabin between other cabin decks for a quieter stay and easier rest."
    },
    fit_guidance: {
      makes_sense_if: ["You want a large ship with many activity and dining choices", "You enjoy a casual, social onboard atmosphere", "You are comfortable with a busier ship on sea days", "You want Caribbean or Bahamas itineraries from major East Coast ports"],
      not_ideal_if: ["You prefer a small ship or a very quiet onboard environment", "You want an upscale luxury experience", "You dislike crowds around pools and buffets", "You want dedicated solo cabins"]
    },
    faq: [
      {
        question: "What size is Carnival Magic?",
        answer: "Carnival Magic carries about 3690 guests at full capacity, which places it among the large ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What type of activities are available onboard?",
        answer: "Carnival Magic is centered on the Serenity adults-only retreat, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      },
      {
        question: "Where does Carnival Magic typically depart from?",
        answer: "Carnival Magic sails from Miami, FL and other homeports, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      }
    ],
    seo: {
      title: "Carnival Magic Review for Older Travelers | Dream Team Vacations",
      meta_description: "Learn about Carnival Magic, a large Carnival Cruise Line ship with a casual atmosphere, varied dining, and active public spaces. See who it fits best.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-magic"
    },
    relations: {
      related_ship_slugs: ["carnival-freedom", "carnival-horizon", "carnival-vista"],
      compare_ship_slugs: ["carnival-celebration", "carnival-miracle", "carnival-sunrise"],
      anchor_targets: ["Diningoptions", "Activities", "Familyfriendly", "Entertainment", "Accommodations"],
      primary_pillar: "Fun & Entertainment"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Showtime Theater", deck: "3, 4, 5", description: "The ship's three-deck main theater for Playlist Productions, talks, dance classes, and audience games." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Magic Lobby and Bar", deck: "3", description: "The central atrium lounge and main entrance, with seating, a dance floor, and live music by day and night." },
      { name: "Northern Lights Dining Room", deck: "3, 4", description: "A two-deck main dining room with flexible 'Your Time' dinner seating from 5:30pm to 9:00pm." },
      { name: "Southern Lights Dining Room", deck: "3, 4", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and traditional assigned-seating dinner." },
      { name: "Pixels Photo Gallery and Dreams Studio", deck: "4", description: "The onboard photo gallery plus a professional studio for custom photo shoots and printed story books." },
      { name: "Books & Games", deck: "4", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Escape Bar", deck: "4", description: "A bar on Deck 4 for a drink between dinner and the show, with rotating hours throughout the cruise." },
      { name: "Gallery on the Way", deck: "4", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Hat Trick Casino and Bar (Non-Smoking)", deck: "4", description: "A separate non-smoking casino with slots, tables, and bar service, on a quieter deck than the main casino." },
      { name: "Circle \"C\"", deck: "4", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Club O2", deck: "4", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "The Warehouse Arcade", deck: "4", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "The Fun Shops", deck: "5", description: "The ship's main onboard shops for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Cherry on Top", deck: "5", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Empanada and Pie", deck: "5", description: "A casual food stand for empanadas and pies, served at lunch and dinner for an extra cost." },
      { name: "Hat Trick Casino and Bar", deck: "5", description: "The main casino with slot machines, table games, and bar service, open on sea days and after departure." },
      { name: "The Lanai", deck: "5", description: "An outdoor promenade running both sides of the ship with tables, covered seating, and four scenic overhanging hot tubs." },
      { name: "Guy's Pig & Anchor Bar-B-Que Smokehouse", deck: "5", description: "A complimentary open-air BBQ smokehouse from Guy Fieri with smoked meats, down-home sides, and signature sauces on sea days." },
      { name: "Ocean Plaza", deck: "5", description: "A casual central lounge with live music nightly and a dance floor for easy evenings and socializing." },
      { name: "Plaza Café", deck: "5", description: "A casual café for specialty coffee, pastries, and custom special-occasion cakes." },
      { name: "Alchemy Bar", deck: "5", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "RedFrog Pub", deck: "5", description: "Carnival's island-style pub with live music, karaoke, foosball, shuffleboard, darts, and beer pong — indoor and outdoor." },
      { name: "Vibe Dance Club", deck: "5", description: "An adults-only 18+ dance club with DJs spinning current hits and retro favorites, opening at 11pm." },
      { name: "Play it Again Piano Bar", deck: "5", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Prime Steakhouse", deck: "5", description: "The ship's specialty steakhouse open 5:30pm to 9:30pm, by reservation with a fee." },
      { name: "Spotlight Lounge", deck: "5", description: "A flexible lounge that hosts live music, karaoke, talks, comedy, and art auctions throughout the cruise." },
      { name: "Beach Pool", deck: "10", description: "The main Lido saltwater pool, open from early morning through midnight for swimming and sunning." },
      { name: "BlueIguana Tequila Bar", deck: "10", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "10", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "10", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "10", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "10", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Lido Marketplace", deck: "10, 11", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with a Mongolian Wok at lunch and 24-hour drinks." },
      { name: "Carnival Deli", deck: "10", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Seafood Shack", deck: "10", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Pizzeria del Capitano", deck: "10", description: "A complimentary pizzeria serving hand-tossed Italian-style thin-crust pies all day and late into the night." },
      { name: "Tides Pool and Bar", deck: "10", description: "An aft Lido pool with two hot tubs and a poolside bar, open from early morning through midnight." },
      { name: "Camp Ocean / Night Owls", deck: "11", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Cucina del Capitano / Captain's Pasta Bar", deck: "11", description: "A sit-down Italian restaurant with a complimentary build-your-own pasta bar at lunch and a paid dinner menu." },
      { name: "Cloud 9 Spa", deck: "12, 14", description: "A full wellness complex forward on Decks 12 and 14 with a Life Fitness gym, classes, saunas, thermal suites, hydrotherapy pool, and salon services." },
      { name: "Carnival WaterWorks", deck: "12, 15", description: "An outdoor water park with the unique Drainpipe bowl slide, the 312-foot Twister slide, a spray park, and Mini Racer slides." },
      { name: "SportSquare Bar", deck: "12", description: "A top-deck sports bar with a big-screen TV next to SportSquare, for a drink between the ropes course and the pool." },
      { name: "SportSquare", deck: "12", description: "A top-deck sports complex with ropes courses, mini golf, basketball, pickleball, outdoor fitness, and open-air games." },
      { name: "Serenity", deck: "15", description: "The adults-only 21+ sun-and-drinks deck with cabanas, two hot tubs, shaded loungers, and a full bar." },
      { name: "Self-Service Launderettes and Ironing Rooms", deck: "1, 2, 6, 7, 8, 9, 10", description: "Three self-service laundry rooms plus four ironing-only rooms spread across seven passenger decks for coin-operated use." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-mardi-gras",
    slug: "carnival-mardi-gras",
    name: "Carnival Mardi Gras",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Excel-class",
    entered_service: 2021,
    year_refurbished: null,
    has_solo_cabins: false,
    space_ratio: 34.5,
    crew_to_passenger_ratio: "1:3",
    h1: "Carnival Mardi Gras",
    departure_ports_normalized: ["Orlando, FL"],
    departure_port_tags: ["Miami", "Florida"],
    ship_scale_category: "Mega Ship",
    pace_category: "Busy Pace",
    vibe_tags: ["Fun", "Energetic", "Family Friendly", "Vibrant", "Innovative"],
    audience_tags: ["Families", "Couples", "Groups", "First Timers", "Party Goers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Entertainment & Innovation",
    anchor_targets: ["Family Activities", "Live Entertainment", "Unique Dining Experiences", "Water Parks"],
    card_excerpt: "Carnival Mardi Gras is built around classic Carnival casual dining and deck attractions, making it a strong fit for Families and Couples sailing from Orlando, FL who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Mardi Gras is a large, modern resort-style ship with many dining choices, neighborhood-style zones, and a lively mainstream atmosphere sailing mostly weeklong Caribbean cruises from Port Canaveral.",
    intro_summary: "Carnival Mardi Gras is one of Carnival's largest and most feature-rich ships. It works well for travelers who want a modern Caribbean cruise with plenty of food, entertainment, and places to explore, but it may feel too busy for guests who prefer a quieter, smaller-ship experience.",
    sources: "Carnival Cruise Line - Mardi Gras (official) - https://www.carnival.com/cruise-ships/mardi-gras | CruiseMapper - Carnival Mardi Gras (reference) - https://www.cruisemapper.com/ships/Carnival-Mardi-Gras-1970 | Cruise Critic - Carnival Mardi Gras Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=1097",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Mardi Gras cruise ship at sea under a clear sky",
      pool: "/placeholder.svg",
      pool_alt: "Guests enjoying the large outdoor pool and water slides on Carnival Mardi Gras",
      atrium: "/placeholder.svg",
      atrium_alt: "Bright and spacious atrium with modern design on Carnival Mardi Gras",
      public_space: "/placeholder.svg",
      public_space_alt: "Lively public space with dining and entertainment options aboard Carnival Mardi Gras"
    },
    library: {
      tags: ["Fun", "Energetic", "Family Friendly", "Vibrant", "Innovative"]
    },
    hero: {
      description: "Carnival Mardi Gras is one of Carnival's largest and most feature-rich ships. It works well for travelers who want a modern Caribbean cruise with plenty of food, entertainment, and places to explore, but it may feel too busy for guests who prefer a quieter, smaller-ship experience."
    },
    quick_view: {
      class: "Excel-class",
      entered_service: 2021,
      homeports: ["Port Canaveral, FL"],
      length: "7 nights",
      atmosphere: "Busy, upbeat, and modern, with distinct areas that feel calmer or more active depending on where you spend time.",
      experience_style: "A big-ship Caribbean vacation focused on variety, entertainment, and casual fun.",
      best_fit: "Travelers who want many dining options, strong entertainment, and enough space to choose lively or quieter areas.",
      not_ideal_for: "Those who prefer a small ship, a very quiet onboard atmosphere, or a more traditional luxury feel.",
      planning_advice: "Study the ship layout before you sail, book key dining and entertainment early, and choose cabin location carefully because the ship is large and active."
    },
    facts: {
      decks: 19,
      cabins: 2641,
      capacity: 5282
    },
    advisor_snapshot: {
      scale_pacing: "Very large ship with a full daily schedule, but the zone layout helps spread people around.",
      overall_feel: "Contemporary and energetic, with a theme-park-like sense of choice rather than a quiet retreat feel.",
      strengths: "Excellent range of dining, strong family and multigenerational appeal, varied entertainment, several pool and lounge areas, and distinct themed zones that make a very large ship easier to use.",
      watch_outs: "Can feel crowded in popular venues and around peak dining or embarkation times, some activities and specialty dining carry extra charges, and walking distances are long."
    },
    experience_breakdown: {
      atmosphere: "Mardi Gras feels like a floating resort. It is lively in public areas, especially around the central zones, but there are still spots to sit quietly with a drink or look out at the sea. The ship attracts a broad mix of guests, including families, couples, and friend groups, so the mood is more casual and social than formal.",
      dining_style: "Dining is flexible and varied, with main dining rooms, buffet, casual included venues, and many specialty choices. The overall approach is casual and convenient rather than formal or fine-dining focused.",
      crowd_flow: "The themed zones help distribute guests better than on some large ships, but the busiest restaurants, elevators, pool decks, and headline attractions can still be congested at peak times.",
      public_spaces: "Public spaces are modern and spread across several zones, including bars, lounges, entertainment venues, open-deck areas, and a wide mix of dining spaces. Seating can be easier to find outside peak hours than in the most central indoor venues."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a practical choice on this ship because they provide a quieter place to step away from the activity. Location matters, so it is wise to check what is above and below the cabin.",
      interior: "Interior cabins can offer good value, especially for guests who plan to spend most of their time out in the ship's public areas. On a busy, active ship, light sleepers may want to choose cabin placement with care.",
      practical_tip: "Because Mardi Gras is large and popular, reserve dining, shows, and any must-do extras as early as the cruise line allows, and allow extra time to move between areas."
    },
    fit_guidance: {
      makes_sense_if: ["You want a weeklong Caribbean cruise with many dining and entertainment choices", "You like a casual mainstream cruise atmosphere", "You are traveling with family or a mixed-age group", "You enjoy large ships with lots to do", "You want the option to find either lively or quieter spaces onboard"],
      not_ideal_if: ["You prefer small ships or easy point-to-point walking", "You want a mostly quiet or traditional onboard environment", "You dislike waiting for popular attractions or restaurants", "You want an all-inclusive luxury experience", "You are sensitive to crowd levels in busy public areas"]
    },
    faq: [
      {
        question: "What is the size of Carnival Mardi Gras?",
        answer: "Carnival Mardi Gras carries about 5282 guests at full capacity, which places it among the mega ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What kind of entertainment is available on Carnival Mardi Gras?",
        answer: "Carnival Mardi Gras is centered on classic Carnival casual dining and deck attractions, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      },
      {
        question: "Where does Carnival Mardi Gras typically depart from?",
        answer: "Carnival Mardi Gras sails from Orlando, FL, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      }
    ],
    seo: {
      title: "Carnival Mardi Gras Review for Older Adults | Dream Team Vacations",
      meta_description: "Learn about Carnival Mardi Gras, a large Carnival ship sailing from Port Canaveral with weeklong Caribbean cruises, many dining choices, and a lively resort-style atmosphere.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-mardi-gras"
    },
    relations: {
      related_ship_slugs: ["carnival-celebration", "carnival-vista", "carnival-horizon"],
      compare_ship_slugs: ["carnival-vista", "carnival-horizon", "carnival-celebration"],
      anchor_targets: ["Family Activities", "Live Entertainment", "Unique Dining Experiences", "Water Parks"],
      primary_pillar: "Entertainment & Innovation"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Family Harbor Lounge", deck: "4", description: "A private lounge for Family Harbor cabin guests, with movies, video games, a light breakfast buffet, and evening cookies and milk." },
      { name: "Camp Ocean / Night Owls", deck: "4", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Dr. Seuss Bookville", deck: "4", description: "A Dr. Seuss-themed reading and play space for families with younger children or visiting grandkids." },
      { name: "Cloud 9 Spa", deck: "5, 6", description: "A full wellness complex forward on Decks 5 and 6 with a Life Fitness gym, cycling studio, scheduled classes, saunas, steam rooms, thermal suites, and salon services." },
      { name: "Chef's Table", deck: "5", description: "An exclusive 16-seat dinner experience with galley views, offering a one-of-a-kind tasting menu at an extra cost." },
      { name: "Mardi Gras Theater", deck: "6, 7", description: "The ship's main two-deck theater for evening productions, talks, audience games, and dance classes." },
      { name: "The Punchliner Comedy Club", deck: "6", description: "The ship's comedy club, with family-friendly early shows and adult-oriented late shows featuring stand-up comedians." },
      { name: "Piano Bar 88", deck: "6", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Grand Central Atrium", deck: "6, 7, 8", description: "The ship's signature three-deck atrium with floor-to-ceiling windows, live music, LED video walls, aerial performances, and evening games." },
      { name: "Center Stage Bar", deck: "6", description: "An atrium bar serving specialty cocktails themed to that evening's onstage entertainment." },
      { name: "JavaBlue Café", deck: "6", description: "A casual café for specialty coffee, pastries, milkshakes, and custom special-occasion cakes." },
      { name: "Cherry on Top", deck: "6", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "The Fun Shops", deck: "6, 7, 8", description: "The ship's main onboard shops, spread across three decks for apparel, jewelry, beauty, liquor, and Carnival logo items." },
      { name: "The Brass Magnolia", deck: "6", description: "A New Orleans Garden District–inspired jazz and blues lounge with live music and classic cocktails." },
      { name: "Flamingo Restaurant", deck: "6", description: "A main dining room open nightly for traditional assigned-seating dinner at 5:30pm or 7:45pm, with full wait staff service." },
      { name: "Fortune Teller Bar", deck: "6", description: "A Victorian-styled New Orleans bar serving theatrical cocktails that change color, bubble, and shimmer." },
      { name: "Emeril's Bistro 1396", deck: "6", description: "A sit-down New Orleans-style bistro from chef Emeril Lagasse, with an a la carte menu at nominal extra cost." },
      { name: "Carnival Kitchen", deck: "6", description: "A hands-on cooking class and tasting venue led by ship chefs, by advance reservation at extra cost." },
      { name: "Conference Center", deck: "6", description: "Multi-function conference rooms reserved for private group functions on the ship." },
      { name: "Mardi Gras Palm Restaurant", deck: "6, 7", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and dinner with both assigned and flexible seating." },
      { name: "Mardi Gras Casino and Bar", deck: "7", description: "The main casino with slot machines and table games, smoking and non-smoking sections, open on sea days and after departure." },
      { name: "Grand View Bar", deck: "7", description: "A second-level atrium bar with specialty cocktails themed to that night's onstage show." },
      { name: "Limelight Lounge", deck: "7", description: "A flexible lounge that hosts live music, karaoke, late-night shows, and talks throughout the cruise." },
      { name: "Alchemy Bar", deck: "7", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Fahrenheit 555 Steakhouse", deck: "7", description: "The ship's specialty steakhouse for surf and turf, lamb, and classic steakhouse dinners, with a reservations fee." },
      { name: "Art Gallery", deck: "7", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Chibang!", deck: "8", description: "A sit-down restaurant blending Chinese and Mexican cuisines, free for your first dinner with a small fee for repeat visits." },
      { name: "Havana Lounge", deck: "8", description: "A Cuban-inspired living-room-style bar serving Cuban coffee, sodas, and cocktails, with live Latin music several nights." },
      { name: "Havana Pool Area", deck: "8", description: "An exclusive pool area for Havana cabin and Excel Presidential Suite guests only, with a quiet relaxation pool and bar." },
      { name: "Dreams Studio", deck: "8", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Bonsai Teppanyaki", deck: "8", description: "A teppanyaki restaurant with chefs preparing dishes tableside at 10-seat stations, with a reservations fee." },
      { name: "Bonsai Sushi", deck: "8", description: "A full-service sushi restaurant with Asian-inspired dishes, open late into the evening." },
      { name: "Pixels (Digital) Photo Gallery", deck: "8", description: "A digital photo gallery where cruise photos can be browsed on iPads or the HUB App and ordered as digital or print copies." },
      { name: "Cucina del Capitano", deck: "8", description: "A sit-down Italian restaurant with indoor and outdoor seating, free for your first dinner with a small fee for repeat visits." },
      { name: "Bar Della Rosa", deck: "8", description: "An Italian-café-style bar with Bellinis, Aperol Spritz, Italian wines, and proper espresso, indoors and out." },
      { name: "Pizzeria del Capitano", deck: "8", description: "A complimentary pizzeria serving hand-tossed Italian-style thin-crust pies all day and late into the night." },
      { name: "Piazza Panini", deck: "8", description: "A complimentary Italian panini and deli stand with hot sandwiches, hot dogs, and Italian desserts after 8pm." },
      { name: "Rudi's Seagrill", deck: "8", description: "A specialty seafood restaurant by chef Rudi Sodamin with artistic plating, by reservation with a fee." },
      { name: "Carnival Adventures", deck: "8", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Guest Services", deck: "8", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures Store", deck: "8", description: "A small shop for shore-day essentials like sunscreen, apparel, and last-minute souvenirs before heading into port." },
      { name: "Guy's Pig & Anchor Bar-B-Que Smokehouse | Brewhouse", deck: "8", description: "A complimentary smokehouse-and-brewery from Guy Fieri with sit-down barbecue dining, craft beer brewed on board, and live music nightly." },
      { name: "Heroes Tribute Bar & Lounge", deck: "8", description: "A welcoming bar and lounge that honors armed services personnel and their families, with drinks and light snacks." },
      { name: "The Watering Hole", deck: "8", description: "A laid-back outdoor bar in Summer Landing with sea views, a wide beer selection, and summer-inspired drinks." },
      { name: "Summer Landings Pool Area", deck: "8", description: "An aft pool deck with the Infinity Tides Pool, two hot tubs, and a spacious outdoor Patio for loungers and umbrellas." },
      { name: "BlueIguana Cantina", deck: "16", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Seafood Shack", deck: "16", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Street Eats", deck: "16", description: "A complimentary three-station street-food stop for bao buns, kebabs, loaded fries, and other rotating lunch favorites." },
      { name: "Beach Pool", deck: "16", description: "The main Lido Deck saltwater pool with a hot tub, open for early-morning swimming." },
      { name: "RedFrog Tiki Bar", deck: "16, 17", description: "A two-level South Pacific-inspired poolside tiki bar serving rum cocktails in pineapples and souvenir tiki glasses." },
      { name: "Carnival Seaside Theater | Dive-In Movies", deck: "16", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Lido Marketplace", deck: "16", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Big Chicken", deck: "16", description: "A complimentary fried chicken stand from Shaquille O'Neal, with sandwiches, sides, and all-day breakfast options." },
      { name: "Masala Tiger", deck: "16", description: "A casual Indian food stand with tandoori meats, hot naan, and vegetarian dishes, at an extra cost." },
      { name: "Empanada and Pie", deck: "16", description: "A casual food stand for empanadas and pies, served at lunch and dinner for an extra cost." },
      { name: "Tides Pool and Bar", deck: "16", description: "An aft Lido pool with two hot tubs, loungers, umbrellas, and a poolside bar open into the late evening." },
      { name: "Guy's Burger Joint", deck: "17", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "The Warehouse Arcade", deck: "17", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Circle \"C\"", deck: "17", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Club O2", deck: "17", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Serenity", deck: "18", description: "The adults-only 21+ sun-and-drinks deck with a saltwater pool, two hot tubs, a salad station, and a full bar." },
      { name: "SportSquare", deck: "18, 19", description: "An outdoor sports complex with a ropes course, mini golf, basketball, pickleball, a jogging track, and open-air games." },
      { name: "Carnival WaterWorks", deck: "18", description: "An outdoor water park with three waterslides including a 312-foot tube slide, a spray park, and kid-scaled Mini Racer slides." },
      { name: "Loft 19", deck: "19", description: "An exclusive resort-style retreat on the top deck, with a private infinity hot tub, 108 loungers, and 12 cabanas by reservation." },
      { name: "BOLT: Ultimate Sea Coaster", deck: "19", description: "The first-ever sea-going roller coaster — 800 feet of track at speeds up to 40 mph, at an extra cost." },
      { name: "Self-Service Ironing Rooms", deck: "4, 5, 9, 14, 15", description: "Self-service ironing rooms on five decks; note that this ship has no guest washers or dryers — valet laundry only." },
      { name: "Medical Center", deck: "3", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-miracle",
    slug: "carnival-miracle",
    name: "Carnival Miracle",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Spirit Class",
    entered_service: 2004,
    year_refurbished: 2020,
    has_solo_cabins: false,
    space_ratio: 41,
    crew_to_passenger_ratio: "1 to 2.4",
    h1: "Carnival Miracle",
    departure_ports_normalized: ["Long Beach, CA"],
    departure_port_tags: ["Long Beach", "California"],
    ship_scale_category: "Mid-Size Ship",
    pace_category: "Balanced Pace",
    vibe_tags: ["Fun", "Family Friendly", "Casual", "Lively"],
    audience_tags: ["Families", "Couples", "Groups", "First Time Cruisers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "fun and relaxation",
    anchor_targets: ["Family Activities", "Dining Options", "Entertainment", "Spa and Wellness"],
    card_excerpt: "Carnival Miracle offers a balanced pace and lively vibe ideal for families and first-time cruisers from Long Beach.",
    short_description: "Carnival Miracle is a mid-size Carnival ship with a calmer feel than the line's newest mega-ships. It offers a manageable layout, good ocean views, and a mix of lively entertainment and quieter spots.",
    intro_summary: "Carnival Miracle is one of Carnival Cruise Line's Spirit-class ships and is often a good fit for travelers who want a full cruise experience without the scale of a very large ship. It offers a balanced mix of entertainment, dining, and comfortable public areas, with a calmer overall feel than many newer mega-ships.",
    sources: "Carnival Cruise Line - Carnival Miracle (official) - https://www.carnival.com/cruise-ships/carnival-miracle | CruiseMapper - Carnival Miracle (reference) - https://www.cruisemapper.com/ships/Carnival-Miracle-570 | Cruise Critic - Carnival Miracle Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=255",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Miracle cruise ship at sea under clear skies",
      pool: "/placeholder.svg",
      pool_alt: "Passengers enjoying the pool on Carnival Miracle with deck chairs and umbrellas",
      atrium: "/placeholder.svg",
      atrium_alt: "Bright and spacious atrium area on Carnival Miracle with glass elevators",
      public_space: "/placeholder.svg",
      public_space_alt: "Lively public lounge area onboard Carnival Miracle with seating and lighting"
    },
    library: {
      tags: ["Fun", "Family Friendly", "Casual", "Lively"]
    },
    hero: {
      description: "Carnival Miracle is one of Carnival Cruise Line's Spirit-class ships and is often a good fit for travelers who want a full cruise experience without the scale of a very large ship. It offers a balanced mix of entertainment, dining, and comfortable public areas, with a calmer overall feel than many newer mega-ships."
    },
    quick_view: {
      class: "Spirit Class",
      entered_service: 2004,
      homeports: ["Long Beach, CA"],
      length: "6 to 8 nights",
      atmosphere: "Relaxed and easy to navigate, with some classic Carnival energy.",
      experience_style: "Traditional cruise experience on a mid-size ship with varied entertainment and comfortable public spaces.",
      best_fit: "Good for adults who want a familiar, full-service cruise without the scale of the biggest ships.",
      not_ideal_for: "Less ideal for travelers who mainly want the newest attractions, large water parks, or many specialty dining venues.",
      planning_advice: "Choose an itinerary and cabin location carefully. Midship cabins can help with motion, and this ship works especially well for travelers who prefer a moderate ship size."
    },
    facts: {
      decks: 12,
      cabins: 1062,
      capacity: 2124
    },
    advisor_snapshot: {
      scale_pacing: "Mid-size ship with a steadier pace than Carnival's largest ships.",
      overall_feel: "Carnival Miracle feels more comfortable and less overwhelming than newer resort-style ships. It still has music, shows, and social spaces, but it is generally easier to get around and easier to settle into.",
      strengths: "Manageable size, good promenade and lounge space, solid entertainment mix, many balcony cabins, and a layout that suits guests who do not want a giant ship.",
      watch_outs: "It is an older ship, so some travelers may notice that cabins and venues are less modern than on newer Carnival ships. The onboard attraction list is also more limited than on the newest vessels."
    },
    experience_breakdown: {
      atmosphere: "The mood is social but usually not hectic. Guests can find active pool-deck energy, comedy, bars, and production shows, but there are also quieter corners for sitting, reading, or enjoying sea views. The ship's age and smaller scale often appeal to travelers who prefer a more classic cruise rhythm.",
      dining_style: "Dining is centered on Carnival's main dining room, buffet, and a smaller set of casual and specialty options than found on newer ships. The style is familiar and straightforward rather than heavily focused on many extra-fee venues.",
      crowd_flow: "Crowd flow is generally easier than on larger ships, though pool areas and popular evening venues can still get busy. The ship's size helps reduce long walks and makes orientation simpler for many guests.",
      public_spaces: "Public areas include the main pool deck, lounges, theater, comedy club spaces, bars, casino, spa, and adults-only Serenity area. There are enough indoor and outdoor spots to spread out, especially on sea days."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a strong choice on this ship for guests who value fresh air and private outdoor space. They are especially useful on scenic itineraries and for travelers who like quiet time away from public decks.",
      interior: "Interior cabins can be a practical value choice for guests who plan to spend most of their time in public spaces or ashore. Travelers sensitive to small spaces may prefer an oceanview or balcony cabin.",
      practical_tip: "If you prefer a quieter stay, look for a cabin away from elevators, the theater, and late-night venues. Midship cabins can also be a good choice for guests concerned about motion."
    },
    fit_guidance: {
      makes_sense_if: ["You want a mid-size ship that is easier to navigate", "You prefer a more traditional cruise experience over big new attractions", "You enjoy a mix of entertainment and quieter places to sit", "You want Carnival's style without the scale of its largest ships"],
      not_ideal_if: ["You want the newest ship design and latest onboard features", "You are looking for many specialty restaurants", "You want a large water park or extensive thrill attractions", "You prefer a very quiet premium or luxury cruise atmosphere"]
    },
    faq: [
      {
        question: "What is the size of Carnival Miracle?",
        answer: "Carnival Miracle carries about 2124 guests at full capacity, which places it among the mid-size ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What ports does Carnival Miracle sail from?",
        answer: "Carnival Miracle sails from Long Beach, CA, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      },
      {
        question: "What type of activities can I expect onboard?",
        answer: "Carnival Miracle is centered on the Serenity adults-only retreat, along with the broader mix of activities and entertainment typical of its class. It is a better fit for Families and Couples who want an active onboard experience rather than a quieter, more traditional cruise."
      }
    ],
    seo: {
      title: "Carnival Miracle Review for Older Adults | Dream Team Vacations",
      meta_description: "Learn about Carnival Miracle's size, atmosphere, cabins, dining, and who it suits best. A simple, honest guide for older adult travelers.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-miracle"
    },
    relations: {
      related_ship_slugs: ["carnival-magic", "carnival-elation", "carnival-freedom"],
      compare_ship_slugs: ["carnival-magic", "carnival-freedom", "carnival-elation"],
      anchor_targets: ["Family Activities", "Dining Options", "Entertainment", "Spa and Wellness"],
      primary_pillar: "fun and relaxation"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Mad Hatter's Ball", deck: "1", description: "A multi-purpose lounge hosting comedy, karaoke, live music, big-screen movies, talks, and art auctions throughout the cruise." },
      { name: "Dr. Frankenstein's Lab Dance Club", deck: "1, 2", description: "An adults-only 18+ dance club with DJs spinning current hits and retro favorites from 11pm into the night." },
      { name: "Phantom Lounge", deck: "2, 3, 4", description: "The ship's three-deck main theater for Playlist Productions, talks, dance classes, and audience games." },
      { name: "The Joker", deck: "2", description: "A card room and library for Bridge tournaments, card games, books, and quiet afternoons between activities." },
      { name: "Coffee Bar", deck: "2", description: "A casual café for specialty coffee, pastries, and custom special-occasion cakes." },
      { name: "RedFrog Pub", deck: "2", description: "A Caribbean-style pub with live music, jukebox, karaoke, beer pong, and Carnival's ThirstyFrog Red on draught." },
      { name: "SKYBOX Sports Bar", deck: "2", description: "A sports bar with big-screen TVs for live games and real-time scores, plus drinks and snacks." },
      { name: "Mr. Lucky's Casino", deck: "2", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Metropolis Lobby", deck: "2", description: "The central atrium lounge and main entrance, with seating, a dance floor, and live music by day and night." },
      { name: "Guest Services", deck: "2", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "2", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Art Gallery", deck: "various", description: "Rotating art gallery displays across the ship, with scheduled auctions where original works are offered at a discount." },
      { name: "Alchemy Bar", deck: "2", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Bacchus Dining Room / Ariadne Room", deck: "2, 3", description: "The main Bacchus dining room plus the Ariadne Room annex, offering brunch, breakfast, tea, and both assigned and flexible dinner seating." },
      { name: "Gatsby's Garden", deck: "3", description: "A glass-enclosed promenade with tables and chairs, open around the clock for coffee, reading, or watching the sea." },
      { name: "The Warehouse", deck: "3", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Sam's Piano Bar", deck: "3", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Cherry on Top", deck: "3", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "The Fun Shops", deck: "3", description: "The ship's main onboard shops for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Pixels Photo Gallery and Dreams Studio", deck: "3", description: "The onboard photo gallery plus a professional studio for custom photo shoots and printed story books." },
      { name: "Gotham Lounge", deck: "3", description: "A relaxed lounge with live music in the afternoon and evenings, ideal for drinks and conversation." },
      { name: "City Conference Room", deck: "3", description: "A conference room reserved for private group functions on the ship." },
      { name: "The Cove", deck: "4", description: "A multi-purpose indoor lounge used by Camp Ocean and open to guests around the clock." },
      { name: "Circle \"C\"", deck: "4", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Camp Ocean / Night Owls", deck: "5", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Cloud 9 Spa", deck: "9, 10", description: "A forward spa complex with a Life Fitness gym, classes, saunas, steam rooms, salon, and ten massage treatment rooms for European-style wellness." },
      { name: "Sirens Pool and Ulysses Pool Area", deck: "9", description: "Two main pools (Sirens and Ulysses) with two hot tubs and a retractable roof over the Ulysses pool for any weather." },
      { name: "BlueIguana Tequila Bar", deck: "9", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "9", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "9", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "9", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Horatio's Restaurant", deck: "9", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Bonsai Sushi Express", deck: "9", description: "A casual grab-and-go sushi counter serving fresh sushi, sashimi, and rolls for a quick bite at an extra cost." },
      { name: "Carnival Deli", deck: "9", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Pizza Pirate", deck: "9", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "9", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Serenity", deck: "9", description: "The adults-only 21+ sun-and-drinks deck with a saltwater pool, one hot tub, shaded loungers, and a full bar." },
      { name: "Club O2", deck: "10", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Nick & Nora's Steakhouse", deck: "10, 11", description: "The ship's specialty steakhouse named for the classic Thin Man detective duo, by reservation with a fee." },
      { name: "Carnival WaterWorks", deck: "10, 11", description: "An outdoor water park with the Green Thunder thrill slide, a spiraling Twister slide, a spray park, and kid-sized racing slides." },
      { name: "Sports Activities", deck: "9, 11", description: "Outdoor sports including a 9-hole mini golf course, basketball that converts to pickleball, a jogging track, and ping pong." },
      { name: "Self-Service Launderettes", deck: "1, 4, 5, 6, 7", description: "Coin-operated guest laundry rooms with washers, dryers, and irons spread across five passenger decks." },
      { name: "Medical Center", deck: "A", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-paradise",
    slug: "carnival-paradise",
    name: "Carnival Paradise",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Fantasy-class",
    entered_service: 1998,
    year_refurbished: 2023,
    has_solo_cabins: false,
    space_ratio: 26.8,
    crew_to_passenger_ratio: "1 to 2.9",
    h1: "Carnival Paradise Review",
    departure_ports_normalized: ["Tampa, FL"],
    departure_port_tags: ["Miami", "Florida", "Galveston", "Texas"],
    ship_scale_category: "Mid-Size Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Family Friendly", "Casual", "Party"],
    audience_tags: ["Families", "Couples", "Groups", "Budget Travelers"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun Ship Experience",
    anchor_targets: ["Family Cruises", "Affordable Cruises", "Carnival Cruises", "Caribbean Cruises"],
    card_excerpt: "Carnival Paradise is built around the Serenity adults-only retreat, making it a strong fit for Families and Couples sailing from Tampa, FL who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Paradise is a smaller, older Carnival ship that sails short trips from Tampa to the Western Caribbean. It offers a simple, lively cruise experience that is easy to get around.",
    intro_summary: "Carnival Paradise is best understood as a practical, older Carnival ship that works well for short and affordable Caribbean cruises from Tampa. It is easy to get around, familiar in style, and a sensible option for travelers who value convenience over the newest ship features.",
    sources: "Carnival Cruise Line - Carnival Paradise (official) - https://www.carnival.com/cruise-ships/carnival-paradise | Carnival Cruise Line Deck Plans - Carnival Paradise (official) - https://www.carnival.com/cruise-ships/carnival-paradise/deck-plans | CruiseMapper - Carnival Paradise (reference) - https://www.cruisemapper.com/ships/Carnival-Paradise-591 | Cruise Critic - Carnival Paradise Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=33",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Paradise cruise ship sailing on clear blue waters",
      pool: "/placeholder.svg",
      pool_alt: "Swimming pool area with lounge chairs on Carnival Paradise",
      atrium: "/placeholder.svg",
      atrium_alt: "Lively atrium with vibrant decor on Carnival Paradise",
      public_space: "/placeholder.svg",
      public_space_alt: "Public lounge area with seating and entertainment on Carnival Paradise"
    },
    library: {
      tags: ["Fun", "Family Friendly", "Casual", "Party"]
    },
    hero: {
      description: "Carnival Paradise is best understood as a practical, older Carnival ship that works well for short and affordable Caribbean cruises from Tampa. It is easy to get around, familiar in style, and a sensible option for travelers who value convenience over the newest ship features."
    },
    quick_view: {
      class: "Fantasy-class",
      entered_service: 1998,
      homeports: ["Tampa, FL"],
      length: "4 to 6 nights",
      atmosphere: "Casual, friendly, and active",
      experience_style: "Classic mainstream cruise on a smaller ship",
      best_fit: "Travelers who want an affordable short cruise from Tampa on an easy-to-navigate ship",
      not_ideal_for: "Travelers who want many specialty dining options, large resort-style attractions, or a quieter premium feel",
      planning_advice: "Choose this ship for itinerary and value rather than the newest features. A balcony can add comfort on short Caribbean sailings."
    },
    facts: {
      decks: 10,
      cabins: 1026,
      capacity: 2697
    },
    advisor_snapshot: {
      scale_pacing: "Small to mid-size by modern standards, with a straightforward layout and shorter walking distances",
      overall_feel: "Carnival Paradise feels informal and energetic, with bright decor, familiar Carnival entertainment, and a more traditional ship design than newer vessels.",
      strengths: "Easy embarkation from Tampa, manageable ship size, grid value on short Caribbean trips, and a simple layout that suits guests who do not want a very large ship.",
      watch_outs: "The ship is older and has fewer dining and activity choices than newer Carnival ships. Some guests may find the decor dated and the atmosphere busier around the pool and buffet at peak times."
    },
    experience_breakdown: {
      atmosphere: "The mood is relaxed during the day and more social in the evening. Expect a mainstream cruise crowd, family groups on shorter sailings, and a generally upbeat onboard style rather than a quiet retreat.",
      dining_style: "Main dining room, buffet, and a small set of casual extra-fee or branded options typical of Carnival's older ships. Dining is straightforward rather than highly varied.",
      crowd_flow: "Because the ship is smaller, popular areas can feel busy at lunch, around the main pool, and before evening shows. At the same time, the ship is simple to learn and usually easier to cross than a mega-ship.",
      public_spaces: "Public areas include the main pool deck, lounges, casino, theater, dining rooms, buffet, spa, and adults-only Serenity area. Spaces are traditional and practical rather than expansive."
    },
    cabin_considerations: {
      balcony: "Balcony cabins add useful private outdoor space and can make a short Caribbean trip feel more comfortable, especially for guests who enjoy fresh air and a quieter place to sit.",
      interior: "Interior cabins are usually the value choice on this ship. They work well for guests who plan to spend most of their time in public areas or ashore.",
      practical_tip: "Check the deck plan before booking, since cabins near elevators, pool areas, or entertainment spaces may have more noise. On short sailings, arrive organized and board early to make the most of your first day."
    },
    fit_guidance: {
      makes_sense_if: ["You want a short Caribbean cruise from Tampa", "You prefer a smaller ship that is easier to navigate", "You care more about value and itinerary than the newest attractions", "You enjoy a casual, social onboard atmosphere"],
      not_ideal_if: ["You want a brand-new ship with many specialty restaurants", "You prefer a very quiet or upscale onboard environment", "You want large water parks, neighborhoods, or resort-style features", "You are sensitive to dated decor or a more crowded feel in main venues"]
    },
    faq: [
      {
        question: "What is the size of Carnival Paradise?",
        answer: "Carnival Paradise carries about 2697 guests at full capacity, which places it among the mid-size ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What activities are available on Carnival Paradise, and what type of traveler is it best suited for?",
        answer: "Carnival Paradise focuses on classic cruise activities like poolside games, live shows, comedy, and casual nightlife rather than large-scale attractions. It’s a better fit for budget-conscious travelers and first-time cruisers who want a simple, easygoing experience, rather than those looking for water parks, thrill rides, or high-energy features found on newer ships."
      },
      {
        question: "Where does Carnival Paradise typically depart from?",
        answer: "Carnival Paradise sails from Tampa, FL, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      }
    ],
    seo: {
      title: "Carnival Paradise Ship Review for Older Adults | Dream Team Vacations",
      meta_description: "Learn about Carnival Paradise, a smaller Carnival ship sailing short cruises from Tampa. See its atmosphere, strengths, limits, and who it suits best.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-paradise"
    },
    relations: {
      related_ship_slugs: ["carnival-freedom", "carnival-magic", "carnival-elation"],
      compare_ship_slugs: ["carnival-freedom", "carnival-miracle", "norwegian-encore"],
      anchor_targets: ["Family Cruises", "Affordable Cruises", "Carnival Cruises", "Caribbean Cruises"],
      primary_pillar: "Fun Ship Experience"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Grand Atrium Plaza and Bar", deck: "7", description: "The ship's central atrium lounge and main entrance, with seating and live music in the afternoons and evenings." },
      { name: "Carnival Adventures Store", deck: "7", description: "A small shop for shore-day essentials like sunscreen, apparel, and last-minute souvenirs before heading into port." },
      { name: "Guest Services", deck: "7", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "7", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Art Gallery", deck: "7", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Normandie", deck: "8, 9", description: "The ship's main two-deck theater where guests gather for evening productions, talks, dance classes, and crowd-favorite games." },
      { name: "The Fun Shops", deck: "8", description: "The ship's main onboard shopping area for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Circle \"C\"", deck: "8", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "America Piano Bar", deck: "8", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Blue Riband Library", deck: "8", description: "A quieter onboard space for reading, browsing books, or pulling out a game away from the busier public areas." },
      { name: "Elation Restaurant", deck: "8", description: "A main dining room with flexible 'Your Time' open seating for dinner, plus sea-day brunch, port-day breakfast, and afternoon tea." },
      { name: "Destiny Restaurant", deck: "8", description: "The aft main dining room, open nightly for traditional assigned-seating dinner at 6:00pm or 8:15pm." },
      { name: "Pixels (Digital) Photo Gallery and Dreams Studio", deck: "9", description: "The onboard photo gallery plus a professional studio for custom photo shoots and printed story books." },
      { name: "Video Arcade", deck: "9", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Club O2 Teen Club", deck: "9", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Bonsai Sushi Express", deck: "9", description: "A casual grab-and-go sushi counter serving fresh sushi, sashimi, and rolls for a quick bite at an extra cost." },
      { name: "Majestic Casino", deck: "9", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Carnival Boulevard", deck: "9", description: "A casual indoor promenade with seating, tables, and chairs for a quiet spot any time, day or night." },
      { name: "Special Occasions Shop", deck: "9", description: "A small shop for candy, cookies, roses, and stateroom decorations for birthdays and anniversaries." },
      { name: "United States Bar", deck: "9", description: "A lively bar with live music nightly and audience participation games for a social evening out." },
      { name: "The Leonardo Lounge", deck: "9", description: "A lounge with nightly live music and a dance floor, open for drinks and easy evenings." },
      { name: "JavaBlue Café", deck: "9", description: "A casual café for specialty coffee, pastries, and custom cakes ordered for birthdays or special occasions onboard." },
      { name: "Rex Dance Club", deck: "9", description: "An adults-only 18+ dance club with DJs spinning current hits and retro favorites, opening at 11pm." },
      { name: "Rotterdam Bar", deck: "9", description: "An aft bar for a quiet drink away from the busier mid-ship lounges, with rotating hours throughout the cruise." },
      { name: "The Punchliner Comedy Club", deck: "9", description: "A flexible venue for comedy, karaoke, big-screen movies, talks, and art auctions throughout the cruise." },
      { name: "Serenity", deck: "9", description: "The adults-only 21+ aft deck with loungers, umbrellas, one large hot tub, and a bar for a day in the sun." },
      { name: "Resort-Style Pool Area", deck: "10", description: "The main midship pool deck with a saltwater pool, two hot tubs, live music, and sea-day games." },
      { name: "BlueIguana Tequila Bar", deck: "10", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "10", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "10", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "10", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries through the afternoon." },
      { name: "Paris Restaurant", deck: "10", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Carnival Deli", deck: "10", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Pizza Pirate", deck: "10", description: "A complimentary pizza stand serving hand-tossed, thin-crust pies all day and late into the night." },
      { name: "Carnival WaterWorks", deck: "11, 12", description: "An outdoor water park with a 300-foot tube slide, an 82-foot racing slide, a kiddie slide, and a spray park." },
      { name: "Cloud 9 Spa", deck: "12", description: "A forward spa and fitness complex with a Life Fitness gym, classes, sauna, steam room, massage rooms, salon, and Acupuncture at extra cost." },
      { name: "Camp Ocean / Night Owls", deck: "12", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Sports Activities", deck: "11, 14", description: "Complimentary outdoor sports including a 9-hole mini golf course, ping pong, and shuffleboard." },
      { name: "Relaxation Area", deck: "15", description: "An open top-deck relaxation area for sun, sea views, and a quiet afternoon." },
      { name: "Self-Service Launderettes", deck: "6, 7", description: "Coin-operated guest laundry rooms with washers, dryers, and irons on two passenger decks." },
      { name: "Medical Center", deck: "3", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-sunrise",
    slug: "carnival-sunrise",
    name: "Carnival Sunrise",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Sunshine-class",
    entered_service: 1999,
    year_refurbished: 2019,
    has_solo_cabins: false,
    space_ratio: 35,
    crew_to_passenger_ratio: "1 to 2.2",
    h1: "Carnival Sunrise",
    departure_ports_normalized: ["Miami, FL", "Norfolk, VA"],
    departure_port_tags: ["Port Canaveral", "Florida"],
    ship_scale_category: "Mid-Large Ship",
    pace_category: "Active Pace",
    vibe_tags: ["Fun", "Casual", "Family Friendly", "Party"],
    audience_tags: ["Families", "Couples", "Groups", "Millennials"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun and Affordable Vacation",
    anchor_targets: ["Family Activities", "Casual Dining", "Live Entertainment", "Waterparks"],
    card_excerpt: "Carnival Sunrise is built around classic Carnival casual dining and deck attractions, making it a strong fit for Families and Couples sailing from Miami, FL or Norfolk, VA who want a more active, feature-driven cruise rather than a quieter, more traditional cruise.",
    short_description: "Carnival Sunrise is a midsize Carnival ship with a casual, active feel and a strong mix of short Caribbean sailings and easy-to-use onboard amenities.",
    intro_summary: "Carnival Sunrise is a remodeled Carnival ship best known for short, casual cruises with a lively onboard atmosphere. It works well for travelers who want a manageable ship size, familiar dining and entertainment, and warm-weather itineraries from convenient East Coast ports.",
    sources: "Carnival Cruise Line - Carnival Sunrise (official) - https://www.carnival.com/cruise-ships/carnival-sunrise | CruiseMapper - Carnival Sunrise (reference) - https://www.cruisemapper.com/ships/Carnival-Sunrise-596 | Cruise Critic - Carnival Sunrise Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=760",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Sunrise cruise ship sailing at sunset",
      pool: "/placeholder.svg",
      pool_alt: "Swimming pool area with lounge chairs on Carnival Sunrise",
      atrium: "/placeholder.svg",
      atrium_alt: "Bright and lively atrium of Carnival Sunrise with guests enjoying",
      public_space: "/placeholder.svg",
      public_space_alt: "Public lounge and entertainment area on board Carnival Sunrise"
    },
    library: {
      tags: ["Fun", "Casual", "Family Friendly", "Party"]
    },
    hero: {
      description: "Carnival Sunrise is a remodeled Carnival ship best known for short, casual cruises with a lively onboard atmosphere. It works well for travelers who want a manageable ship size, familiar dining and entertainment, and warm-weather itineraries from convenient East Coast ports."
    },
    quick_view: {
      class: "Sunshine-class",
      entered_service: 1999,
      homeports: ["Miami, FL", "Norfolk, VA"],
      length: "4 to 6 nights",
      atmosphere: "Lively, casual, and social.",
      experience_style: "Mainstream resort-style cruising with plenty going on.",
      best_fit: "Good for travelers who want a friendly, busy ship on shorter warm-weather cruises.",
      not_ideal_for: "Less ideal for travelers seeking a quiet luxury feel or very spacious public areas.",
      planning_advice: "Check the exact itinerary and homeport before booking, since Sunrise often rotates between short cruises and seasonal deployment from different East Coast ports."
    },
    facts: {
      decks: 13,
      cabins: 1492,
      capacity: 2984
    },
    advisor_snapshot: {
      scale_pacing: "Midsize ship with a generally busy pace, especially on sea days and short itineraries.",
      overall_feel: "Carnival Sunrise feels informal and energetic. It offers many of the line's familiar venues in a ship size that is easier to navigate than the newest mega-ships, though some areas can still feel crowded.",
      strengths: "Manageable size, strong value on short Caribbean cruises, varied casual dining, and a gold range of entertainment and pool-deck activity.",
      watch_outs: "Crowding can build around the buffet, pool deck, and popular events. The ship is older at its core despite its 2019 remake, so it may not feel as open or polished as newer ships."
    },
    experience_breakdown: {
      atmosphere: "The mood is upbeat and informal, with music, deck activities, comedy, bars, and family-friendly energy throughout the day and evening. Guests looking for quiet can usually find calmer spots, but this is not a subdued ship overall.",
      dining_style: "Dining is centered on flexible mainstream choices, including main dining rooms, buffet service, poolside options, and several extra-charge specialty venues. Food choices are broad rather than refined.",
      crowd_flow: "Traffic is usually heaviest near the lido buffet, central atrium areas, and pool deck. Dining and entertainment peaks can feel compressed on shorter sailings when many guests try to do the same things at once.",
      public_spaces: "Public spaces include pools, bars, lounges, comedy and theater venues, casino space, spa facilities, and casual outdoor gathering areas. The layout gives a lot to do, but some venues are not especially large for the passenger count."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a practical choice for guests who want private outdoor space on Caribbean routes, especially on busier sailings where deck chairs can fill early.",
      interior: "Interior cabins can be a solid value on shorter trips if you plan to spend most of their time out around the ship or ashore. They are usually the most budget-friendly option.",
      practical_tip: "For a calmer experience, choose dining and show times outside peak hours and consider a balcony cabin if private quiet time matters to you."
    },
    fit_guidance: {
      makes_sense_if: [
        "You want a casual, familiar Carnival experience on a midsize ship.",
        "You prefer short Caribbean sailings from an East Coast homeport.",
        "You enjoy lively decks, comedy, music, and a social atmosphere.",
        "You want many dining and entertainment choices without booking one of the line's largest ships."
      ],
      not_ideal_if: [
        "You want a quiet ship with lots of uncrowded lounge space.",
        "You prefer a premium or luxury onboard atmosphere.",
        "You are sensitive to noise and activity on short party-leaning itineraries.",
        "You want the newest cabin designs and the most modern ship layout."
      ]
    },
    faq: [
      {
        question: "What is the size of Carnival Sunrise?",
        answer: "Carnival Sunrise carries about 2984 guests at full capacity, which places it among the mid-large ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What type of dining options available on Carnival Sunrise?",
        answer: "Carnival Sunrise offers a mix of dining options shaped by its class and cruise line style, including classic Carnival casual dining and deck attractions as part of the broader onboard experience. Compared to newer or larger ships, the lineup may feel either more focused or more limited, so it works best for travelers who want a comfortable dining mix rather than the widest possible restaurant selection."
      },
      {
        question: "Which ports does Carnival Sunrise typically depart from?",
        answer: "Carnival Sunrise sails from Miami, FL or Norfolk, VA, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      }
    ],
    seo: {
      title: "Carnival Sunrise Ship Guide | Layout, Atmosphere, Cabins and Tips",
      meta_description: "Learn about Carnival Sunrise, a midsize Carnival ship offering short Caribbean cruises, casual dining, lively entertainment, and practical cabin options.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-sunrise"
    },
    relations: {
      related_ship_slugs: ["carnival-conquest", "carnival-freedom", "carnival-magic", "carnival-vista"],
      compare_ship_slugs: ["carnival-celebration", "carnival-horizon", "carnival-miracle"],
      anchor_targets: ["Family Activities", "Casual Dining", "Live Entertainment", "Waterparks"],
      primary_pillar: "Fun and Affordable Vacation"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Art Gallery", deck: "2", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Sunrise Lobby and Sunrise Bar", deck: "3", description: "The central atrium lounge and main entrance, with seating and live music by day and night over a drink." },
      { name: "Dreams Studio", deck: "3", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Radiance Restaurant", deck: "3, 4", description: "A two-deck main dining room open nightly for traditional assigned-seating dinner at 6:00pm or 8:15pm." },
      { name: "Chef's Table", deck: "3", description: "An exclusive dinner experience with galley views and a one-of-a-kind tasting menu at an extra cost." },
      { name: "Sunshine Restaurant", deck: "3, 4", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and flexible 'Your Time' dinner." },
      { name: "Liquid Lounge", deck: "4, 5", description: "The ship's two-deck main theater for Playlist Productions, Punchliner comedy, talks, dance classes, and games." },
      { name: "Pixels Photo Gallery", deck: "4", description: "The onboard photo gallery where candid and posed cruise photos are displayed daily for browsing and purchase." },
      { name: "JavaBlue Café", deck: "4", description: "A casual café for specialty coffee, pastries, and custom special-occasion cakes." },
      { name: "Fahrenheit 555 Steakhouse", deck: "4", description: "The ship's specialty steakhouse for dinner, by reservation with a fee." },
      { name: "Limelight Lounge and Night Club", deck: "4", description: "A show lounge by day and evening, then an 18+ DJ-driven nightclub from 11:30pm into the night." },
      { name: "The Fun Shops", deck: "5", description: "The ship's main onboard shops for apparel, jewelry, beauty, liquor, and Carnival logo items, open on sea days." },
      { name: "Heroes Tribute Bar & Lounge", deck: "5", description: "A welcoming bar and lounge that honors armed services personnel and their families, with drinks and light snacks." },
      { name: "Cherry on Top", deck: "5", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Carnival Adventures Store", deck: "5", description: "A small shop for shore-day essentials like sunscreen, apparel, and last-minute souvenirs before heading into port." },
      { name: "The Warehouse Arcade", deck: "5", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Sunrise Casino", deck: "5", description: "The onboard casino for slots and table games, open on sea days and evenings after the ship leaves port." },
      { name: "Sunrise Casino Bar", deck: "5", description: "The casino bar with nightly live music and audience participation games for easy evenings." },
      { name: "Bonsai Sushi", deck: "5", description: "A full-service sushi restaurant with Asian-inspired dishes, open late into the evening." },
      { name: "RedFrog Pub", deck: "5", description: "Carnival's Caribbean-style pub with live music, karaoke, foosball, beer pong, and ThirstyFrog Red on draught." },
      { name: "Piano Bar 88", deck: "5", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Alchemy Bar", deck: "5", description: "A vintage-themed cocktail 'pharmacy' where bartenders craft custom drinks from a menu of inventive concoctions." },
      { name: "Continental Pool Area", deck: "9", description: "The main midship pool deck with a saltwater pool and two hot tubs, open from morning through midnight." },
      { name: "BlueIguana Tequila Bar", deck: "9", description: "A poolside bar serving frozen tequila drinks and cold Mexican beer during sunny sea days." },
      { name: "RedFrog Rum Bar", deck: "9", description: "A poolside rum bar with Caribbean-style cocktails and Carnival's signature ThirstyFrog Red draught beer." },
      { name: "BlueIguana Cantina", deck: "9", description: "A complimentary poolside Mexican stand serving fresh tacos, burritos, and breakfast burritos with homemade tortillas." },
      { name: "Guy's Burger Joint", deck: "9", description: "A complimentary poolside burger stand from Guy Fieri, serving fresh burgers and hand-cut fries at lunch." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "9", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Lido Marketplace", deck: "9, 10", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with a Lucky Bowl station at lunch." },
      { name: "Carnival Deli", deck: "9", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Seafood Shack", deck: "9", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Pizzeria del Capitano", deck: "9", description: "A complimentary pizzeria serving hand-tossed Italian-style thin-crust pies all day and late into the night." },
      { name: "New World Pool and Bar", deck: "9", description: "An aft Lido pool with two hot tubs and a poolside bar, open through mid-evening." },
      { name: "Carnival WaterWorks", deck: "10, 14", description: "An outdoor water park with the 212-foot Twister slide, a 203-foot AquaTunnel enclosed slide, and a spray zone." },
      { name: "Guy's Pig & Anchor Bar-B-Que Smokehouse", deck: "10", description: "A complimentary open-air BBQ smokehouse from Guy Fieri with smoked meats, down-home sides, and signature sauces on sea days." },
      { name: "Cucina del Capitano", deck: "10", description: "A sit-down Italian restaurant with a complimentary build-your-own pasta bar at lunch and a paid dinner menu." },
      { name: "Cloud 9 Spa", deck: "11", description: "A forward spa and fitness complex with a Life Fitness gym, saunas, thermal suite with infrared and aromatic steam chambers, massage rooms, and salon services." },
      { name: "SportSquare", deck: "11, 12", description: "An outdoor sports complex with ropes courses, mini golf, a basketball court, a jogging track, and open-air games." },
      { name: "Club O2", deck: "12", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Circle \"C\"", deck: "12", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Camp Ocean / Night Owls", deck: "12", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Serenity", deck: "12, 14", description: "The adults-only 21+ retreat on the upper decks with a large hot tub, shaded loungers, and a full bar." },
      { name: "Self-Service Launderettes", deck: "1, 2, 6, 7, 8, 9", description: "Coin-operated guest laundry rooms with washers, dryers, and irons on six passenger decks." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
  {
    id: "carnival-venezia",
    slug: "carnival-venezia",
    name: "Carnival Venezia",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Vista-class",
    entered_service: 2019,
    year_refurbished: 2023,
    has_solo_cabins: false,
    space_ratio: 35.4,
    crew_to_passenger_ratio: "1:3.7",
    h1: "Carnival Venezia",
    departure_ports_normalized: ["New York City, NY", "Orlando, FL"],
    departure_port_tags: ["Venice", "Italy"],
    ship_scale_category: "Large Ship",
    pace_category: "Moderate Pace",
    vibe_tags: ["Fun", "Modern", "Family Friendly", "Italian Inspired"],
    audience_tags: ["Families", "Couples", "Groups", "Multigenerational"],
    line_hub_slug: "carnival-cruise-line",
    primary_pillar: "Fun Ship",
    anchor_targets: ["Dining", "Entertainment", "Family Activities", "Spa", "Italian Cuisine"],
    card_excerpt: "Experience Italian-inspired fun and modern amenities aboard Carnival Venezia, perfectly designed for families and groups.",
    short_description: "Carnival Venezia is a large Carnival ship with Italian-inspired design, many dining choices, and a mix of fun, busy public areas and quieter places to sit and look out at the sea.",
    intro_summary: "Carnival Venezia is a large, modern Carnival ship best suited to travelers who want lots of onboard choice, a social atmosphere, and a newer ship with decorative interiors. It can work well for older adults who enjoy activity and variety, especially if they plan around peak crowds.",
    sources: "Carnival Cruise Line - Carnival Venezia (official) - https://www.carnival.com/cruise-ships/carnival-venezia | CruiseMapper - Carnival Venezia (reference) - https://www.cruisemapper.com/ships/Carnival-Venezia-2155 | Cruise Critic - Carnival Venezia Review (review) - https://www.cruisecritic.com/reviews/review.cfm?ShipID=1473",
    images: {
      hero: "/placeholder.svg",
      hero_alt: "Carnival Venezia cruise ship sailing on the ocean during sunset",
      pool: "/placeholder.svg",
      pool_alt: "Guests enjoying the pool deck on Carnival Venezia with lounge chairs and sun umbrellas",
      atrium: "/placeholder.svg",
      atrium_alt: "Bright and spacious atrium of Carnival Venezia with modern décor and seating areas",
      public_space: "/placeholder.svg",
      public_space_alt: "Lively public space on Carnival Venezia with guests dining and socializing"
    },
    library: {
      tags: ["Fun", "Modern", "Family Friendly", "Italian Inspired"]
    },
    hero: {
      description: "Carnival Venezia is a large, modern Carnival ship best suited to travelers who want lots of onboard choice, a social atmosphere, and a newer ship with decorative interiors. It can work well for older adults who enjoy activity and variety, especially if they plan around peak crowds."
    },
    quick_view: {
      class: "Vista-class",
      entered_service: 2019,
      homeports: ["New York City, NY", "Port Canaveral, FL"],
      length: "7 to 12 nights",
      atmosphere: "Lively overall, with some calmer lounges and outdoor spaces.",
      experience_style: "Large-ship resort style with Carnival's social feel and an Italian theme.",
      best_fit: "Good for travelers who want variety, entertainment, and many dining options on a big ship.",
      not_ideal_for: "Less ideal for people who want a small, quiet ship or a very traditional luxury experience.",
      planning_advice: "Check the itinerary and embarkation port carefully, as this ship has sailed from both New York and Port Canaveral and can feel busiest on sea days."
    },
    facts: {
      decks: 14,
      cabins: 2061,
      capacity: 4090
    },
    advisor_snapshot: {
      scale_pacing: "Large ship with a busy pace in the main pool and promenade areas, but still some quieter spots if you seek them out.",
      overall_feel: "Colorful, social, and entertainment-focused, with a decorative Italian style carried over from the ship's original Costa service.",
      strengths: "Wide choice of restaurants and bars, strong entertainment lineup, attractive public spaces, and good variety for longer Caribbean sailings.",
      watch_outs: "Crowded pool decks and buffet areas at peak times, extra-fee dining can add up, and the ship may feel large and active for travelers who prefer a slower pace."
    },
    experience_breakdown: {
      atmosphere: "Carnival Venezia blends Carnival's upbeat, family-friendly style with more ornate interiors than many newer mainstream ships. The ship often feels energetic around the Lido deck, atrium, and evening venues, while some lounges, promenade areas, and outer decks offer a calmer place to sit.",
      dining_style: "Main dining room, buffet, casual poolside choices, and several specialty venues give passengers a lot of choice. Dining is flexible, but the busiest venues can have lines at popular times.",
      crowd_flow: "Expect the heaviest traffic around the buffet, pools, atrium, and major entertainment spaces. Show reservations, off-peak meals, and using less central deck areas can help avoid the busiest periods.",
      public_spaces: "The ship has a large central atrium, theater, lounges, bars, outdoor pool areas, a promenade-style walking space, and several indoor seating areas with decorative touches and sea views."
    },
    cabin_considerations: {
      balcony: "Balcony cabins are a strong choice on this ship for travelers who want fresh air and a quieter place to relax away from the busiest public decks.",
      interior: "Interior cabins can be a practical lower-cost option, but they offer no natural light and may feel less comfortable on longer sailings for some travelers.",
      practical_tip: "For a quieter experience, choose dining and buffet times outside the main rush and look for seating away from the central pool deck on sea days."
    },
    fit_guidance: {
      makes_sense_if: [
        "You enjoy a big ship with many food and entertainment choices.",
        "You like an active atmosphere but still want some places to sit quietly.",
        "You are considering a Caribbean sailing from New York or Port Canaveral.",
        "You want a newer large ship rather than an older classic vessel."
      ],
      not_ideal_if: [
        "You prefer a small ship with a very calm onboard atmosphere.",
        "You dislike crowds around pools, buffets, and popular shows.",
        "You want an all-inclusive or luxury-level cruise experience.",
        "You need true solo cabins."
      ]
    },
    faq: [
      {
        question: "What is the size of the Carnival Venezia?",
        answer: "Carnival Venezia carries about 4090 guests at full capacity, which places it among the large ship options in its category. Compared to smaller or older ships, that usually means more dining, entertainment, and public-space choices, but also a busier onboard atmosphere and more walking."
      },
      {
        question: "What types of dining options are available on Carnival Venezia?",
        answer: "Carnival Venezia offers a mix of dining options shaped by its class and cruise line style, including its promenade-style public spaces as part of the broader onboard experience. Compared to newer or larger ships, the lineup may feel either more focused or more limited, so it works best for travelers who want a comfortable dining mix rather than the widest possible restaurant selection."
      },
      {
        question: "Which ports does Carnival Venezia typically depart from?",
        answer: "Carnival Venezia sails from New York City, NY or Orlando, FL, which makes it a convenient option depending on where you live and what itineraries you want. Those departure ports help determine whether the ship is better suited to Caribbean, Mediterranean, Pacific, or other regional sailings compared with ships based elsewhere."
      }
    ],
    seo: {
      title: "Carnival Venezia Ship Review for Older Adults | Dream Team Vacations",
      meta_description: "Learn about Carnival Venezia, a large Carnival ship with Italian-inspired decor, varied dining, lively public spaces, and Caribbean sailings from major U.S. homeports.",
      canonical_url: "https://matrix.dreamteamvacations.com/ship-carnival-venezia"
    },
    relations: {
      related_ship_slugs: ["carnival-celebration", "carnival-magic", "carnival-vista"],
      compare_ship_slugs: ["carnival-horizon", "carnival-mardi-gras", "carnival-freedom"],
      anchor_targets: ["Dining", "Entertainment", "Family Activities", "Spa", "Italian Cuisine"],
      primary_pillar: "Fun Ship"
    },
    source_meta: {
      last_updated: new Date().toISOString(),
      version: "1.0"
    },
    venues: [
      { name: "Circle \"C\"", deck: "3", description: "Supervised teen club for 12 to 14 year olds, with activities scheduled throughout the cruise." },
      { name: "Club O2", deck: "3", description: "Supervised teen club for 15 to 17 year olds, with a dedicated schedule of onboard activities." },
      { name: "Guest Services", deck: "3", description: "Your practical help desk for onboard questions, account issues, lost items, and general cruise assistance, open around the clock." },
      { name: "Carnival Adventures", deck: "3", description: "The spot to ask about shore tours, golf excursions, and last-minute port details before you head ashore." },
      { name: "Piazza San Marco | Atrium Bar", deck: "3", description: "The Italian-plaza-themed atrium lounge and main entrance, with seating, a dance floor, and live music by day and night." },
      { name: "Marco Polo Restaurant", deck: "3", description: "A midship main dining room open nightly for traditional assigned-seating dinner at 5:30pm or 7:45pm, with full wait staff service." },
      { name: "Canal Grande Restaurant", deck: "3, 4", description: "The aft main dining room across two decks, serving brunch, breakfast, tea, and flexible 'Your Time' dinner, with an in-restaurant Chef's Table." },
      { name: "Teatro Rosso", deck: "4, 5", description: "The two-deck main theater by day and evening, then an 18+ DJ-driven nightclub from 11pm to 2am." },
      { name: "The Fun Shops", deck: "4, 5", description: "The ship's main onboard shops, spread across two decks for apparel, jewelry, beauty, liquor, and Carnival logo items." },
      { name: "Dreams Studio", deck: "4", description: "A professional photo studio offering custom onboard or in-port photo shoots, finished and delivered as a personal story book." },
      { name: "Cherry on Top", deck: "4", description: "A candy and celebrations shop for bulk sweets, flowers, and stateroom decoration packages for birthdays and special occasions." },
      { name: "Venezia Casino", deck: "4", description: "The main casino with slot machines and table games, open on sea days and after the ship leaves port." },
      { name: "Venezia Casino (Non-Smoking)", deck: "4", description: "A separate non-smoking casino with slots and tables, open on sea days and after the ship leaves port." },
      { name: "Heroes Tribute Bar & Lounge", deck: "4", description: "A welcoming bar and lounge that honors armed services personnel and their families, with drinks and light snacks." },
      { name: "Art Gallery", deck: "4", description: "A calm browsing space for gallery displays and sea-day art auctions, where original works are offered at a discount." },
      { name: "Limelight Lounge", deck: "4", description: "A flexible lounge that hosts live music, karaoke, late-night shows, talks, and the Punchliner Comedy Club." },
      { name: "Cloud 9 Spa Beauty Salon", deck: "5", description: "A midship beauty salon for hair, nails, European treatments, Medi-Spa, and Acupuncture services." },
      { name: "Piano Bar 88", deck: "5", description: "A proper piano bar — sing-alongs, requests, games, and the right crowd after dinner." },
      { name: "Bonsai Teppanyaki", deck: "5", description: "A teppanyaki restaurant with chefs preparing dishes tableside at four 10-seat stations, with a reservations fee." },
      { name: "Bonsai Sushi", deck: "5", description: "A full-service sushi restaurant with Asian-inspired dishes, open late into the evening." },
      { name: "Fahrenheit 555 Steakhouse", deck: "5", description: "The ship's specialty steakhouse for dinner, by reservation with a fee." },
      { name: "Amari Bar", deck: "5", description: "An Italian-liqueur cocktail bar where mixologists craft elevated drinks with amari, bitters, and interactive flair." },
      { name: "Empanada and Pie", deck: "5", description: "A casual food stand for empanadas and pies, served at lunch and dinner for an extra cost." },
      { name: "Frizzante", deck: "5", description: "An Italian bubbly bar with prosecco, bellinis, spritzes, Italian beer, espresso, and biscotti." },
      { name: "Il Viaggio's Italian Restaurant", deck: "5", description: "A specialty Italian restaurant with full wait service, by reservation with a fee." },
      { name: "Pixels (Digital) Photo Gallery", deck: "5", description: "A digital photo gallery where cruise photos can be browsed on iPads or the HUB App and ordered as digital or print copies." },
      { name: "Gondola Lounge", deck: "5", description: "A casual central lounge with live music nightly, a dance floor, and bar service for easy evenings." },
      { name: "La Strada Grill", deck: "5", description: "A complimentary outdoor Italian street-food grill serving grilled sandwiches and Italian favorites at lunch." },
      { name: "Carnevale Bar & Lounge", deck: "5", description: "A masquerade-inspired lounge serving Italian wines and classic cocktails, with evening live music (open to all afternoons and evenings)." },
      { name: "Terrazza Carnevale - Outdoor Area", deck: "5", description: "A terraced outdoor deck with sofas, alcoves, two hot tubs, and an evening rooftop bar open to all after dark." },
      { name: "Carnival Seaside Theater / Dive-In Movies", deck: "10", description: "A large outdoor LED screen above the pool showing movies, sports, and evening 'Dive-In Movies' under the stars." },
      { name: "Lido Pool", deck: "10", description: "The main Lido saltwater pool with a retractable roof for rain-or-shine swimming, open morning to midnight." },
      { name: "JavaBlue Café", deck: "10", description: "A casual café for specialty coffee, pastries, Italian gelato, milkshakes, and sweet treats." },
      { name: "Rococo Bar", deck: "10", description: "A playful 'Baroque Goes Pop' poolside bar with colorful layered frozen drinks and Italian-flavored cocktails." },
      { name: "Guy's Burger Joint", deck: "10", description: "A complimentary poolside burger stand from Guy Fieri, serving classic burgers plus Italian-twist specials like the pepperoni pizza burger." },
      { name: "Tomodoro", deck: "10", description: "A complimentary Mexitalian fusion stand serving tacos and burritos with Italian meatballs, Sicilian chicken, and more." },
      { name: "Lido Marketplace", deck: "10, 11", description: "The ship's main casual buffet, open for every meal plus late-night snacks, with 24-hour drinks and self-serve ice cream." },
      { name: "Carnival Deli", deck: "10", description: "A complimentary deli counter inside the buffet serving piled-high sandwiches and classic sides from lunch through late evening." },
      { name: "Pizzeria del Capitano", deck: "10", description: "A complimentary pizzeria serving hand-tossed Italian-style thin-crust pies all day and late into the night." },
      { name: "Seafood Shack", deck: "10", description: "A casual seafood stand with steamed or fried New England-style favorites and a rotating soup of the day, at an extra cost." },
      { name: "Burano Pool and Bar", deck: "10", description: "An aft Lido pool with two hot tubs and a poolside bar, open into the late evening." },
      { name: "Camp Ocean / Night Owls", deck: "11", description: "Supervised marine-themed kids' program for ages 2 to 11 with Dr. Seuss experiences, plus paid late-night babysitting." },
      { name: "Cloud 9 Spa", deck: "12", description: "A forward fitness center and spa with classes, saunas, massage rooms, and European treatments (salon is down on Deck 5)." },
      { name: "The Warehouse", deck: "12", description: "An around-the-clock video and arcade game room, handy for grandkids or anyone looking for a quick break." },
      { name: "Carnival WaterWorks", deck: "12, 14", description: "An outdoor water park with three waterslides including the 300-foot Twister plus AquaTunnel and Gondola Glide." },
      { name: "SportSquare", deck: "11, 12, 14", description: "A top-deck sports complex with ropes courses, mini golf, basketball, pickleball, bocce, and open-air games." },
      { name: "Serenity", deck: "15", description: "The adults-only 21+ retreat with two hot tubs, shaded loungers, pergolas, and a Spritz Bar for drinks in the sun." },
      { name: "Medical Center", deck: "0", description: "The onboard medical center, staffed 24/7 for minor, non-emergency care at customary fees with scheduled walk-in hours." }
    ]
  },
                      {
    id: "carnival-vista",
    slug: "carnival-vista",
    name: "Carnival Vista",
    line: "Carnival Cruise Line",
    line_slug: "carnival-cruise-line",
    ship_class: "Vista-class",
    entered_service: 2016,
    year_refurbished: 2024,
    has_solo_cabins: false,
    space_ratio: 35.3,
    crew_to_passenger_ratio: "1 to 2.7",
    h1: "Carnival Vista",
