import { useState } from "react";

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const handleFour = () => {
        const updateRuns = runs + 4;
        const updateFours = fours + 1;
        setFours(updateFours);
        setRuns(updateRuns);
    }
    const handleSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p><small>Fours: {fours}</small></p>
            <p><small>Sixes: {sixes}</small></p>
            {
                runs >= 50 && <h1>Player is a century player</h1>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}