import { Tweet } from "../models/Tweet";
import { User } from "../models/User";

export  abstract class UserContract {
    public id: string = ""
    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string
    ){}

    sendTweet(tweet: Tweet){}
    follow(user: User){}
    showFeed(){}
    showTweets(){}
}