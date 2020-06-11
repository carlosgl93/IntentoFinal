const URL_API = "https://api.spoonacular.com/recipes/random?apiKey=76f4b82a2b2e4472a887429cc6cc30ed";

const BUSCAR_RECETA = "https://api.spoonacular.com/recipes/search?apiKey=76f4b82a2b2e4472a887429cc6cc30ed&query=";

export const getAllFromAPI = () => {
    return fetch(`${URL_API}`);
};

export const getRecetaBuscada = () => {
    return fetch(`${BUSCAR_RECETA}`);
};
