import { useState } from "react"

const Section = ({about,desc,isVisible,setIsVisible}) => {

    console.log(isVisible)


    return (
        <div>
            <h1>
               {about} 
            </h1>
            {isVisible ? (
                <button
                onClick={() => setIsVisible(false)}>
                    hide
                </button>
            ) : <button
            onClick={() => setIsVisible(true)}>
                show            </button> }

            { isVisible && <p>{desc}</p>}

        </div>
    )
}



const Fun = () => {

    const [isVisibleSection , setIsVisibleSection] = useState("about");

    return(
        <div>
            <Section about={"hello"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
            isVisible={isVisibleSection === "about"}
            setIsVisible={() => setIsVisibleSection("about")} />
            <Section about={"hello"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
            isVisible={isVisibleSection === "team"}
            setIsVisible={() => setIsVisibleSection("team")} />
            <Section about={"hello"}
            desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"}
            isVisible={isVisibleSection === "section"}
            setIsVisible={() => setIsVisibleSection("section")} />
           
        </div>
    )
}

export default Fun;