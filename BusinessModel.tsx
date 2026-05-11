import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Badge } from "../components/ui/badge";
import { HeartHandshake, Map, Ship, Pizza, Droplets, Waves, Globe, Users, Bot, UserCircle, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function BusinessModel() {
  const preferences = [
    { id: 1, name: "Cruise Lines", ask: "Which cruise lines they want included or if they are open to all.", goal: "Filters out noise immediately. Ensures brand alignment (e.g., don't send Carnival deals to a loyal Celebrity cruiser)." },
    { id: 2, name: "Departure Ports", ask: "Preferred Florida ports (Port Canaveral, Tampa, Miami, Fort Lauderdale, Jacksonville).", goal: "Convenience mapping. Triggers alerts only for ports the member is willing to drive to." },
    { id: 3, name: "Cruise Length", ask: "Ideal duration (3-6 nights, 7 nights, 8+ nights).", goal: "Matches travel lifestyle. Differentiates between retirees wanting 10-night journeys and weekenders wanting 3-night getaways." },
    { id: 4, name: "Cruise Frequency", ask: "How often they sail (First-timer, once every few years, 1-2 times a year, 3+ times).", goal: "Determines baseline knowledge. Tells the AI how much hand-holding or ship explanation is needed." },
    { id: 5, name: "Travel Companions", ask: "Who they travel with (Spouse/partner, solo, family with kids/teens, group of friends, larger group of 8+).", goal: "Ship and cabin matching. Highlights waterparks for grandkids or adults-only Solariums for couples." },
    { id: 6, name: "Cabin Type", ask: "Which cabin types they prefer (Interior, Oceanview, Balcony, Suite, Luxury Enclave).", goal: "Budget and lifestyle alignment. Filters out cabin types they don't want and surfaces enclave preferences for future Ship-within-Ship matching." },
    { id: 7, name: "Price Range", ask: "Their comfortable per-person budget.", goal: "Deal qualification. Establishes their threshold for a 'good price'." },
    { id: 8, name: "Onboard Experience", ask: "What matters most to them onboard (Food, entertainment, relaxation, casino, etc.).", goal: "AI personalization. Allows the AI to explain why a ship fits them (e.g., highlighting food vs. entertainment)." },
    { id: 9, name: "Drinks Package", ask: "Whether the member typically wants a drinks package on cruises.", goal: "Offer-relevance filtering. Prevents 'free drinks!' alerts from going to non-drinkers and ensures drinks-package-inclusive sailings are flagged for members who actually want them." },
    { id: 10, name: "Presentation Preference", ask: "How they want the data presented (Daily immediate alerts vs. Weekly curated roll-ups).", goal: "Prevents alert fatigue by letting them dictate the cadence." },
    { id: 11, name: "Contact Method", ask: "Preferred channel (Email, SMS).", goal: "Prevents alert fatigue by letting them dictate the medium." },
    { id: 12, name: "Group Cruises", ask: "Interest in Dream Team Vacations hosted group cruises.", goal: "Upsell/Community building. Identifies warm leads for local agency group trips." },
    { id: 13, name: "International & River Cruises", ask: "Interest in non-Florida, global sailings.", goal: "'The Ocean' scaling indicator. Identifies members ready for higher-ticket global travel." },
    { id: 14, name: "Last-Minute Deals", ask: "If they can travel on short notice.", goal: "Inventory clearing. Identifies highly flexible retirees who can jump on sudden price drops." },
    { id: 15, name: "Booking Confidence", ask: "How comfortable they are booking directly vs. needing an advisor.", goal: "Routing. Dictates whether to push them to the 'Independent Price Comparison' link or offer a concierge call." },
    { id: 16, name: "Special Occasions", ask: "Important dates and what they celebrate at sea.", goal: "Automated proactive selling." },
    { id: 17, name: "Anniversary", ask: "Anniversary date.", goal: "Automated proactive selling (triggers 6-9 months out)." },
    { id: 18, name: "Birthday", ask: "Birthday date.", goal: "Automated proactive selling (triggers 6-9 months out)." }
  ];

  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Business Model & Strategy</h1>
            <p className="text-muted-foreground mt-2">S.A.I.L. Club & Dream Team Vacations Foundational Reference</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/dashboard">Back to Dashboard</Link>
          </Button>
        </div>

        {/* Core Philosophy */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <HeartHandshake className="h-5 w-5" />
              Core Philosophy: The "Miracle on 34th Street" Approach
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4 text-foreground/80 leading-relaxed">
            <p>
              Most travel agencies focus solely on selling travel. With online pricing becoming increasingly fragmented and opaque, consumers can no longer be sure they are getting a fair deal.
            </p>
            <p>
              Our philosophy is built on the <strong>"Miracle on 34th Street"</strong> model (like Santa at Macy's sending customers to Gimbels). We prioritize honesty, transparency, and trust over capturing every booking. We use technology and AI to search massive amounts of data to find "a good price" and high value based on exactly what the customer wants.
            </p>
            <p>
              If the best option is to book direct or via an independent comparison site, we send them there. <strong>We curate the truth.</strong>
            </p>
          </CardContent>
        </Card>

        {/* Growth Strategy */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Map className="h-5 w-5" />
              Growth Strategy: The Pond, The Lake, The Ocean
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 grid gap-6 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Droplets className="h-5 w-5 text-blue-400" />
                The Pond
              </div>
              <Badge variant="secondary">The Villages, FL</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Our hyper-local foundation. This is where we built deep trust and community presence through high-touch, traditional agency operations and group cruises.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Waves className="h-5 w-5 text-blue-500" />
                The Lake
              </div>
              <Badge variant="secondary">Florida</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Our regional expansion. Scaling our reach to the broader state utilizing our automated systems, focusing on Florida departure ports.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <Globe className="h-5 w-5 text-blue-600" />
                The Ocean
              </div>
              <Badge variant="secondary">The United States</Badge>
              <p className="text-sm text-muted-foreground mt-2">
                Our ultimate scaling goal. National reach utilizing the fully automated S.A.I.L. Club software platform.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Ecosystem */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Ship className="h-5 w-5" />
              The Ecosystem & Products
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <strong className="text-foreground">Dream Team Vacations:</strong> The foundational travel agency, handling white-glove group bookings and local community presence.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <strong className="text-foreground">S.A.I.L. Club:</strong> The private digital membership platform (React PWA) where the member experience lives.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <strong className="text-foreground">The Cruise Facts / Matrix:</strong> The core intelligence engine. It ingests daily scraped pricing from 12 sources, normalizes it, and compares it.
                </div>
              </li>
              <li className="flex gap-3">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <strong className="text-foreground">Delivery Cadence:</strong> Daily Tier gets narrower, immediate summaries. Weekly Tier gets rolled-up, curated summaries. (Scraping happens daily for both).
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Pizza className="h-5 w-5" />
              Preferences & The "Pepperoni Pizza" Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
              <strong className="text-foreground">The Concept:</strong> If a user signs up for a pizza shop's newsletter and constantly receives offers for pepperoni pizza—but they are allergic to pepperoni—they will hate the shop and unsubscribe. <br/><br/>
              <strong className="text-foreground">The Solution:</strong> Meticulous segmentation. We must know exactly what they want so we only send highly relevant, personalized offers that build trust and prevent alert fatigue.
            </div>

            <h3 className="text-lg font-semibold text-foreground">The 18 Premium Onboarding Preferences</h3>
            <Accordion type="single" collapsible className="w-full">
              {preferences.map((pref) => (
                <AccordionItem key={pref.id} value={`item-${pref.id}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {pref.id}
                      </span>
                      <span>{pref.name}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-9 space-y-2">
                    <p><strong className="text-foreground">What we ask:</strong> {pref.ask}</p>
                    <p><strong className="text-foreground">The Goal:</strong> {pref.goal}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* The Core Personas */}
        <Card>
          <CardHeader className="bg-primary/5 border-b">
            <CardTitle className="flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" />
              The Core Personas (AI & Human)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-3 p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <UserCircle className="h-5 w-5 text-primary" />
                  Julian & Janet
                </div>
                <Badge variant="secondary" className="mb-2">The Founders</Badge>
                <p className="text-sm text-muted-foreground"><strong>Who:</strong> The real-life founders and heart of Dream Team Vacations.</p>
                <p className="text-sm text-muted-foreground"><strong>Represents:</strong> Ultimate trust, "The Pond", and white-glove expertise.</p>
                <p className="text-sm text-muted-foreground"><strong>Tone:</strong> Authentic, caring, experienced, and straightforward.</p>
                <p className="text-sm text-muted-foreground"><strong>Purpose:</strong> Face of the brand, host high-touch group cruises, and provide the human guarantee behind the philosophy.</p>
              </div>

              <div className="space-y-3 p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Bot className="h-5 w-5 text-blue-500" />
                  Atlas Adventure
                </div>
                <Badge variant="secondary" className="mb-2">The Intelligence Engine</Badge>
                <p className="text-sm text-muted-foreground"><strong>Who:</strong> Analytical, data-driven AI persona powering The Cruise Facts matrix.</p>
                <p className="text-sm text-muted-foreground"><strong>Represents:</strong> Absolute transparency, market intelligence, and logic.</p>
                <p className="text-sm text-muted-foreground"><strong>Tone:</strong> Sharp, objective, highly knowledgeable, and direct. Zero hype.</p>
                <p className="text-sm text-muted-foreground"><strong>Purpose:</strong> Crunch daily scraped data, compare pricing, and present the logical breakdown of why a deal is good.</p>
              </div>

              <div className="space-y-3 p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <HeartHandshake className="h-5 w-5 text-pink-500" />
                  Sunny
                </div>
                <Badge variant="secondary" className="mb-2">The Concierge</Badge>
                <p className="text-sm text-muted-foreground"><strong>Who:</strong> The warm, welcoming AI onboarding and preferences guide.</p>
                <p className="text-sm text-muted-foreground"><strong>Represents:</strong> Hospitality, personalization, and solving the "Pepperoni Pizza" problem.</p>
                <p className="text-sm text-muted-foreground"><strong>Tone:</strong> Cheerful, empathetic, attentive, and highly personalized.</p>
                <p className="text-sm text-muted-foreground"><strong>Purpose:</strong> Guide members through the 18-point Premium Onboarding survey and tailor S.A.I.L. Club alerts.</p>
              </div>

              <div className="space-y-3 p-4 rounded-lg border bg-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                  <Navigation className="h-5 w-5 text-teal-500" />
                  Captain Finn
                </div>
                <Badge variant="secondary" className="mb-2">The Onboard Expert</Badge>
                <p className="text-sm text-muted-foreground"><strong>Who:</strong> The ship library and venue matching AI guide.</p>
                <p className="text-sm text-muted-foreground"><strong>Represents:</strong> Deep ship-first knowledge, deck plans, and onboard vibes.</p>
                <p className="text-sm text-muted-foreground"><strong>Tone:</strong> Confident, lively, and experienced (Parrotheads reliving the good years).</p>
                <p className="text-sm text-muted-foreground"><strong>Purpose:</strong> Leverage the 600+ venue database, explain ship trade-offs, and match members with the right ship.</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
