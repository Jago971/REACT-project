function Options({text, percent5, percent10, percent15, percent25, percent50}) {
    return(
        <div className="flex flex-col justify-between">
            <p className="text-black text-lg">{text}</p>
            <div className="grid grid-cols-3 gap-2">
            <button onClick={percent5} className="bg-teal-800 p-1 font-bold text-lg">5%</button>
            <button onClick={percent10} className="bg-teal-800 p-1 font-bold text-lg">10%</button>
            <button onClick={percent15} className="bg-teal-800 p-1 font-bold text-lg">15%</button>
            <button onClick={percent25} className="bg-teal-800 p-1 font-bold text-lg">25%</button>
            <button onClick={percent50} className="bg-teal-800 p-1 font-bold text-lg">50%</button>
            <button className="bg-slate-300 p-1 text-black font-bold text-lg">custom</button>
            </div>
        </div>
    )
}

export default Options