import './styles.css';
import { ClickCounter } from './ClickCounter';

export const App = () => {
return (
<>
<h1>
Testing 456 {process.env.NODE_ENV} {process.env.name}
</h1>
<ClickCounter />
</>
);
};
