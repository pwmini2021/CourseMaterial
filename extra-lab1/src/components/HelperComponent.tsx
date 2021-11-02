

const HelperComponent: React.FC = () => {

    function destructure() {
        const person = {
            name: "Anna",
            age: 23,
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
        //const sumOfNumbers = sum(numbers[0],numbers[1],numbers[2],numbers[3]);
        const sumOfNumbers = sum(...numbers);
        console.log('sumOfNumbers: ' + sumOfNumbers);
    }

    function spreadOperatorArrayElements() {
        const numbers: [number,number,number,number] = [1, 2, 3, 4];
        const extendedNumbers = [...numbers, 23,45];
        console.log(extendedNumbers);
    }
    
    function spreadOperatorObject() {
        const person = {
            name: "Anna",
            age: "23",
            nationality: "Polish",
            friend: {
                name: 'John',
                age: 34,
            }
        };


       // this here is a 'shallow copy'
       const person1 = {...person};

       // be aware, only first level parameters are copied, so 'name' parameter is copied and 
       person1.name = "Lukasz";

       // but 'friend' is just a reference to object. When frend was copied then on new object 'person1' 
       // parameter 'friend' references the same object - the same area in memory 
       // run this and observe outocome in console log
       person1.friend.name = "Hector";

        console.log('Person:' + JSON.stringify(person));
        console.log('Person1:' + JSON.stringify(person1));
        
        // To create 'deep copy' of an object you can use syntax with spread operators but 
        // I would suggest using existing tools lile lodoash '_.cloneDeep()'
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
