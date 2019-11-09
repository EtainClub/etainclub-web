import React, {useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Button, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../i18n';
import i18n from '../i18n';

const Header = () => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState();

    const languageOptions = [
      { key: 'en', text: 'English', value: 'en' }, 
      { key: 'ko', text: '한글',     value: 'ko' },
    ];

    const onLanguageChange = (e, data) => {
      const lang = data.value;
      console.log('lang val', lang);
      i18n.changeLanguage(lang);
    }

    const onMenuClick = (e, { name }) => {
        setActiveItem(name);
    };

    return (
        <Menu stackable borderless>
        <Menu.Item
            as={Link} to='/'
            onClick={onMenuClick}
        >
            <img alt="logo" src='../logo.png' />
            <h3 style={{margin: 0}}>{t('Header.title')}</h3>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Dropdown
              button
              className='icon'
              floating
              labeled
              icon='world'
              options={languageOptions}
              text={t('Header.language')}
              onChange={onLanguageChange}
          />
          </Menu.Item>
          <Menu.Item
            as={Link} to='/introduction'
            name='introduction'
            active={activeItem === 'introduction'}
            onClick={onMenuClick}
          >
            {t('Header.introduction')}
          </Menu.Item>

          <Menu.Item
            as={Link} to='/howto' 
            name='howto'
            active={activeItem === 'howto'}
            onClick={onMenuClick}
          >
            {t('Header.howto')}
          </Menu.Item>

          <Menu.Item
            as={Link} to='/stories'
            name='stories'
            active={activeItem === 'stories'}
            onClick={onMenuClick}
          >
              {t('Header.stories')}
          </Menu.Item>

          <Menu.Item
            as={Link} to='/resources'
            name='resources'
            active={activeItem === 'resources'}
            onClick={onMenuClick}
          >
              {t('Header.resources')}
          </Menu.Item>

          <Menu.Item
            as={Link} to='/faq'
            name='faq'
            active={activeItem === 'faq'}
            onClick={onMenuClick}
          >
              {t('Header.faq')}
          </Menu.Item>

          <Menu.Item
            as={Link} to='/download'
          >
              <Button
                primary
              >
                {t('Header.download')}
              </Button> 
          </Menu.Item>
        </Menu.Menu>
        </Menu>

    );
};

export default Header;