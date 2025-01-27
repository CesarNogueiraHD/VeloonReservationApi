import type { Hotel } from "../models/Hotel";

const hotels: Hotel[] = [
  {
    id: "e1cb1584-091c-4780-a7ab-1fabff7d077e",
    title: "Mar e Praia Hotel Ltda",
    description: "Hotel localizado na beira do mar em Ubatuba.",
    address: "Avenida Praia da Enseada, 1620 - Enseada, Ubatuba",
    stars: 3,
    image: "/images/e1cb1584-091c-4780-a7ab-1fabff7d077e.jpg",
  },
  {
    id: "3caf84ed-ef21-449b-8b74-5018037da29a",
    title: "Hotel Millennium",
    description:
      "Hotel localizado na Zona Leste de São Paulo, região do Cangaíba.",
    address: "Av. Cangaíba, 1581 - Cangaiba, São Paulo",
    stars: 3,
    image: "/images/3caf84ed-ef21-449b-8b74-5018037da29a.jpg",
  },
  {
    id: "32a4a370-8e23-448f-b3b7-666ca47ee21e",
    title: "Hotel Panamby Guarulhos",
    description: "Hotel localizado na rodovia Dutra, região de Guarulhos.",
    address: "Rod. Pres. Dutra, 7830 - Km - 223,8 - Porto da Igreja, Guarulhos",
    stars: 4,
    image: null,
  },
  {
    id: "c7170bf8-d622-401d-b64a-3183355348ae",
    title: "Hotel Diamante",
    description:
      "Hotel localizado na Zona Leste de São Paulo, próximo à Radial Leste",
    address: "R. Diamante Preto, 1067 - Chácara Califórnia, São Paulo",
    stars: 2,
    image: null,
  },
  {
    id: "c8e2f9ef-a4dc-410f-a467-cd9d3e809092",
    title: "Hotel Pousada Pacaembu",
    description: "Hotel localizado na região da Santa Cecília",
    address: "R. Traipu, 641 - Pacaembu, São Paulo",
    stars: 3,
    image: null,
  },
  {
    id: "aa252e5d-e1fd-4360-889e-e650c9e0ac61",
    title: "Transamerica Executive Taboão da Serra (Morumbi)",
    description:
      "Hotel localizado em Taboão da Serra, próximo ao shopping Taboão",
    address: "Av. Vida Nova, 28 - Jardim Maria Rosa, Taboão da Serra",
    stars: 3,
    image: null,
  },
];

export default hotels;
