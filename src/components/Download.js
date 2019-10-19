import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';

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
    // show howto
    const showHowto = () => {
        switch(language) {
            case 'ko':
                return (
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{paddingBottom: 50}} />         
                        <h2 style={{ textAlign: 'center' }}>{t('Download.androidInstall')}</h2>
                        <img height={imgHeight} src={require('../images/ko/download/android_install_1.jpg')} />
                        <div style={{paddingBottom: 10}} />                                        
                        <img height={imgHeight} src={require('../images/ko/download/android_install_2.jpg')} />
                        <div style={{paddingBottom: 10}} />
                        <img height={imgHeight} src={require('../images/ko/download/android_install_3.jpg')} />
                        <div style={{paddingBottom: 10}} />
                        <img height={imgHeight} src={require('../images/ko/download/android_install_4.jpg')} />
                        <div style={{paddingBottom: 10}} />
                        <img height={imgHeight} src={require('../images/ko/download/android_install_5.jpg')} />
                        <div style={{paddingBottom: 50}} />
                        <h2>설정 -> 생체 인식 및 보안 -> 출처를 알 수 없는 앱 설치 허용</h2>
                        <img height={imgHeight} src={require('../images/ko/download/android_install_6.jpg')} />
                        <div style={{paddingBottom: 10}} />
                    </div>
                );
            case 'en':
                console.log('english');
                break;
            default:
                console.log('default');
                break;
        }
    };

    return (
        <div>
            <div style={styles.rowContainer}>
                <div style={styles.columnContainer}>
                    <h2 style={{ textAlign: 'center' }}>{t('Download.android')}</h2>
                    <img height={imgHeight} src={require('../images/ko/download/android.jpg')} />
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
                    <img height={imgHeight} src={require('../images/app_ios.png')}/>
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
            {showHowto()}
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
