import { useEffect } from "react"

const Home = () => {
    useEffect(() => {Window.scroll(0,0) }, [] )
    return (
        <div>
            HOME PAGE
        </div>
    )
}

export default Home