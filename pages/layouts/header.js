import Image from "next/image";
import Link from "next/link";

export default function HeaderComponent() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light top-navbar" data-toggle="sticky-onscroll">
                <div className="container">
                    <Link className="navbar-brand" href="/">
                        <Image src="/assets/images/logo.png" alt="logo" width={100} height={100} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item">
                                <Link className="nav-link active" href="about_us">About Us</Link>
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
    )
}
