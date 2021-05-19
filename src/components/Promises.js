import {useState, useEffect} from 'react'
import {myPromise} from '../utils/promiseStuff'

const Promises = () => {
    const [display, setDisplay] = useState('')
    const [loading, setLoading] = useState('')

    useEffect(() => {
        setLoading('Page is loading...')
        myPromise.then(res => {
            setDisplay(res.data)
        }).catch(err => {
            setDisplay(err.message)
        }).then(() => {
            setLoading('Page is done loading')
        })
    }, [])

    return (
        <div>
            <p>{loading}</p>
            <h1>{display}</h1>
        </div>
    )
}

export default Promises