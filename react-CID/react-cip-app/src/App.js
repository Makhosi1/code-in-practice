import logo from './logo.svg';
import './App.css';
import Profile from './Components/CodeInPractice';
import { Student } from './Components/CodeInPractice';

const Person = {
  name: "John Doe",
  age: 25,
  gender: "Male"
};


function App() {
  return (
    <div>
      <Profile profileProps = {Person} />
      <Student  />
    </div>
  );
}

export default App;
