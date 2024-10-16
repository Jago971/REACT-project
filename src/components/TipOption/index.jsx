function TipOption() {
    return (
        <>
        <label className="checkmark-container flex" htmlFor="btn">
            <input id="btn" type="checkbox" />
            <div className="chekmark" role="checkmark">
                <p>5%</p>
            </div>
        </label>
        </>
    )
}

export default TipOption