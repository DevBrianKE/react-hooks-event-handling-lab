function EyesOnMe() {
    const handleFocus = () => {
        console.log("Good!")
    }

    const handleblur = () => {
        console.log("Hey! Eyes on me!")
    }


    return (
        <button onFocus={handleFocus} onBlur={handleblur}>Eyes on me</button>
    )
}
export default EyesOnMe