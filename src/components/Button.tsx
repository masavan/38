import type {FC} from 'react'



const Button : FC<{
    count: number,
    setCount:  React.Dispatch<React.SetStateAction<number>>
}> = ({count, setCount}) => {

    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </>
    )
}

export default Button;