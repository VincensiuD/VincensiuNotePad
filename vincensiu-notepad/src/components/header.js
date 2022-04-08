import React  from 'react';
import {Link} from 'react-router-dom';
import { style1 } from '../pages';
import logo from '../logo.svg';


export function Header(props){   

    function ClearArray(){            
       props.destruction();             
    }
    
    return(
        <div style={style2.part1}>
            <title>ONE-NOTEPADS APP</title> 
            
            <header className="Noteheader">
                <span style={style2.part2}>One-NOTEPADS</span>
            <span>
            <img src={logo} className="App-logo" alt="logo" />
            </span>
            </header>
            <br/>
           
            <br/>
            <br/>
            <Link to="/"style={style1.link}>Home</Link>
            <span>     </span>
           
           
            <button onClick={ClearArray} style={style2.button}>Total Destruction</button>
   
        </div>
    );
}

const style2= {
    part1:{backgroundColor: '#ffb0f7', color:'#ab009a', minHeight: 125 },
    part2:{textWeight:'bold', fontSize: 36},
    button:{backgroundColor:'#ff0015', color: '#5e0753',marginLeft: 95, padding: 8, fontSize: 22, fontWeight:'bold' }
}