import React from 'react';
import { SubHeading } from "../../components";
import { images } from "../../constants";
import {awards} from "../../constants/data"
import './Laurels.css';


const AwardCards = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="awards" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      <p className='p__opansans' style={{color: "#fff"}}>{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>
      <div className='app__laurels_awards'>
        {awards.map((award) => <AwardCards award={award} key={award.title}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="G" />
    </div>
  </div>
);

export default Laurels;
