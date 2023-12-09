import PropTypes from "prop-types";

/*
const Person = {
    name: "John Doe",
    age: 25,
    gender: "Male"
}
*/

function Profile({profileProps}) {
    let {name, age, gender} = profileProps;

    return (
        <div>
            <h1>Name: {name}</h1>
            <h4>Age: { age >= 18 ? `${age} years old` : "Not old enough."   } </h4>
            <p>Gender: {gender}</p>
            <button onClick ={() => console.log("hello Makhosi")}> Add Student</button>

        </div>
    )
}

 function Student() {
    return (
        <Profile>
            <p>School: Sheffield University</p>
        </Profile>
    )
};

Profile.propTypes = {
    profileProps: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired
})
};



export default  Student;

// for the age part greater than or less than, can write the code this way (<h4>Age: { age < 18 ? "Not old enough." : `${age} years old` } </h4> ) and still works.


// create the student profile from the profile component, a paragraph showing the name if the students school together with name, age and gender.

