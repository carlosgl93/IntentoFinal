import React, { useState, useEffect } from "react";
import getState from "./Flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        //this will be passed as the contenxt value

        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
			/* getState({
				getStore: key => state.key.store,
				getActions: key => state.key.actions,
				setStore: (updatedStore, key) =>
					setState({
						[key]: {
							store: Object.assign(state.key.store, updatedStore),
							actions: { ...state.key.actions }
						}
					})
			}) */
        );

        useEffect(() => {
            // state.recipes.actions.loadRandomRecipe();
            // state.actions.loadRecetaBuscada();
            // state.actions.authContext();
            state.actions.register();
            state.actions.login();
            state.actions.revalidateUser();
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
        }, []);

        // The initial value for the context is not null anymore, but the current state of this component,
        // the context will now have a getStore, getActions and setStore functions available, because they were declared
        // on the state of this component
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
