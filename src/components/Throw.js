import {useEffect} from 'react'

const Throw = () => {

    useEffect(() => {
        try {
            throw 'an error occured :3'
        }
        catch(err) {
            console.log(err)
        }
        finally {
            console.log('just kidding')
        }
    }, [])

    return (
        <div></div>
    )
}

export default Throw