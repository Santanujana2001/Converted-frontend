import React from "react";
import "../css/main.css";
function loginpage() {
    return (
        <div>
            <div className="whole">
                <div className="header">
                    <nav className="navbar navbar-expand-lg   ">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-2" href="#">
                                <span className="color1">D</span>eso
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a
                                            style={{ color: "White" }}
                                            className="nav-link"
                                            aria-current="page"
                                            href="#"
                                        >
                                            <span className="color3">Co</span>llection
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{ color: "White" }} className="nav-link " href="#">
                                            <span className="color3">T</span>rend
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a style={{ color: "White" }} className="nav-link" href="#">
                                            <span className="color3">V</span>ision
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        {/* <a style="color: White;" class="nav-link" href="#"><span class="color3">Re</span>sourcess</a> */}
                                        <a style={{ color: "White" }} className="nav-link" href="#">
                                            <i className="fa-regular  fa-circle-user" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* content */}
                <div className="row">
                    <div className="col-lg-6 " id="temp">
                        <h3>
                            <span style={{ color: "#017bfa" }}>Welcome to Deso</span>
                        </h3>
                        <h1>
                            <span className="color3">T</span>he <span className="color3">D</span>
                            ecentralized <span className="color3">S</span>ocial
                            <span className="color3">B</span>lockChain
                        </h1>
                        <br />
                        <h5>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat odit
                            quod quam facilis, et exercitationem.
                        </h5>
                        <button type="button" className="btn  btn-lg btn1">
                            <i className="fa-solid fa-circle-plus" /> View more
                        </button>
                        <button type="button" className="btn btn-outline-light  btn-lg btn2">
                            {" "}
                            Start Building
                        </button>
                    </div>
                    <div className="col-lg-6 re">
                        {/* <img class="rotated" src="transparent-background-moon-19.png" alt="iphone-mockup"> */}
                        <div id="myfirst" className="extra">
                            <i id="it1" className="fa-brands fa-ethereum fa-3x" />
                            <p id="it2">Amount</p>
                            <p id="it3">Ethereum</p>
                        </div>
                    </div>
                    {/* mt part */}
                    <div className="section stats wf-section">
                        <div className="container-medium">
                            <div
                                data-w-id="00246141-a186-d37f-816c-68f3cf8bd6cc"
                                className="w-layout"
                            >
                                <div className="card-stats">
                                    <div className="number-stats">
                                        100,000<span className="color-blue">+</span>
                                    </div>
                                    <div className="stats-description">Node Downloads</div>
                                </div>
                                <div className="card-stats">
                                    <div className="number-stats">
                                        $1.4B<span className="color-blue">+</span>
                                    </div>
                                    <div className="stats-description">Total Transaction Volume</div>
                                </div>
                                <div className="card-stats">
                                    <div className="number-stats">
                                        <span className="color-blue">&lt;</span>$0.000017
                                    </div>
                                    <div className="stats-description">Avg. cost per post</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="heading2">
                        <h1>
                            <span className="color1">O</span>ur Team
                        </h1>
                    </div>
                    <section>
                        <div className="container">
                            <div className="left">
                                <ul className="team">
                                    <li>
                                        <span className="color1">UT</span>SAV CHATTERJEE
                                    </li>
                                    <li>
                                        <span className="color1">SA</span>NTANU JANA
                                    </li>
                                    <li>
                                        <span className="color1">SO</span>URAV BAIN
                                    </li>
                                    <li>
                                        <span className="color1">SU</span>PRATIM DAS
                                    </li>
                                    <li>
                                        <span className="color1">SA</span>YAN CHATTERJEE
                                    </li>
                                </ul>
                            </div>
                            <div className="right ">
                                <div className="content ">
                                    <h1>This is a heading</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                                        assumenda dolore reprehenderit ullam blanditiis ex sapiente
                                        pariatur tempore incidunt facilis?
                                    </p>
                                    <a href="#" className="btn2 ">
                                        Click Me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer>
                        <p className="gg">All Rights Reserved By © DESO</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
export default loginpage;