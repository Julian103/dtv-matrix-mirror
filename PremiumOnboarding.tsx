import { useState, useEffect } from "react";
import "./PremiumOnboarding.css";
import { CheckCircle2 } from "lucide-react";

const formatAmericanDate = (dateString: string) => {
  if (!dateString) return "";
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString;
  const [year, month, day] = parts;
  return `${month}-${day}-${year}`;
};

// Survey-derived tags. Item #52 wipe-and-replace scope.
// If you add a new survey tag, also update the n8n workflow's
// SURVEY_TAG_LIST node. See brief Section 3.15 + Item #52.
const SURVEY_TAG_LIST = [
  // Q1 — Cruise lines (1-11 emitted)
  "line_carnival", "line_royal_caribbean", "line_celebrity",
  "line_norwegian", "line_princess", "line_holland_america",
  "line_msc", "line_disney", "line_virgin", "line_oceania",
  "line_open_to_any",
  // Q2 — Departure ports (1-5 emitted)
  "port_canaveral", "port_tampa", "port_miami",
  "port_fort_lauderdale", "port_jacksonville",
  // Q3 — Cruise length (1-3 emitted)
  "length_3_to_6", "length_7", "length_8_plus",
  // Q4 — Cruise frequency (exactly 1)
  "freq_first_time", "freq_few_years", "freq_1_2_year",
  "freq_3_plus_year",
  // Q5 — Traveler type (1-5 emitted)
  "who_couples", "who_solo", "who_families", "who_friends",
  "who_groups",
  // Q6 — Cabin tier (1-5 emitted)
  "cabin_interior", "cabin_oceanview", "cabin_balcony",
  "cabin_suite", "cabin_enclave_interest",
  // Q7 — Budget tier (exactly 1)
  "budget_under_700", "budget_700_1000", "budget_1000_1400",
  "budget_1400_plus", "budget_no_range",
  // Q8 — Onboard experience (1-2 emitted, capped at 2)
  "vibe_modern", "vibe_relaxed", "vibe_premium_dining",
  "vibe_lively", "vibe_easy_navigation", "vibe_quality",
  // Q9 — Drinks package (exactly 1)
  "drinks_yes", "drinks_sometimes", "drinks_no",
  "drinks_non_drinker",
  // Q10 — Alert cadence (exactly 1)
  "cadence_daily", "cadence_weekly", "cadence_exceptional",
  // Q11 — Contact method (exactly 1)
  "contact_email", "contact_text", "contact_phone",
  "contact_email_or_text", "contact_no_pref",
  // Q12 — Group cruises (exactly 1)
  "groups_yes", "groups_maybe", "groups_no",
  // Q13 — International cruises (exactly 1)
  "intl_yes", "intl_maybe", "intl_no",
  // Q14 — Last-minute deals (exactly 1)
  "lastmin_yes", "lastmin_maybe", "lastmin_no",
  // Q15 — Booking confidence (exactly 1)
  "confidence_high", "confidence_medium", "confidence_low",
  // Q16 — Special occasions (0-2 emitted)
  "occasion_birthday", "occasion_anniversary",
  // Final Step — Newsletter (0-1 emitted)
  "matrix_newsletter_subscribed",
  // Always-applied — Membership status
  "member_premium",
];

// REPLACE THIS PLACEHOLDER with the actual webhook URL
// after importing the n8n tag workflow into n8n.
const N8N_TAG_WEBHOOK_URL = "https://n8n.srv1349188.hstgr.cloud/webhook/dtv-survey-tag-sync";

const deriveTagsFromPreferences = (prefs: any, newsletterOptIn: boolean) => {
  const tags: string[] = [];

  // Always-applied
  tags.push("member_premium");

  // Q1 — Cruise lines (multi-select array → one tag each)
  const lineMap: Record<string, string> = {
    "Carnival Cruise Line": "line_carnival",
    "Royal Caribbean": "line_royal_caribbean",
    "Celebrity Cruises": "line_celebrity",
    "Norwegian Cruise Line (NCL)": "line_norwegian",
    "Princess Cruises": "line_princess",
    "Holland America Line": "line_holland_america",
    "MSC Cruises": "line_msc",
    "Disney Cruise Line": "line_disney",
    "Virgin Voyages": "line_virgin",
    "Oceania Cruise Line": "line_oceania",
    "I'm open to reviewing any line": "line_open_to_any",
  };
  (prefs.cruiseLines || []).forEach((v: string) => {
    if (lineMap[v]) tags.push(lineMap[v]);
  });

  // Q2 — Departure ports
  const portMap: Record<string, string> = {
    "Orlando (Port Canaveral)": "port_canaveral",
    "Tampa": "port_tampa",
    "Miami": "port_miami",
    "Fort Lauderdale (Port Everglades)": "port_fort_lauderdale",
    "Jacksonville": "port_jacksonville",
  };
  (prefs.departurePorts || []).forEach((v: string) => {
    if (portMap[v]) tags.push(portMap[v]);
  });

  // Q3 — Cruise length
  const lengthMap: Record<string, string> = {
    "3-6 Nights (Quick Getaway)": "length_3_to_6",
    "7 Nights (Week Escape)": "length_7",
    "8+ Nights (Grand Journey)": "length_8_plus",
  };
  (prefs.cruiseLength || []).forEach((v: string) => {
    if (lengthMap[v]) tags.push(lengthMap[v]);
  });

  // Q4 — Cruise frequency (single-string)
  const freqMap: Record<string, string> = {
    "First time cruiser": "freq_first_time",
    "Once every few years": "freq_few_years",
    "1-2 times a year": "freq_1_2_year",
    "3+ times a year": "freq_3_plus_year",
  };
  if (freqMap[prefs.cruiseFrequency]) {
    tags.push(freqMap[prefs.cruiseFrequency]);
  }

  // Q5 — Traveler type (multi-select)
  const whoMap: Record<string, string> = {
    "Just me & my spouse/partner": "who_couples",
    "Solo traveler": "who_solo",
    "Family with children/teens": "who_families",
    "Group of friends": "who_friends",
    "Larger group (8+, milestone trips)": "who_groups",
  };
  (prefs.whoTravels || []).forEach((v: string) => {
    if (whoMap[v]) tags.push(whoMap[v]);
  });

  // Q6 — Cabin tier (multi-select)
  const cabinMap: Record<string, string> = {
    "Interior": "cabin_interior",
    "Oceanview": "cabin_oceanview",
    "Balcony": "cabin_balcony",
    "Suite": "cabin_suite",
    "Luxury enclave — The Retreat, Yacht Club, The Haven, Suite Neighborhood (Coming Soon)": "cabin_enclave_interest",
  };
  (prefs.cabinType || []).forEach((v: string) => {
    if (cabinMap[v]) tags.push(cabinMap[v]);
  });

  // Q7 — Budget tier (single-string, en-dash literal U+2013)
  const budgetMap: Record<string, string> = {
    "Under $700": "budget_under_700",
    "$700–$1,000": "budget_700_1000",
    "$1,000–$1,400": "budget_1000_1400",
    "$1,400+": "budget_1400_plus",
    "I prefer not to set a range": "budget_no_range",
  };
  if (budgetMap[prefs.priceRange]) {
    tags.push(budgetMap[prefs.priceRange]);
  }

  // Q8 — Onboard experience (multi-select, capped at 2 by survey)
  const vibeMap: Record<string, string> = {
    "Modern / newer ships": "vibe_modern",
    "Relaxed & quiet atmosphere": "vibe_relaxed",
    "Premium dining & service": "vibe_premium_dining",
    "Lively / energetic onboard feel": "vibe_lively",
    "Easy navigation & fewer crowds": "vibe_easy_navigation",
    "Ship quality matters more than price": "vibe_quality",
  };
  (prefs.onboardExperience || []).forEach((v: string) => {
    if (vibeMap[v]) tags.push(vibeMap[v]);
  });

  // Q9 — Drinks package (single-string, em-dash literal U+2014)
  const drinksMap: Record<string, string> = {
    "Yes — I prefer all-inclusive drinks": "drinks_yes",
    "Sometimes — depends on the cruise length or price": "drinks_sometimes",
    "No — I prefer pay-as-you-go": "drinks_no",
    "I don't drink alcohol, so I don't need it": "drinks_non_drinker",
  };
  if (drinksMap[prefs.drinksPackage]) {
    tags.push(drinksMap[prefs.drinksPackage]);
  }

  // Q10 — Alert cadence (single-string, em-dash U+2014)
  // Note: field name is presentationPreference (legacy)
  const cadenceMap: Record<string, string> = {
    "Daily — send alerts as soon as you find them": "cadence_daily",
    "Weekly — bundle the best into one email": "cadence_weekly",
    "Only when something exceptional pops up": "cadence_exceptional",
  };
  if (cadenceMap[prefs.presentationPreference]) {
    tags.push(cadenceMap[prefs.presentationPreference]);
  }

  // Q11 — Contact method (single-string)
  const contactMap: Record<string, string> = {
    "Email": "contact_email",
    "Text message": "contact_text",
    "Phone call": "contact_phone",
    "Email or text is fine": "contact_email_or_text",
    "No preference": "contact_no_pref",
  };
  if (contactMap[prefs.contactMethod]) {
    tags.push(contactMap[prefs.contactMethod]);
  }

  // Q12 — Group cruises (single-string, em-dash U+2014)
  const groupsMap: Record<string, string> = {
    "Yes — I'd like to be notified if one fits": "groups_yes",
    "Maybe — I'm open to hearing about them": "groups_maybe",
    "No — I prefer individual sailings only": "groups_no",
  };
  if (groupsMap[prefs.groupCruises]) {
    tags.push(groupsMap[prefs.groupCruises]);
  }

  // Q13 — International cruises (single-string, em-dash U+2014)
  const intlMap: Record<string, string> = {
    "Yes — interested": "intl_yes",
    "Maybe — open to learning": "intl_maybe",
    "No — Florida-based cruising only": "intl_no",
  };
  if (intlMap[prefs.internationalCruises]) {
    tags.push(intlMap[prefs.internationalCruises]);
  }

  // Q14 — Last-minute deals (single-string, em-dash U+2014)
  const lastminMap: Record<string, string> = {
    "Yes — I can travel on short notice": "lastmin_yes",
    "Maybe — depends on the deal": "lastmin_maybe",
    "No — I need to plan ahead": "lastmin_no",
  };
  if (lastminMap[prefs.lastMinuteDeals]) {
    tags.push(lastminMap[prefs.lastMinuteDeals]);
  }

  // Q15 — Booking confidence (asymmetric dash pattern)
  // First two have em-dash (U+2014); third has NO dash
  const confidenceMap: Record<string, string> = {
    "Very confident — just want confirmation": "confidence_high",
    "Somewhat confident — appreciate guidance": "confidence_medium",
    "Still figuring things out": "confidence_low",
  };
  if (confidenceMap[prefs.bookingConfidence]) {
    tags.push(confidenceMap[prefs.bookingConfidence]);
  }

  // Q16 — Special occasions (multi-select, 0-2 emitted)
  const occasionMap: Record<string, string> = {
    "My Birthday": "occasion_birthday",
    "My Anniversary": "occasion_anniversary",
  };
  (prefs.specialOccasions || []).forEach((v: string) => {
    if (occasionMap[v]) tags.push(occasionMap[v]);
  });

  // Final Step — Newsletter (boolean from checkbox)
  if (newsletterOptIn === true) {
    tags.push("matrix_newsletter_subscribed");
  }

  return tags;
};

const PremiumOnboarding = () => {
  // Survey State
  const [selectedLines, setSelectedLines] = useState<string[]>([]);
  const [q2Ports, setQ2Ports] = useState<string[]>([]);
  const [q3Length, setQ3Length] = useState<string[]>([]);
  const [q4Frequency, setQ4Frequency] = useState<string>("");
  const [q5Companions, setQ5Companions] = useState<string[]>([]);
  const [q6Cabin, setQ6Cabin] = useState<string[]>([]);
  const [q7Price, setQ7Price] = useState<string>("");
  const [q8Exp, setQ8Exp] = useState<string[]>([]);
  const [drinksPackage, setDrinksPackage] = useState<string>("");
  const [q10Presentation, setQ10Presentation] = useState<string>("");
  const [q11Contact, setQ11Contact] = useState<string>("");
  const [q12Group, setQ12Group] = useState<string>("");
  const [q13Intl, setQ13Intl] = useState<string>("");
  const [q14LastMinute, setQ14LastMinute] = useState<string>("");
  const [q15Confidence, setQ15Confidence] = useState<string>("");
  const [q16Occasions, setQ16Occasions] = useState<string[]>([]);
  const [birthday, setBirthday] = useState<string>("");
  const [anniversary, setAnniversary] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [newsletterOptIn, setNewsletterOptIn] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [showValidationError, setShowValidationError] = useState(false);
  const [missingQuestions, setMissingQuestions] = useState<{id: string, label: string}[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getMissingQuestions = () => {
    const missing: {id: string, label: string}[] = [];
    if (selectedLines.length === 0) missing.push({ id: "question-q1", label: "Q1. Cruise Lines" });
    if (q2Ports.length === 0) missing.push({ id: "question-q2", label: "Q2. Departure Ports" });
    if (q3Length.length === 0) missing.push({ id: "question-q3", label: "Q3. Cruise Length" });
    if (q4Frequency === "") missing.push({ id: "question-q4", label: "Q4. Cruise Frequency" });
    if (q5Companions.length === 0) missing.push({ id: "question-q5", label: "Q5. Travel Companions" });
    if (q6Cabin.length === 0) missing.push({ id: "question-q6", label: "Q6. Cabin Type" });
    if (q7Price === "") missing.push({ id: "question-q7", label: "Q7. Price Range" });
    if (q8Exp.length === 0) missing.push({ id: "question-q8", label: "Q8. Onboard Experience" });
    if (drinksPackage === "") missing.push({ id: "question-q9", label: "Q9. Drinks Package" });
    if (q10Presentation === "") missing.push({ id: "question-q10", label: "Q10. Alert Cadence" });
    if (q11Contact === "") missing.push({ id: "question-q11", label: "Q11. Contact Method" });
    if (q12Group === "") missing.push({ id: "question-q12", label: "Q12. Group Cruises" });
    if (q13Intl === "") missing.push({ id: "question-q13", label: "Q13. International & River Cruises" });
    if (q14LastMinute === "") missing.push({ id: "question-q14", label: "Q14. Last-Minute Deals" });
    if (q15Confidence === "") missing.push({ id: "question-q15", label: "Q15. Booking Confidence" });
    if (q16Occasions.length === 0) missing.push({ id: "question-q16", label: "Q16. Special Occasions" });
    if (name.trim() === "" || email.trim() === "") missing.push({ id: "question-final", label: "Final Step: Contact Info" });
    return missing;
  };

  const handleSurveySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const missing = getMissingQuestions();
    if (missing.length > 0) {
      setMissingQuestions(missing);
      setShowValidationError(true);
      document.getElementById(missing[0].id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);
    
    const [firstName, ...lastNameParts] = name.trim().split(' ');
    const lastName = lastNameParts.join(' ');

    const trackingPayload = {
      type: "external_form_submission",
      timestamp: Date.now(),
      formId: "SAIL_Club_Premium_Survey",
      formData: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        "contact.cruise_lines": selectedLines.join(", "),
        "contact.departure_ports": q2Ports.join(", "),
        "contact.cruise_length": q3Length.join(", "),
        "contact.cruise_frequency": q4Frequency,
        "contact.travel_companions": q5Companions.join(", "),
        "contact.cabin_type": q6Cabin.join(", "),
        "contact.price_range": q7Price,
        "contact.onboard_experience": q8Exp.join(", "),
        "contact.drinks_package": drinksPackage,
        "contact.presentation_preference": q10Presentation,
        "contact.contact_method": q11Contact,
        "contact.group_cruises": q12Group,
        "contact.international_cruises": q13Intl,
        "contact.last_minute_deals": q14LastMinute,
        "contact.booking_confidence": q15Confidence,
        "contact.special_occasions": q16Occasions.join(", "),
        "contact.anniversary_date": formatAmericanDate(anniversary),
        date_of_birth: formatAmericanDate(birthday),
        "contact.newsletter_opt_in": newsletterOptIn ? "true" : "false",
      },
      formLabels: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        "contact.cruise_lines": "Cruise Lines",
        "contact.departure_ports": "Departure Ports",
        "contact.cruise_length": "Cruise Length",
        "contact.cruise_frequency": "Cruise Frequency",
        "contact.travel_companions": "Travel Companions",
        "contact.cabin_type": "Cabin Type",
        "contact.price_range": "Price Range",
        "contact.onboard_experience": "Onboard Experience",
        "contact.drinks_package": "Drinks Package",
        "contact.presentation_preference": "Presentation Preference",
        "contact.contact_method": "Contact Method",
        "contact.group_cruises": "Group Cruises",
        "contact.international_cruises": "International Cruises",
        "contact.last_minute_deals": "Last Minute Deals",
        "contact.booking_confidence": "Booking Confidence",
        "contact.special_occasions": "Special Occasions",
        "contact.anniversary_date": "Anniversary Date",
        date_of_birth: "Birthday",
        "contact.newsletter_opt_in": "Newsletter Opt-In",
      },
      url: window.location.href,
      title: document.title,
      path: window.location.pathname,
      userAgent: navigator.userAgent,
      trackingId: "tk_30e54fcd7be74054aa0ba3ddddda0faa",
      locationId: "qlxDlDHXX8eJ6lZDv2F7",
      sessionId: crypto.randomUUID(),
      properties: {
        deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      },
    };

    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        version: "2021-07-28",
      },
      body: JSON.stringify(trackingPayload),
    }).catch(() => {});

    // Item #52 — Tag write via n8n webhook bridge.
    // Fires alongside the existing tracking call. The n8n workflow
    // looks up the contact by email, removes any tags in
    // SURVEY_TAG_LIST that are not in tagsToApply, and applies
    // tagsToApply (wipe-and-replace scoped to survey tags only).
    const tagsToApply = deriveTagsFromPreferences(
      {
        cruiseLines: selectedLines,
        departurePorts: q2Ports,
        cruiseLength: q3Length,
        cruiseFrequency: q4Frequency,
        priceRange: q7Price,
        contactMethod: q11Contact,
        presentationPreference: q10Presentation,
        groupCruises: q12Group,
        internationalCruises: q13Intl,
        lastMinuteDeals: q14LastMinute,
        drinksPackage: drinksPackage,
        bookingConfidence: q15Confidence,
        cabinType: q6Cabin,
        whoTravels: q5Companions,
        onboardExperience: q8Exp,
        specialOccasions: q16Occasions,
      },
      newsletterOptIn  // boolean from Final Step checkbox
    );

    fetch(N8N_TAG_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        tagsToApply: tagsToApply,
        surveyTagList: SURVEY_TAG_LIST,
        locationId: "qlxDlDHXX8eJ6lZDv2F7",
      }),
    }).catch(() => {});

    // Save to local storage so the Profile Hub can display it immediately
    try {
      const existingStr = localStorage.getItem('crm_user_preferences');
      const existing = existingStr ? JSON.parse(existingStr) : {};
      localStorage.setItem('crm_user_preferences', JSON.stringify({
        ...existing,
        cruiseLines: selectedLines,
        departurePorts: q2Ports,
        cruiseLength: q3Length,
        cruiseFrequency: q4Frequency,
        priceRange: q7Price,
        contactMethod: q11Contact,
        presentationPreference: q10Presentation,
        groupCruises: q12Group,
        internationalCruises: q13Intl,
        lastMinuteDeals: q14LastMinute,
        drinksPackage: drinksPackage,
        bookingConfidence: q15Confidence,
        cabinType: q6Cabin,
        whoTravels: q5Companions,
        onboardExperience: q8Exp,
        specialOccasions: q16Occasions,
        birthday: birthday ? formatAmericanDate(birthday) : "",
        anniversary: anniversary ? formatAmericanDate(anniversary) : ""
      }));
    } catch (e) {
      localStorage.setItem('crm_user_preferences', JSON.stringify({
        cruiseLines: selectedLines,
        departurePorts: q2Ports,
        cruiseLength: q3Length,
        cruiseFrequency: q4Frequency,
        priceRange: q7Price,
        contactMethod: q11Contact,
        presentationPreference: q10Presentation,
        groupCruises: q12Group,
        internationalCruises: q13Intl,
        lastMinuteDeals: q14LastMinute,
        drinksPackage: drinksPackage,
        bookingConfidence: q15Confidence,
        cabinType: q6Cabin,
        whoTravels: q5Companions,
        onboardExperience: q8Exp,
        specialOccasions: q16Occasions,
        birthday: birthday ? formatAmericanDate(birthday) : "",
        anniversary: anniversary ? formatAmericanDate(anniversary) : ""
      }));
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const toggleQ16 = (occ: string) => {
    setQ16Occasions(prev => {
      if (occ === 'Not interested') {
        return prev.includes(occ) ? [] : ['Not interested'];
      }
      const withoutNotInterested = prev.filter(e => e !== 'Not interested');
      if (withoutNotInterested.includes(occ)) {
        return withoutNotInterested.filter(e => e !== occ);
      }
      return [...withoutNotInterested, occ];
    });
  };

  const toggleLine = (line: string) => {
    setSelectedLines(prev => 
      prev.includes(line) ? prev.filter(l => l !== line) : [...prev, line]
    );
  };

  const toggleQ2 = (port: string) => {
    setQ2Ports(prev => prev.includes(port) ? prev.filter(p => p !== port) : [...prev, port]);
  };

  const toggleQ3 = (length: string) => {
    setQ3Length(prev => prev.includes(length) ? prev.filter(l => l !== length) : [...prev, length]);
  };

  const toggleQ5 = (comp: string) => {
    setQ5Companions(prev => prev.includes(comp) ? prev.filter(c => c !== comp) : [...prev, comp]);
  };

  const toggleQ6Cabin = (option: string) => {
    setQ6Cabin(prev => 
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const toggleQ8 = (exp: string) => {
    setQ8Exp(prev => {
      if (prev.includes(exp)) return prev.filter(e => e !== exp);
      if (prev.length >= 2) return prev; // Limit to 2 selections
      return [...prev, exp];
    });
  };

  const totalQuestions = 18;
  const answeredQuestions = [
    selectedLines.length > 0,
    q2Ports.length > 0,
    q3Length.length > 0,
    q4Frequency !== "",
    q5Companions.length > 0,
    q6Cabin.length > 0,
    q7Price !== "",
    q8Exp.length > 0,
    drinksPackage !== "",
    q10Presentation !== "",
    q11Contact !== "",
    q12Group !== "",
    q13Intl !== "",
    q14LastMinute !== "",
    q15Confidence !== "",
    q16Occasions.length > 0,
    name.trim() !== "",
    email.trim() !== ""
  ].filter(Boolean).length;
  const progressPercentage = Math.round((answeredQuestions / totalQuestions) * 100);

  useEffect(() => {
    if (answeredQuestions === totalQuestions && showValidationError) {
      setShowValidationError(false);
    }
  }, [answeredQuestions, totalQuestions, showValidationError]);

  if (isSuccess) {
    const [firstName, ...lastNameParts] = name.trim().split(' ');
    const lastName = lastNameParts.join(' ');

    return (
      <div className="premium-onboarding-page min-h-screen bg-gray-50 py-12 px-4">
        <div className="container max-w-3xl mx-auto animate-in fade-in zoom-in duration-500">
          <div className="text-center mb-10">
            <CheckCircle2 className="w-20 h-20 text-[#119d0d] mx-auto mb-4" />
            <h1 className="font-heading text-4xl font-bold text-[#0f2d5a] mb-4">Profile Saved Successfully!</h1>
            <p className="text-xl text-gray-600">
              We've securely stored your preferences and sent a confirmation email to <strong>{email}</strong>.
            </p>
            <p className="text-gray-500 mt-2">Here is a preview of the email on its way to your inbox:</p>
          </div>

          {/* Email Preview Container */}
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 text-left font-sans text-gray-800 text-[15px] leading-relaxed max-w-[800px] mx-auto">
            {/* Email Header / Browser Chrome */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-semibold text-gray-600 ml-2">Our copy of S.A.I.L. Club preferences</div>
            </div>

            <div className="p-0 sm:p-8 bg-[#f0f4f8]">
              <div className="bg-white max-w-2xl mx-auto shadow-sm border border-gray-100">
                {/* Email Banner */}
                <div className="bg-[#17417f] px-8 py-8 flex items-center justify-center border-b-[6px] border-[#f4b400]">
                  <img src="https://vibe.filesafe.space/1778337067611735212/attachments/291a6e47-2d1f-49b6-875e-b47c4ed26777.png" alt="Dream Team Vacations" className="h-12 object-contain brightness-0 invert" />
                </div>

                {/* Email Body */}
                <div className="p-8 md:p-12">
                  <p className="mb-5">Hi {firstName || 'there'},</p>
                  <p className="mb-8">Below is the information you provided for your S.A.I.L. Club Member Preferences. Please take a moment to review this and make sure everything looks accurate.</p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your General Information:</h3>
                  <p className="mb-1">First name: <strong>{firstName || 'Not provided'}</strong></p>
                  <p className="mb-1">Last name: <strong>{lastName || 'Not provided'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your Cruise Line Preferences</h3>
                  <p className="mb-1">Cruise lines you'd like us to include: <strong>{selectedLines.join(', ') || 'None selected'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your Departure Port Preferences</h3>
                  <p className="mb-1">Preferred Florida ports: <strong>{q2Ports.join(', ') || 'None selected'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your Cruise Length & Cabin Preferences</h3>
                  <p className="mb-1">Cruise lengths that fit you best: <strong>{q3Length.join(', ') || 'None selected'}</strong></p>
                  <p className="mb-1">Cabin types to focus on first: <strong>{q6Cabin.join(', ') || 'None selected'}</strong></p>
                  <p className="mb-1">Comfortable per-person price range: <strong>{q7Price || 'None selected'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your Onboard Experience Preferences</h3>
                  <p className="mb-1">What matters most to you onboard: <strong>{q8Exp.join(', ') || 'None selected'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">How You&apos;d Like Results Presented</h3>
                  <p className="mb-1">Preferred alert cadence: <strong>{q10Presentation || 'None selected'}</strong></p>
                  <p className="mb-1">Preferred contact method: <strong>{q11Contact || 'None selected'}</strong></p>

                  <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Optional Preferences You&apos;ve Shared</h3>
                  <p className="mb-1 font-semibold text-[#17417f] mt-4">Drinks Package</p>
                  <p className="mb-1">Drinks package preference: <strong>{drinksPackage || 'None selected'}</strong></p>

                  <p className="mb-1 font-semibold text-[#17417f] mt-4">Hosted Group Cruises</p>
                  <p className="mb-1">Interest in Dream Team Vacations group cruises: <strong>{q12Group || 'None selected'}</strong></p>

                  <p className="mb-1 font-semibold text-[#17417f] mt-4">International & River Cruises</p>
                  <p className="mb-1">Interest in international or river cruises: <strong>{q13Intl || 'None selected'}</strong></p>

                  <p className="mb-1 font-semibold text-[#17417f] mt-4">Last-Minute Deals</p>
                  <p className="mb-1">Interest in last-minute deals: <strong>{q14LastMinute || 'None selected'}</strong></p>

                  {q16Occasions.length > 0 && (
                    <>
                      <h3 className="font-bold text-lg text-[#0f2d5a] mt-8 mb-3">Your Celebrations</h3>
                      <p className="mb-1">Celebrations you&apos;d like us to be mindful of: <strong>{q16Occasions.join(', ')}</strong></p>
                      {q16Occasions.includes('My Birthday') && birthday && <p className="mb-1">Birthday: <strong>{formatAmericanDate(birthday)}</strong></p>}
                      {q16Occasions.includes('My Anniversary') && anniversary && <p className="mb-1">Anniversary: <strong>{formatAmericanDate(anniversary)}</strong></p>}
                    </>
                  )}

                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="mb-5">If everything above looks correct, there&apos;s nothing you need to do right now.</p>
                    <p className="mb-5">If you&apos;d like to make any changes or updates, simply reply to this email or let us know the next time we connect.</p>
                    <p className="mb-10">We&apos;ll continue keeping an eye on options that align with what you&apos;ve shared.</p>
                    
                    <p className="mb-5">Cheers!</p>
                    <p className="font-bold text-lg mb-8 text-[#0f2d5a]">Janet 😊</p>
                    
                    <div className="text-sm text-gray-500 leading-relaxed">
                      <p>--</p>
                      <p className="mt-2 text-gray-800">Janet Parks</p>
                      <p>Travel Agent</p>
                      <p className="font-bold text-[#0f2d5a]">Dream Team Vacations</p>
                      <p>S.A.I.L. Club™ Guidance Team</p>
                      <p className="text-[#3871c1] underline">Janet@DreamTeamVacations.com</p>
                      <p className="text-[#3871c1] underline">www.DreamTeamVacations.com</p>
                      <p>352-640-9455</p>
                      <p className="mt-4 italic">Florida Seller of Travel #ST43972</p>
                    </div>
                  </div>
                </div>

                {/* Email Footer */}
                <div className="bg-[#17417f] px-8 py-10 text-white/70 text-xs text-center">
                  <p className="mb-5">Copyright © 2026 Dream Team Vacations, All rights reserved.</p>
                  <p className="mb-1">Our mailing address is:</p>
                  <p className="mb-5">881 Carrabella Ter, The Villages, FL</p>
                  <p className="mb-1">Want to change how you receive these emails?</p>
                  <p>You can <a href="#" className="underline hover:text-white">unsubscribe from this list</a>.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center pb-12">
            <a href="/dashboard" className="inline-block bg-[#f4b400] text-[#0f2d5a] px-10 py-5 rounded-full font-heading text-xl font-bold shadow-[0_8px_20px_rgba(244,180,0,0.3)] hover:scale-105 transition-transform active:scale-95">
              Continue to Member Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="premium-onboarding-page">
      <div className="header relative">
        <h1>Welcome to S.A.I.L. Club Premium™!</h1>
        <p>Step 1: Let's set up your personal cruise profile.</p>
        
        <button 
          onClick={() => {
            setName("Julian Parks");
            setEmail("julian@example.com");
            setSelectedLines(["Celebrity Cruises", "Royal Caribbean"]);
            setQ2Ports(["Orlando (Port Canaveral)"]);
            setQ3Length(["7 Nights"]);
            setQ6Cabin(["Balcony"]);
            
            // Save to local storage so Profile Hub gets it
            try {
              const existingStr = localStorage.getItem('crm_user_preferences');
              const existing = existingStr ? JSON.parse(existingStr) : {};
              localStorage.setItem('crm_user_preferences', JSON.stringify({
                ...existing,
                cruiseLines: ["Celebrity Cruises", "Royal Caribbean"],
                departurePorts: ["Orlando (Port Canaveral)"],
                cruiseLength: ["7 Nights"],
                cruiseFrequency: "1-2 times a year",
                priceRange: "Under $700",
                contactMethod: "Email",
                groupCruises: "Maybe — I'm open to hearing about them",
                internationalCruises: "Maybe — open to learning",
                lastMinuteDeals: "Maybe — depends on the deal",
                bookingConfidence: "Somewhat confident — appreciate guidance",
                cabinType: "Balcony only",
                whoTravels: ["Just me & my spouse/partner"],
                birthday: "",
                anniversary: ""
              }));
            } catch (e) {
              localStorage.setItem('crm_user_preferences', JSON.stringify({
                cruiseLines: ["Celebrity Cruises", "Royal Caribbean"],
                departurePorts: ["Orlando (Port Canaveral)"],
                cruiseLength: ["7 Nights"],
                cruiseFrequency: "1-2 times a year",
                priceRange: "Under $700",
                contactMethod: "Email",
                groupCruises: "Maybe — I'm open to hearing about them",
                internationalCruises: "Maybe — open to learning",
                lastMinuteDeals: "Maybe — depends on the deal",
                bookingConfidence: "Somewhat confident — appreciate guidance",
                cabinType: "Balcony only",
                whoTravels: ["Just me & my spouse/partner"],
                birthday: "",
                anniversary: ""
              }));
            }
            
            setIsSuccess(true);
          }}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-all"
        >
          👀 Skip to Email Preview
        </button>
      </div>

      <div className="container relative">
        <div className="mb-6 rounded-xl bg-secondary/10 border border-secondary/20 p-4 text-center">
          <p className="text-sm font-semibold text-secondary-foreground">
            Please answer all questions to get your best cruise recommendations. The more we know, the better we can match you.
          </p>
        </div>
        <div className="sticky top-4 z-50 mb-8 rounded-xl bg-white p-4 shadow-lg border border-border">
          <div className="mb-2 flex items-center justify-between text-sm font-bold text-primary">
            <span>Profile Completion</span>
            <span>{progressPercentage}%</span>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
            <div 
              className="h-full bg-[#119d0d] transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          {progressPercentage === 100 && (
            <p className="mt-2 text-center text-xs font-bold text-[#119d0d] animate-in fade-in">
              🎉 Profile Complete! Ready to save.
            </p>
          )}
        </div>

        {showValidationError && missingQuestions.length > 0 && (
          <div style={{ backgroundColor: '#ffffff', maxWidth: '60%', margin: '0 auto 2rem auto', border: '2px solid #dc2626', borderRadius: '0.75rem', padding: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', position: 'relative', zIndex: 50 }}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-destructive mb-2">Please complete the following questions:</h4>
                <ul className="list-disc pl-5 text-sm text-destructive/90 space-y-1">
                  {missingQuestions.map(q => (
                    <li key={q.id} className="cursor-pointer hover:underline" onClick={() => document.getElementById(q.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                      {q.label}
                    </li>
                  ))}
                </ul>
              </div>
              <button type="button" onClick={() => setShowValidationError(false)} className="text-destructive/70 hover:text-destructive p-1 rounded-full hover:bg-destructive/10 transition-colors" aria-label="Dismiss">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
          </div>
        )}

        <form onSubmit={handleSurveySubmit} className="interactive-survey-sample" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Q1 */}
          <div id="question-q1">
            <h3 className="survey-question">Q1. Which cruise lines would you like us to include for you? (Select all that apply)<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Celebrity Cruises', 
                'Royal Caribbean', 
                'Norwegian Cruise Line (NCL)', 
                'Princess Cruises', 
                'Holland America Line',
                'MSC Cruises',
                'Carnival Cruise Line',
                'Disney Cruise Line',
                'Virgin Voyages',
                'Oceania Cruise Line',
                "I'm open to reviewing any line"
              ].map(line => (
                <button
                  type="button"
                  key={line}
                  onClick={() => toggleLine(line)}
                  className={`survey-option-card ${selectedLines.includes(line) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{line}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Q2 */}
          <div id="question-q2">
            <h3 className="survey-question">Q2. Which Florida departure ports are you willing to sail from? (Select all that apply)<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Orlando (Port Canaveral)',
                'Tampa',
                'Miami',
                'Fort Lauderdale (Port Everglades)',
                'Jacksonville'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ2(opt)}
                  className={`survey-option-card ${q2Ports.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div id="question-q3">
            <h3 className="survey-question">Q3. What is your ideal cruise length? (Select all that apply)<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                '3-6 Nights (Quick Getaway)',
                '7 Nights (Week Escape)',
                '8+ Nights (Grand Journey)'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ3(opt)}
                  className={`survey-option-card ${q3Length.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q4 */}
          <div id="question-q4">
            <h3 className="survey-question">Q4. How often do you typically cruise?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'First time cruiser',
                'Once every few years',
                '1-2 times a year',
                '3+ times a year'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ4Frequency(opt)}
                  className={`survey-option-card ${q4Frequency === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q4Frequency === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q5 */}
          <div id="question-q5">
            <h3 className="survey-question">Q5. Who travels with you? (Select all that apply)<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Just me & my spouse/partner',
                'Solo traveler',
                'Family with children/teens',
                'Group of friends',
                'Larger group (8+, milestone trips)'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ5(opt)}
                  className={`survey-option-card ${q5Companions.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q6 */}
          <div id="question-q6">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="survey-question mb-0">Q6. What type of cabin do you typically prefer?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Select all that apply</span>
            </div>
            <div className="survey-options-grid">
              {[
                'Interior',
                'Oceanview',
                'Balcony',
                'Suite',
                'Luxury enclave — The Retreat, Yacht Club, The Haven, Suite Neighborhood (Coming Soon)'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ6Cabin(opt)}
                  className={`survey-option-card ${q6Cabin.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox">
                    {q6Cabin.includes(opt) && <div className="survey-option-checkbox-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q7 */}
          <div id="question-q7">
            <h3 className="survey-question">Q7. Is there a per-person price range where you feel most comfortable reviewing options?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Under $700',
                '$700–$1,000',
                '$1,000–$1,400',
                '$1,400+',
                'I prefer not to set a range'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ7Price(opt)}
                  className={`survey-option-card ${q7Price === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q7Price === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q8 */}
          <div id="question-q8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
              <h3 className="survey-question" style={{ marginBottom: 0 }}>Q8. Which onboard experience matters most to you?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
              <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 'bold' }}>Select up to 2</span>
            </div>
            <div className="survey-options-grid">
              {[
                'Modern / newer ships',
                'Relaxed & quiet atmosphere',
                'Premium dining & service',
                'Lively / energetic onboard feel',
                'Easy navigation & fewer crowds',
                'Ship quality matters more than price'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ8(opt)}
                  className={`survey-option-card ${q8Exp.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q9 */}
          <div id="question-q9">
            <h3 className="survey-question">Q9. Do you typically want a drinks package on cruises?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                "Yes — I prefer all-inclusive drinks",
                "Sometimes — depends on the cruise length or price",
                "No — I prefer pay-as-you-go",
                "I don't drink alcohol, so I don't need it"
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setDrinksPackage(opt)}
                  className={`survey-option-card ${drinksPackage === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {drinksPackage === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q10 */}
          <div id="question-q10">
            <h3 className="survey-question">Q10. How often would you like us to send you the best cruise deals?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Daily — send alerts as soon as you find them',
                'Weekly — bundle the best into one email',
                'Only when something exceptional pops up'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ10Presentation(opt)}
                  className={`survey-option-card ${q10Presentation === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q10Presentation === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q11 */}
          <div id="question-q11">
            <h3 className="survey-question">Q11. How would you like us to contact you when we have updates or questions?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Email',
                'Text message',
                'Phone call',
                'Email or text is fine',
                'No preference'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ11Contact(opt)}
                  className={`survey-option-card ${q11Contact === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q11Contact === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q12 */}
          <div id="question-q12">
            <h3 className="survey-question">Q12. Would you like us to notify you when Dream Team Vacations hosts a group cruise that fits your preferences?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                "Yes — I'd like to be notified if one fits",
                "Maybe — I'm open to hearing about them",
                "No — I prefer individual sailings only"
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ12Group(opt)}
                  className={`survey-option-card ${q12Group === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q12Group === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q13 */}
          <div id="question-q13">
            <h3 className="survey-question" style={{ marginBottom: '0.5rem' }}>Q13. Would you like us to also keep an eye out for international or river cruises that may interest you?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: '"Source Sans 3", sans-serif' }}>
              (Examples: Viking River, European rivers, small-ship international sailings)
            </p>
            <div className="survey-options-grid">
              {[
                'Yes — interested',
                'Maybe — open to learning',
                'No — Florida-based cruising only'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ13Intl(opt)}
                  className={`survey-option-card ${q13Intl === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q13Intl === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q14 Last Minute */}
          <div id="question-q14">
            <h3 className="survey-question">Q14. Are you interested in last-minute cruise deals?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Yes — I can travel on short notice',
                'Maybe — depends on the deal',
                'No — I need to plan ahead'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ14LastMinute(opt)}
                  className={`survey-option-card ${q14LastMinute === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q14LastMinute === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q15 Confidence */}
          <div id="question-q15">
            <h3 className="survey-question">Q15. How confident do you already feel about cruising?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="survey-options-grid">
              {[
                'Very confident — just want confirmation',
                'Somewhat confident — appreciate guidance',
                'Still figuring things out'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setQ15Confidence(opt)}
                  className={`survey-option-card ${q15Confidence === opt ? 'selected' : ''}`}
                >
                  <div className="survey-option-radio">
                    {q15Confidence === opt && <div className="survey-option-radio-inner" />}
                  </div>
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q16 Occasions */}
          <div id="question-q16">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '1.5rem' }}>
              <h3 className="survey-question" style={{ marginBottom: 0 }}>Q16. Are there any special occasions you'd like us to keep in mind when reviewing cruise options for you?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
              <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 'bold' }}>Select all that apply</span>
            </div>
            <div className="survey-options-grid">
              {[
                'My Birthday',
                'My Anniversary'
              ].map(opt => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggleQ16(opt)}
                  className={`survey-option-card ${q16Occasions.includes(opt) ? 'selected' : ''}`}
                >
                  <div className="survey-option-checkbox" />
                  <span className="survey-option-label">{opt}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q17 Birthday */}
          {q16Occasions.includes('My Birthday') && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <h3 className="survey-question">Q17. When is your birthday?</h3>
              <input
                type="date"
                className="w-full p-4 rounded-lg border-2 border-[#e5e7eb] focus:border-[#f4b400] focus:ring-0 outline-none transition-colors font-sans text-base text-[#374151] placeholder:text-[#9ca3af]"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
          )}

          {/* Q18 Anniversary */}
          {q16Occasions.includes('My Anniversary') && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300">
              <h3 className="survey-question">Q18. When is your Anniversary?</h3>
              <input
                type="date"
                className="w-full p-4 rounded-lg border-2 border-[#e5e7eb] focus:border-[#f4b400] focus:ring-0 outline-none transition-colors font-sans text-base text-[#374151] placeholder:text-[#9ca3af]"
                value={anniversary}
                onChange={(e) => setAnniversary(e.target.value)}
              />
            </div>
          )}
          {/* Contact Info & Submit */}
          <div id="question-final" className="pt-6 border-t-2 border-[#e5e7eb]">
            <h3 className="survey-question" style={{ marginBottom: "1rem" }}>Final Step: Where should we send your filtered alerts?<span className="ml-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Required</span></h3>
            <div className="space-y-4">
              <input
                type="text"
                required
                className="w-full p-4 rounded-lg border-2 border-[#e5e7eb] focus:border-[#f4b400] focus:ring-0 outline-none transition-colors font-sans text-base text-[#374151] placeholder:text-[#9ca3af]"
                placeholder="Your Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                required
                className="w-full p-4 rounded-lg border-2 border-[#e5e7eb] focus:border-[#f4b400] focus:ring-0 outline-none transition-colors font-sans text-base text-[#374151] placeholder:text-[#9ca3af]"
                placeholder="Your Best Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex items-start gap-3 px-1 py-2">
                <input
                  type="checkbox"
                  id="newsletterOptIn"
                  checked={newsletterOptIn}
                  onChange={(e) => setNewsletterOptIn(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-[#e5e7eb] text-[#f4b400] focus:ring-[#f4b400]"
                />
                <label htmlFor="newsletterOptIn" className="text-sm text-[#4b5563] leading-snug cursor-pointer">
                  Send me The Cruise Facts™ Newsletter — weekly tips, pricing trends, and community updates
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 flex items-center justify-center rounded-lg py-4 font-heading text-lg font-bold transition-all text-[#0f2d5a]"
                style={{
                  background: "linear-gradient(180deg, #ffd84d 0%, #f4b400 60%, #d9a200 100%)",
                  boxShadow: "0 4px 0 #a87a00"
                }}
              >
                {isSubmitting ? "Saving Profile..." : "Save My Preference Profile"}
              </button>
            </div>
          </div>
        </form>
        <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "0.9rem", marginTop: "1rem" }}>
          Your answers are securely stored in your member profile
        </p>
      </div>
    </div>
  );
};

export default PremiumOnboarding;
