import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow 
            image="https://i.pinimg.com/736x/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1--flat-icons-free-icon.jpg"
            channel="Clever Programmer"
            verified
            subs="867K"
            noOfVideos={325}
            description="loremf msadfsdf wer ywywe fe ww we rtrthrth rt wwgwgrwgdkfms sdkmfmkewpf wekmf  kmwefwe"
        />
        <hr />

        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
        <VideoRow 
            views="1.4M"
            subs="659K"
            description="This is description This is description"
            timestamp="2 minutes ago"
            channel="Clever Programmer"
            title="Lets Build a YouTube clone"
            image="https://randomwordgenerator.com/img/picture-generator/53e8d2434f5bb10ff3d8992cc12c30771037dbf85254784c772d7ddc9e44_640.jpg"
        />
    </div>
  )
}

export default SearchPage