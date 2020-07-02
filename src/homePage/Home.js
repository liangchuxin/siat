import React from "react";
// components
import Species from "./Species";
import FullWidthSpecies from "./FullWidthSpecies";
//image gallery
import ImageGallery from "react-image-gallery";
// assets
import "./Home.scss";
// data
import { species } from "../App";

const images = [
  {
    original:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmbhr8aj315g0u0q89.jpg",
    thumbnail:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmbhr8aj315g0u0q89.jpg",
    description: "Tiger -- by Elyse",
  },
  {
    original:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmiqxprj315j0u07aw.jpg",
    thumbnail:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpmiqxprj315j0u07aw.jpg",
    description: "Snake -- by Elyse",
  },

  {
    original:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpn10h23j31640u0783.jpg",
    thumbnail:
      "https://tva1.sinaimg.cn/large/007S8ZIlgy1gfvpn10h23j31640u0783.jpg",
    description: "Shark -- by Elyse",
  },
  {
    original: "https://i.loli.net/2020/07/02/iIpjv9wVuSTfGaO.jpg",
    thumbnail: "https://i.loli.net/2020/07/02/iIpjv9wVuSTfGaO.jpg",
    description: "Tiger -- by Jessica",
  },
  {
    original: "https://i.loli.net/2020/06/21/uhAIPfXbid8p3Vc.jpg",
    thumbnail: "https://i.loli.net/2020/06/21/uhAIPfXbid8p3Vc.jpg",
    description: "Elephant -- by Jessica",
  },
];

export default function Home() {
  return (
    <>
      <FullWidthSpecies
        key={species[4].name}
        speciesInfo={species[4]}
        readMore={true}
      />

      <div className="left-right">
        <Species key={species[0].name} speciesInfo={species[0]} />
        <Species key={species[1].name} speciesInfo={species[1]} />
      </div>
      <div className="artwork" id="art">
        {/* <div>
          <h2 className="artwork-title">Artwork by Jessica and Elyse</h2>
          <p className="artwork-description">
            Perhaps oil painting on cardboard(s)
          </p>
        </div> */}
        <ImageGallery items={images} />
      </div>
      <div className="left-right">
        <Species key={species[2].name} speciesInfo={species[2]} />
        <Species key={species[3].name} speciesInfo={species[3]} />
      </div>
    </>
  );
}
