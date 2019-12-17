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
import imageEN1 from '../images/en/download/android.jpg';
import imageEN1M from '../images/en/download/android_m.png';

// english ios
import imageENIOS1 from '../images/en/download/ios.png';
import imageENIOS1M from '../images/en/download/ios.png';

//import image1_en from '../images/en/download/android_install.png';
//import image1M_en from '../images/en/download/contracts_diagram_m.png';

const Download2 = () => {
    const {t} = useTranslation();

    const downloadAndroidAR = () => {
        var link = document.createElement("a");
        // helpus AR version
        link.href = "https://firebasestorage.googleapis.com/v0/b/helpme-47015.appspot.com/o/apk%2Fhelpus-ar-release.apk?alt=media&token=e9f97e51-42f8-4670-9fad-43258f17419b";
        link.click();
    };

    return (
        <div style={styles.container}>
            <Button 
                primary 
                style={{ margin: 7 }}
                onClick={downloadAndroidAR}
            >
                AR Test Version Download
            </Button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        maxWidth: 600,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
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

export default Download2;
