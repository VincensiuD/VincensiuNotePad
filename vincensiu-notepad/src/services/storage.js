 function getItem(key, defaultValue){
    let value = localStorage.getItem(key);

    if(value){
    value = JSON.parse(value);
    return value;}

    return defaultValue;
}

 function saveItem(key,value){
    value = JSON.stringify(value);
    localStorage.setItem(key,value);
}


function removeItem(key){
    localStorage.removeItem(key);
}

export const Storage = {getItem,saveItem, removeItem};


function getSessItem(key, defaultValue){
    let value = sessionStorage.getItem(key);

    if(value){
    value = JSON.parse(value);
    return value;}

    return defaultValue;
}

 function saveSessItem(key,value){
    value = JSON.stringify(value);
    sessionStorage.setItem(key,value);
}


function removeSessItem(key){
    sessionStorage.removeItem(key);
}

export const SessStorage = {getSessItem,saveSessItem, removeSessItem};