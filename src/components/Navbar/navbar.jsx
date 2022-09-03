import './navbar.css';
// import {FaBars} from 'react-icon';


function navbar(){
    return(
        
        <div className="mainNav" >
            <div className='logo subnav'>
                LOGO
            </div>
            <div className='menu subnav'>
            <div  className='submenue'>
                Home
            </div>
            <div className='submenue'>
                Resourses
            </div>
            <div className='submenue'>
                Services
            </div>
            <div  className='submenue'>
                About Us

            </div>
            </div>

            <div className='btnNav'>
                <div>
                    <button className='navBtn'>click me</button>
                </div>
            </div>
        </div>
    )

}

export default navbar;