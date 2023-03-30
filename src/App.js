import './App.css';
import MediaControlCard from "./musiccard";
import ColorButtons from "./navbuttons";
import * as React from "react";
import { useState } from "react";

export default function App() {
    const [showCard, setShowCard] = useState(false);

    const handleShowCard = () => {
        setShowCard(!showCard);
    };
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [job, setJob] = useState('');
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleJobChange = (event) => {
        setJob(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Job:', job);
        setName('');
        setAge('');
        setJob('');
    }
    return (
        <div>
            <div>
                <nav>
                    <ColorButtons onClick={handleShowCard} />
                </nav>
            </div>
            <div className="App">
                <h1>Agachi Daniel</h1>
            </div>
            <div className="cardbox">
                {showCard && <MediaControlCard />}
                {showCard && <MediaControlCard />}
                {showCard && <MediaControlCard />}
            </div>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <label className="form__label">
                        <span className="form__text">Name:</span>
                        <input className="form__input" type="text" name="name" value={name} onChange={handleNameChange} />
                    </label>
                    <label className="form__label">
                        <span className="form__text">Age:</span>
                        <input className="form__input" type="text" name="age" value={age} onChange={handleAgeChange} />
                    </label>
                    <label className="form__label">
                        <span className="form__text">Job:</span>
                        <input className="form__input" type="text" name="job" value={job} onChange={handleJobChange} />
                    </label>
                    <button className="form__submit" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
