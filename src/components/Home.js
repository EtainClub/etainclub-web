import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.imgContainer}>
            <img
                alt="main" 
                style={styles.img}
                src={require('../images/occupation.png')} 
            />
            <img
                alt="app" 
                style={{ width: 300 }}
                src={require('../images/app_help.jpeg')} 
            />
        </div>
    );
};

const styles = {
    imgContainer: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
    },
    img: {
        width: 600
    }
}
export default Home;