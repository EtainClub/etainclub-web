import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

//// images
// korean
import image1 from '../images/occupation.png';
import image2 from '../images/ko/home/android.png';
// korean mobile
import image1M from '../images/occupation_m.png';
import image2M from '../images/ko/home/android_m.png';
// english
import imageEN1 from '../images/occupation.png';
import imageEN2 from '../images/en/home/ios.png';
// korean mobile
import imageEN1M from '../images/occupation_m.png';
import imageEN2M from '../images/en/home/ios.png';

// video url
const videoUrlKo = 'https://www.youtube.com/embed/RJ9WhK4SQi8';
const videoUrlEn = 'https://www.youtube.com/embed/WkgzsaSAtNo';

const Home = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const mobile = window.innerWidth < 650 ? true : false;
//    const mobile = true;
    
    
    // render images
    const renderImages = () => {
        // default image url : korean web
        let image1Url = image1;
        let image2Url = image2;
        let videoUrl = videoUrlEn;
        switch (language) {
            case 'ko':
                if (mobile) {
                    image1Url = image1M;
                    image2Url = image2M;
                }
                videoUrl = videoUrlKo;
                break;
            case 'en':
                if (mobile) {
                    image1Url = imageEN1M;
                    image2Url = imageEN2M;
                } else {
                    image1Url = imageEN1;
                    image2Url = imageEN2;
                }
                videoUrl = videoUrlEn;
                break;
            default: 
                break;
        }

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
                    <h2 style={{ textAlign: 'center' }}>{t('Home.videoTitle')}</h2>
                    <div style={styles.video}>
                        <iframe
                            width="400" 
                            height="225" 
                            src={videoUrl} 
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
                <h2 style={{ textAlign: 'center' }}>{t('Home.videoTitle')}</h2>
                <div style={styles.video}>
                    <iframe
                        width="560" 
                        height="315" 
                        src={videoUrl}
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
        width: 600,
        height: 424
    }
}
export default Home;