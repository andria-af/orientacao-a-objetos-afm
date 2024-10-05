import { Tweet, TypeTweet } from "./models/Tweet";
import { User } from "./models/User";

//3 usuários
const ze = User.create("zé", "zezinho", "ze@ze.com", "1234")
const maria = User.create("maria", "mariazinha", "maria@maria.com", "1234")
const fred = User.create("fred", "fredinho", "fred@fred.com", "1234")

//3 tweets
const tweet1= new Tweet ("Olá", ze, TypeTweet.Normal)
ze.sendTweet(tweet1)

const tweet2= new Tweet("Cara caramba", maria, TypeTweet.Normal)
maria.sendTweet(tweet2)

const tweet3= new Tweet("We are the", fred, TypeTweet.Normal)
fred.sendTweet(tweet3)

//3 likes
tweet1.like(maria)
tweet1.like(fred)
tweet2.like(fred)


//3 replies
const reply1= new Tweet ("Oi zé!", maria, TypeTweet.Reply)
tweet1.reply(reply1)

const reply2= new Tweet ("cara cara ô", fred, TypeTweet.Reply)
tweet2.reply(reply2)

const reply3= new Tweet ("champions my friend", ze, TypeTweet.Reply)
tweet3.reply(reply3)

// usuario 2 e 3 seguem o 1 para aparecer no feed
ze.follow(maria)
ze.follow(fred)

ze.showFeed();

//console.log(tweetsFollowers)
