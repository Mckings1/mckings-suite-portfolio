import { CertificationCard } from "@/components/CertificationCard";

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2025",
    logo: "https://images.credly.com/images/61f56aa4-16fd-403c-90bc-1d90dba1fa99/image.png",
    credentialUrl: "https://learn.microsoft.com/en-us/users/mckings/credentials/a366fc663733ca0c",
  },
  {
    id: 2,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "2024",
    logo: "https://images.credly.com/images/e91ed0b0-842b-417f-8d2f-b07535febdda/image.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/2H9AVFUXCHPU",
  },
  {
    id: 3,
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "2024",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/c0/87a10033a311e892619b85c6fd62bb/IBM-200x48.png",
    credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/HLKX1X78DPOL",
  },
  {
    id: 4,
    title: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    date: "2023",
    logo: "https://images.credly.com/images/a2790314-008a-4c3d-9553-f5e84eb359ba/image.png",
    credentialUrl: "https://www.credly.com/badges/a1c0577e-83a2-40ea-a41e-e85a20d64c2b/linked_in_profile",
  },
  {
    id: 5,
    title: "Business Analytics – Udacity",
    issuer: "Udacity",
    date: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Udacity_logo.png",
    credentialUrl: "https://www.udacity.com/certificate/e/b4c476f0-d46a-11ed-863a-cbd777c7ee54",
  },
  {
    id: 6,
    title: "API Fundamentals Student Expert",
    issuer: "Udacity",
    date: "2023",
    logo: "https://media.badgr.com/uploads/badges/assertion-_hmzzO6vT7KbzefgTh53qg.png",
    credentialUrl: "https://badges.parchment.com/public/assertions/_hmzzO6vT7KbzefgTh53qg",
  },
  {
    id: 7,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2022",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54R8R2Q7bQbDfrSaWFaAikaajP6AaXku-Wg&s",
    credentialUrl: "https://www.freecodecamp.org/certification/mckings/responsive-web-design",
  },

    {
    id: 8,
    title: "Predictive Analytics for Business – Udacity",
    issuer: "Udacity",
    date: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Udacity_logo.png",
    credentialUrl: "https://www.udacity.com/certificate/e/3ecf14a4-ac61-11ed-85a7-2709fba6ad62",
  },

    {
    id: 9,
    title: "Data Visualization with Tableau – Udacity",
    issuer: "Udacity",
    date: "2023",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Udacity_logo.png",
    credentialUrl: "https://www.udacity.com/certificate/e/b4c476f0-d46a-11ed-863a-cbd777c7ee54",
  },
];

export default function Certifications() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Certifications</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in web development, 
            data science, cloud technologies, and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
}
