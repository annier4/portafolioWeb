import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';
import './Slide.css';
import './swiper.min.css';
import './component.css';

class MyModal extends Component {
    render(){
        const { text,onRequestClose } = this.props;
        return (
            <Modal
               onRequestClose={onRequestClose}
               effect={Effect.Sign3D}>
               <h1>What you input : {text}</h1>
               <button onClick={ModalManager.close}>Close Modal</button>
            </Modal>
         );
    }
}

export class Slide extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }

        window.addEventListener('devicemotion', function(e) { 
            let x = e.accelerationIncludingGravity.x; 
            let y = e.accelerationIncludingGravity.y; 
            let z = e.accelerationIncludingGravity.z; 
            console.log(x);
        });
    }

    openModal(){
        ModalManager.open(<MyModal text={"bla"} onRequestClose={() => true}/>);
     }

    render() {

      /* parametros slide */
      const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        spaceBetween: 30,
        slidesPerView: 4
      }

        return (
          <div>
          <Swiper {...params}>
            <div className={"swiper-slide intro cover-background"}>
                <h1>[ Hello ],</h1>
                <p>
                    I’m <strong>Annie Rojas</strong><br/>
                    I’m <strong>Creative</strong><br/>
                    I’m <strong>Passionate</strong><br/>
                    I’m <strong>Focused</strong>
                </p>
                <p>Currently I'm a designer and web developer, who works with a variety of clients and on many diverse projects.<br/>
                    I work to create innovative solutions that inspire, and foster memorable relationships between brands and their clients. With a focus on branding and UX / UI / Web, I strive to create usable and polished products through passionate and deliberate design.       
                </p>
                <p><strong>Welcome to my portfolio</strong></p>
                <p><img src="assets/img/signing.png" /></p>
              </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/shui.jpg')", height: "100vh"}} >
              <figure className={"position-absolute"}>
                <figcaption>
                    <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)} >[ Skills ]</button>
                    <p className={"subtitle"}>MY ABILITIES AND EXPERIENCE</p>
                    <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                </figcaption>
              </figure>  
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/sagitta.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ Sagitta ]</button>
                      <p className={"subtitle"}>CREATIVE EXPRESSION GAME</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/planVe.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ Plan Vé ]</button>
                      <p className={"subtitle"}>RECOMMENDATION APP</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/the-new-big-heroes.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ Heroes ]</button>
                      <p className={"subtitle"}>INTERACTIVE REHABILITATION</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/nukak.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ Nukak ]</button>
                      <p className={"subtitle"}>VIRTUAL STORE DESIGN</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/playa-giron.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ Playa Giron ]</button>
                      <p className={"subtitle"}>VIDEO LYRIC</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>

            <div className={"swiper-slide cover-background"} style={{background: "url('assets/img/dmi.jpg')", height: "100vh"}}>
              <figure className={"position-absolute"}>
                  <figcaption>
                      <button className={"md-trigger"} type="button" onClick={this.openModal.bind(this)}>[ DMI ]</button>
                      <p className={"subtitle"}>REDESIGN WEB RESPONSIVE</p>
                      <div className={"separator-line-horrizontal-medium-light2 opacity5 bg-white margin-35px-top sm-margin-15px-top"}></div>
                  </figcaption>
              </figure>
            </div>
          </Swiper>
          </div>
        )
      }
}