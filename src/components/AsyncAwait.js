import {useState, useEffect} from 'react'
import {myPromise, secondPromise, thirdPromise, fourthPromise} from '../utils/promiseStuff'

const AsyncAwait = () => {
    const [resOne, setResOne] = useState('')
    const [resTwo, setResTwo] = useState('')
    const [resThree, setResThree] = useState('')
    const [resFour, setResFour] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        const resolvePromises = async() => {
            try {
                const resOne = await myPromise
                const resTwo = await secondPromise
                const resThree = await thirdPromise
                const resFour = await fourthPromise
                setResOne(resOne.data)
                setResTwo(resTwo.data)
                setResThree(resThree.data)
                setResFour(resFour.data)
            }
            catch(err) {
                setError(err.message)
            }
        }
        resolvePromises()
    }, [])

    return (
        <div>
            <h1>{error}</h1>
            <h1>{resOne}</h1>
            <h1>{resTwo}</h1>
            <h1>{resThree}</h1>
            <h1>{resFour}</h1>
        </div>
    )
}

export default AsyncAwait