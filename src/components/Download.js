import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'semantic-ui-react';
//
import Spacer from './Spacer';

const Download = () => {
    const {t} = useTranslation();
    return (
        <div>
            <div style={styles.rowContainer}>
                <div style={styles.columnContainer}>
                    <h1 style={{ textAlign: 'center' }}>{t('Download.android')}</h1>
                    <img 
                        alt="android"
                        src={require('../images/app_android.png')}
                    />
                    <Button
                        primary
                        style={{ margin: 7 }}
                    >
                        {t('Download.download64')}
                    </Button>
                    <Button
                        primary
                        style={{ margin: 7 }}
                    >
                        {t('Download.download32')}
                    </Button>  
                </div>
                <div style={styles.columnContainer}>
                    <h1 style={{ textAlign: 'center' }}>{t('Download.ios')}</h1>
                    <img 
                        alt="ios"
                        src={require('../images/app_ios.png')}
                    />
                    <Button
                        disabled
                        primary
                        style={{ margin: 7 }}
                    >
                        {t('Download.download64')}
                    </Button>
                    <Button
                        disabled
                        primary
                        style={{ margin: 7 }}
                    >
                        {t('Download.download32')}
                    </Button>  
                </div>
            </div>
        </div>
    );
};

const styles = {
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    columnContainer: {
        display: 'flex',
        flexDirection: 'column',
    }
};

export default Download;
