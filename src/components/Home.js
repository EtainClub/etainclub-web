import React from 'react';
import { useTranslation } from 'react-i18next';

import image1 from '../images/occupation.png';
import image1M from '../images/occupation_m.png';
import image2 from '../images/android.jpg';
import image2M from '../images/android_m.jpg';


const Home = () => {
    const {t} = useTranslation();
    const mobile = window.innerWidth < 650 ? true : false;
    let image1Url = image1;
    let image2Url = image2;
    if (mobile) {
        image1Url = image1M;
        image2Url = image2M;
    } 
    const renderImages = () => {
        if (mobile) {
            return (
                <div>
                    <div style={styles.columnContainer}>
                        <img
                            alt="main" 
                            style={{ width: 400 }}
                            src={image1Url} 
                        />
                        <img
                            alt="app" 
                            style={{ width: 400 }}
                            src={image2Url} 
                        />
                    </div>
                    <h2 style={{ textAlign: 'center' }}>How Does This Work? See Be My Eyes Video</h2>
                    <div style={styles.video}>
                        <iframe
                            width="400" 
                            height="225" 
                            src="https://www.youtube.com/embed/6GRfFuWsjNU" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        />
                    </div>
            </div>
            );
        }
        return (
            <div>
                <div style={styles.rowContainer}>
                    <img
                        alt="main" 
                        style={styles.img}
                        src={image1Url} 
                    />
                    <img
                        alt="app" 
                        style={{ width: 300 }}
                        src={image2Url} 
                    />
                </div>
                <h2 style={{ textAlign: 'center' }}>How Does This work? See Be My Eyes Video</h2>
                <div style={styles.video}>
                    <iframe
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/6GRfFuWsjNU" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderImages()}
        </div>
    );
};

const styles = {
    rowContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    columnContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
    },
    video: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    img: {
        width: 600
    }
}
export default Home;