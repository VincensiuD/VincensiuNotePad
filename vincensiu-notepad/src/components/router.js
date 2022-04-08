import React from 'react';
import {Route, Routes} from "react-router-dom";
import { Home, AddNote, EditNote } from '../pages';

export function Router(props){
    return (
        <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/addNote" element={<AddNote/>} />
            <Route path="/editNote/:id" element={<EditNote/>}/>
         
            {/* <Route>
                <div className="page">
                    404 - Not Found!
                </div>
            </Route> */}
        </Routes>
    );
}