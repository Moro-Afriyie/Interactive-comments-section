import Comment from "../interfaces/interface";
import amyrobson from "../assets/avatars/image-amyrobson.png";
import juliusomo from "../assets/avatars/image-juliusomo.png";
import maxblagun from "../assets/avatars/image-maxblagun.png";
import ramsesmiron from "../assets/avatars/image-ramsesmiron.png";

export const data: Comment[] = [
  {
    commentId: 1,
    userName: "armyrobson",
    avatar: amyrobson,
    mainComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
    replies: [],
    date: "",
    votes: 12,
  },
  {
    commentId: 2,
    userName: "maxblagun",
    avatar: maxblagun,
    mainComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
    replies: [
      {
        Id: 1,
        userName: "ramsesmiron",
        avatar: ramsesmiron,
        reply:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
        date: "",
        votes: 4,
      },
      {
        Id: 2,
        userName: "juliusomo",
        avatar: juliusomo,
        reply:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
        date: "",
        votes: 2,
      },
    ],
    date: "",
    votes: 5,
  },
];
