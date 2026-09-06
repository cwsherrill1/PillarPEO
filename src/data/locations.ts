/**
 * The Carolinas metro pages. These are the only pages allowed to carry local
 * signals (city names, service-area towns, zips, geo coordinates).
 * No street address anywhere: Pillar has no verified published address.
 */

export interface Metro {
  slug: string;
  name: string;
  navLabel: string;
  state: "North Carolina" | "South Carolina";
  summary: string;
  /** Geo point for the metro served, not an office location. */
  geo: { lat: number; lng: number };
  towns: string[];
  zips: string[];
}

export const metros: Metro[] = [
  {
    slug: "charlotte-nc",
    name: "Charlotte, NC",
    navLabel: "Charlotte, NC",
    state: "North Carolina",
    summary:
      "Handbook language for the city's non-discrimination ordinance, and the cross-border problem when Charlotte firms staff up in South Carolina.",
    geo: { lat: 35.2271, lng: -80.8431 },
    towns: [
      "Charlotte",
      "Matthews",
      "Mint Hill",
      "Pineville",
      "Huntersville",
      "Cornelius",
      "Davidson",
      "Concord",
      "Harrisburg",
      "Indian Trail",
      "Waxhaw",
      "Monroe",
      "Belmont",
      "Gastonia",
      "Mooresville",
    ],
    zips: [
      "28202",
      "28203",
      "28204",
      "28207",
      "28209",
      "28210",
      "28211",
      "28226",
      "28270",
      "28277",
      "28105",
      "28078",
      "28031",
      "28036",
      "28025",
    ],
  },
  {
    slug: "rock-hill-fort-mill-sc",
    name: "Rock Hill & Fort Mill, SC",
    navLabel: "Rock Hill & Fort Mill, SC",
    state: "South Carolina",
    summary:
      "South Carolina's employer rules for firms on either side of the line: E-Verify for all employers, and wage-notice requirements NC does not have.",
    geo: { lat: 34.9249, lng: -81.0251 },
    towns: [
      "Rock Hill",
      "Fort Mill",
      "Tega Cay",
      "Indian Land",
      "Lancaster",
      "York",
      "Clover",
      "Lake Wylie",
      "Chester",
      "Van Wyck",
    ],
    zips: [
      "29730",
      "29732",
      "29715",
      "29708",
      "29707",
      "29710",
      "29745",
      "29720",
      "29706",
      "29744",
    ],
  },
  {
    slug: "raleigh-durham-nc",
    name: "Raleigh–Durham, NC",
    navLabel: "Raleigh–Durham, NC",
    state: "North Carolina",
    summary:
      "Research Triangle contractor classification, university spin-outs hiring their first employees, and public-contract wage rules.",
    geo: { lat: 35.8801, lng: -78.7881 },
    towns: [
      "Raleigh",
      "Durham",
      "Chapel Hill",
      "Cary",
      "Morrisville",
      "Apex",
      "Holly Springs",
      "Wake Forest",
      "Garner",
      "Hillsborough",
      "Research Triangle Park",
    ],
    zips: [
      "27601",
      "27603",
      "27605",
      "27607",
      "27609",
      "27612",
      "27701",
      "27703",
      "27707",
      "27713",
      "27709",
      "27511",
      "27513",
      "27560",
      "27514",
    ],
  },
];
