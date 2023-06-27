export interface IPost {
  id: string;
  createdAt: string;
  images?: string;
  image?: string;
  video?: string;
  description: string;
  user: IUser;
  nofComments: number;
  nofLikes: number;
  comments: IComment[];
}

export interface IUser {
  id: string;
  username: string;
  image?: string;
  name: string;
  bio?: string;
  posts?: IPost[];
  website?: string;
}

export interface IComment {
  id: string;
  comment: string;
  user: IUser;
}
