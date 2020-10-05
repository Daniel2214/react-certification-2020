import React from 'react';
import { FavoriteVideos } from '../../../state/FavVideosContext';
import Favorites from '../../../components/Favorites';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

describe("Favorites", () => {

  configure({adapter: new Adapter()});
  

  it("should display label when there is no favs videos", () => {
    

    const wrapper = mount (
      <FavoriteVideos>
        <Favorites />
      </FavoriteVideos>
    );

    expect(wrapper.text()).toEqual("No favorite videos");


  });




});