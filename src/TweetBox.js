import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";

import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    // Sendtweet
    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Arjun Gupta',
            username: 'ArjunSaywhat_',
            verified: 'true',
            text: tweetMessage,
            avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFe3r2Klnpy1g/profile-displayphoto-shrink_800_800/0/1617175119190?e=1627516800&v=beta&t=HAuVGtmxxA_qZASE9VYBb9fxeBmlqRm75cCCT0k0-CU",
            image: tweetImage
        });

        setTweetMessage("");
        setTweetImage("");
    }   


    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox__input" >
            <Avatar className="tweetBox__avatar" alt="Profile Pic" src="https://media-exp1.licdn.com/dms/image/C4E03AQFe3r2Klnpy1g/profile-displayphoto-shrink_800_800/0/1617175119190?e=1627516800&v=beta&t=HAuVGtmxxA_qZASE9VYBb9fxeBmlqRm75cCCT0k0-CU" />
            <input onChange={(e)=> setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text"/>
            </div>

            <input value={tweetImage} onChange={(e)=> setTweetImage(e.target.value)} className="tweetBox__imageInput" placeholder="Enter Image URL" type="text"/>

            <Button onClick={sendTweet}  type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
