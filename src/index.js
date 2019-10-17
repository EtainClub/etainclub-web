import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

// custom libraries
import './i18n';
import Home from './Home';

const App = () => {
    return (
        <div className="App">
            <Suspense fallback={(<div>Loading</div>)}>
                <Home />
            </Suspense>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
