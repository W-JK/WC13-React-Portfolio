import React from "react";
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { NavLink } from "react-router-dom";

function NavBar () {

return (


    
    <ul className = "nav nav-tabs">

        
        <li className="nav-item">
            <NavLink
                to ="/"
                end
                className={({isActive}) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            > HOME </NavLink>            
        
        </li>

        <li className="nav-item">
            <NavLink
            to ="About"
            end
            className={({isActive}) =>
            isActive ? 'nav-link active' : 'nav-link'
        }
            > About</NavLink>  
               
        </li>

        <li className="nav-item">
            <NavLink
            to ="Projects"
            end
            className={({isActive}) =>
            isActive ? 'nav-link active' : 'nav-link'
        }
            > Projects </NavLink>  
               
        </li>

        <li className="nav-item">
            <NavLink
            to ="Contact"
            end
            className={({isActive}) =>
            isActive ? 'nav-link active' : 'nav-link'
        }
            > Contact</NavLink>  
               
        </li>

        <li className="nav-item">
            <NavLink
                to ="/"
                end
                className={({isActive}) =>
                isActive ? 'nav-link active' : 'nav-link'
                }
            > NavBAR </NavLink>            
        
        </li>




    </ul>
);

 


}

export default NavBar;