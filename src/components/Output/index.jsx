function Output({text, num}) {
    return(
        <div className="flex justify-between content-center">
            <div>
            <p className="text-lg">{text}</p>
            <p className="text-xs text-teal-500">/ person</p>
            </div>
            <p className="content-center text-4xl text-teal-500 font-bold">{num}</p>
        </div>
    )
}

export default Output