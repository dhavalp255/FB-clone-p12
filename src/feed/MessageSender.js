import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'

import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIocn from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIocn from "@material-ui/icons/InsertEmoticon"
import { useStateValue } from '../backendConnet/StateProvider'
import db from '../backendConnet/firebase'
import firebase from 'firebase'

function MessageSender() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            })

        setInput("")
        setImageUrl("")
        
    }


    return (
        <div className="messageSender">
            <div className="messgeSender__top">
                <Avatar src={user?.photoURL}/>
                <form>
                    <input
                        value={input}
                        onChange={
                            (e)=> setInput(e.target.value)
                        }
                        className="messageSender__input"
                        placeholder={`What's on your mind ${user?.displayName}?`}
                    />

                    <input
                         value={imageUrl}
                         onChange={
                             (e)=> setImageUrl(e.target.value)
                         }
                        placeholder="Image URL(Optional)"
                    />
                    <button
                        disabled={!input}
                        onClick={handleSubmit}
                        type="submit"
                    >send</button>
                </form>
            </div>
            <div className="messgeSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <input type="file" id="file"/>
                    <label className="messageSender__option" for="file">
                    <PhotoLibraryIocn style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                        </label>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIocn style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
