export type ServiceItem = { title: string; intro: string; points: string[] };

export const siteNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about/' },
  { label: 'Services', path: '/services/' },
  { label: 'General', path: '/general/' },
  { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry/' },
  { label: 'Surgical Dentistry', path: '/surgical-dentistry/' },
  { label: 'Contact', path: '/contact/' },
  { label: 'New Patient', path: '/patient/' },
];

export const links = {
  phone: 'tel:+923343571377',
  whatsapp: 'https://wa.me/923343571377',
  email: 'mailto:info@drranaobaiddentalsurgery.com',
  tajMap: 'https://www.google.com/maps/place/Taj+Medical+Complex/@24.867571,67.030514,16z/data=!4m6!3m5!1s0x3eb33e693df39435:0xe17ee037b8f21bc1!8m2!3d24.8678434!4d67.0305876!16s%2Fg%2F1tsr1n_y?hl=en-GB&entry=ttu',
  cliftonMap: 'https://www.google.com/maps/place/Plot+F+32,+Block+8+Clifton,+Karachi,+75600,+Pakistan/@24.8297482,67.0361143,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33dc9c3ed76e3:0xc207874554568caf!8m2!3d24.8297434!4d67.0386892!16s%2Fg%2F11dzqn14th?entry=ttu',
};

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/dr_rana_obaid?igsh=MXhlZmhvZWVxcWFoeA%3D%3D&utm_source=qr' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1D4C9qfd6d/?mibextid=wwXIfr' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rana-obaid-83117625a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { label: 'YouTube', href: 'https://www.youtube.com/@TRAVELWITHDRRANAOBAID' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@dr.rana.obaid?_t=ZS-8zCq62n2ibX&_r=1' },
  { label: 'Google', href: 'https://share.google/rnR8y6YIkYuGr2QbK' },
];

export const doctorsBio = `Dr. Rana Obaid completed his Bachelor of Dental Surgery (BDS) from Hamdard University in 2018 and went on to pursue MCPS training in Oral & Maxillofacial Surgery at Abbasi Shaheed Hospital (2019–2021), where he gained extensive experience in managing complex oral surgical procedures and trauma cases.\n\nIn 2019, he established Dr. Rana Obaid Dental Surgery Clinic with the vision of providing high-quality, patient-centered dental care in a safe and comfortable environment. Over the years, he has had the privilege of helping patients restore their oral health, overcome pain, and regain confidence in their smiles.\n\nDr. Rana Obaid strongly believes in combining professional expertise with compassion. Every patient who walks into his clinic is treated with respect, empathy, and individualized attention. His goal is not only to treat but also to educate patients so they feel confident about their oral health decisions.`;

export const focusAreas = [
  'Surgical wisdom tooth extractions — ensuring safe and comfortable removal of impacted teeth.',
  'Dental implants — restoring function and aesthetics with precision and long-lasting results.',
  'Trauma management — treating facial injuries with precision and care.',
  'Biopsies — early detection and diagnosis of oral pathologies.',
  'Cyst enucleation and management — restoring oral health through specialized surgical care.',
];

export const hours = [
  { days: 'Monday to Thursday', time: '11am to 10 pm' },
  { days: 'Friday', time: '3pm to 10 pm' },
  { days: 'Saturday', time: '11am to 10 pm' },
  { days: 'Sunday', time: 'Closed' },
];

export const locations = [
  {
    name: 'Taj Medical Complex',
    label: 'Saddar · Karachi',
    address: 'Taj Medical Complex, 3rd floor, Room #14, MA Jinnah Road, Karachi, Pakistan.',
    hours: [
      { days: 'Monday to Thursday', time: '11am to 10 pm' },
      { days: 'Friday', time: '3pm to 10 pm' },
      { days: 'Saturday', time: '11am to 10 pm' },
    ],
    map: links.tajMap,
  },
  {
    name: 'Mothercare Maternity Home',
    label: 'Clifton · Karachi',
    address: 'Mothercare Maternity Home, F-32/2, Block-8, Karachi.',
    hours: [
      { days: 'Monday to Thursday', time: '12 pm to 5 pm' },
      { days: 'Friday', time: 'Off' },
      { days: 'Saturday', time: '12 pm to 5 pm' },
    ],
    map: links.cliftonMap,
  },
];

export const generalServices: ServiceItem[] = [
  { title: 'Dental Examinations & Checkups', intro: 'Regular dental checkups are essential for early detection and prevention of oral health problems.', points: ['Examine teeth, gums, and mouth for cavities, gum disease, and other concerns', 'Take X-rays when needed to detect hidden issues', 'Provide personalized recommendations for your oral care'] },
  { title: 'Professional Teeth Cleaning', intro: 'Even with daily brushing and flossing, plaque and tartar can build up over time.', points: ['Remove plaque and tartar deposits', 'Polish teeth for a smooth, fresh feel', 'Prevent gum disease and cavities'] },
  { title: 'Fillings & Restorations', intro: 'If you have a cavity or damaged tooth, fillings restore both function and appearance.', points: ['Tooth-colored (composite) fillings for a natural look', 'Durable materials that strengthen and protect your teeth'] },
  { title: 'Extractions (Tooth Removal)', intro: 'Sometimes, a tooth cannot be saved due to decay, damage, or infection.', points: ['A comfortable and safe procedure', 'Proper aftercare to support healing', 'Options for tooth replacement if needed'] },
  { title: 'Gum Disease Treatment', intro: 'Healthy gums are the foundation of a healthy smile.', points: ['Reduce gum inflammation and bleeding', 'Prevent further damage to teeth and bone', 'Improve overall oral health'] },
  { title: 'Root Canal Therapy', intro: 'When tooth decay or infection reaches the nerve, a root canal may be required.', points: ['Relieve pain and sensitivity', 'Save your natural tooth', 'Prevent the need for extraction'] },
  { title: 'Pediatric Dentistry', intro: 'We make dental visits comfortable and fun for kids.', points: ['Gentle cleanings and exams', 'Preventive treatments (fluoride, sealants)', 'Guidance for parents on children’s oral hygiene'] },
  { title: 'Preventive Dentistry', intro: 'We focus on preventing dental issues before they become serious.', points: ['Fluoride treatments to strengthen enamel', 'Dental sealants to protect against cavities', 'Personalized oral hygiene instructions'] },
  { title: 'Dental X-rays', intro: 'Digital X-rays give us a clear picture of your oral health.', points: ['Detect cavities and infections early', 'Monitor bone health and tooth alignment', 'Plan accurate treatment'] },
  { title: 'Emergency Dental Care', intro: 'Dental emergencies can happen anytime.', points: ['Severe toothaches', 'Broken or knocked-out teeth', 'Swelling or infections'] },
];

export const cosmeticServices: ServiceItem[] = [
  { title: 'Teeth Whitening', intro: 'Brighten your smile with safe and effective whitening treatments.', points: ['In-office whitening for results in one visit', 'Take-home whitening kits for gradual brightening', 'Removes stains caused by coffee, tea, wine, smoking, and aging'] },
  { title: 'Dental Veneers', intro: 'Thin, custom-made porcelain or composite shells that cover the front of teeth to improve shape, color, and alignment.', points: ['Correct chipped, stained, or misshaped teeth', 'Create a uniform, natural-looking smile', 'Provide long-lasting aesthetic results'] },
  { title: 'Dental Bonding', intro: 'A quick and affordable way to fix minor imperfections with tooth-colored resin.', points: ['Repairing chips and cracks', 'Closing small gaps', 'Reshaping uneven teeth'] },
  { title: 'Smile Makeover', intro: 'A personalized combination of cosmetic treatments designed to transform your smile.', points: ['Veneers, whitening, bonding, or crowns', 'Orthodontic or alignment treatments', 'Customized plan to achieve your dream smile'] },
  { title: 'Invisalign® (Clear Aligners)', intro: 'Straighten your teeth discreetly without traditional braces.', points: ['Clear, removable aligners for comfort and convenience', 'Effective for correcting crowding, gaps, and bite issues', 'A nearly invisible way to achieve a straighter smile'] },
  { title: 'Dental Crowns', intro: 'Crowns can protect damaged teeth and improve their appearance.', points: ['Cover severely discolored or misshaped teeth', 'Strengthen and beautify broken teeth', 'Provide a natural, seamless look'] },
  { title: 'Gum Contouring', intro: 'For patients with a “gummy smile” or uneven gum lines.', points: ['Reshape gum tissue for better proportions', 'Enhance overall smile aesthetics', 'Improve balance between teeth and gums'] },
  { title: 'Tooth-Colored Fillings', intro: 'Unlike silver fillings, tooth-colored (composite) fillings blend naturally with your smile.', points: ['Durable and aesthetic', 'Suitable for front or back teeth', 'A mercury-free alternative'] },
  { title: 'Digital Smile Design', intro: 'Advanced digital technology can show you what your smile may look like after treatment.', points: ['Plan cosmetic procedures with precision', 'Customize results to your facial features', 'Give you confidence before starting treatment'] },
  { title: 'Full Mouth Rehabilitation', intro: 'For patients with multiple dental issues, full mouth rehabilitation combines restorative and cosmetic dentistry.', points: ['Restore function, health, and beauty', 'Rebuild worn or damaged teeth', 'Create a confident, radiant smile'] },
];

export const surgicalServices: ServiceItem[] = [
  { title: 'Wisdom Tooth Removal', intro: 'Wisdom teeth may become impacted or cause crowding, pain, or infections.', points: ['Relieve pain and swelling', 'Help prevent infection and damage to nearby teeth', 'Improve oral health and comfort'] },
  { title: 'Complicated Tooth Extractions', intro: 'When a tooth cannot be removed by simple extraction because it is broken, decayed, or stuck in the bone, surgical extraction may be required.', points: ['Gentle removal with minimal discomfort', 'Preservation of surrounding bone and gum tissue', 'Careful aftercare guidance for healing'] },
  { title: 'Dental Implants', intro: 'A permanent solution for missing teeth that restores function and appearance.', points: ['Natural look and feel', 'Long-lasting and durable solution', 'Helps maintain bone strength and facial structure'] },
  { title: 'Bone Grafting', intro: 'If the jawbone is too thin or weak to support implants, bone grafting may be necessary.', points: ['Rebuild and strengthen jawbone', 'Prepare for successful implant placement', 'Improve facial aesthetics'] },
  { title: 'Apicoectomy (Root-End Surgery)', intro: 'When a root canal alone is not enough, a surgical apicoectomy may be performed.', points: ['Eliminate infection', 'Save the natural tooth', 'Help prevent reinfection'] },
  { title: 'Gum Surgery', intro: 'For advanced gum disease or aesthetic concerns, gum surgery may be required.', points: ['Reshaping gum tissue', 'Reducing gum pockets', 'Restoring gum health and smile appearance'] },
  { title: 'Oral Pathology & Biopsies', intro: 'If unusual growths, lesions, or lumps are found in the mouth, a biopsy may be recommended.', points: ['Help detect oral cancer or other conditions early', 'Support accurate diagnosis and treatment', 'Protect overall health'] },
  { title: 'Jaw Surgery', intro: 'Corrective jaw surgery may be needed to fix misalignment, improve chewing, or address facial balance.', points: ['Improve bite and function', 'Relief from jaw pain or TMJ issues', 'Enhance facial symmetry'] },
  { title: 'Frenectomy', intro: 'A minor surgical procedure to remove or adjust the frenum under the tongue or upper lip.', points: ['May improve speech or feeding in children', 'May help orthodontic treatment outcomes', 'Improve comfort and oral function'] },
  { title: 'Emergency Surgical Care', intro: 'Urgent surgical needs may require prompt attention.', points: ['Facial trauma or jaw fractures', 'Severe oral infections or abscesses', 'Emergency tooth extractions'] },
];

export const faqs = [
  { question: 'Do I need an appointment?', answer: 'Yes. We urge you to call, message, or WhatsApp 0334-357-1377 to talk to our team and arrange an appointment that is convenient for you. You can also contact us to discuss scheduling; staff confirmation is needed.' },
  { question: 'Do you examine children at your clinic?', answer: 'We would like to take care of the younger generation of kids to inspire them to better manage their oral health, which can mean better overall health.' },
  { question: 'What are your clinic timings?', answer: 'The main clinic opens Monday to Thursday 11:00am to 10:00pm, Friday 3:00pm to 10:00pm and Saturday 11:00am to 10:00pm. It is closed on Sundays. Clifton branch hours differ; see the branch details above.' },
  { question: 'What should I do in an emergency?', answer: 'The original site asks emergency cases to WhatsApp 0334-357-1377 and encourages patients to come to the office for care. For urgent or life-threatening emergencies, contact local emergency services.' },
];

export const detailPages = {
  rootCanal: {
    title: 'Root Canal Treatment Karachi',
    image: '/images/Root-Canal-5-300x300.png',
    intro: 'Inside every tooth, there is a soft tissue called the pulp (contains nerves, blood vessels, and connective tissue). When the pulp becomes infected or inflamed (due to deep decay, cracks, trauma, or repeated dental work), it causes pain and swelling. In a root canal, the dentist removes the infected pulp, cleans and disinfects the inside of the tooth, and then seals it.',
    sections: [
      { title: 'When Do You Need RCT?', points: ['Severe toothache, especially while chewing.', 'Prolonged sensitivity to hot or cold.', 'Swelling or pus near the gum.', 'Tooth darkening or discoloration.', 'Deep cavity or cracked tooth.'] },
      { title: 'Benefits of Root Canal', points: ['Saves the natural tooth.', 'Stops pain and infection.', 'Restores normal chewing and appearance.', 'Prevents spread of infection to other teeth/jawbone.'] },
    ],
  },
  veneers: {
    title: 'Dental Veneers',
    image: '/images/Veeners-300x300.png',
    intro: 'Dental veneers are thin, custom-made shells of tooth-colored material that are placed on the front surface of teeth to improve their appearance. They are often made of porcelain or composite resin and are designed to look like natural teeth.',
    sections: [{ title: 'Purpose of Veneers', points: ['Cover stained or discolored teeth that cannot be whitened.', 'Fix chipped or broken teeth.', 'Improve the appearance of slightly misaligned or uneven teeth.', 'Close small gaps between teeth.', 'Enhance overall smile aesthetics.'] }],
  },
  implants: {
    title: 'Dental Implants',
    image: '/images/Implants-300x300.png',
    intro: 'Dental implants are artificial tooth roots, usually made of titanium or ceramic, that are surgically placed into the jawbone to replace missing teeth. Once the implant fuses with the bone (a process called osseointegration), it provides a strong foundation for attaching a replacement tooth, bridge, or denture.',
    sections: [
      { title: 'Main parts of a dental implant', points: ['Implant post (fixture): The screw-like part placed in the jawbone, acting as the tooth root.', 'Abutment: The connector that joins the implant post with the crown.', 'Crown: The visible artificial tooth that looks and functions like a natural tooth.'] },
      { title: 'Benefits of dental implants', points: ['Look, feel, and function like natural teeth.', 'Prevent bone loss in the jaw (which happens after losing teeth).', 'Long-lasting solution compared to bridges or dentures.', 'Do not damage neighboring teeth.', 'Improve chewing, speech, and overall confidence.'] },
    ],
  },
};
