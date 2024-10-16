import TipOption from "../TipOption"

function TipChoice() {
    return (
        <>
        <div className="tip-choice flex">
            <p>Select Tip %</p>
            <div className="tipOptions">
                <TipOption/>
                <TipOption/>
                <TipOption/>
                <TipOption/>
                <TipOption/>
                <TipOption/>
            </div>
        </div>
        </>
    )
}

export default TipChoice