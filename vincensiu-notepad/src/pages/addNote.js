import React, {useState} from 'react';
import { Storage,SessStorage } from '../services';
import { useNavigate } from 'react-router-dom';
import {style1} from './homepage';

export function AddNote(){


    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [listOfNotes,setListOfNotes] = useState([]);
    const navigate = useNavigate();
 

    function onTitleChange(event){
        let newTitle = event.target.value;
        setTitle(newTitle);
        SessStorage.saveSessItem('title',newTitle);
    }

    function onContentChange(event){
        let newContent= event.target.value;
        setContent(newContent);
        SessStorage.saveSessItem('content',newContent);
    }


    function Submission(){

        class Note{
            constructor(t,c){
                this._title = t;
              this._content = c;}
            }

        let newNote = new Note(title,content);

        let storedArray = (Storage.getItem('Note'))
        if(storedArray == null)
        {  storedArray = [];}
        
        let updatedArray = [...storedArray,newNote];
        setListOfNotes(updatedArray);
        
        Storage.saveItem('Note',updatedArray);
        navigate("/");
               
    }

    return (
        <div className="page" style={style1.pageLayout}>
            <span className ="page-title" style={style1.title}>Add Page</span>
            <hr/>
            <br/>
            
            <label>Title: </label>
            <input value={title} onChange={onTitleChange}></input>
            <br/>      
            <br/>
            <label>Content: </label>
            <br/>
            <textarea value={content} onChange={onContentChange}></textarea>
            <br/>
            <br/>
            <button style={style1.link} onClick={Submission}>+ Add</button>
           



        </div>
    );

}