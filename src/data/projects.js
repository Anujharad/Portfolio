export const projects = [
  {
    id: "01",
    title: "DataFlow",
    subtitle: "Automated CSV Processing Pipeline",
    date: "Apr 2026 — May 2026",
    categories: ["ALL", "CLOUD", "FULL STACK"],
    description:
      "A serverless pipeline that automatically processes CSV files uploaded to Amazon S3 and pushes the data into DynamoDB using AWS Lambda.",
    tech: ["AWS Lambda", "Amazon S3", "DynamoDB", "Python", "AWS IAM"],
    pipeline: ["S3", "Lambda", "DynamoDB"],
    links: [],
    visual: "pipeline",
  },
  {
    id: "02",
    title: "CloudVault",
    subtitle: "Secure Product Asset Management System",
    date: "Mar 2026 — Apr 2026",
    categories: ["ALL", "CLOUD", "FULL STACK"],
    description:
      "A MERN-based product asset management platform with secure direct-to-cloud uploads and scalable image delivery via pre-signed URLs and CloudFront.",
    tech: ["Node.js", "Express", "AWS S3", "CloudFront", "Pre-signed URLs", "REST APIs", "Next.js"],
    pipeline: ["Client", "Pre-signed URL", "Amazon S3", "CloudFront"],
    links: [{ label: "View GitHub", url: "https://github.com/Anujharad/CloudVault-Secure-Product-Asset-Management-System", type: "github" }],
    visual: "architecture",
  },
  {
    id: "03",
    title: "Shree Self Driving",
    subtitle: "Car Rental Booking System",
    date: "Feb 2026 — Mar 2026",
    categories: ["ALL", "FULL STACK", "WEB"],
    description:
      "A full-stack car rental booking system with secure authentication, REST APIs, SMTP-based email notifications and a structured relational database.",
    tech: ["MySQL", "PHP", "Laravel", "Blade"],
    pipeline: [],
    links: [{ label: "Visit Live Site", url: "https://shreeselfdriving.in/", type: "live" }],
    visual: "browser",
  },
  {
    id: "04",
    title: "Phyvora",
    subtitle: "Jewellery E-commerce Platform",
    date: "Nov 2025 — Dec 2025",
    categories: ["ALL", "FULL STACK", "WEB"],
    description:
      "A jewellery e-commerce experience with storefront and admin dashboard, REST API integration, lazy loading and improved state handling.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    pipeline: [],
    links: [{ label: "Visit Live Site", url: "https://phyvora.com/", type: "live" }],
    visual: "browser",
  },
];

export const filters = ["ALL", "FULL STACK", "CLOUD", "WEB"];
