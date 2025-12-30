import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Loading(){

    const goTo= useNavigate()

    useEffect(()=>{

        const timer= setTimeout(()=>{

            goTo("/app", {replace: true})

        }, 3000)

        return()=> clearTimeout(timer)

    }, [goTo])
    
    return(
        <div className="loading-container">
            <div className="loader"></div>
            <h2>Loading...</h2>
        </div>
    )
}

export default Loading