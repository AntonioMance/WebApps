let x = 150; 
let result;
function Provjera()
{			
    if(x>100&&x<15000){
         result= " "+x+" je unutar [100,150000]";  
    }
    else{
         result=" "+x+" nije unutar [100,150000]";
    }
    console.log(result);  
}
Provjera();