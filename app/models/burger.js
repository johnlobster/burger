// model file for burger app

const orm = require("../config/orm.js");

const burger = {
    getAllBurgers: () => {
        return new Promise( (resolve, reject) => {
            orm.selectAll("burger")
            .then((res) => {
                resolve(res);
            })
            .catch( (err) => {
                reject(err);
            })
        }); 
    },
    insertBurger: (name) => {
        return new Promise( (resolve, reject) => {
            orm.insertOne("burger","burger_name", name, false)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },
    devour: (name) => {
        return new Promise((resolve, reject) => {
        orm.upDateOne("burger", "devoured", name, true)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }


}

// test code
console.log(burger);

// burger.getAllBurgers()
// .then ( (res) => {
//     console.log(res);
//     return burger.insertBurger("Crabby Patty");
// })
// .then ( (res) => {
//     console.log(res);
// });

// burger.insertBurger("Crabby Patty");
// burger.getAllBurgers();
// burger.devour("Crabby Patty");
// burger.getAllBurgers();


module.export = burger;