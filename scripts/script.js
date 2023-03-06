// .........................task_#1.............................................
// 'use strict'
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

// .........................task_#2.............................................
// 'use strict'
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getName(isAdmin){
//         return this.#name.length > 0 ? (isAdmin ? this.#name : 'Permission denided') : (isAdmin ? this.login : 'Permission denided');
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));

// .........................task_#3.............................................
// 'use strict'
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getName(isAdmin){
//         return this.#name.length > 0 ? (isAdmin ? this.#name : 'Permission denided') : (isAdmin ? this.login : 'Permission denided');
//     }
//     changeName(name, password){
//         if (password === '123'){
//             console.log('Name Change from Mike to Bill')
//         } else{console.log('Permission denided');
//     }
// }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// user1.changeName('Bill', '123'); 

// .........................task_#4.............................................
// 'use strict';
// class User {
//     #name;
//     constructor(name, login, age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getUserName() {
//         return this.#name;
//     }
// }
// class Admin extends User {
//     #isadmin;
//     constructor(name, login, age, isadmin) {
//         super(name, login, age);
//         this.#isadmin = true;
//     }
// }
// let user1 = new User('Mike', 'MK_18', 18);
// let user2 = new User('', 'NRG', 22);
// console.log(user1.getUserName());

// .........................task_#5_1.............................................
// 'use strict';
// class User {
//     #phone;
//     constructor(name, phone) {
//         this.name = name;
//         this.#phone = phone;
//     }
//     getPhone(isAdmin) {
//                 return isAdmin ? this.#phone : this.#phone.slice(0, 4) + '-******-' + this.#phone.slice(-2);
//             }
// }
// let user1 = new User('Mike', '067-888-88-99');
// let user2 = new User('Tom', '099-888-88-99');
// console.log(user1.getPhone(false));
// console.log(user2.getPhone(false));
// console.log(user1.getPhone(true));
// console.log(user2.getPhone(true));

// .........................task_#5_2.............................................
'use strict';
class User {
    #phone;
    constructor(name, phone) {
      this.name = name;
      this.#phone = phone.split('-');
    }
    getPhone(isAdmin) {
        if (isAdmin) {
            return this.#phone.join('-');
        } else {
            let hidePhone = [...this.#phone]; 
            for (let i = 0; i < hidePhone.length; i++){
                if (i >= 1 && i <= 2) {
                    hidePhone[i] = '***'; 
                }
            }
            return hidePhone.join('-');
        }
    }   
}
let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');
console.log(user1.getPhone(false));
console.log(user2.getPhone(false)); 
console.log(user1.getPhone(true)); 
console.log(user2.getPhone(true));



