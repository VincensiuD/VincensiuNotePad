import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { Storage,SessStorage } from '../services';
import {style1} from './homepage';

export function EditNote(){
    const {id} = useParams();
    
    let storedArray = Storage.getItem('Note');
    let history = useNavigate();

    let oldNote = storedArray[id];
    let oldTitle = oldNote._title;
    let oldContent = oldNote._content;

    const [title,setTitle] = useState(oldTitle);
    const [content,setContent] = useState(oldContent);
 

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
        
        storedArray.splice(id,1,newNote);
        
       // setUpdatedArray([...storedArray]);


        Storage.saveItem('Note',[...storedArray]);
        history.goBack();
               
    }

    return (
        <div className="page" style={style1.pageLayout}>
            <span className ="page-title" style={style1.title}>Edit Page</span>
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
            <button onClick={Submission} style={style1.link}>Save</button>
           



        </div>
    );

}