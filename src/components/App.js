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
                    <Route exact path="/faq" component={Faq} />
                    <Route exact path="/download" component={Download} />
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;
