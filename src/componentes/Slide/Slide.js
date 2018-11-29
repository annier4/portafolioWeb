import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import './Slide.css';
import './swiper.min.css';
import './component.css';

export class Slide extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
          <Swiper>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
          </Swiper>
        )
      }
}