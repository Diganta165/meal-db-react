import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Meals = (props) => {
    console.log(props.meal);
    const {strMeal} = props.meal;
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{strMeal?strMeal:'Not Available'}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Meals;