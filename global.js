import { Appearance } from 'react-native';

global.primaryColor = '#007aff';
global.gray900 = '#111827';
global.lightBg = '#fff';
global.darkBg = '#181a1b';

// text color
global.textColor = '#164e63';
const colorScheme = Appearance.getColorScheme();
if (colorScheme === 'dark') {
    global.textColor = '#cffafe';
}
