import React from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h1>{t('Faq.header1.title')}</h1>
            <p>{t('Faq.header1.content1')}</p>
            <h1>{t('Faq.header2.title')}</h1>
            <p>{t('Faq.header2.content1')}</p>
            <h1>{t('Faq.header3.title')}</h1>
            <p>{t('Faq.header3.content1')}</p>
            <h1>{t('Faq.header4.title')}</h1>
            <p>{t('Faq.header4.content1')}</p>
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

export default Faq;
