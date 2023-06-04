
interface Sender {
    _id: string;
    name: string;
    pic: string;
  }
  
  interface LatestMessage {
    _id?: string;
    sender?: User;
  }
  
  export interface Participant {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    pic: string;
    isAdmin: boolean;
    timeStamp: number;
    __v?: number;
  }
  

interface User {
    _id: string;
    name: string;
    email: string;
    pic: string;
  }
  
  interface Chat {
    _id: string;
    chatName: string;
    isGroupChat: boolean;
    users: {
      participants: Participant;
      timestamps: string;
      _id: string;
    }[];
    createdAt: string;
    updatedAt: string;
    deleteBy: string[];
    latestMessage?: LatestMessage | undefined;
  }
  
  export interface MessageInfo {
    _id: string;
    sender: Sender;
    content: string;
    chat?: Chat;
    readBy: string[];
    deleteBy: string[];
    createdAt: string;
    updatedAt: string;
  }