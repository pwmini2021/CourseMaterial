import React from 'react'

interface Props {
    name: string;
    age: number;
}

const ChildComponent: React.FC<Props> = (props: Props) => {
    return ( 
        <div>
            Student name is {props.name}
        </div>
    )
}

export default ChildComponent
