import React  from "react";
import { useNavigate } from "react-router-dom";
//undo till here
import { Storage } from "../services";
export function Row(props){

    console.log("row is rendering")

    let storedArray = Storage.getItem('Note')
    if(storedArray == null){
        storedArray= [];                            
      }
    const navigate = useNavigate();

    function inheritedDelete(event){
        props.itHasProperty(event.target.id);
    }


    function EditNote(event){
        let rowIndex = event.target.id;
        
      navigate(`/editNote/${rowIndex}`);     

    }


return( 

        <div>
            <div>
              
			{storedArray.map((item,index)=> 
                <div>
                    <span style={style2.rows} id={index} onClick={EditNote} key={index} > {index+1}.  {item._title} </span>
                     <button id={index} style={style2.button} onClick={inheritedDelete}> Delete </button>
                     <br/>
                     <br/>
                </div>
                
            )
            }
            </div>
		</div>
        
    );
}


const style2 = {
    rows: {backgroundColor: '#ffb0f7', color:'#ab009a', padding: 4, borderRadius: 8, width: 25, marginLeft: 10, paddingRight: 40, },
    button: {backgroundColor: '#b3000f' ,width: 100, color:'#ffb0f7', marginLeft: 40}

};