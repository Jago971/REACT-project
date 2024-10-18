function Reset({resetHandler}) {
    return(
        <button onClick={resetHandler} className="w-full text-2xl p-2 font-bold bg-teal-600 text-teal-800">
            RESET
        </button>
    )
}

export default Reset