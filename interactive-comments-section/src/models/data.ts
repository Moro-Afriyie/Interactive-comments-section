import { Comment } from "../interfaces/interface";
import amyrobson from "../assets/avatars/image-amyrobson.png";
import juliusomo from "../assets/avatars/image-juliusomo.png";
import maxblagun from "../assets/avatars/image-maxblagun.png";
import ramsesmiron from "../assets/avatars/image-ramsesmiron.png";

export const data: Comment[] = [
  {
    commentId: "111a57a4733346459b73923f98c33061",
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
    commentId: "78460d4c742945e8a7dad4f284ef3694",
    userName: "maxblagun",
    avatar: maxblagun,
    tag: "main",
    mainComment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
    replies: [
      {
        mainCommentId: "78460d4c742945e8a7dad4f284ef3694",
        replyCommentId: "a706e098efbf48499e6bd976b586e79c",
        tag: "reply",
        userName: "ramsesmiron",
        avatar: ramsesmiron,
        reply:
          "@maxblagun Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati ipsum repellendus nam non possimus, distinctio vero iure sunt et quae dolorem, error harum similique nihil neque consequatur culpa expedita?",
        date: "1 week ago",
        votes: 4,
      },
      {
        mainCommentId: "78460d4c742945e8a7dad4f284ef3694",
        replyCommentId: "486f49c733ce41ffb06f55746fa6dd3a",
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
