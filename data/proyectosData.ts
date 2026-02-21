interface ProyectoTecnologia {
  name: string;
  image: string;
}

interface Proyecto {
  id: number;
  nombreProyecto: string;
  descripcionProyecto: string;
  link: string;
  webpage_name: string;
  webpage_logo: string;
  imagenes: string[];
  tecnologias: ProyectoTecnologia[];
}

export const proyectosData: Proyecto[] = [
  {
    id: 1,
    nombreProyecto: "Overview destacame Dashboard",
    descripcionProyecto: "Overview destacame Dashboard",
    link: "https://www.novypro.com/project/overview-destacame-dashboard",
    webpage_name: "Web",
    webpage_logo: "novypro.png",
    imagenes: [
      "proyectos/destacame-dashboard.png"
    ],
    tecnologias: [
      {
        name: "PowerBI",
        image: "tecnologias-andy/power-bi.png"
      }
    ]
  },
  {
    id: 2,
    nombreProyecto: "Data Cleaning & Database Design",
    descripcionProyecto: "Dataset cleaning and database creation.",
    link: "https://github.com/Andres12893/car_prices_project",
    webpage_name: "GitHub",
    webpage_logo: "github.svg",
    imagenes: [
      "proyectos/dataset-cover.jpg"
    ],
    tecnologias: [
      {
        name: "Python",
        image: "tecnologias-andy/python.png"
      },
      {
        name: "SQL",
        image: "tecnologias-andy/sql.webp"
      }
    ]
  },
  {
    id: 3,
    nombreProyecto: "Mercado Libre Web Scraping",
    descripcionProyecto: "Web Scraping through Mercado Libre's website. Calculate an average price and conditions (such as coupons), identifying when something is 'cheap'.",
    link: "https://github.com/Andres12893/Mercado-Libre-Web-Scrapping",
    webpage_name: "GitHub",
    webpage_logo: "github.svg",
    imagenes: [
      "proyectos/mercado-libre-autos.jpg"
    ],
    tecnologias: [
      {
        name: "Python",
        image: "tecnologias-andy/python.png"
      },
      {
        name: "SQL",
        image: "tecnologias-andy/sql.webp"
      },
      {
        name: "AWS",
        image: "tecnologias-andy/aws.jpg"
      }
    ]
  }
];
