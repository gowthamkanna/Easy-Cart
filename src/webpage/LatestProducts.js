import React from 'react'
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

const LatestProducts = ({product}) => {

    
  const ProductSliderConfiguration = () => ({
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: false,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    // dynamicHeight: true,
    emulateTouch: false,
    autoFocus: false,
    interval: 3000,
  });

    const getOverallRating = (ratings) => {
        var overallRating = 0;
        for (var i = 0; i < ratings.length; i++) {
          overallRating += ratings[i].rating;
        }
        var avgRating = overallRating / ratings.length;
    
        // const STAR_COUNT = 5;
        const stars = Array.from([1,2,3,4,5], (item) => (
            <li key={item}><i className="fa-regular fa-star"></i></li>
        ));
        for (var j = 0; j < avgRating; j++) {
          // this will loop Math.floor(avgRating) times
          stars[j] = <li key={j}><i className="fa-solid fa-star"></i></li>;
        }
    
        if (avgRating % 1 !== 0) {
          // if avgRating is a decimal, add a half star
          stars[j - 1] = <li key={j-1}><i className="fa-solid fa-star-half-stroke"></i></li>;
        }
        return (
          <ul className="rating text-center">
            {stars} ({ratings.length})
          </ul>
        );
      };

  return (
    <>
                  <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="box">
                      <div className="img-box">
                        <Carousel {...ProductSliderConfiguration()}>
                          {product.ProductImages.map((image) => (
                            <div key={image.filename}>
                              <img
                                src={
                                  process.env.REACT_APP_PRODUCT_IMAGE_URL +
                                  "/" +
                                  image.filename
                                }
                                alt={image.originalname}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                      <div className="ration-box">
                        {getOverallRating(product.Reviews)}
                      </div>
                      <div className="detail-box">
                        <Link to={`/product-details/${product._id}`}>
                          <h6 className="cursor-pointer">{product.Name}</h6>
                        </Link>
                        <h6>
                          Price :<span>{product.SalePrice}</span>
                        </h6>
                      </div>
                      <div className="new">
                        <span>New</span>
                      </div>
                    </div>
                  </div>
    </>
  )
}

export default LatestProducts