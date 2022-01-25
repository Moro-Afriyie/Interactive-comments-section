export interface replyCommentInterface {
  mainCommentId: number;
  replyCommentId: number;
  userName: string;
  avatar: string;
  tag: string;
  reply: string;
  date: string;
  votes: number;
}

export interface Comment {
  commentId: number;
  tag: string;
  userName: string;
  avatar: string;
  mainComment: string;
  replies: replyCommentInterface[];
  date: string;
  votes: number;
}

export interface CurrentUser {
  userName: string;
  avatar: string;
}
