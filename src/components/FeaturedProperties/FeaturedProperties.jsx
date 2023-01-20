import React from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="featProp">
      <div className="featPropItem">
        <img
          src="https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb&w=600&h=300"
          alt=""
          className="featPropImg"
        />
        <span className="featPropName">Comfort Suites</span>
        <span className="featPropCity">Austin</span>
        <span className="featPropPrice">Starting from $140</span>
        <div className="featPropRating">
          <button>8.4</button>
          <span>Good</span>
        </div>
      </div>

      <div className="featPropItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="featPropImg"
        />
        <span className="featPropName">Four Season Hotels</span>
        <span className="featPropCity">Lisbon</span>
        <span className="featPropPrice">Starting from $99.9</span>
        <div className="featPropRating">
          <button>8.1</button>
          <span>Good</span>
        </div>
      </div>

      <div className="featPropItem">
        <img
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="featPropImg"
        />
        <span className="featPropName">Hilton Garden Inn</span>
        <span className="featPropCity">Berlin</span>
        <span className="featPropPrice">Starting from $105</span>
        <div className="featPropRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>

      <div className="featPropItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="featPropImg"
        />
        <span className="featPropName">Aparthotel Start Miasto</span>
        <span className="featPropCity">Madrid</span>
        <span className="featPropPrice">Starting from $120</span>
        <div className="featPropRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
