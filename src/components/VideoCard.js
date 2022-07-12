import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css"

const VideoCard = ({ image, title, channel, views, timestamp, channelImage }) => {
  return (
    <div className='videoCard'>
        <img className='videoCard__thumbnail' src={image} alt=""></img>
        <div className='videoCard__info'>
            <Avatar className="videoCard__avatar" alt={channel} src={channelImage} />
            <div className='videoCard__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard