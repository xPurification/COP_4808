import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"
import "./BaristaForm.css";


const BaristaForm = () => {
    const onCheckAnswer = () => {
        if (!ingredients['temperature'].includes(inputs['temperature'])) {
            alert("For temperature, that isn't even an option!")
        }
        if (!ingredients['syrup'].includes(inputs['syrup'])) {
            alert("For syrup, that isn't even an option!")
        }
        if (!ingredients['milk'].includes(inputs['milk'])) {
            alert("For milk, that isn't even an option!")
        }
        if (!ingredients['blended'].includes(inputs['blended'])) {
            alert("For blended, that isn't even an option!")
        }
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }
        if (trueRecipe.syrup != inputs['syrup']) {
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }
        if (trueRecipe.milk != inputs['milk']) {
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
        if (trueRecipe.blended != inputs['blended']) {
            setCheckedBlended('wrong');
        }
        else {
            setCheckedBlended("correct");
        }
    };

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });

        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        getNextDrink();
    }

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    }
    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                >
                    🔄
                </button>
            </div>
            <form className="container">
                <div className="mini-container">
                    <h3>Temperature</h3>
                    <div className="answer-space" id={correct_temp}>
                        {inputs["temperature"]}
                    </div>
                    <input
                        type="text"
                        name="temperature"
                        value={inputs["temperature"]}
                        placeholder="Guess the temperature..."
                        onChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                temperature: e.target.value,
                            }))
                        }
                        className="textbox"
                    />
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="temperature"
                        choices={ingredients["temperature"]}
                        currentVal={inputs["temperature"]}
                    />
                    </div>
                    <div className="mini-container">
                        <h3>Syrup</h3>
                        <div className="answer-space" id={correct_syrup}>
                            {inputs["syrup"]}
                        </div>
                        <input
                            type="text"
                            name="syrup"
                            value={inputs["syrup"]}
                            placeholder="Guess the syrup..."
                            onChange={(e) =>
                                setInputs((prevState) => ({
                                    ...prevState,
                                    syrup: e.target.value,
                                }))
                            }
                            className="textbox"
                        />
                        <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Milk</h3>
                    <div className="answer-space" id={correct_milk}>
                        {inputs["milk"]}
                    </div>
                    <input
                            type="text"
                            name="milk"
                            value={inputs["milk"]}
                            placeholder="Guess the milk..."
                            onChange={(e) =>
                                setInputs((prevState) => ({
                                    ...prevState,
                                    milk: e.target.value,
                                }))
                            }
                            className="textbox"
                        />
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}
                    />
                </div>
                <div className="mini-container">
                    <h3>Blended</h3>
                    <div className="answer-space" id={correct_blended}>
                        {inputs["blended"]}
                    </div>
                    <input
                            type="text"
                            name="blended"
                            value={inputs["blended"]}
                            placeholder="Guess the blended..."
                            onChange={(e) =>
                                setInputs((prevState) => ({
                                    ...prevState,
                                    blended: e.target.value,
                                }))
                            }
                            className="textbox"
                        />
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>
            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
        </div>
    );

};

export default BaristaForm;