import { Comment } from "../interfaces/interface";
import amyrobson from "../assets/avatars/image-amyrobson.png";
import juliusomo from "../assets/avatars/image-juliusomo.png";
import maxblagun from "../assets/avatars/image-maxblagun.png";
import ramsesmiron from "../assets/avatars/image-ramsesmiron.png";

export const data: Comment[] = [
  {
    commentId: 1,
    userName: "armyrobson",
    avatar: amyrobson,
    tag: "main",
    mainComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
    replies: [],
    date: "1 month ago",
    votes: 12,
  },
  {
    commentId: 2,
    userName: "maxblagun",
    avatar: maxblagun,
    tag: "main",
    mainComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
    replies: [
      {
        mainCommentId: 2,
        replyCommentId: 1,
        tag: "reply",
        userName: "ramsesmiron",
        avatar: ramsesmiron,
        reply:
          "@maxblagun Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
        date: "1 week ago",
        votes: 4,
      },
      {
        mainCommentId: 2,
        replyCommentId: 2,
        userName: "juliusomo",
        avatar: juliusomo,
        tag: "reply",
        reply:
          "@ramsesmiron Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
        date: "2 days ago",
        votes: 2,
      },
    ],
    date: "2 weeks ago",
    votes: 5,
  },
];
