const App = () => {
    return (

      <div>
        <NavBar />
         <MenuBar />
  
         <Footer />
         
    
      </div>
    
    
    );
  };
  
  //COMPONENT1
  const NavBar = () => {
    return (
      <div>
        <h1>React App</h1>
      </div>
    );
  };
  //component 2
  const MenuBar = () => {
    return (
      <div>
        <h1>Home</h1>
        <h1>Contact</h1>
        <h1>About</h1>
      </div>
    );
  };
  //COMPONENT3
  const Footer = () => {
    return (
      <div>
        <h3>Facebook</h3>
        <h3>Twitter</h3>
      </div>
    );
  };


  
  ReactDOM.render(<App />, document.getElementById("root"));
  