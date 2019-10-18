import React from 'react';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h1>{t('Introduction.header1.title')}</h1>
            <p>{t('Introduction.header1.content1')}</p>
            <p>{t('Introduction.header1.subcontent1')}</p>
            <h1>{t('Introduction.header2.title')}</h1>
            <p>{t('Introduction.header2.content1')}</p>
            <p>{t('Introduction.header2.subcontent1')}</p>
            <p>{t('Introduction.header2.subcontent2')}</p>
            <ul>
                <li>{t('Introduction.header2.list1')}</li>
                <li>{t('Introduction.header2.list2')}</li>
                <li>{t('Introduction.header2.list3')}</li>
                <li>{t('Introduction.header2.list4')}</li>
                <li>{t('Introduction.header2.list5')}</li>
                <li>{t('Introduction.header2.list6')}</li>
            </ul>
            <h1>{t('Introduction.header3.title')}</h1>
            <p>{t('Introduction.header3.content1')}</p>
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