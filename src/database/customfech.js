import productos from "./datadb";


export  const customFetch = (time,task) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(task); 
        },time);
    }
    );
}

export const fetchProductBycategory = (time,category) => {
    return new Promise (resolve =>{
setTimeout(()=>{
    resolve(productos.filter(prod=> prod.Category===category));
},time);

    });
    
}