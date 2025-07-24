function App() {
    const prevStage = () => {
    };

    const nextStage = () => {
        setStage(stage + 1);
    };

    const countUp = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button className="bg-blue-500 p-4 m-4" onClick={countUp}>
                카운트 증가{count}
            </button>
            <button className="bg-blue-500 p-4 m-4" onClick={prevStage}>
                이전
            </button>
            <span>{stage}</span>
        </div>
    )
}