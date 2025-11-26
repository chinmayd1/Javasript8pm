// // Online Java Compiler
// // Use this editor to write, compile and run your Java code online
// // same class same method name different signature - overloading
// class Main {
//     public static void main(String[] args) {
//         System.out.println("Try programiz.pro");
//         addition(12,3);
//         addition(12,3,3);
//          addition(12,3,3,3);
//     }
//     public static void addition(int x , int y){
//          System.out.println(x+y);
//     }
//     public static void addition(int x , int y ,int z){
//          System.out.println(x+y+z);
//     }
    
//     public static void addition(int x , int y ,int z ,int a){
//          System.out.println(x+y+z+a);
//     }
// }

// program 2


// class Calculator{

//     addition(x,y){
//         console.log(x+y)
//     }
//     addition(x,y,z){
//         console.log(x+y+z)
//     }

//     // addition(x,y,z,a){
//     //     console.log(x+y+z+a)
//     // }
//     addition(x=undefined,y=undefined,z=undefined,a=undefined){
        
//         if(x != undefined && y != undefined && z != undefined && a != undefined){
//             console.log(x+y+z+a)
//         }
//         else if(x != undefined && y != undefined && z != undefined){
//             console.log(x+y+z)
//         }
//         else if(x != undefined && y != undefined ){
//             console.log(x+y)
//         }

//     }
    
// }

// let cc = new Calculator()
// cc.addition(12,3)
// cc.addition(12,3,3)
// cc.addition(12,3,3,4)


// overriding -

// same method name , same signature , but has a relationship


class worldBanK {

    loan(){
        console.log("worldBanK loan method")
    }
    save(){
        console.log("worldBanK save method")
    }
}

class SBI extends worldBanK {

    loan(){
        console.log("SBI loan method")
    }
    save(){
        console.log("SBI save method")
    }
}

let nagpurSBI = new SBI()
nagpurSBI.loan()
nagpurSBI.save()

