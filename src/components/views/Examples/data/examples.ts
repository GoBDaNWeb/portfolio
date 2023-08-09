import { images } from "@/constants";

export const examplesList = [
  {
    id: 0,
    link: "https://kino-view.vercel.app/",
    img: images.kino.src,
    title: "KinoView",
    stack: ["NextJs", "React", "TypeScript", "Sass"],
    front: "https://github.com/GoBDaNWeb/KinoView2.0",
  },
  {
    id: 1,
    link: "https://pin-gallery.vercel.app/",
    img: images.gallery.src,
    title: "Pin Gallery",
    stack: [
      "NextJs",
      "React",
      "TypeScript",
      "Sass",
      "NodeJs",
      "Express",
      "MongoDB",
    ],
    front: "https://github.com/GoBDaNWeb/fullstack-pin-gallery-frontend",
    back: "https://github.com/GoBDaNWeb/fullstack-pin-gallery-backend",
  },
];
