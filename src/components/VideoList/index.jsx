import React, {useContext} from 'react';
import VideoContext from '../../state/VideosContext';
import './VideoList.css'; 
import VideoCard from '../VideoCard'


const RelatedVideoList = () => {

  const { videos } = useContext(VideoContext);

    
  const relatedVideos =  videos.map((video) => {
        return (
          <VideoCard key={video.id.videoId} video={video}/>
        )
    });

    return <div className='ui relaxed divided list'>{relatedVideos}</div>;
};
export default RelatedVideoList;