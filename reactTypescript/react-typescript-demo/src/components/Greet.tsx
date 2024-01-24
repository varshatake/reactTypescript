type greetprops = {
    name: string
    messagecount: number
    isloogedin: boolean
}

export const Greet =(props:greetprops) => {
    return (
        <div>
            <h2>{props.isloogedin ?
            `Welcome ${props.name} !!! You have ${props.messagecount} INSPPT unread messages...`
                :`Welcome Guest`}
        </h2>
            </div>
    )
}