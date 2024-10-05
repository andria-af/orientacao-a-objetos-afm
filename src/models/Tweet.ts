import { v4 as uuidv4 } from 'uuid';
import { User } from './User';
import { Like } from './Like';
import { TweetContract } from '../contracts/TweetContract';

export enum TypeTweet{
    Normal = 'normal',
    Reply = 'reply'   
}

export class Tweet extends TweetContract{
    public id: string = uuidv4();
    private likes: User[]=[];
    private replies: Tweet[]=[]
    
    constructor(
        public content: string,
        public from: User,
        public type: TypeTweet
    ){super(content, type)}

    get _likes(): User[]{
        return this.likes
    }

    get _replies(): Tweet[]{
        return this.replies
    }

    reply(reply: Tweet){
        this.replies.push(reply)
    }

    like(from: User){
        this.likes.push(from)
    }

    show(){
        console.log(`@${this.from.username}: ${this.content}`);
        if (this.likes.length == 0){}
        if (this.likes.length === 1){console.log(`  [@${this.likes[0].username} curtiu.]`)}
        if (this.likes.length > 1){console.log(`  [@${this.likes[0].username} e mais ${this.likes.length-1} usuários curtiram.]`)}
        this.showReplies()
        console.log(`--------------------------------------------------------`)
    }

    showReplies(){
        this.replies.forEach(replie => console.log(`  > @${replie.from.username}: ${replie.content}`))   
    }
}