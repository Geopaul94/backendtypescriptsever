export const additionRepo =(num1:number,num2:number)=>{
    try{
        return num1+num2;

    }catch(error){
        console.log(error);
        return "internal server error";
    }
}
    
    export const substractionRepo =(num1:number,num2:number)=>{
        try{
            return num1-num2;
    
        }catch(error){
            console.log(error);
            return "internal server error";
        }
    }





    export const multiplicationRepo =(num1:number,num2:number)=>{
        try{
            return num1*num2;
    
        }catch(error){
            console.log(error);
            return "internal server error";
        }
    }

    export const divisionRepo =(num1:number,num2:number)=>{
        try{
            return num1/num2;
    
        }catch(error){
            console.log(error);
            return "internal server error";
        }
    }