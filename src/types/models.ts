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

export interface IExamAttendance {
  course: string;
  dateCreated: string;
  timeStarted: string;
  timeEnded: string;
  attendanceData: IAttendanceData[];
}

export interface IAttendanceData {
  name: string;
  level: number;
  department: string;
  indexNumber: string;
  present: boolean;
}

export interface INotification{
  event:string,
  message:string,

}

export interface IStudent{
  department:string;
  level:string;
  indexNumber:string;
  name:string;
  present:boolean;
  id:string;
  timeOfAttendance:string;

}