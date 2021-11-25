import { useLocation, useParams } from "react-router";

const Post = () => {

    const { id } = useParams();
    const query = new URLSearchParams(useLocation().search)

    



    return (
        <>
            <h2>ID is = {id}</h2>
            <h2>{query.get("first")}</h2>
            <h2>{query.get("last")}</h2>
        </>
    )
};

export default Post