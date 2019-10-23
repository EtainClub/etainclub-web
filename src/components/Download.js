import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';
//// images
// korean android
import image1 from '../images/ko/download/android.jpg';
import image1M from '../images/ko/download/android_m.jpg';
import image2 from '../images/ko/download/android_install_1.jpg';
import image2M from '../images/ko/download/android_install_1_m.jpg';
import image3 from '../images/ko/download/android_install_2.jpg';
import image3M from '../images/ko/download/android_install_2_m.jpg';
import image4 from '../images/ko/download/android_install_3.jpg';
import image4M from '../images/ko/download/android_install_3_m.jpg';
import image5 from '../images/ko/download/android_install_4.jpg';
import image5M from '../images/ko/download/android_install_4_m.jpg';
import image6 from '../images/ko/download/android_install_5.jpg';
import image6M from '../images/ko/download/android_install_5_m.jpg';
import image7 from '../images/ko/download/android_install_6.jpg';
import image7M from '../images/ko/download/android_install_6_m.jpg';
// korean ios
import imageIOS1 from '../images/ko/download/ios.png';
import imageIOS1M from '../images/ko/download/ios.png';

// english android
// english ios
//import image1_en from '../images/en/download/android_install.png';
//import image1M_en from '../images/en/download/contracts_diagram_m.png';

const Download = () => {
    const {t} = useTranslation();
    const downloadAndroid64 = () => {
        var link = document.createElement("a");
        link.href = "https://firebasestorage.googleapis.com/v0/b/etainclub-896c9.appspot.com/o/apk%2Fetainclub-arm64-v8a-release.apk?alt=media&token=27743058-0746-4643-8165-5020dd0a47f9";
        link.click();
    };

    const downloadAndroid32 = () => {
        var link = document.createElement("a");
        link.href = "https://firebasestorage.googleapis.com/v0/b/etainclub-896c9.appspot.com/o/apk%2Fetainclub-armeabi-v7a-release.apk?alt=media&token=84ec176e-8cd0-4cf0-b10b-b84bf03da847";
        link.click();
    };

    // get current language
    const language = i18n.language;
    const imgHeight = 700;
    // mobile?
    const mobile = window.innerWidth < 650 ? true : false;

    // show how to install
    const showInstall = () => {
        // default settings
        let img1Url = image1;
        let img2Url = image2;
        let img3Url = image3;
        let img4Url = image4;
        let img5Url = image5;
        let img6Url = image6;
        let img7Url = image7;
        let imgHeight = 700;        
        switch(language) {
            case 'ko':
                if (mobile) {
                    img1Url = image1M;
                    img2Url = image2M;
                    img3Url = image3M;
                    img4Url = image4M;
                    img5Url = image5M;
                    img6Url = image6M;
                    img7Url = image7M;
                    imgHeight = 200;
                }
                break;
            case 'en':
                console.log('english');
                break;
            default:
                console.log('default');
                break;
        }
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{paddingBottom: 50}} />         
                <h2 style={{ textAlign: 'center' }}>{t('Download.androidInstall')}</h2>
                <img alt="" height={imgHeight} src={img2Url} />
                <div style={{paddingBottom: 10}} />                                        
                <img alt="" height={imgHeight} src={img3Url} />
                <div style={{paddingBottom: 10}} />
                <img alt="" height={imgHeight} src={img4Url} />
                <div style={{paddingBottom: 10}} />
                <img alt="" height={imgHeight} src={img5Url} />
                <div style={{paddingBottom: 10}} />
                <img alt="" height={imgHeight} src={img6Url} />
                <div style={{paddingBottom: 50}} />
                <h2>{t('Download.setting')}</h2>
                <img alt="" height={imgHeight} src={img7Url} />
                <div style={{paddingBottom: 10}} />
            </div>
        );
    };

    // show how to install
    const showDevices = () => {
        // default settings
        let img1Url = image1;
        let img2Url = imageIOS1;
        let imgHeight = 700;        
        switch(language) {
            case 'ko':
                if (mobile) {
                    img1Url = image1M;
                    img2Url = imageIOS1M;
                    imgHeight = 300;
                }
                break;
            case 'en':
                console.log('english');
                break;
            default:
                console.log('default');
                break;
        }
        return (
            <div>
                <h1 style={{ textAlign: 'center', color: 'red' }}>{t('Download.notice')}</h1>
                <h2 style={{ textAlign: 'center', color: 'blue' }}>{t('Download.noticeContent1')}</h2>
                <h3 style={{ textAlign: 'center', color: 'black' }}>{t('Download.noticeContent2')}</h3>
                <hr />
            <div style={styles.rowContainer}>
                <div style={styles.columnContainer}>
                    <h2 style={{ textAlign: 'center' }}>{t('Download.android')}</h2>
                    <img alt="" height={imgHeight} src={img1Url} />
                    <Button 
                        primary 
                        style={{ margin: 7 }}
                        onClick={downloadAndroid64}
                    >
                        {t('Download.download64')}
                    </Button>
                    <Button 
                        primary 
                        style={{ margin: 7 }}
                        onClick={downloadAndroid32}
                    >
                        {t('Download.download32')}
                    </Button>
                </div>
                <div style={styles.columnContainer}>
                    <h2 style={{ textAlign: 'center' }}>{t('Download.ios')}</h2>
                    <img alt="" height={imgHeight} src={img2Url}/>
                    <Button 
                        disabled 
                        primary 
                        style={{ margin: 7 }}
                    >
                        {t('Download.download64')}
                    </Button>
                    <Button 
                        disabled 
                        primary 
                        style={{ margin: 7 }}
                    >
                        {t('Download.download32')}
                    </Button>  
                </div>
            </div>
            </div>

        );
    }

    return (
        <div>
            {showDevices()}
            {showInstall()}
        </div>
    );
};

const styles = {
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
};

export default Download;
