// //objects

// let teacher = {
//     name: "zeeshan",
//     experience: 10
// }
// console.log(teacher.name);
// console.log(teacher["experience"]);

// // object type declaration

// let student:{
//     name: string,
//     age: number
// }

// student = {
//     name: "Hammad",
//     age: 33

// }
// console.log(student.name);
// console.log(student["age"]);

// let teacher2: {name: string, exp: number} = {
//     name: "Hammad",
//     exp: 33

// }
// console.log(teacher2["exp"])
// console.log(teacher2["name"])

// // type student1 = {
// //     name: string,
// //     age: number
// // }
// // let student1: student1 = {
// //     name: "Hammad",
// //     age: 33

// // }

// // interface Manager {
// //     name: string,
// //     subordinate?: number
// // }

// // let storeManager: Manager ={
// //     name: "Hikmat"
// // }

// // console.log(storeManager["name"]);


// // let myType = {name: "Zia", id: 1};

// // myType = {id:2, name: "Tom" };

// // var  myType:{id:number, [myType:string]: any};
// // myType = {id:2, name_person: "Tom" };

// type Author = {
//     firstName: string,
//     lastName: string
// }
// type Book = {
//     author: Author,
//     name: string
// }

// const myBook : Book = {
//     author: {
//         firstName: "Muhammad",
//         lastName: "Hammad"
//     },
//     name: "MY Best Book" 



    
// // }

// interface Student {
//     student_id: number;
//     name: string;
//   }
    
// interface Teacher {
//     teacher_Id: number;
//     teacher_name: string;
// }
    

// type intersected_type = Student & Teacher;
    
// let obj1: intersected_type = {
//     student_id: 3232,
//     name: "rita",
//     teacher_Id: 7873,
//     teacher_name: "seema",
// };
    
// console.log(obj1.teacher_name);
// console.log(obj1.student_id);


// const val1: unknown = val; // OK
// const val: any = val; // OK
// const val13: boolean = val; // Will throw error
// const val4: number = val; // Will throw error
// const val5: string = val; // Will throw error
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)