
export enum Sender {
  User = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  sender: Sender;
  text: string;
}
