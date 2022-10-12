const React = require('react');
const Layout = require('./Layout');

//todo: пробросить фечом данные о животном на бэк

module.exports = function PetProfile({ newUser, newUserID, newUserCity }) {
    return (
        <Layout newUser={newUser}>
            <link rel="stylesheet" href="css/my_pet.css" />
            <div className='pet-form-wrapper'>
                <h2 className="pet-form-header">Add information about your pet so that it is always be in-hand</h2>
                <form action="/mypet" method="POST" id="pet-form" className="pet-form">
                    <div className='inpWrapper'>
                        <label htmlFor="exampleInput1" className="name-label label">Name</label>
                        <input name="name" type="text" className="login-inp inp" />
                    </div>
                    <div className='inpWrapper'>
                        <label htmlFor="exampleInput1" className="birth-date-label label">Date of birth</label>
                        <input name="birthDate" type="date" className="birth-date-inp inp" />
                    </div>
                    <div className='inpWrapper'>
                        <label htmlFor="exampleInput2" className="vac-label label">Rabies vaccination date</label>
                        <input name="rabVacDate" type="date" className="vac-inp inp" />
                    </div>
                    <div className='inpWrapper'>
                        <label htmlFor="exampleInput2" className="vac-label label">General vaccination date</label>
                        <input name="genVacDate" type="date" className="vac-inp inp" />
                    </div>
                    <div className='inpWrapper'>
                        <label htmlFor="exampleInput2" className="weight-label label">Weight (in kilos)</label>
                        <input name="weight" type="number" className="weight-inp inp" />
                    </div>
                    <button type="submit" className="btn btn-primary btnReg">Send</button>
                </form>
            </div>
            <p>Hello {newUser} !</p>
        </Layout>
    );
};