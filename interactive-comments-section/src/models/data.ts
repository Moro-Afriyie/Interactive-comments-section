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
      "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
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
      "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React, as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
    replies: [
      {
        mainCommentId: "78460d4c742945e8a7dad4f284ef3694",
        replyCommentId: "a706e098efbf48499e6bd976b586e79c",
        tag: "reply",
        userName: "ramsesmiron",
        avatar: ramsesmiron,
        reply:
          "@maxblagun if you're still new, I'd recommend focusing on the fundamentals of HTML,CSS and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
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
          "@ramsesmiron I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        date: "2 days ago",
        votes: 2,
      },
    ],
    date: "2 weeks ago",
    votes: 5,
  },
];
