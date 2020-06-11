/* eslint-disable no-console */
import { getAllFromAPI, getRecetaBuscada } from "../RequestFromAPI";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            currentUser: undefined
        },

        actions: {
            register: params => {
                console.log(params);
                if (params !== undefined && params.email !== "" && params.password !== "") {
                    console.log("paso la 1ra validacion");
                    const user = {
                        email: params.email,
                        password: params.password,
                        name: params.name,
                        lastName: params.lastName
                    };

                    setStore({
                        currentUser: user
                    });
                    // AQUI VA LA FUNCION PostNewUSER? Fetch POST AL LOGIN del API...
                    localStorage.setItem("user", JSON.stringify(user));
                    return { status: true, message: "Usuario Registrado" };
                }
                return { status: false, message: "usuario no registrado aun" };
            },

            login: params => {
                console.log(params);
                if (params !== undefined && params.email !== "" && params.password !== "") {
                    console.log("paso la 1ra validacion");
                    const user = {
                        email: params.email,
                        password: params.password
                    };

                    setStore({
                        currentUser: user
                    });
                    localStorage.setItem("user", JSON.stringify(user));
                    return { status: true, message: "Usuario Registrado" };
                }
                return { status: false, message: "usuario no registrado aun" };
            },

            revalidateUser: user => {
                if (user !== undefined) {
                    setStore({
                        currentUser: user
                    });
                }
            },

           /* linksLogic: user => {
                if (user !== undefined) {
                    render("los links post logeo en el nav");
                } else {
                    render("los links para logearse en el nav");
                }
            } */

            // loadRecetaBuscada: () => {
            // 	getRecetaBuscada()
            // 		.then(resp => resp.json())
            // 		.then(data => {
            // 			// eslint-disable-next-line no-console
            // 			console.log("api info ", data);
            // 		});
            // },
            loadRandomRecipe: () => {
                getAllFromAPI()
                    .then(resp => resp.json())
                    .then(data => {
                        // eslint-disable-next-line no-console
                        console.log("api info ", data);
                    });
            }
            // Use getActions to call a function within a fuction
        }
    };
};

export default getState;
