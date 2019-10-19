import React from 'react';
import { useTranslation } from 'react-i18next';

const Faq = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h2>{t('Faq.header1.title')}</h2>
            <p>{t('Faq.header1.content1')}</p>
            <h2>{t('Faq.header2.title')}</h2>
            <p>{t('Faq.header2.content1')}</p>
            <h2>{t('Faq.header3.title')}</h2>
            <p>{t('Faq.header3.content1')}</p>
            <h2>{t('Faq.header4.title')}</h2>
            <p>{t('Faq.header4.content1')}</p>
            <h2>{t('Faq.header5.title')}</h2>
            <p>{t('Faq.header5.content1')}</p>
            <p>{t('Faq.header5.content2')}</p>
        </div>

    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    }
};

export default Faq;
