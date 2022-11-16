import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { DiReact, DiDjango, DiPostgresql } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiPython, SiExpress, SiRedux, SiTypescript } from "react-icons/si"
import { FaNode } from "react-icons/fa"


export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "React",
    img: imgReact,
  },
  { title: "Redux",
   img: SiRedux,
  },
  { title: "ContextAPI",
   img: DiReact,
  },
  { title: "GitHub",
   img: AiFillGithub,
  },
  { title: "TypeScript",
   img: SiTypescript
  },
  { title: "Python",
   img: SiPython
  },
  { title: "Node.js",
   img: FaNode
  },
  { title: "Express.js",
   img: SiExpress
  },
  { title: "Django",
   img: DiDjango
  },
  { title: "PostgreSQL",
   img: DiPostgresql
  },
];
