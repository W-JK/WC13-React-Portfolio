import './header.css';
import { Link } from 'react-router-dom';
import Avatar from '../Assets/Welshpool viking.JPG'

 const Header = () => {
    return <> 
    
    <div className='customNAV'> 
    
        <Link className='portraitLink' to='About'>   
            <div>    
            <img className='portrait' src={Avatar} alt="my portrait" /> 
             Wojciech J Koloska  <button className ='btn btn-primary btn-lg navCTA'> Button </button>
             
            </div> 
            
            
        </Link>

        
        
    </div>
    
    
    
    Header </>
}

export default Header;