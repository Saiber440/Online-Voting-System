import logo from './logo.svg';
import './App.css';
import Avatar from './images/Avatar.png'

function App() {
  return (
    <>
      <div className="container1">
        <h1>Vote for Your Own</h1>
        <p>Your Vote, Your Right</p>
      </div>
      <div className="container2">
        <div className="Leftcontainer">
          <img src={Avatar} className="Avatar"/>
          <h2>Abc</h2>
          <p>About Leader Para</p>
        </div>
        <button className='Button'>
          Refresh
        </button>
        <div className="Rightcontainer">
          <img src={Avatar} className="Avatar"/>
          <h2>Xyz</h2>
          <p>About Leader Para</p>
        </div>
        <div className="form">
          <form>
            <label for= "Name">Your Name</label> <br/>
            <input type= "text" id = "Name" name = "Name" style = {{top:"70px"}}/> <br/>
            <label for= "ID" style = {{top:"150px"}}>ID.No.</label> <br/>
            <input type= "text" style = {{top:"220px"}} id = "ID" name = "ID"/> <br/>
            <button style = {{left:"10px"}}>
              Team1              
            </button>
            <button style = {{right:"10px"}}>
              Team2
            </button>
          </form>
        </div>
        <div className="information">
          <h2>
            Information
          </h2>
        </div>
      </div>
      <div className="container3">
        <h1>Thank You</h1>
      </div>
    </>
  );
}

export default App;
