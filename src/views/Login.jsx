const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
            <link rel="stylesheet" href="css/login.css" />
            {/* <img className='round-img' src='../img/round.png'></img> */}
            <div className='login-form-wrapper'>
                <h2 className="login-header">Login</h2>
                <form action="/login" method="POST" id="loginForm" className="login-form">
                    <label htmlFor="exampleInput1" className="email-label label">Email</label>
                    <input name="email" type="email" className="email-inp inp" />
                    <label htmlFor="exampleInput2" className="password-label label">Password</label>
                    <input name="password" type="password" className="pass-inp inp" />
                    <button type="submit" className="btn btn-primary btn">Send</button>
                </form>
            </div>
    </Layout>
  );
};