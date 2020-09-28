import React, {useContext} from 'react';
import VideoContext from '../state/VideosContext';
import './VideoList.css'; 
import { useHistory } from 'react-router-dom';


const RelatedVideoList = () => {

  const { videos, setCurrentVideo } = useContext(VideoContext);
  const history = useHistory();

  const handleClick = (video) => {
    history.push(`/video/${video.id.videoId}`);
    setCurrentVideo(video);
    
  };

    
  const relatedVideos =  videos.map((video) => {
        return (
          <div onClick={ () => handleClick(video)} className=' video-item item' key={video.id.videoId}>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        </div>
        )
    });

    return <div className='ui relaxed divided list'>{relatedVideos}</div>;
};
export default RelatedVideoList;