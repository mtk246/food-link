import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Favorites</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Help</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary" href="#">Sign In</a>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
        <header>
            <section class="header-content" style={{width: '70%'}}>
                <h1 class="header-title">Explore Your City On Any Budget</h1>
                <p class="header-subtitle">
                    Our mission is to help low-income families find nearby food banks, EBT-friendly eateries, and affordable options for leftover food, ensuring access to essential resources and support in their communities.
                </p>
                <div className="d-flex justify-content-center rounded text-center">
                    <div>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item p-3">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Food Bank
                            </li>
                            <li class="list-group-item p-3">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                EBT Accepted Grocery
                            </li>
                            <li class="list-group-item p-3">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Packed Food for EBT card users
                            </li>
                            <li class="list-group-item p-3">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                List View
                            </li>
                            <li class="list-group-item p-3">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                Map View
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    </>
  );
}
