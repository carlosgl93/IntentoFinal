import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Row, Col } from "react-bootstrap";

const Api_Key = process.env.REACT_APP_APIKEY || "";

export const Tarjeta = () => {

    const [state, setState] = useState({
        recipe: [],
        showModal: false,
        activeModal: null
    })

    

    async function fetchrecipe() {
        const res = await fetch(`https://api.spoonacular.com/recipes/random?number=9&apiKey=${Api_Key}`)
        const translatedrecipe = await res.json()
        setState({ ...state, recipe: translatedrecipe.recipes })
        // validacion aqui 
        console.log('Api recipe', translatedrecipe)
    }

    useEffect(() => { fetchrecipe() }, [])


    return (
        <>
<<<<<<< HEAD
            <Row>
                {
                    state.recipe === undefined || state.recipe.length < 1 ? null : (
                        state.recipe.map((mappedRecipes, i) =>{ 
                            console.log(mappedRecipes.image)
                            return (
                            <Col md={4} sm={6} key={i}>
                                <Card style={{ width: '18rem' }}>
                                    {
                                        mappedRecipes.image !== undefined ?
                                            (
                                                <Card.Img variant="top" src={mappedRecipes.image} />
                                            )
                                            :
                                            (
                                                <Card.Img variant="top" src="https://via.placeholder.com/556x370" />
                                            )


                                    }

                                    <Card.Body>
                                        <h3 id='recipeName'>{mappedRecipes.title}</h3>
                                        <Button onClick={() => setState({ ...state, showModal: true, activeModal: mappedRecipes })}>
                                            Recipe Name
                                    </Button>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the bulk of
                                            the card's content.
                                </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
=======
            {
                state.recipe === undefined || state.recipe.length < 1 ? null : (
                    state.recipe.map((mappedRecipes, i) => (
                        <div key={i}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={mappedRecipes.image} />
                                <Card.Body>
                                    <h3 id='recipeName'>{mappedRecipes.title}</h3>
                                    
                                    <Card.Text>
                                       Tiempo de preparación: {mappedRecipes.readyInMinutes}
                                </Card.Text>
                                    <Button onClick={() => setState({ ...state, showModal: true, activeModal: mappedRecipes })}>
                                        Ver receta completa 
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
>>>>>>> fe6ad255d07a30af0d3a3ce1769e146fa3eed9b3



                        )})
                    )
                }
            </Row>

            {
                state.activeModal === null ? null : (
                    <div id='jumbo-div'>
                        <Modal size='lg' show={state.showModal} onHide={() => setState({ ...state, showModal: false, activeModal: null })}>

                            <Modal.Header closeButton>

                                <Modal.Title id='pic-title'>
                                    {state.activeModal.title}
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body id='pic-info'>
                                
                                <Card.Img src={state.activeModal.image} />
                                <h5>Ingredients</h5>
                                <ul>
                                    {state.activeModal.extendedIngredients.map((mappedIngredients, i) => (
                                        <li key={i}>
                                            {mappedIngredients.name}
                                            
                                        </li>
                                    ))}
                                    
                                </ul>

                                <h5>Instructions</h5>
                                
                                    <div>
                                        {state.activeModal.instructions}
                                    </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                )

            }

        </>

    );

}

