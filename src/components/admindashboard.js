import React, { useState } from "react";
import {
  Star,
  Download,
  Bookmark,
  ChevronRight,
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Eye,
  Award,
  Info,
  Plus,
  Laptop,
} from "lucide-react";

const AviatorGameClone = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    },
    {
      name: "রঁহুল বসরাই",
      image: reviewerImages[1],
      date: "July 17, 2025",
      rating: 5,
      text: "Cannot believe it make me rich. Playing Aviator is very easy",
      helpful: 510,
    },
    {
      name: "Maghraj Arya",
      image: reviewerImages[2],
      date: "July 16, 2025",
      rating: 5,
      text: "Maine sirf 400 lga kar 6000 nikal liya",
      helpful: 892,
    },
    {
      name: "Hamman Sekh",
      image: reviewerImages[3],
      date: "July 16, 2025",
      rating: 5,
      text: "I'm not normally one for reviews, but Aviator has earned this one. It's exhilarating, and the winnings are fantastic. This app is a must!",
      helpful: 918,
    },
    {
      name: "Sra Pathan",
      image: reviewerImages[4],
      date: "July 15, 2025",
      rating: 5,
      text: "I got hooked on this game from the very first moment of playing. I was pleasantly surprised",
      helpful: 1000,
    },
    {
      name: "Vanshubh Raja",
      image: reviewerImages[5],
      date: "July 15, 2025",
      rating: 4,
      text: "From the sign-up bonus to the big wins, Aviator exceeded all my expectations. This is how a casino game should be!",
      helpful: 1400,
    },
  ];

  const handleInstallClick = () => {
    window.open(
      "https://balaji365.com/mobile-number?agent_code=JB869318X",
      "_blank"
    );
  };

  const StarRating = ({ rating, size = "w-4 h-4" }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating
                ? "fill-green-600 text-green-600"
                : "fill-gray-300 text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white min-h-screen">
      {/* Header Section */}
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <img
            src="https://4rabets.aviator-pwa-store.com/assets-ucp/Efm9/i6ec0bba540e009de830697a332ae31fc/_r174x174_webp"
            alt="Aviator Game"
            className="w-20 h-20 rounded-2xl"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-medium text-gray-900">Aviator Game</h1>
            <p className="text-green-600 text-sm font-medium">Casino co.</p>
            <p className="text-xs text-gray-500 mt-1">
              Without ads · In-app purchases
            </p>
          </div>
        </div>

        {/* Rating and Stats */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="text-xl font-medium">4.9</div>
              <Star className="w-4 h-4 fill-current text-gray-600 ml-1" />
            </div>
            <div className="text-xs text-gray-500 mt-1">19K reviews</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="text-xl font-medium">500K+</div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Downloads</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Award className="w-6 h-6 text-gray-600" />
            </div>
            <div className="text-xs text-gray-500 mt-1">Editors' Choice</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <div className="w-6 h-6 border-2 border-gray-600 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-gray-600">18+</span>
              </div>
              <Info className="w-3 h-3 text-gray-500 ml-1" />
            </div>
            <div className="text-xs text-gray-500 mt-1">Rated for 18+</div>
          </div>
        </div>

        {/* Install Button */}
        <button
          onClick={handleInstallClick}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-medium text-lg mt-6 hover:bg-green-700 transition-colors"
        >
          Install
        </button>

        {/* Add to Wishlist */}
        <button className="w-full flex items-center justify-center space-x-2 py-3 mt-3 text-green-600 font-medium">
          <div className="relative">
            <Bookmark className="w-5 h-5" />
            <Plus className="w-3 h-3 absolute -top-1 -right-1 bg-white rounded-full" />
          </div>
          <span>Add to wishlist</span>
        </button>

        <p className="text-xs text-gray-500 mt-4 flex items-center">
          <Laptop className="w-4 h-4 mr-2" />
          This app is available for all of your devices.
        </p>
      </div>

      {/* Screenshots */}
      <div className="px-6 mb-6">
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {appImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Screenshot ${index + 1}`}
              className="w-48 h-86 rounded-lg flex-shrink-0 object-cover cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">About this game</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-gray-700 text-sm mb-4">
          India's first leading real money making Aviator game where you can
          start earning instantly and withdraw profit directly to your Bank
          account using UPI. You can change your destiny using this app.
        </p>
        <p className="text-gray-700 text-sm mb-4">
          Supported payment Apps are PhonePe, Gpay, Paytm, all other UPI Apps
          etc.
        </p>
        <div className="text-xs text-gray-500">
          <p className="mb-1">Updated on</p>
          <p>July 16, 2025</p>
        </div>
      </div>

      {/* Data Safety */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Data safety</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-sm text-gray-500 mb-6">
          In this section, developers can specify how applications collect and
          use data.
        </p>

        {/* Data Safety Card */}
        <div className="border border-gray-300 rounded-lg p-4 mb-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Share2 className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-normal text-gray-900 mb-1">
                  No data shared with third parties
                </p>
                <button className="text-xs text-teal-600 underline">
                  Learn more
                </button>
                <span className="text-xs text-gray-500 ml-1">
                  about how developers declare sharing
                </span>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Eye className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-normal text-gray-900 mb-1">
                  No data collected
                </p>
                <button className="text-xs text-teal-600 underline">
                  Learn more
                </button>
                <span className="text-xs text-gray-500 ml-1">
                  about how developers declare collection
                </span>
              </div>
            </div>
          </div>

          <button className="text-teal-600 text-sm font-medium mt-4 underline">
            See details
          </button>
        </div>
      </div>

      {/* Ratings and Reviews */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Ratings and reviews</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>

        {/* Rating Overview */}
        <div className="flex items-start space-x-8 mb-6">
          <div className="text-left">
            <div className="text-6xl font-light text-gray-900 mb-1">4.9</div>
            <StarRating rating={5} size="w-3 h-3" />
            <div className="text-xs text-gray-500 mt-2">19K reviews</div>
          </div>

          <div className="flex-1 mt-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2 mb-1">
                <span className="text-xs text-gray-600 w-2">{rating}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      rating === 5
                        ? "bg-green-500 w-full"
                        : rating === 4
                        ? "bg-green-500 w-2/12"
                        : "bg-gray-200 w-0"
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border-b border-gray-100 pb-6 last:border-b-0"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="font-medium text-sm">{review.name}</h4>
                  </div>
                </div>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>

              <div className="ml-13 pl-0">
                <div className="flex items-center space-x-2 mb-2">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>

                <p className="text-sm text-gray-700 mb-3 leading-relaxed">
                  {review.text}
                </p>

                <p className="text-xs text-gray-500 mb-3">
                  {review.helpful} people found this review helpful
                </p>

                <div className="flex items-center space-x-1 mb-4">
                  <span className="text-xs text-gray-500">
                    Did you find this helpful?
                  </span>
                  <button className="ml-4 px-6 py-2 border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50">
                    Yes
                  </button>
                  <button className="px-6 py-2 border border-gray-300 rounded-full text-xs text-gray-700 hover:bg-gray-50">
                    No
                  </button>
                </div>

                {/* Developer Response */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      Casino Apps
                    </span>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Thanks you for your positive feedback! We're thrilled to
                    hear that you enjoyed the game. Keep spinning and have a
                    fantastic time!
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="text-green-600 text-sm font-medium mt-4">
          See all reviews
        </button>
      </div>

      {/* What's New */}
      <div className="px-6 mb-6">
        <h2 className="text-lg font-medium mb-4">What's new</h2>
      </div>

      {/* Developer Contact */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-medium">Developer contact</h2>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default AviatorGameClone;
