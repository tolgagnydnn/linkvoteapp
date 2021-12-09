import {useEffect} from 'react'
import {AlertBox} from '../styled/AlertStyled'

function Alert({type, message, removeAlert}) {
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            removeAlert()
        }, 123000)
        return () => clearTimeout(timeout);
    }, [])

    return (
        <AlertBox type>
            <p>{message} {type} </p>
        </AlertBox>
    )
}

export default Alert
