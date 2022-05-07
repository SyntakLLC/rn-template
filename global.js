import { Appearance } from 'react-native';

global.primaryColor = '#007aff';

// light mode
global.textColor = '#0c4a6e';
global.bgColor = '#fff';

// if dark mode
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
    global.textColor = '#cffafe';
    global.bgColor = '#181a1b';
}
