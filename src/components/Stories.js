import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { Button, Icon } from 'semantic-ui-react';
//
import image1 from '../images/helping_heart.jpeg';
import image1M from '../images/helping_heart_m.jpeg';

const Stories = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const mobile = window.innerWidth < 650 ? true : false;
    let imgUrl = image1;
    let imgHeight = 500;
    if (mobile) {
        imgUrl = image1M;
        imgHeight = 200;
    } 
    const renderImage = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <img
                height={imgHeight} 
                alt="helpingHeart" 
                src={imgUrl} />
            </div>
        );
    };

    const visitNaverCafe = () => {
        var link = document.createElement("a");
        link.href = "https://cafe.naver.com/etainclub";
        link.click();
    };

    const renderNaverButton = () => {
        if (language == 'ko') {
            return (
                <Button
                    style={{ margin: 7, backgroundColor: 'green' }}
                    onClick={visitNaverCafe}
                >
                    {t('Stories.naverCafe')}
                </Button>
            );
        }

    };

    const visitCommunity = () => {
        var link = document.createElement("a");
        link.href = "https://www.facebook.com/groups/497453057500529/";
        link.click();
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{t('Stories.title')}</h2>
            {renderImage()}
            <hr />
            <div style={styles.button}>
                <Button
                    icon 
                    primary 
                    style={{ margin: 7 }}
                    onClick={visitCommunity}
                >
                    <Icon name='facebook' />
                    {t('Stories.facebookGroup')}
                </Button>
                {renderNaverButton()}
            </div>
        </div>
    );
};

const styles = {
    button: {
        display: 'flex',
        justifyContent: 'center'
    }
}
export default Stories;
