import farouk from "@/assets/farouk.png";
import youssef from "@/assets/youssef.png";
import achraf from "@/assets/achraf.jpeg";

export const teamKeys = ["farouk", "youssef", "achraf"] as const;

export const team = {
  farouk: {
    displayName: "Farouk Faiz",
    image: farouk,
    jobTitle: "CEO",
    url: "https://www.linkedin.com/in/faizfarouk/",
  },
  youssef: {
    displayName: "Youssef Doubli",
    image: youssef,
    jobTitle: "CPTO",
    url: "https://www.linkedin.com/in/youssef-doubli/",
  },
  achraf: {
    displayName: "Achraf El Masdouri",
    image: achraf,
    jobTitle: "COO",
    url: "https://www.linkedin.com/in/achraf-el-masdouri-68675a174/",
  },
} as const satisfies Record<(typeof teamKeys)[number], unknown>;
