const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ newUser, newUserID, newUserCity }) {
  return (
    <Layout newUser={newUser}>
    <link rel="stylesheet" href="css/main.css" />
      <div className='main-wrapper'>
        <div className='main-container'>
            <h1 className='heading'>PET TRIP</h1>
            <p className='main-text'>Travel with your pets easily</p>
        </div>
        <img className='dog-img' alt='dog' src='../img/dog.png'></img>
        <img className='main-cat-img' alt='dog' src='../img/main-cat.png'></img>
      </div>
    </Layout>
  );
};