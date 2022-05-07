import Login from './screens/Login.js';
import { setCustomText } from 'react-native-global-props';

export default function App() {
    // setCustomText(customTextProps);
    return <Login />;
}

const customTextProps = {
    style: {
        fontFamily: 'Calibri',
    },
};
