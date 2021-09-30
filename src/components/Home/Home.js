import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FormControl, InputGroup, Button, Container } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Home = () => {

    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] =useState([])

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        
        fetch(url)
        .then(res=>res.json())
        .then(data => setMeals(data.meals ? data.meals :''))
    
    },[searchText])


    const handleSearchField = e =>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }


    return (
        <div>
            <h1>This is Home</h1>
            <Container>
            <div className='mx-auto'>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Meal Name"
                        
                        aria-describedby="basic-addon2"
                        onChange={handleSearchField}
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>

            <div className="searched-meals">
                {
                    meals.map(meal => <Meals meal = {meal} key ={meal.idMeal}></Meals>)
                }
            </div>
            </Container>
        </div>
    );
};

export default Home;