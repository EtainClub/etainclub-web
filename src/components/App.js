import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// custom libraries
import '../i18n';
import Header from './Header';
import Home from './Home';
import Introduction from './Introduction';
import Howto from './Howto';
import Stories from './Stories';
import Download from './Download';
import Faq from './Faq';
import Resources from './Resources';
import Terms from './Terms';
import TermsEN from './Terms-en';
import Privacy from './Privacy';
import PrivacyEN from './Privacy-en';

// temp
import Download2 from './Download2';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Suspense fallback={(<div>Loading</div>)}>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/introduction" component={Introduction} />
                    <Route exact path="/howto" component={Howto} />
                    <Route exact path="/stories" component={Stories} />
                    <Route exact path="/resources" component={Resources} />
                    <Route exact path="/faq" component={Faq} />
                    <Route exact path="/download" component={Download} />
                    <Route exact path="/download2" component={Download2} />
                    <Route exact path="/terms" component={Terms} />
                    <Route exact path="/terms-en" component={TermsEN} />
                    <Route exact path="/privacy" component={Privacy} />
                    <Route exact path="/privacy-en" component={PrivacyEN} />
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;
