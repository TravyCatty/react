let user = {
  firstName: 'Ivan',
  lastName: 'Petrovich'
}
//create object user

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
//return user firstname and lastName

function getGreetings(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}</h1>
  }
  else {
    return <h1>Hello, misterious</h1>
  }
}
//operator else if on jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div className="App">
      <h1 className="greet">Hello, {getGreetings(user)}</h1> {/*fucntion in {fucntion then (object)} */}
      <a target="_blank" href="https://google.com"> link</a>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
      <Welcome name='Alice' />
    </div>
  );
}

export default App;
