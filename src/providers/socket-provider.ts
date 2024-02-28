import { Socket, io } from "socket.io-client";
import { MESSAGE_EVENTS_TYPES, MESSAGE_TYPES } from "../constants";
import { Message } from "../type";
import EventEmitter from "../helpers/event-emitter";

class SocketProvider {
  private socket: Socket | null = null;
  public eventEmitter: EventEmitter = new EventEmitter();

  constructor() {
    this.connect();
  }

  public connect() {
    this.socket = io("http://localhost:3000");

    this.socket.on(MESSAGE_TYPES.NEW_MESSAGE, this.onNewMessage.bind(this));
    this.socket.on(MESSAGE_TYPES.LOAD_MESSAGES, this.onLoadMessages.bind(this));
  }

  private onNewMessage(message: Message) {
    this.eventEmitter.emit(MESSAGE_EVENTS_TYPES.ADD_MESSAGE, message);
  }

  private onLoadMessages(messages: Message[]) {
    this.eventEmitter.emit(MESSAGE_EVENTS_TYPES.UPDATE_MESSAGES, messages);
  }

  public sendMessage(data: Message) {
    if (!this.socket) {
      return;
    }
    this.onNewMessage(data);
  }
}

export const socketProvider = new SocketProvider();
