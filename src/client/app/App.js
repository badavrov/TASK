import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

//import components
import Footer from './components/App/Footer/footer';
import Header from './components/App/Header/header';
import Body from './components/App/Body/body';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Body />
                <Footer />
             </div>
        );
    }
};

export default App;
