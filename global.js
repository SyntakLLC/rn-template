import { Appearance } from 'react-native'

global.primaryColor = '#007aff'
global.colorScheme = Appearance.getColorScheme()

// light mode
global.textColor = '#0c4a6e'
global.bgColor = '#fff'
global.borderColor = '#00000030'

// if dark mode
if (global.colorScheme !== 'dark') {
    global.textColor = '#ffffff'
    global.bgColor = '#111827'
    global.borderColor = '#ffffff30'
}
