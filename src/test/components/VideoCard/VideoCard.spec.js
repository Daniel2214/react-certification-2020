import React from 'react';
import VideoCard from '../../../components/VideoCard';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

describe("UserContext", () => {

  configure({adapter: new Adapter()});
  

  it("display correct video information", () => {
    
    const mock = {
      snippet: {
        title: "Video title",
        description: "Video description",
        publishedAt: "2020-10-05T02:56:02Z",
        thumbnails: {
          medium: {
            url: "testURL"
          }
        }
      }
    }


    const wrapper = mount (
      <VideoCard 
        video={mock}
      />
    );

    const date = wrapper.find('.date'); 
    expect(date.text()).toEqual("04-10-2020");


  });




});