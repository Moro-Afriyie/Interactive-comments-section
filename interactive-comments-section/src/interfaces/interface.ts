export interface replyCommentInterface {
  Id: number;
  userName: string;
  avatar: string;
  reply: string;
  date: string;
  votes: number;
}

export interface Comment {
  commentId: number;
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
