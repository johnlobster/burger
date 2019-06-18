// model file for burger app

const orm = require("../config/orm.js");

const burger = {
    getAllBurgers: () => {
        return new Promise( (resolve, reject) => {
            selectAll("burger")
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
            insertOne("burger","burger_name", "name", false)
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
        upDateOne("burger", "devoured", name, true)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
        });
    }


}

module.exports.burger = burger;