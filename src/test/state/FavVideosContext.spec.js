import React,  { useContext } from 'react';
import { FavVideosContext, FavoriteVideos } from '../../state/FavVideosContext';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

describe("VideosContext", () => {

  configure({adapter: new Adapter()});
  

  it("adds new fav video", () => {
    const TestComponent = () => {

      const [favVideos, addFavVideo] = useContext(FavVideosContext)
      return <> 
        <div data-testid="value">{favVideos[0]}</div>
        <button onClick={()=> addFavVideo([], 1)}> SetFavorite </button>
      </>
    };

    const wrapper = mount (
      <FavoriteVideos>
        <TestComponent />
      </FavoriteVideos>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual("");
    wrapper.find("button").simulate('click');
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("1");


  });

  it("removes fav video", () => {
    const TestComponent = () => {

      const [favVideos, removeFavVideo] = useContext(FavVideosContext)
      return <> 
        <div data-testid="value">{favVideos[0]}</div>
        <button onClick={()=> removeFavVideo([1], )}> SetFavorite </button>
      </>
    };

    const wrapper = mount (
      <FavoriteVideos>
        <TestComponent />
      </FavoriteVideos>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual("1");
    wrapper.find("button").simulate('click');
    expect(wrapper.find('[data-testid="value"]').text()).toEqual("");


  });


});