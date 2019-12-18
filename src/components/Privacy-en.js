import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyEN = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h1>Privacy Policy</h1>
            <p>Effective Date: 1 January 2020</p>
            <p>
                This Privacy Policy sets out the terms under which Accessibly Inc., 
                doing business as HELPUS (“us,” “we,” or “helpus”) 
                will treat your personal information any time you come in contact with HELPUS 
                or any HELPUS service (each a “Service” and together, the “Services”).  
                We created this Privacy Policy (this “Policy”) to give you confidence as you visit 
                and use the Services, and to demonstrate our commitment 
                to fair information practices and the protection of privacy. 
                This Policy is only applicable to the Services, 
                and not to any other websites or services that you may be able to access from our Services, 
                each of which may have data collection and use practices and policies 
                that differ materially from this Policy.
            </p>
            <h3>Usages of User Information</h3>
            <p>
                helpus collects user information for the following purpose:
                <ol>
                    <li>Providing default service or specialized service</li>
                    <li>Notifying personally</li>
                    <li>Resolving issues and disputes</li>
                    <li>Providing events</li>             
                    <li>Commitment of duty to follow related laws</li>
                    <li>Preventing abuse of the service</li>
                </ol>
            </p>
            <h3>Information We Collect</h3>
                <ol>
                    <li>Phone number</li>
                    <li>username (optinal)</li>
                    <li>Avatar (optional)</li>
                    <li>Helping domains (optional)</li>
                    <li>User locations (optional)</li>             
                    <li>Got helped cases</li>
                    <li>Helped cases</li>             
                    <li>Device information (lanuage, country), cookies</li>
                </ol>
            <h3>How To Colllect Information</h3>
                <p>
                    helpus collect user information and data using the followings:
                    <ol>
                        <li>When a user signs up and signs under user's agreemment</li>
                        <li>When asking or helping, a user types in chat rooms</li>
                        <li>When a user updates user profile, helping domains, and locations</li>
                        <li>When a user participates in events and asks about services</li>
                    </ol>
                </p>
            <h3>Data Are Collected By Using The Services</h3>
                <p>
                    User's device information such as OS, screen size, country, and language.
                    Cookies and date of app usage may be collected automatically.
                </p>
            <h3>Sharing User Information</h3>
            <p>
                helpus never shares user's personal information without account holder's permission except related law cases.
            </p>
            <p>
                helpus delegates user information and usage data to the following third party for the seamless services:
                <ul>
                    <li>Delegation Company: Google Firebase</li>
                    <li>Delegation Contents: Phone number, Help messages, Chats, User profile</li>
                    <li>Retention Period: Until deleting an account</li>
                </ul>
            </p>
            <h3>Deletion of User Information</h3>
                <p>
                    If you would like to review or request changes to the information 
                    that we collect about you, 
                    please contact us at <a href="mailto:etainclub@gmail.com">etainclub@gmail.com</a>. 
                    If we are unable to meet your specific request, 
                    you have the option to ask us to delete all of your information in our systems.
                </p>
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

export default PrivacyEN;
