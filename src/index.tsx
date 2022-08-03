import { App } from './App';

import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root')!);
//Put the ! when using Typescript
root.render(<App />);
