import LoginFace from "./LoginFace";
/* import { FacebookProvider} from 'react-facebook';
<FacebookProvider appId="933422631180070"></FacebookProvider> */

function App() {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId      : '933422631180070',
      cookie     : true,  
      xfbml      : true,  
      version    : 'v16.0' 
    });
  }
  return (
    
    <div>
      <header>
       <h1>Pruebas con Face</h1>
       <LoginFace/>
      </header>
    </div>
    
  );
}

export default App;
