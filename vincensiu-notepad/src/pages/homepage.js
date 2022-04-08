import React, { useState} from 'react';
import {Link} from 'react-router-dom';
import { Storage} from '../services';
import {Row} from '../components';

export function Home(){ 

    let pageTitle = "Homepage"
    let storedArray = Storage.getItem('Note');     
    if(storedArray == null){
          storedArray= [];
        }

  const [noteArray,setNoteArray] = useState(storedArray)
    
    function DeleteNote(index){
     storedArray.splice(index,1);
      let updatedArray = [...storedArray]
        Storage.saveItem('Note',storedArray);
        setNoteArray(updatedArray);
    
    }
    

    return (
        <div className="page"  style={style1.pageLayout}>
            <span className ="page-title" style={style1.title}>{pageTitle}</span>
            <hr/>
            <h5 style={style1.title}>List of notes:</h5>         

            <Row stuff={noteArray} itHasProperty={DeleteNote}/>
            <br/>
            <br/> 
            <br/>
            <br/> 
            <br/>
            <Link to="/addNote" style={style1.link}>+ Add New</Link>
        </div>
    );
}

export const style1 = {
    link : {padding: 8, textDecoration: 'none', color: '#ffb0f7',backgroundColor:'#b3000f', borderRadius:8, fontWeight:'bold'},
    danger:{color:'#ffb0f7'},
    pageLayout: {backgroundColor: '#ab009a', minHeight: 750,color:'white' }, 
    title:{fontWeight:'bold',color:'white'}
   };