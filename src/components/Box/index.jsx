import Input from "../Input"
import MoneyAmount from "../MoneyAmount"
import Reset from "../Reset"
import TipChoice from "../TipChoice"


function Box() {
    return (
        <>
        <div className="box flex">
            <div className="half flex">
                <Input/>
                <TipChoice/>
                <Input/>
            </div>
            <div className="half flex">
                <div className="amounts flex">
                <MoneyAmount/>
                <MoneyAmount/>
                </div>
                <Reset/>
            </div>
        </div>
        </>
    )
}

export default Box