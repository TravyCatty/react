let user = {
  firstName: 'Ivan',
  lastName: 'Petrovich'
}
//create object user

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}
//return user firstname and lastName

function getGreetings(user){
  if(user) {
    return <h1>Hello, {formatName(user)}</h1>
  }
  else {
    return <h1>Hello, misterious</h1>
  }
}
//operator else if on jsx


function App() {
  return (
    <div className="App">
      <h1>Hello, {getGreetings(user)}</h1> {/*fucntion in {fucntion then (object)} */}
      <a target="_blank" href="https://google.com"> link</a>
    </div>
  );
}

export default App;
