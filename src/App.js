import LoginFace from "./LoginFace";
import { FacebookProvider} from 'react-facebook';
 
//886374405903867  QA
//933422631180070  PRD
//5634334240010658  otro
function App() {
  
  return (
<FacebookProvider appId="5634334240010658">
    <div>
      <header>
       <h1>Pruebas con Face</h1>
       <LoginFace/>
      </header>
    </div>
    </FacebookProvider>    
  );
}

export default App;
