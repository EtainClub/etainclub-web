import React, {useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Button } from 'semantic-ui-react'

const Home = () => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState();

    const onMenuClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <Menu stackable borderless>
        <Menu.Item>
            <img src='../logo.png' />
            <h3 style={{margin: 0}}>{t('Home.title')}</h3>
        </Menu.Item>

        <Menu.Menu position='right'>
        <Menu.Item
          name='introduction'
          active={activeItem === 'introduction'}
          onClick={onMenuClick}
        >
          {t('Home.introduction')}
        </Menu.Item>

        <Menu.Item
          name='howto'
          active={activeItem === 'howto'}
          onClick={onMenuClick}
        >
          {t('Home.howto')}
        </Menu.Item>

        <Menu.Item
          name='stories'
          active={activeItem === 'stories'}
          onClick={onMenuClick}
        >
            {t('Home.stories')}
        </Menu.Item>

        <Menu.Item>
            <Button
              primary
            >
              {t('Home.download')}
            </Button> 
        </Menu.Item>
        </Menu.Menu>
        </Menu>

    );
};

export default Home;