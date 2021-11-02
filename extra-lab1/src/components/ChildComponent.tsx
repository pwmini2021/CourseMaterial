import React from 'react'

interface Student {
    name: string;
    age: number;
}

/*
    props will look like that
    {
        name: 'Anna',
        age: 12
    }
*/

// here below we have an example of how in react we often use 'destructuring' assignment - {name, age}
const ChildComponent: React.FC<Student>  = ({name, age} /* you could use 'params'*/) => {
    return ( 
        <div>
            Student name is {name}, students age is {age}
        </div>
    )
}

export default ChildComponent
