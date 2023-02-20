import LoginFace from "./LoginFace";
import { FacebookProvider} from 'react-facebook';
 
//886374405903867  QA
//933422631180070  PRD
function App() {
  
  return (
<FacebookProvider appId="886374405903867">
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
