import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsEN = () => {
    const {t} = useTranslation();
    return (
        <div style={styles.container}>
            <h1>Terms of Use</h1>
            <p>Effective Date: 1 January 2020</p>
            <p>
                Thank you for using helpus service.  
                Please read the terms of the app to help each other.
            </p>
            <h3>Account</h3>
            <p>
                helpus is a mobile phone service. You can use the service with your phone number. 
                However, you need to verify that you own the phone number.
                When you change your device, then you need to go through the verification process again.
                The account may not be created in the following cases:
                <ol>
                    <li>Trying to create an account by using other person's personal information</li>
                    <li>Trying to create multiple accounts</li>
                    <li>Trying to omit required information or to input false information</li>
                    <li>Trying to use the account that violates the helpus rules</li>             
                    <li>Trying to use the account that has history of fraud</li>
                </ol>
                The account may be used by the account holder, and it cannot be relinquished to others.
                A user can change the account related information such as avatar and username.
                You can request to change your phone number through the helpus manager. 
                In this case, you need to go through the verification process. 
            </p>
            <h3>Cautions</h3>
            <p>
                There might be users who try to abuse the helpus service.
                The followings are things that the helpus serive should be used for.
                The helpus may van or restrict the usage as well as remove the account. 
                <ol>
                    <li>Sharing identification documents such as credit card number, passport, and driver license</li>
                    <li>Sharing credit card number or password of bank account</li>
                    <li>Sharing phone number or personal address. However, you can share your address when you trust the helper</li>
                    <li>Sharing nude, unlawful, hateful or sexually suggestive contents</li>
                    <li>Trying to hack the app software to steal user information</li>
                </ol>
            </p>
            <h3>Privacy Policy</h3>
            <p>
                User information and data are used to provide proper service under user's agreement. 
                More details on privacy policy, please refer to the <a href="https://etain.club/privacy-en">Privacy Policy</a>.
            </p>
            <h3>Disclaimers</h3>
            <p>
                HELUPS IS NOT RESPONSIBLE FOR USER CONTENT, 
                THE ADVICE / HELP GIVEN TO USERS BY HELPING USERS, 
                OR ANY VISUAL IMAGES OR AUDIO TRANSMITTED ACROSS A CHAT.
                HELPUS SERVICES ARE PROVIDED “AS IS,” AS AVAILABLE, 
                AND WITHOUT ANY WARRANTIES OR CONDITIONS (EXPRESS OR IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF 
                MERCHANTABILITY, ACCURACY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT, 
                ARISING BY STATUTE OR OTHERWISE IN LAW OR FROM A COURSE OF DEALING OR USAGE OR TRADE).
                HELPUS DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.  
                YOU AGREE NOT TO RELY ON THE SERVICES, OR ANY INFORMATION IN THE SERVICES, 
                OR THEIR CONTINUATION.  WE DISCLAIM ALL AND MAKE NO REPRESENTATIONS OR WARRANTIES, 
                OF ANY KIND, EITHER EXPRESS OR IMPLIED, AS TO THE QUALITY, IDENTITY OR RELIABILITY OF 
                ANY USER CONTENT, OR THIRD PARTY SERVICES, OR AS TO THE ACCURACY, 
                COMPLETENESS OR USEFULNESS OF ANY CONTENT ACCESSIBLE VIA THE SERVICES.  
                SOME STATES AND JURISDICTIONS MAY NOT ALLOW FOR ALL THE FOREGOING LIMITATIONS ON 
                IMPLIED WARRANTIES, SO TO THAT EXTENT, 
                IF ANY, SOME OR ALL OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
                HELPUS IS NOT RESPONSIBLE FOR USER CONTENT AND 
                SPECIFICALLY DISCLAIMS ANY RESPONSIBILITY OR LIABILITY TO ANY PERSON OR ENTITY FOR ANY LOSS, 
                DAMAGE, INJURY, CLAIM, OR LIABILITY OF ANY KIND OR CHARACTER BASED UPON 
                OR RESULTING FROM ANY USER CONTENT.
            </p>
            <p>
                Although it is helpus’ intention for the Service to be available as much as possible, 
                there will be occasions when the Service may be interrupted, including, but not limited to, 
                for emergency repairs and scheduled maintenance or upgrades. 
                In addition, your ability to use the Services is dependent on the functionality of 
                the device that you use to access the Services as well as the availability and 
                coverage of wireless networks, telecommunications networks and the Internet, 
                all of which involve facilities manufactured, owned and/or operated by third parties. 
                HELPUS IS NOT RESPONSIBLE FOR THE OPERATION, AVAILABILITY 
                OR FAILURE OF ANY THIRD PARTY DEVICES, SYSTEMS OR FACILITIES, 
                INCLUDING WITHOUT LIMITATION THOSE REQUIRED TO USE THE SERVICES.
            </p>
            <h3>Limitation of Liability</h3>
            <p>
                Between you and helpus:  IN THE EVENT OF A DISPUTE BETWEEN YOU AND HELPUS: 
                (I) NEITHER YOU NOR HELPUS, OUR AFFILIATES, OUR LICENSORS OR 
                OUR THIRD-PARTY SERVICE PROVIDERS WILL BE LIABLE FOR 
                ANY SPECIAL, INDIRECT, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, INCLUDING 
                BUT NOT LIMITED TO, LOSS OF PROFITS, LOSS OF BUSINESS OPPORTUNITIES OR LOSS OF GOODWILL, 
                EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; AND 
                (II) NEITHER PARTY’S LIABILITY TO THE OTHER WILL EXCEED USD $1,000.
            </p>
            <p>
                Between you and another user: IN THE EVENT OF A DISPUTE BETWEEN YOU AND 
                ANOTHER USER RELATED IN ANY WAY TO THE SERVICES OR YOUR INTERACTIONS USING THE SERVICES, 
                NEITHER YOU NOR THE USER WILL BE LIABLE FOR ANY SPECIAL, INDIRECT, CONSEQUENTIAL, 
                INCIDENTAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, 
                LOSS OF BUSINESS OPPORTUNITIES OR LOSS OF GOODWILL, 
                EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, 
                UNLESS THE CONDUCT THAT FORMS THE BASIS FOR THE DISPUTE WAS INTENTIONAL, CRIMINAL 
                OR GROSSLY NEGLIGENT.
            </p>
            <p>
                SOME STATES AND JURISDICTIONS MAY NOT ALLOW FOR ALL THE FOREGOING EXCLUSIONS 
                AND LIMITATIONS OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, 
                SO TO THAT EXTENT, IF ANY, SOME OR ALL OF THESE LIMITATIONS 
                AND EXCLUSIONS MAY NOT APPLY TO YOU.
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

export default TermsEN;
