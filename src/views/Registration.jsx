const React = require('react');
const Layout = require('./Layout');

module.exports = function Registr() {
    return (
        <Layout>
            <link rel="stylesheet" href="css/registr.css" />
            {/* <img className='round-img' src='../img/round.png'></img> */}
            <div className='registr-form-wrapper'>
                <h2 className="zareg">Registration</h2>
                <form action="/registr" method="POST" id="loginForm" className="regForm">
                    <label htmlFor="exampleInput1" className="login-label label">Login</label>
                    <input name="login" type="text" className="login-inp inp" />
                    <label htmlFor="exampleInput1" className="email-label label">Email</label>
                    <input name="email" type="email" className="email-inp inp" />
                    <label htmlFor="exampleInput2" className="password-label label">Password</label>
                    <input name="password" type="password" className="pass-inp inp" />
                    <button type="submit" className="btn btn-primary btnReg">Send</button>
                </form>
            </div>
        </Layout>
    );
};