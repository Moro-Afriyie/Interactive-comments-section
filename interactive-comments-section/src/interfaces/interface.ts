export interface ReplyComment {
  mainCommentId: string;
  replyCommentId: string;
  userName: string;
  avatar: string;
  tag: string;
  reply: string;
  date: string;
  votes: number;
}

export interface Comment {
  commentId: string;
  tag: string;
  userName: string;
  avatar: string;
  mainComment: string;
  replies: ReplyComment[];
  date: string;
  votes: number;
}

export interface CurrentUser {
  userName: string;
  avatar: string;
}
