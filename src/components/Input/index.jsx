function Input({text, handleChange, currentValue}) {
    return(
        <div className="w-full flex flex-col justify-between">
            <p className="text-black text-lg">{text}</p>
            <input className="text-black bg-slate-200 w-full" value={currentValue} type="number" onChange={handleChange}/>
        </div>
    )
}

export default Input