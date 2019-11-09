import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
//
import image1 from '../images/occupation.png';
import image1M from '../images/occupation_m.png';

const Howto = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const mobile = window.innerWidth < 650 ? true : false;
    let image1Url = image1;
    let imgHeight = 700;
    if (mobile) {
        image1Url = image1M;
        imgHeight = 200;
    } 
    // show howto
    const showHowto = () => {
        switch(language) {
            case 'ko':
                return (
                    <div style={styles.rowContainer}>
                        <div style={styles.columnContainer}>
                            <img height={imgHeight} src={require('../images/ko/case1/client_1.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/ko/case1/client_2.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/ko/case1/client_3.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/ko/case1/client_3-3.png')} />
                            </div>
                            <div style={{ paddingRight: 50}} />
                            <div style={styles.columnContainer}>
                            <img height={imgHeight} src={require('../images/ko/case1/etain_1.jpg')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/ko/case1/etain_2.jpg')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/ko/case1/etain_3.jpg')} />
                            </div>
                    </div>
                );
            case 'en':
                return (
                    <div style={styles.rowContainer}>
                        <div style={styles.columnContainer}>
                            <img height={imgHeight} src={require('../images/en/case1/client_1.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/en/case1/client_2.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/en/case1/client_3.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/en/case1/client_3-3.png')} />
                            </div>
                            <div style={{ paddingRight: 50}} />
                            <div style={styles.columnContainer}>
                            <img height={imgHeight} src={require('../images/en/case1/etain_1.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/en/case1/etain_2.png')} />
                            <div style={{paddingBottom: 10}} />
                            <img height={imgHeight} src={require('../images/en/case1/etain_3.png')} />
                            </div>
                    </div>
                );
            default:
                console.log('default');
                break;
        }
    };

    return (
        <div style={styles.container}>
            <h2>{t('Howto.header1.title')}</h2>
            <p>{t('Howto.header1.content1')}</p>
            <p>{t('Howto.header1.subcontent1')}</p>
            <ol>
            <li>{t('Howto.header1.list1')}</li>
                <li>{t('Howto.header1.list2')}</li>
                <li>{t('Howto.header1.list3')}</li>
                <li>{t('Howto.header1.list4')}</li>
                <li>{t('Howto.header1.list5')}</li>
            </ol>
            <div style={styles.rowContainer}>
                <div style={styles.columnContainer}>
                    <h2 style={{textAlign: 'center'}}>{t('client')}</h2>
                </div>
                <div style={{ paddingRight: 50}} />
                <div style={styles.columnContainer}>
                    <h2 style={{textAlign: 'center'}}>{t('etain')}</h2>
                </div>
            </div>
            {showHowto()}
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
        justifyContent: 'center',
        marginRight: 20
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 400,
    },
};

export default Howto;
