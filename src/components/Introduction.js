import React from 'react';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const {t} = useTranslation();
    // get current language
    const language = i18n.language;
    const imgHeight = 700;
    
    const showContractDiagram = () => {
        switch (language) {
            case 'ko':
                return (
                    <div>
                        <img alt="contractsDiagram" src={require('../images/ko/howto/contracts_diagram.png') } />
                    </div>
                );
            case 'en':
                break;
            default:
                break;
        }        
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
        justifyContent: 'center',
        alignItems: 'left',
        marginLeft: 200,
        marginRight: 200,
    }
};

export default Introduction;