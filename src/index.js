import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); // content of public/index.html 
                      // <div id="root"></div> 
                      // will be replaced by 
                      // <div id="root"><App /></div>
