export const addFavourite = (id)=>{
    return {
        type:"ADDFAV",
        payload:id
    }
}
export const remFavourite = (id)=>{
    return {
        type:"REMFAV",
        payload:id
    }
}