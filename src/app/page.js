import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  
  return (
    <>
  <header className="bg-success py-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Seu Site</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Cerimonia</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Recepção</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Capsula do tempo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Lista presente</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

<body>
    
<div className="container">
<div>
<img src="/baner.svg" width="300" className="me-12" />
</div>
</div>
</body>
</>

)
}
