import { redirect } from "react-router-dom";

const cardData = [
  {
    id: 1,
    image: "/company/tcs.jpg",
    title: "TCS",
    description: "TCS (Tata Consultancy Services) is one of the leading IT services companies in India, known for its large-scale operations, global presence, and comprehensive IT solutions.",
    link: "/open_more/1",
    titleLink: "/title/tcs",
    para1: "TCS Overview",
    para2: "TCS provides a wide range of IT services, including consulting, software development, and business process outsourcing. With a focus on innovation and customer satisfaction, TCS has established itself as a global leader in the IT industry. This section covers the company's work culture, interview process, and key areas of expertise.",
    redirect:"https://www.geeksforgeeks.org/tcs-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 2,
    image: "/company/infosys.jpg",
    title: "Infosys",
    description: "Infosys is a global leader in technology services and consulting, known for its strong focus on innovation and a commitment to sustainability.",
    link: "/open_more/2",
    titleLink: "/title/infosys",
    para1: "Infosys Overview",
    para2: "Infosys is recognized for its robust training programs, employee development initiatives, and strong emphasis on ethical business practices. This section provides insights into Infosys's interview process, company culture, and the technological domains it specializes in.",
    redirect:"https://www.geeksforgeeks.org/infosys-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 3,
    image: "/company/wipro.webp",
    title: "Wipro",
    description: "Wipro is a leading global information technology, consulting, and business process services company with a strong commitment to sustainability and corporate social responsibility.",
    link: "/open_more/3",
    titleLink: "/title/wipro",
    para1: "Wipro Overview",
    para2: "Wipro is known for its diverse work environment, strong ethical values, and focus on client satisfaction. This section highlights Wipro's key service offerings, interview preparation tips, and the company's approach to innovation.",
    redirect:"https://www.geeksforgeeks.org/wipro-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 4,
    image: "/company/amazon.jpeg",
    title: "Amazon",
    description: "Amazon is a global e-commerce giant and cloud computing leader, known for its customer-centric approach and relentless focus on innovation.",
    link: "/open_more/4",
    titleLink: "/title/amazon",
    para1: "Amazon Overview",
    para2: "Amazon is famous for its Leadership Principles, which guide its employees in decision-making and everyday work. This section explores Amazon's rigorous interview process, work culture, and key areas of business, including e-commerce, AWS, and more.",
    redirect:"https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 5,
    image: "/company/hcl.jpg",
    title: "HCL",
    description: "HCL Technologies is a global IT services company, offering a wide range of services, including software development, infrastructure management, and business process outsourcing.",
    link: "/open_more/5",
    titleLink: "/title/hcl",
    para1: "HCL Overview",
    para2: "HCL is known for its focus on employee-first culture and client relationships. This section provides details on HCL's interview process, company culture, and the technological services it offers.",
    redirect:"https://www.geeksforgeeks.org/hcl-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 6,
    image: "/company/cognizant.webp",
    title: "Cognizant",
    description: "Cognizant is a leading provider of IT services, including digital, technology, consulting, and operations services, with a strong emphasis on innovation and customer satisfaction.",
    link: "/open_more/6",
    titleLink: "/title/cognizant",
    para1: "Cognizant Overview",
    para2: "Cognizant is renowned for its agile work environment and client-centric approach. This section discusses Cognizant's service offerings, the interview process, and the skills required to thrive in this dynamic company.",
    redirect:"https://www.geeksforgeeks.org/cognizant-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 7,
    image: "/company/facebook.jpeg",
    title: "Facebook",
    description: "Facebook (Meta) is a leading social media and technology company, known for its vast global reach, innovative products, and focus on connecting people.",
    link: "/open_more/7",
    titleLink: "/title/facebook",
    para1: "Facebook Overview",
    para2: "Facebook is famous for its open culture, emphasis on innovation, and challenging work environment. This section covers Facebook's interview process, work culture, and the technologies and products that define the company.",
    redirect:"https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 8,
    image: "/company/google.jpeg",
    title: "Google",
    description: "Google is a global technology leader, known for its search engine, advertising services, and a wide array of products and services that shape the digital world.",
    link: "/open_more/8",
    titleLink: "/title/google",
    para1: "Google Overview",
    para2: "Google is renowned for its innovative approach, strong focus on user experience, and a culture that encourages creativity and collaboration. This section explores Google's interview process, work culture, and the groundbreaking projects it leads.",
    redirect:"https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 9,
    image: "/company/apple.jpg",
    title: "Apple",
    description: "Apple is a global leader in consumer electronics, software, and services, known for its innovative products, including the iPhone, Mac, and iPad.",
    link: "/open_more/9",
    titleLink: "/title/apple",
    para1: "Apple Overview",
    para2: "Apple is synonymous with innovation, design excellence, and a focus on user experience. This section covers Apple's interview process, company culture, and the key products and services that have made Apple a household name.",
    redirect:"https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/"
  },
  {
    id: 10,
    image: "/company/netflix.jpg",
    title: "Netflix",
    description: "Netflix is a leading streaming entertainment service, known for its vast content library, original programming, and data-driven approach to content creation.",
    link: "/open_more/10",
    titleLink: "/title/netflix",
    para1: "Netflix Overview",
    para2: "Netflix is recognized for its innovative culture, focus on freedom and responsibility, and a relentless drive to entertain the world. This section delves into Netflix's interview process, work culture, and the key strategies that make it a leader in the entertainment industry.",
    redirect:"https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/"
  }
];

export default cardData;
