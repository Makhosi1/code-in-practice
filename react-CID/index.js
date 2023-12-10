// 04/11/23 React practice class 


'use strict';
// the class acts as a blueprint for all the objects insteads of typing each object 1 at a time we can use class
class Person {//extends ( this part needs to be used with super(props))
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

// on javascript only we would be typing this in 3 lines and but this allows us to use class Person as a blueprint
const newPerson = new Person("Shakirah", 23);
const newPerson1 = new Person("Makhosi", 33);

console.log(newPerson.name);

class Student extends Person {
    constructor(name, age, studentId) { // also add the props from Person here 
        super(name, age) // need to add the properties of the Person so it can be outputted as well
        this.studentId = studentId;
    }
}
const student1 = new Student("Makhosi", 33, "T1234");
console.log(student1.studentId);
console.log(`My name is ${student1.name} and I am ${student1.age}. My student ID number is ${student1.studentId}`);

class ListItems extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return React.createElement(
            "ul",
            {
                style: {
                    display: "inline-block",
                    fontSize: "20px",
                    color: "green"
                },
                id: "lists"
            },

            React.createElement("li", null, "Item 1"),
            React.createElement("li", null, "Item 2"),
            React.createElement("li", null, "Item 3")


        )
    }

};

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

   

        increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };
    decrement() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    reset() {
        this.setState(prevState => ({
            count: prevState = 0
        }));
    };

    render() {
        const {count} = this.state;

        return React.createElement(
            "p",
            {
                style: {
                    color: "green",
                    fontWeight: "light",
                    display: "flex",
                    flexDirection: "row",

                },

            },
            'You clicked ' + count + ' times',
        


            React.createElement(
                "button",
                {
                    style:
                    {
                        color: "green",
                        fontSize: "20px",
                        fontWeight: "bold",
                        backgroundColor: "cream",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        fontSize: "1.1em",
                        margin: "20px"
                        

                    },
                    onClick: () => this.setState({ count: this.state.count + 1 }),

                },
                "Increase"
            ),

            

            React.createElement(
                "button",
                {
                    style:
                    {
                        color: "green",
                        fontSize: "20px",
                        fontWeight: "bold",
                        backgroundColor: "cream",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        fontSize: "1.1em",
                        margin: "20px"

                    },
                    onClick: () => this.setState({ count: this.state.count - 1 }),

                },
                "Decrease"
            ),

            React.createElement(
                "button",
                {
                    style:
                    {
                        color: "green",
                        fontSize: "20px",
                        fontWeight: "bold",
                        backgroundColor: "cream",
                        padding: "10px 20px",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        fontSize: "1.1em",
                        margin: "20px"

                    },
                    onClick: () => this.setState({ count: this.state.count = 0 }),

                },
                "Reset"
            )
        

        );
            };
}








const domContainer = document.querySelector("#root");
ReactDOM.render(React.createElement(ListItems), domContainer);


ReactDOM.render(React.createElement(Counter), domContainer);
