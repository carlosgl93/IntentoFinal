import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Row, Col } from "react-bootstrap";


export const Tarjeta = () => {

    const [state, setState] = useState({
        recipe: [],
        showModal: false,
        activeModal: null
    })

    async function fetchrecipe() {
        const res = await fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=76f4b82a2b2e4472a887429cc6cc30ed')
        const translatedrecipe = await res.json()
        setState({ ...state, recipe: translatedrecipe.recipes })
        // validacion aqui 
        console.log('Api recipe', translatedrecipe)
    }

    useEffect(() => { fetchrecipe() }, [])

    return (
        <>
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
                                    {state.activeModal.title} Some Recipe Name
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body id='pic-info'>
                                <h3>Recipe Image</h3>
                                <Card.Img src={state.activeModal.image} />
                                <h5>Ingredients</h5>
                                <ul>
                                    <li>2 Onions</li>
                                    <li>{state.activeModal.ingredients}</li>
                                </ul>

                                <h5>Instructions</h5>
                                <ol>
                                    <li>First instruction</li>
                                    <li>{state.activeModal.instructions}</li>
                                </ol>
                            </Modal.Body>
                        </Modal>
                    </div>
                )

            }

        </>

    );

}

