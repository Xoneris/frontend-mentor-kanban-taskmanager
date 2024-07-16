import { useRouter } from "next/router";

export default function Board() {

    const router = useRouter()
    const { slug } = router.query;


    return (
        <p>Dynamic Page: {slug}</p>
    )

}

