import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
//
import image1 from '../images/ko/introduction/contracts_diagram.png';
import image1M from '../images/ko/introduction/contracts_diagram_m.png';
import image1_en from '../images/en/introduction/contracts_diagram.png';
import image1M_en from '../images/en/introduction/contracts_diagram_m.png';
import image2 from '../images/en/introduction/kindspring.png';
import image2M from '../images/en/introduction/kindspring_m.png';
import image3 from '../images/en/introduction/location_verify.png';
import image3M from '../images/en/introduction/location_verify_m.png';

const Introduction = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const mobile = window.innerWidth < 650 ? true : false;
    const showContractDiagram = () => {
        // default settings
        let imgUrl = image1;
        let imgWidth = 600;
        switch (language) {
            case 'ko':
                if (mobile) {
                    imgUrl = image1M;
                    imgWidth = 200;
                }
                break;
            case 'en':
                if (mobile) {
                    imgUrl = image1M_en;
                    imgWidth = 200;
                } else {
                    imgUrl = image1_en;
                    imgWidth = 600;
                }
                break;
            default:
                break;
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img
                    width={imgWidth} 
                    alt="contractsDiagram" 
                    src={imgUrl} />
            </div>
        );
    };

    const showKindSpring = () => {
        // default settings
        let imgUrl = image2;
        let imgWidth = 600;
        if (mobile) {
            imgUrl = image2M;
            imgWidth = 200;
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img
                        width={imgWidth} 
                        alt="kindspring" 
                        src={imgUrl} />
                </div>
                <a href="https://www.kindspring.org">KindSpring</a>
                <br />
            </div>
        );
    }

    const showLocationVerify = () => {
        // default settings
        let imgUrl = image3;
        let imgWidth = 500;
        if (mobile) {
            imgUrl = image3M;
            imgWidth = 200;
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <br />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img
                        width={imgWidth} 
                        alt="kindspring" 
                        src={imgUrl} />
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <h2>{t('Introduction.header1.title')}</h2>
            <p>{t('Introduction.header1.content1')}</p>
            <p>{t('Introduction.header1.subcontent1')}</p>

            <h2>{t('Introduction.header2.title')}</h2>
            <p>{t('Introduction.header2.content1')}</p>

            <h2>{t('Introduction.header3.title')}</h2>
            <p>{t('Introduction.header3.content2')}</p>
            <p>{t('Introduction.header3.subcontent2-1')}</p>
            {showKindSpring()}

            <p>{t('Introduction.header3.content1')}</p>
            <p>{t('Introduction.header3.subcontent1')}</p>
            <p>{t('Introduction.header3.subcontent2')}</p>
            <ul>
                <li>{t('Introduction.header3.list1')}</li>
                <li>{t('Introduction.header3.list2')}</li>
                <li>{t('Introduction.header3.list3')}</li>
                <li>{t('Introduction.header3.list4')}</li>
                <li>{t('Introduction.header3.list5')}</li>
                <li>{t('Introduction.header3.list6')}</li>
            </ul>
            <p>{t('Introduction.header3.content2')}</p>


            <h2>{t('Introduction.header4.title')}</h2>
            <p>{t('Introduction.header4.content1')}</p>
            <ol>
                <li>{t('Introduction.header4.list1')}</li>
                <li>{t('Introduction.header4.list2')}</li>
                <li>{t('Introduction.header4.list3')}</li>
            </ol>
            {showLocationVerify()}
            <p>{t('Introduction.header4.content2')}</p>
            <div style={{ paddingBottom: 20 }} />
            {showContractDiagram()}
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
};

export default Introduction;