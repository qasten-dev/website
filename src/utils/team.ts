import farouk from "@/assets/farouk.png";
import youssef from "@/assets/youssef.png";
import achraf from "@/assets/achraf.png";

export const team = {
  farouk: {
    displayName: "Farouk Faiz",
    image: farouk,
    jobTitle: "Co-founder & CEO",
    url: "https://www.linkedin.com/in/faizfarouk/",
  },
  youssef: {
    displayName: "Youssef Doubli",
    image: youssef,
    jobTitle: "Co-founder",
    url: "https://www.linkedin.com/in/youssef-doubli/",
  },
  achraf: {
    displayName: "Achraf El Masdouri",
    image: achraf,
    jobTitle: "Co-founder",
    url: "https://www.linkedin.com/in/achraf-el-masdouri-68675a174/",
  },
} as const;
