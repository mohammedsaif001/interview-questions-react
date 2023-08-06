// This is used when you have a html coming in from api or a variable and you neeed to display as its is to the browser like a h1 with its defsult style instead of printing it as a string 

const DangerouslySetHTML = () => {
    const str = `<h1 style='color:red'>Hello Word</h1>`
    return (
        <>
            <div>{str}</div>

            {/* This is more like inner html but dont use this as it will invite cross scripting attacks */}
            <div dangerouslySetInnerHTML={{ __html: str }} />
        </>
    )
}
export default DangerouslySetHTML