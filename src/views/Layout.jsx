const React = require('react');

module.exports = function Layout({
    children, newUser, newUserCity, newUserID, userCards,
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
                <link rel="stylesheet" href="css/header.css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;800&display=swap" rel="stylesheet" />
                        {/* <script defer src="/js/basketAdd.js" /> */}
                <title>Easy travel with your pet</title>
                </head>
                    <header>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/">PetTrip</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">About</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/registr">Registr</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Login</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </header>
                    <body>
                        {children}
                        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
                    </body>
                </html>
                );
};