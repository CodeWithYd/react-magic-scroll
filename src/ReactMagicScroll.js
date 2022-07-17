import React from 'react';
import { Controller, Scene} from 'react-scrollmagic';
import { Timeline, Tween } from 'react-gsap';

//layers
import cloud from './img/cloud.png';
import conffeti from './img/conffeti.png';
import girl from './img/girl.png';
import light from './img/light.png';

const ReactMagicScroll = () => {
    return (
        <Controller>
            <Scene duration={1000} pin={true} indicators={false} triggerHook="onLeave">
                {
                    (progress)=>(
                        <div style={{
                            background: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100vh',
                            overflow: 'hidden'
                        }}>
                            <Timeline totalProgress={progress} paused>
                                <Tween
                                    from={{y: '-110vh'}}
                                    to={{y: '-90vh'}}
                                    duration={1000} 
                                >
                                    <img src={conffeti} style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0}} />
                                </Tween>
                                <Tween
                                    from={{y: '11vh'}}
                                    to={{y: '12vh'}}
                                    duration={1000} 
                                >
                                    <img src={girl} style={{width: '30%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2}} />
                                </Tween>
                                <Tween
                                    from={{y: '0vh', scale: 1}}
                                    to={{y: '1vh', scale: 1.3}}
                                    duration={1000} 
                                >
                                    <img src={light} style={{width: '100%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 1, left: 0, top: 0}} />
                                </Tween>
                                <Tween
                                    from={{y: '85vh', opacity: 0.5}}
                                    to={{y: '70vh', opacity: 0.6}}
                                    duration={1000} 
                                >
                                    <img src={cloud} style={{width: '120%', transition: 'transform .4s ease-out', position: 'absolute', zIndex: 2}} />
                                </Tween>
                            </Timeline>

                        </div>
                    )
                }
            </Scene>
        </Controller>
    );
};

export default ReactMagicScroll;