import type {FC} from "react";

const Input : FC<{
    user: { name: string, imail: string }
    setUser: React.Dispatch<React.SetStateAction<{
        name: string
        imail: string
    }>>
}> = ({user, setUser}) => {
    return (
        <>
            <input type='text' onInput={(e) => setUser({...user, name: e.currentTarget.value})} />
            <br/>
            <input type="text" onInput={(e) => setUser({...user, imail: e.currentTarget.value})} />
        </>
    )
};


export default Input;