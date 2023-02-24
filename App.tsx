import { Players } from '@screens/Players'
import theme from './src/theme'
import { ActivityIndicator } from 'react-native'
import { Loading } from '@components/Loading'
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor="transparent"
                translucent={true}
            />
            {fontsLoaded ? <Players /> : <Loading />}
        </ThemeProvider>
    )
}
