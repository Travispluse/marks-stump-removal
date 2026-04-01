export const business = {
  name: "Mark's Stump Removal",
  phone: "(864) 214-5623",
  phoneTel: "tel:+18642145623",
  smsLink: "sms:+18642145623?body=Hi%20Mark%2C%20I%27d%20like%20a%20free%20stump%20grinding%20quote.",
  address: "1801 Hood Rd, Greer, SC 29650",
  city: "Greer",
  state: "SC",
  zip: "29650",
  rating: 5.0,
  reviewCount: 17,
  hours: "Mon–Sat: 7:00 AM – 7:00 PM",
  hoursClosed: "Sun: Closed",
  domain: "stumpremovalsc.com",
  facebook: "https://www.facebook.com/p/Marks-stump-removal-61571973964718/",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0!2d-82.2290!3d34.9380!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s1801+Hood+Rd%2C+Greer%2C+SC+29650!5e0!3m2!1sen!2sus!4v1",
};

export const testimonials = [
  { name: "David R.", text: "Great service, great price.", stars: 5 },
  { name: "Koal Moore", text: "The work was done quickly, and the area was left leveled and spotless.", stars: 5 },
];

export const services = [
  {
    title: "Stump Grinding",
    slug: "stump-grinding",
    short: "Fast, thorough grinding 6–12 inches below grade. Any size stump, any species.",
    icon: "🪵",
  },
  {
    title: "Root Removal",
    slug: "root-removal",
    short: "Surface roots, subsurface root balls, and invasive root systems removed cleanly.",
    icon: "🌿",
  },
  {
    title: "Land Clearing",
    slug: "land-clearing",
    short: "Brush removal, lot clearing, and multi-stump jobs for construction or landscaping prep.",
    icon: "🏗️",
  },
  {
    title: "Emergency Service",
    slug: "emergency",
    short: "Storm damage? Hazardous stump? We offer priority scheduling for urgent jobs.",
    icon: "⚡",
  },
];

export const faqs = [
  {
    q: "How deep do you grind stumps?",
    a: "Most stumps are ground 6–12 inches below grade. We can go deeper if needed for construction, replanting, or other projects.",
  },
  {
    q: "Can you remove roots too?",
    a: "Yes. We handle surface roots in the immediate area and can remove larger root balls by request for landscaping or construction prep.",
  },
  {
    q: "How do I get a free quote?",
    a: "The fastest way is to text us a photo of the stump at (864) 214-5623. Stand 10–15 feet back so we can see the full size and access. We'll reply with a quote, usually within hours.",
  },
  {
    q: "How long does stump grinding take?",
    a: "Most residential stumps take 30–60 minutes. Larger stumps or multi-stump jobs may take a few hours. We'll give you a time estimate with your quote.",
  },
  {
    q: "What happens to the wood chips?",
    a: "Grinding produces mulch-like wood chips. We can spread them in the hole and around your yard, or haul them off — your choice.",
  },
  {
    q: "Do I need to be home?",
    a: "Not necessarily. As long as we have clear access to the stump and prior approval, we can complete the work while you're away.",
  },
];

export interface CityData {
  name: string;
  slug: string;
  description: string;
}

export const cities: CityData[] = [
  { name: "Greenville", slug: "greenville", description: "As the heart of Upstate South Carolina, Greenville homeowners take pride in their properties. Mark's Stump Removal serves neighborhoods throughout Greenville with fast, affordable stump grinding that keeps your yard looking its best." },
  { name: "Taylors", slug: "taylors", description: "Taylors residents enjoy a suburban feel with easy access to Greenville. When a tree comes down and leaves an ugly stump behind, Mark's Stump Removal is just minutes away to grind it out quickly and cleanly." },
  { name: "Greer", slug: "greer", description: "Growing fast between Greenville and Spartanburg, Greer properties deserve stump-free yards. Mark's Stump Removal serves the Greer community with professional grinding and competitive pricing." },
  { name: "Mauldin", slug: "mauldin", description: "Mauldin's family-friendly neighborhoods deserve clean, safe yards. Mark's Stump Removal provides fast stump grinding service throughout Mauldin, removing tripping hazards and making room for new landscaping." },
  { name: "Simpsonville", slug: "simpsonville", description: "From established neighborhoods to new construction in Simpsonville, stumps don't belong in your yard. Mark's Stump Removal grinds stumps of any size with minimal disruption to your landscaping." },
  { name: "Wade Hampton", slug: "wade-hampton", description: "Wade Hampton is right next door to our Greer home base. We know these neighborhoods inside and out. When you need stump grinding in Wade Hampton, you're calling your neighbor." },
  { name: "Five Forks", slug: "five-forks", description: "Five Forks homeowners invest in their properties. Don't let an old tree stump drag down your curb appeal. Mark's Stump Removal provides clean, thorough grinding that leaves your yard ready for whatever's next." },
  { name: "Travelers Rest", slug: "travelers-rest", description: "Nestled at the base of the Blue Ridge, Travelers Rest properties often have mature trees — and sometimes the stumps they leave behind. Mark's Stump Removal handles stumps of all sizes in TR and surrounding areas." },
  { name: "Spartanburg", slug: "spartanburg", description: "Mark's Stump Removal extends service to Spartanburg and surrounding areas. Whether it's a single backyard stump or a multi-stump clearing project, we bring the same quality and fair pricing Greenville knows us for." },
  { name: "Easley", slug: "easley", description: "Easley homeowners and contractors count on Mark's Stump Removal for reliable, affordable stump grinding. We serve the entire Easley area with the same 5-star service our Greenville customers love." },
  { name: "Piedmont", slug: "piedmont", description: "Located between Greenville and Anderson, Piedmont properties get the same professional stump grinding service. Mark's Stump Removal handles any size job with careful equipment operation and clean results." },
  { name: "Powdersville", slug: "powdersville", description: "Powdersville's growing community deserves top-notch stump removal service. Mark's Stump Removal brings professional equipment and fair pricing to every job in the Powdersville area." },
  { name: "Fountain Inn", slug: "fountain-inn", description: "From historic neighborhoods to new developments, Fountain Inn residents trust Mark's Stump Removal for fast, clean stump grinding at honest prices." },
  { name: "Boiling Springs", slug: "boiling-springs", description: "Boiling Springs residents get the same 5-star stump grinding service that's earned Mark's 17 perfect Google reviews. Quick scheduling, fair prices, clean results." },
  { name: "Duncan", slug: "duncan", description: "Duncan and the surrounding I-85 corridor get prompt stump grinding from Mark's Stump Removal. We serve residential and commercial properties throughout the Duncan area." },
];
