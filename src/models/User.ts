import { v4 as uuidv4 } from 'uuid';
import { users } from '../database/usersDatabase';
import { Tweet } from './Tweet';
import { tweetsDataBase } from '../database/tweetsDataBase';
import { UserContract } from '../contracts/UserContract';

export class User extends UserContract {
    public id: string = uuidv4();
    private tweets: Tweet[]= [];
    private followers: User[]=[];

    constructor(
        public name: string,
        public username: string,
        public email: string,
        public password: string
    ){super(name, username,email, password)}

    get _tweets(): Tweet[]{
        return this.tweets
    }

    get _followers(): User[]{
        return this.followers
    }

    static create(name: string, username: string, email: string, password: string): User {
        const newUser = new User(name, username, email, password)
        const verifyUser = users.some((user) => user.id === newUser.id || user.username === newUser.username );  
        if(verifyUser) {
            Error('Este usarname já está sendo usado, tente cadastrar um diferente.')
        }
        users.push(newUser) 
        return newUser
    }

    sendTweet(tweet: Tweet){
     this.tweets.push(tweet)
     tweetsDataBase.push(tweet)
    }

    follow(user: User){

        if (user.id === this.id){
            return "Não é possível seguir a si mesmo."
        } else {
            this.followers.push(user)
        }
    }

    showFeed(){
        this.tweets.forEach(tweet=> tweet.show())
        this.followers.forEach(following => following.showTweets())
    }

    showTweets(){
        this.tweets.forEach(tweet=> tweet.show())
    }
}