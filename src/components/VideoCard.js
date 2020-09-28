import React, {useContext} from 'react'
import { Card, Image } from 'semantic-ui-react'
import moment from 'moment';
import './Card.css'; 
import VideoContext from '../state/VideosContext';
import { useHistory } from 'react-router-dom';


export default function VideoCard (props) {
  const { setCurrentVideo } = useContext(VideoContext);
  const dateFormat = "DD-MM-YYYY";
  const videoDate = props.video.snippet.publishedAt;
  const date = moment(videoDate).format(dateFormat);
  const history = useHistory();

  const handleOnClick = () => {
    setCurrentVideo(props.video);
    history.push(`/video/${props.video.id.videoId}`);
  }

  return (
    <Card className='card' onClick={handleOnClick}>
      <Image src={props.video.snippet.thumbnails.medium.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.video.snippet.title}</Card.Header>
        <Card.Meta>
          <span className='date'>{date}</span>
        </Card.Meta>
        <Card.Description>
          {props.video.snippet.description}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
