import React, { useState } from "react";
import {
  Share2,
  Eye,
  Info,
  Monitor,
  ChevronRight,
  MoreVertical,
  ChevronDown,
  Bookmark,
  Plus,
  Laptop,
} from "lucide-react";
import "../components/game.css";
const AviatorGameClone = () => {
  const handleInstallClick = () => {
    window.open(
      "https://balaji365.com/mobile-number?agent_code=JB869318X",
      "_blank"
    );
  };

  const appImages = [
    "https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/se3d9f8b8871fa1ae8578a721bf50d389/_r0x408_webp",
    "https://4rabets.aviator-pwa-store.com/npi1-pwa-images/69/3e/a9/693ea94a7dc3873c0c25f85681789379_w0h408.webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/s2e41373bf9ace73a28170ee2b8fce593/_r0x408_webp",
    "https://4rabets.aviator-pwa-store.com/npi1-pwa-images/30/0a/c9/300ac9a4bff882f92e30ec854626f1a3_w0h408.webp",
  ];

  const reviewerImages = [
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c6581e88503395d6773c9b021522cf9417b7ad681f2cf8/_r64x64_webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c658224e5e5eb2a9d57bb70930cf3172f5e58d7a804c62/_r64x64_webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c6582253062b51bbeb4ea9a838f7840403ebbcd2c9c8e9/_r64x64_webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c65822562d06dbc096e95ae04472c3ebad0b9d8bd5e016/_r64x64_webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c65822590c9a33cc8906adec07f5bf850c74d879c5a0bb/_r64x64_webp",
    "https://4rabets.aviator-pwa-store.com/assets-ucp/EAhJ/c658225d0b557134789f7b52c9e03b61b6dfcac5ef3c26/_r64x64_webp",
  ];

  const reviews = [
    {
      name: "Umesh Bandgar",
      image: reviewerImages[0],
      date: "July 17, 2025",
      rating: 5,
      text: "It's working fast. I withdrawal 2500 rs in 10 minut",
      helpful: 486,
      hasResponse: true,
      response:
        "Thanks you for your positive feedback! We're thrilled to hear that you enjoyed the game. Keep spinning and have a fantastic time!",
    },
    {
      name: "দুষ্টু ছেলে মঙ্গলদীপ",
      image: reviewerImages[1],
      date: "July 17, 2025",
      rating: 4.5,
      text: "Cannot believe it make me rich. Playing Aviator is very easy",
      helpful: 510,
      hasResponse: false,
    },
    {
      name: "Maghraj Arya",
      image: reviewerImages[2],
      date: "July 16, 2025",
      rating: 5,
      text: "Maine sirf 400 lga kar 6000 nikal liya",
      helpful: 892,
      hasResponse: true,
      response:
        "Thanks for talking the time to leave a request! We're delighted that you're enjoying the game and having a great experience. Keep spinning and winning!",
    },
    {
      name: "Hamman Sekh",
      image: reviewerImages[3],
      date: "July 16, 2025",
      rating: 5,
      text: "I'm not normally one for reviews, but Aviator has earned this one. It's exhilarating, and the winnings are fantastic. This app is a must!",
      helpful: 918,
      hasResponse: true,
      response:
        "Your feedback made our day! We're thrilled to be a part of your gaming journey and provide you with entertaining gameplay. Enjoy and have fun!",
    },
    {
      name: "Sra Pathan",
      image: reviewerImages[4],
      date: "July 15, 2025",
      rating: 5,
      text: "I got hooked on this game from the very first moment of playing. I was pleasantly surprised",
      helpful: 1037,
      hasResponse: true,
      response:
        "Thanks you for your positive review! We're glad that the game brings excitement and enjoyment to your gamins sessions. Winning you many big wins!",
    },
    {
      name: "Vanshubh Raja",
      image: reviewerImages[5],
      date: "July 15, 2025",
      rating: 4,
      text: "From the sign-up bonus to the big wins, Aviator exceeded all my expectations. This is how a casino game should be!",
      helpful: 1400,
      hasResponse: false,
    },
  ];

  const StarRating = ({ rating, size = 16 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="StarRating_starList__vWMsK">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className="StarRating_starItem__+EBtP"
            style={{ width: `${size}px`, height: `${size}px` }}
          >
            {star <= fullStars ? (
              <span className="StarRating_starItemFill__+2irG">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </span>
            ) : star === fullStars + 1 && hasHalfStar ? (
              <span>
                <svg
                  className="xdPrrd"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="url(#c2906)"
                >
                  <defs>
                    <linearGradient id="c2906">
                      <stop
                        stopOpacity="1"
                        offset="50%"
                        className="StarRating_starItemFill__+2irG"
                      ></stop>
                      <stop
                        stopOpacity="1"
                        offset="50%"
                        className="StarRating_starItemNotFill__ymUQS"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </span>
            ) : (
              <span className="StarRating_starItemNotFill__ymUQS">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </span>
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="main_mainCWiz__ZMXnX" data-cat="apps">
      <div className="main_mainWrapper__pIvrB">
        <div className="main_mainWrapperSub1__KSX1v">
          <div className="main_mainWrapperSub2__2fl4f">
            <div className="">
              <div className="header_header__6NUB2">
                <div className="header_content__Y5WcG">
                  <div className="cWin">
                    <div className="header_topContent__fuFtX">
                      <div className="header_iconNameContent__uY1ks">
                        <picture>
                          <source
                            srcSet="https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/i6ec0bba540e009de830697a332ae31fc/_r174x174_webp"
                            type="image/webp"
                          />
                          <source
                            srcSet="https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/i6ec0bba540e009de830697a332ae31fc/_r174x174_jpg"
                            type="image/jpeg"
                          />
                          <img
                            className="header_iconImage__kRTYQ"
                            alt="icon"
                            src="https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/i6ec0bba540e009de830697a332ae31fc/_r174x174_webp"
                          />
                        </picture>
                        <div>
                          <h1 className="header_name__wDmB9">
                            <span>Aviator Game</span>
                          </h1>
                          <div className="header_devInfo__bqnmB">
                            <div
                              style={{
                                color: "#01875f", // dark green (Install-like)
                                padding: "5px 8px",
                                fontSize: "17px",
                                fontWeight: "500",
                                fontFamily: "sans-serif",
                                display: "inline-block",
                                borderRadius: "4px",
                                marginRight: "5px", // added right margin
                              }}
                            >
                              Casino co.
                            </div>

                            <div className="header_infoAds__yGLRx">
                              <div>
                                <span>Without ads · In-app purchases</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="header_infoListContent__UlLT8">
                        <div className="header_infoListContentList__xkMAE">
                          <div className="header_infoListContentListWBlock__BFDyj">
                            <div className="header_infoListContentListBlock__D2C20">
                              <div className="header_infoListContentListBlockT__-Anx2">
                                4.9★
                              </div>
                              <div className="header_infoListContentListBlockB__5kNfV">
                                19K reviews
                              </div>
                            </div>
                            <div className="header_infoListContentListBlock__D2C20">
                              <div className="header_infoListContentListBlockT__-Anx2">
                                500K+
                              </div>
                              <div className="header_infoListContentListBlockB__5kNfV">
                                Downloads
                              </div>
                            </div>
                            <div className="header_infoListContentListBlock__D2C20">
                              <div className="header_infoListContentListBlockT__-Anx2">
                                <span
                                  className="header_infoListContentListBlockTIconCenter__jQQWg"
                                  aria-hidden="true"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                  >
                                    <path d="M10.54,11.09L8.66,9.22l-1.02,1.02l2.9,2.9l5.8-5.8l-1.02-1.01L10.54,11.09z M15.8,16.24H8.2L4.41,9.66L8.2,3h7.6l3.79,6.66 L15.8,16.24z M17,1H7L2,9.66l5,8.64V23l5-2l5,2v-4.69l5-8.64L17,1z" />
                                  </svg>
                                </span>
                              </div>
                              <div className="header_infoListContentListBlockB__5kNfV">
                                Editors' Choice
                              </div>
                            </div>
                            <div className="header_infoListContentListBlock__D2C20">
                              <div className="header_infoListContentListBlockT__-Anx2">
                                <div
                                  style={{
                                    border: "1px solid #666",
                                    borderRadius: "2px",
                                    padding: "2px 4px",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                    color: "#666",
                                    display: "inline-block",
                                  }}
                                >
                                  18+
                                </div>
                              </div>
                              <div className="header_infoListContentListBlockB__5kNfV">
                                <span>
                                  <span>Rated for 18+</span>
                                </span>
                                <div className="header_infoListContentListBlockBB__980US">
                                  <Info size={12} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header_btnContent__rH7Fv">
                    <div className="header_btnContentInstall__UtT7y">
                      <div className="header_btnContentInstall_sub1__4I4Ui">
                        <div className="header_btnContentInstall_sub1cWiz__bCzJG">
                          <div className="header_btnIns_W1__MhKZ7">
                            <div>
                              <div>
                                <div className="header_btnIns_W4__mjnfw">
                                  <button
                                    className="header_btnIns_Btn__uB2nz"
                                    onClick={handleInstallClick}
                                  >
                                    <div className="header_btnIns_BtnProg__SMou9">
                                      <div className="header_btnIns_BtnProgLine__m+nW7"></div>
                                    </div>
                                    <div className="header_btnIns_BtnTitle__ctqbc">
                                      Install
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header_btnContentAddFav__-vdWi">
                    <div>
                      <div>
                        <div>
                          <div>
                            <div className="header_btnContentAddFavPB__+xxML">
                              <button className="header_btnContentAddFavBtn__-l9-l">
                                <span
                                  className="header_btnContentAddFavBtn_icon__80TSv"
                                  aria-hidden="true"
                                >
                                  <div
                                    style={{
                                      marginLeft: "560px",
                                      position: "relative",
                                    }}
                                  >
                                    <Bookmark size={24} />
                                    <Plus
                                      size={12}
                                      style={{
                                        position: "absolute",
                                        top: "-2px",
                                        left: "16px", // position relative to Bookmark
                                        background: "white",
                                        borderRadius: "50%",
                                      }}
                                    />
                                  </div>
                                </span>
                                <span
                                  className="header_btnContentAddFavBtn_txt__3-jmH"
                                  aria-hidden="true"
                                >
                                  Add to wishlist
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="header_successInstallContainer__XLO2v">
                    <div className="header_successInstallContainer_sub1__kTxDU">
                      <Laptop size={20} />
                      <span>
                        This app is available for all of your devices.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="content_wrapper__45t+V">
              <div className="content_wrapperContent__CC1qD">
                <div>
                  <div>
                    <div>
                      <div>
                        <div className="content_screens_wrapper__YeeJ3">
                          <div className="content_screens_wList__fbowt">
                            {appImages.map((image, index) => (
                              <div
                                key={index}
                                className="content_screens_listItem__TasxL"
                              >
                                <div className="content_screens_wImg__vJV4o">
                                  <picture>
                                    <source srcSet={image} type="image/webp" />
                                    <img alt="screen" src={image} />
                                  </picture>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div>
                          <section className="DescSelector_sel__TiLso">
                            <header className="DescSelector_header__kzxq+">
                              <div className="DescSelector_hTop__iz3Wu">
                                <div className="DescSelector_hTopT__lQ46T">
                                  <h2>About this game</h2>
                                </div>
                                <div>
                                  <button className="DescSelector_hBtn__2tAOY">
                                    <ChevronRight
                                      size={20}
                                      className="DescSelector_hBtnIcon__lZHve"
                                    />
                                  </button>
                                </div>
                              </div>
                            </header>
                            <div className="DescSelector_content__vd-g4">
                              <div className="content_desc_desc__2iBCe">
                                India's first leading real money making Aviator
                                game where you can start earning instantly and
                                withdraw profit directly to your Bank account
                                using UPI. You can
                                <br />
                                change your destiny using this app.
                                <br />
                                <br />
                                Supported payment Apps are PhonePe, Gpay, Paytm,
                                all other UPI Apps etc.
                              </div>
                              <div className="content_desc_lastUpdate__+V7ZD">
                                <div>
                                  <div className="content_desc_lastUpdateT__HgO8Q">
                                    Updated on
                                  </div>
                                  <div className="content_desc_lastUpdateD__5pu-m">
                                    July 16, 2025
                                  </div>
                                </div>
                              </div>
                              <div className="content_desc_tags__94Tv6"></div>
                            </div>
                          </section>
                        </div>
                      </div>

                      <div>
                        <div>
                          <section className="DescSelector_sel__TiLso">
                            <header className="DescSelector_header__kzxq+">
                              <div className="DescSelector_hTop__iz3Wu">
                                <div className="DescSelector_hTopT__lQ46T">
                                  <h2>Data safety</h2>
                                </div>
                                <div>
                                  <button className="DescSelector_hBtn__2tAOY">
                                    <ChevronRight
                                      size={20}
                                      className="DescSelector_hBtnIcon__lZHve"
                                    />
                                  </button>
                                </div>
                              </div>
                            </header>
                            <div className="DescSelector_content__vd-g4">
                              In this section, developers can specify how
                              applications collect and use data.
                              <div className="content_security_bWrapper__RbzB2">
                                <div className="content_security_secItem__J-ttM">
                                  <Share2
                                    size={20}
                                    style={{ marginRight: "20px" }}
                                  />
                                  <div>
                                    No data shared with third parties
                                    <div className="content_security_secItemM__BLD9K">
                                      <span>Learn more</span> about how
                                      developers declare sharing
                                    </div>
                                  </div>
                                </div>
                                <div className="content_security_secItem__J-ttM">
                                  <Eye
                                    size={20}
                                    style={{ marginRight: "20px" }}
                                  />
                                  <div>
                                    No data collected
                                    <div className="content_security_secItemM__BLD9K">
                                      <span>Learn more</span> about how
                                      developers declare collection
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="content_security_moreW__ekeBw">
                                    <div className="content_security_moreW2__lh3Lo">
                                      <span className="content_security_moreT__4emtL">
                                        See details
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>

                      <div>
                        <div>
                          <section className="DescSelector_sel__TiLso">
                            <header className="DescSelector_header__kzxq+">
                              <div className="DescSelector_hTop__iz3Wu">
                                <div className="DescSelector_hTopT__lQ46T">
                                  <h2>Ratings and reviews</h2>
                                </div>
                                <div>
                                  <button className="DescSelector_hBtn__2tAOY">
                                    <ChevronRight
                                      size={20}
                                      className="DescSelector_hBtnIcon__lZHve"
                                    />
                                  </button>
                                </div>
                              </div>
                            </header>
                            <div className="DescSelector_content__vd-g4">
                              <div className="Content_comments_rating_wrapperRating__linmK">
                                <div className="Content_comments_rating_wrapperRatingS2__lVLCJ">
                                  <div className="Content_comments_rating_wrapperRatingS3__u6Z0l">
                                    <div>
                                      <div className="Content_comments_rating_ratingTitle__Xp3IS">
                                        4.9
                                      </div>
                                      <StarRating rating={5} size={16} />
                                      <div className="Content_comments_rating_review__Yc03t">
                                        19K reviews
                                      </div>
                                    </div>
                                    <div>
                                      {[5, 4, 3, 2, 1].map((rating) => (
                                        <div
                                          key={rating}
                                          className="Content_comments_rating_lineW__OCAF5"
                                        >
                                          <div className="Content_comments_rating_lineNum__EGTtX">
                                            {rating}
                                          </div>
                                          <div className="Content_comments_rating_lineBase__ohC62">
                                            <div
                                              className="Content_comments_rating_lineBaseFill__PFHuw"
                                              style={{
                                                width:
                                                  rating === 5
                                                    ? "88%"
                                                    : rating === 4
                                                    ? "14%"
                                                    : rating === 3
                                                    ? "8%"
                                                    : "0%",
                                              }}
                                            ></div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {reviews.map((review, index) => (
                                <div
                                  key={index}
                                  className="content_comments_commW__KS6qP"
                                >
                                  <header>
                                    <div className="content_comments_cHTom__-3xre">
                                      <div className="content_comments_cHTomLeft__Uz2TX">
                                        <picture>
                                          <source
                                            srcSet={review.image}
                                            type="image/webp"
                                          />
                                          <img
                                            className="content_comments_commAuthImg__VOqdH"
                                            src={review.image}
                                            alt="auth"
                                          />
                                        </picture>
                                        <div className="content_comments_commAuth__x9rNc">
                                          {review.name}
                                        </div>
                                      </div>
                                      <div>
                                        <div className="content_comments_cHTomRight__35SLt">
                                          <div>
                                            <button className="content_comments_commBtn__eKEkm">
                                              <MoreVertical size={24} />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="content_comments_ratingW__Icdsj">
                                      <StarRating
                                        rating={review.rating}
                                        size={12}
                                      />
                                      <span className="content_comments_commDate__6Wi+t">
                                        {review.date}
                                      </span>
                                    </div>
                                  </header>
                                  <div className="content_comments_commBW__Tqqwl">
                                    {review.text}
                                  </div>
                                  <div>
                                    <div className="content_comments_likeB__A+YQO">
                                      {review.helpful > 1000
                                        ? `${(review.helpful / 1000).toFixed(
                                            1
                                          )}K`
                                        : review.helpful}{" "}
                                      people found this review helpful
                                    </div>
                                    <footer className="content_comments_likeF__27Irc">
                                      <div className="content_comments_likeFInfo__zWZUk">
                                        Did you find this helpful?
                                      </div>
                                      <div>
                                        <div className="content_comments_likeFBtnWrap__yjgrs">
                                          <div className="content_comments_likeFBtn__9gQqp">
                                            <div aria-hidden="true">
                                              <span>Yes</span>
                                            </div>
                                          </div>
                                          <div className="content_comments_likeFBtn__9gQqp">
                                            <div aria-hidden="true">
                                              <span>No</span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </footer>
                                  </div>
                                  {review.hasResponse && (
                                    <div className="content_comments_resWrapper__NuvTU">
                                      <div className="content_comments_resTop__zTCTx">
                                        <div className="content_comments_resAuth__RZ6JW">
                                          Casino Apps
                                        </div>
                                        <div className="content_comments_resDate__vhI07">
                                          {review.date}
                                        </div>
                                      </div>
                                      <div className="content_comments_resComm__jaZuR">
                                        <div>{review.response}</div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}

                              <div>
                                <div>
                                  <div className="content_comments_commAWD3__DTQm-">
                                    <button>
                                      <span>See all reviews</span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>

                      <div>
                        <div>
                          <section className="DescSelector_sel__TiLso">
                            <header className="DescSelector_header__kzxq+">
                              <div className="DescSelector_hTop__iz3Wu">
                                <div className="DescSelector_hTopT__lQ46T">
                                  <h2>What's new</h2>
                                </div>
                              </div>
                            </header>
                            <div className="DescSelector_content__vd-g4">
                              <div></div>
                            </div>
                          </section>
                        </div>
                      </div>

                      <div>
                        <div>
                          <section className="DescSelector_sel__TiLso">
                            <header className="DescSelector_header__kzxq+">
                              <div className="DescSelector_hTop__iz3Wu">
                                <div className="DescSelector_hTopT__lQ46T">
                                  <h2>Developer contact</h2>
                                </div>
                                <div>
                                  <button className="DescSelector_hBtn__2tAOY">
                                    <ChevronDown
                                      size={20}
                                      className="DescSelector_hBtnIcon__lZHve"
                                    />
                                  </button>
                                </div>
                              </div>
                            </header>
                            <div className="DescSelector_content__vd-g4">
                              <div
                                className="content_contact_wrapper__+9fi3"
                                style={{ display: "none" }}
                              ></div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="footer_wrapper__3VsCj">
              <div className="footer_line__RKj3e"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviatorGameClone;
