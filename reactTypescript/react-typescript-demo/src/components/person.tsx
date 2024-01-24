type personProps = {
    name: {
        firstname : string,
    lastname : string,
    }
    
}

export const Person = (personprop : personProps) => {
    return <div>Welcome {personprop.name.firstname} {personprop.name.lastname}</div>
}