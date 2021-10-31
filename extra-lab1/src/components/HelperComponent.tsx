

const HelperComponent: React.FC = () => {

    function destructure() {
        const person = {
            name: "Anna",
            age: "23",
            nationality: "Polish"
        };
        
        // const name = person.name;
        // const age = person.age;
        // const nationality = person.nationality;

        const {name, age, nationality} = person;

        // now show how we often use that in props
    }


    // SPREAD OPERATOR
    function sum(a: number, b: number, c: number, d: number) {
        return a + b + c + d;
    }


    function spreadOperatorSumOfArrayElements() {
        const numbers: [number,number,number,number] = [1,2,3,4];
        const sumOfNumbers = sum(numbers[0],numbers[1],numbers[2],numbers[3]);
        //const sumOfNumbers = sum(...numbers);
        console.log('sumOfNumbers: ' + sumOfNumbers);
    }

    function spreadOperatorArrayElements() {
        const numbers: [number,number,number,number] = [1, 2, 3, 4];
        const extendedNumbers = [...numbers, 23, 45];
        console.log(extendedNumbers);
    }
    
    function spreadOperatorObject() {
        const person = {
            name: "Anna",
            age: "23",
            nationality: "Polish",
            friend: {
                name: 'John',
            }
        };

        //const person1 = person;
        const person1 = {...person};

        person1.name = "Lukasz";
        person1.friend.name = "Hector";

        console.log('Person:' + JSON.stringify(person));
        console.log('Person1:' + JSON.stringify(person1));
        
    }


    return (
        <div>
            Helper
            {destructure()}
            {spreadOperatorArrayElements()}
            {spreadOperatorObject()}
        </div>
    )
}

export default HelperComponent;
