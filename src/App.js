import './App.css';
import MediaControlCard from "./musiccard";
import ColorButtons from "./navbuttons";
import * as React from "react";
import { useState } from "react";

function App() {
    const [showCard, setShowCard] = useState(false);

    const handleShowCard = () => {
        setShowCard(true);
    };

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
        </div>
    );
}

export default App;
