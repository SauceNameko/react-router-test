import "./FieldScene.css";
export const FieldScene = ({ field }) => {
    return (
        <div className="field" >
            {field.map((y, yIndex) => {
                return y.map((x, xIndex) => {
                    const key = `${yIndex}-${xIndex}`;
                    return (
                        <>
                            {x == 0 && <div className="none" key={key}></div>}
                            {x == 1 && <div className="wall" key={key}></div>}
                            {x == 2 && <div className="player" key={key}></div>}
                            {x == 3 && <div className="block" key={key}></div>}
                            {x == 4 && <div className="exit" key={key}></div>}
                        </>
                    )
                })
            })}
        </div>
    )
}