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
            <p>{t('Faq.header2.content2')}</p>
            <p>{t('Faq.header2.content3')}</p>

            <h2>{t('Faq.header3.title')}</h2>
            <p>{t('Faq.header3.content1')}</p>
            <p>{t('Faq.header3.content2')}</p>
            <p>{t('Faq.header3.content3')}</p>

            <h2>{t('Faq.header4.title')}</h2>
            <p>{t('Faq.header4.content1')}</p>
            <p>{t('Faq.header4.content2')}</p>
            <ul>
                <li>{t('Faq.header4.list1')}</li>
                <li>{t('Faq.header4.list2')}</li>
                <li>{t('Faq.header4.list3')}</li>
            </ul>
            <p>{t('Faq.header4.content3')}</p>
            <p>{t('Faq.header4.content4')}</p>
            <ul>
                <li>{t('Faq.header4.list4')}</li>
                <li>{t('Faq.header4.list5')}</li>
                <li>{t('Faq.header4.list6')}</li>
                <li>{t('Faq.header4.list7')}</li>
                <li>{t('Faq.header4.list8')}</li>
            </ul>

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
