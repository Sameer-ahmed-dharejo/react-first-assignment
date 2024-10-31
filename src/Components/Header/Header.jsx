import { Icon } from '@iconify-icon/react';
import "./Header.css"
const Header = () =>{
    return(
        <>
<div className="Header vh-100 img-fluid">
<nav className="navbar navbar-expand-lg container">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">MNTN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Equipment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Blog</a>
        </li>
      </ul>
      <div className="d-flex text-white">
     
      <h6> <Icon className="btn-group-vertical me-1" icon="ic:outline-account-circle" />Account</h6>
      </div>
    </div>
  </div>
</nav>
<div className="container Hero-Section">
  <div className="row text-white">
    <div className="col-3 col-lg-3 d-flex flex-column">
      <div className="d-flex flex-column"><h6>Follow</h6>
      </div>
      <span><Icon icon="mdi:instagram" /></span>
      <span><Icon icon="mdi:twitter" /></span>
    </div>
    <div className="col-6 col-lg-8">
      <h1 className='display-2 fw-medium'>Be prepared for the  Mountains and beyond!</h1>
      <button type="button" class="btn btn-outline-success text-white border-0">scroll down <Icon class="btn-group-vertical me-1" icon="icons8:down-arrow" /></button>
    </div>
    <div className="col-1 col-lg- d-flex flex-column text-end">
      <h6>Start</h6>
      <span>01</span>
      <span>02</span>
      <span>03</span>
    </div>
  </div>
</div>
</div>
        </>
        
    ) 
};

export default Header;