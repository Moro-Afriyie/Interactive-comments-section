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

export interface UpdateComment {
  mainCommentId: string;
  replyCommentId?: string;
  tag: string;
  comment: string;
  date: string;
}

export interface DeleteComment {
  tag: string;
  mainCommentId: string;
  replyCommentId: string;
}
