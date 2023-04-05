import { useState, useEffect } from 'react'
export default function Home() {

    const [helloResponse, setHelloResponse] = useState<string|null>(null)

    useEffect(() => {
        fetch('/api/hello-world')
            .then((res) => res.text())
            .then((data) => {
                setHelloResponse(data)
            })
    }, [])

    return (
        <>
            Hello world!
            Response from server call to /api/hello-world: {helloResponse}
        </>
    )
}
