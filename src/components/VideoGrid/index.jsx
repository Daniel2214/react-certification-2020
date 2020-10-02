import React, {useContext} from 'react'
import { Grid } from 'semantic-ui-react'
import VideoCard from '../VideoCard'
import VideosContext  from '../../state/VideosContext';


export default function VideosGrid () {

  const { videos } = useContext(VideosContext);

  return (
  
    <Grid columns='equal' style={{marginTop: '1rem'}}>
      <Grid.Row>
        {videos.map((video) => (
          <Grid.Column key={video.id.videoId} width={4}>
            <VideoCard key={video.id.videoId} video={video}/>   
          </Grid.Column>     
        ))}
      </Grid.Row>
    </Grid>
  )
}

