import farouk from "@/assets/farouk.png";
import achraf from "@/assets/achraf.png";

export const team = {
  farouk: {
    displayName: "Farouk Faiz",
    image: farouk,
    url: "https://www.linkedin.com/in/faizfarouk/",
    resumeUrl: "/resume/farouk.pdf",
    email: "farouk@qasten.com",
  },
  achraf: {
    displayName: "Achraf El Masdouri",
    image: achraf,
    url: "https://www.linkedin.com/in/achraf-el-masdouri-68675a174/",
    resumeUrl: "/resume/achraf.pdf",
    email: "achraf@qasten.com",
  },
} as const;
