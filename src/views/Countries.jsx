const React = require('react');
const Layout = require('./Layout');

module.exports = function Countries({ newUser, newUserID, newUserCity }) {
    return (
        <Layout newUser={newUser}>
            <link rel="stylesheet" href="css/map.css" />
            <img className='blur' src='../img/blur.png' alt='blur'></img>
            <div className='map-description'>
                <h2 className='map-description__header'>Choose the country where you will travel</h2>
                <p className='map-description__text'>In order to get acquainted with the rules for transporting an animal to any country, select it on the map.</p>
            </div>
            <div id="YMapsID"></div>
        </Layout>
    );
};
