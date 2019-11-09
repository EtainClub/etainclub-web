import React from 'react';
import { useTranslation } from 'react-i18next';

const Resources = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h2>{t('Resources.header1.title')}</h2>
            <ul>
                <li><a href="https://github.com/EtainClub/etainclub-web">{t('Resources.header1.list1-1')}</a></li>
                <li><a href="https://github.com/EtainClub/etainclub">{t('Resources.header1.list1-2')}</a></li>
            </ul>
            <h2>{t('Resources.header2.title')}</h2>
            <ul>
                <li><a href="https://www.facebook.com/etainlov/">{t('Resources.header2.list2-1')}</a></li>
                <li><a href="https://www.facebook.com/groups/497453057500529/">{t('Resources.header2.list2-2')}</a></li>
                <li><a href="https://steemit.com/@etainclub">{t('Resources.header2.list2-3')}</a></li>
                <li><a href="https://medium.com/@etainclub">{t('Resources.header2.list2-4')}</a></li>
                <li><a href="https://cafe.naver.com/etainclub">{t('Resources.header2.list2-5')}</a></li>
                <li><a href="https://opentutorials.org/course/2858">{t('Resources.header2.list2-6')}</a></li>
                <li><a href="https://twitter.com/etainclub">{t('Resources.header2.list2-7')}</a></li>
                <li><a href="https://www.youtube.com/channel/UC5mMQwLKKES3gty0lJKg8Mw">{t('Resources.header2.list2-8')}</a></li>
            </ul>
            <h2>{t('Resources.header3.title')}</h2>
            <ul>
                <li>{t('Resources.header3.list3-1')}</li>
            </ul>
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
    }
};

export default Resources;
