import { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

function AppWithUI() {
    const [count, setCount] = useState(0);

    return <App key={count} />;
}

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
