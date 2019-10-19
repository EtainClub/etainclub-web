import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
//
import image1 from '../images/ko/introduction/contracts_diagram.png';
import image1M from '../images/ko/introduction/contracts_diagram_m.png';
import image1_en from '../images/en/introduction/contracts_diagram.png';
import image1M_en from '../images/en/introduction/contracts_diagram_m.png';

const Introduction = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const mobile = window.innerWidth < 650 ? true : false;
    const showContractDiagram = () => {
        // default settings
        let imgUrl = image1;
        let imgHeight = 700;
        switch (language) {
            case 'ko':
                if (mobile) {
                    imgUrl = image1M;
                    imgHeight = 200;
                }
                break;
            case 'en':
                if (mobile) {
                    imgUrl = image1M_en;
                    imgHeight = 200;
                } else {
                    imgUrl = image1_en;
                    imgHeight = 700;
                }
                break;
            default:
                break;
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <img
                    height={imgHeight} 
                    alt="contractsDiagram" 
                    src={imgUrl} />
            </div>
        );
    };

    return (
        <div style={styles.container}>
            <h2>{t('Introduction.header1.title')}</h2>
            <p>{t('Introduction.header1.content1')}</p>
            <p>{t('Introduction.header1.subcontent1')}</p>

            <h2>{t('Introduction.header2.title')}</h2>
            <p>{t('Introduction.header2.content1')}</p>

            <h2>{t('Introduction.header3.title')}</h2>
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

            <h2>{t('Introduction.header4.title')}</h2>
            <p>{t('Introduction.header4.content1')}</p>
            <ol>
                <li>{t('Introduction.header4.list1')}</li>
                <li>{t('Introduction.header4.list2')}</li>
                <li>{t('Introduction.header4.list3')}</li>
            </ol>
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
        padding: 20
    }
};

export default Introduction;