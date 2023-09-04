import { useState } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';
import { Refresh } from './template/Refresh';

function AppWithUI() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Refresh onClick={() => setCount(count + 1)} />
            <App key={count} />
        </>
    );
}

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
