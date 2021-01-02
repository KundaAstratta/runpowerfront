export interface MessageOption {
    message: string;
}


export class Message {

    message: string;

    constructor(options: MessageOption) {
        this.message = options.message;
    }


}