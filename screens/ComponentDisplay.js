import { useDispatch } from 'react-redux'
import { ScrollView } from 'react-native'
import styled from 'styled-components'
import { H1, H2, P2 } from '../components/texts/index.js'
import { Row } from '../components/layouts/index.js'
import ModernIconList from '../components/lists/ModernIconList.js'
import { Background } from '../components/views/index.js'
import { Spacer } from '../components/views/index.js'
import Alert from '../components/alerts/Alert.js'
import Svg, { Path } from 'react-native-svg'
import '../global.js'

export default function App() {
    const dispatch = useDispatch() // allows us to set redux value "isLoggedIn"

    const logout = () => {
        dispatch({
            type: 'UPDATE_IS_LOGGED_IN',
            payload: false,
        })
    }

    return (
        <Background>
            <H1>Hello Peter</H1>
            <Alert onPress={() => logout()}>
                You have a meeting today with jk@paperless.com.
            </Alert>

            <Spacer />

            <H2>Stories</H2>
            <ScrollView
                horizontal
                style={{ paddingVertical: 15 }}
                showsHorizontalScrollIndicator={false}
            >
                <AnalyticsPiece color="#c7a7d4" />
                <AnalyticsPiece color="#f48479" />
                <AnalyticsPiece color="#f6d690" />
            </ScrollView>

            <Spacer />

            <Row
                style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <H2>Goals</H2>
                <P2>(this week)</P2>
            </Row>
            <ModernIconList
                items={[
                    { name: 'My accounts', icon: <ListStarIcon /> },
                    { name: 'My orders', icon: <ListStarIcon /> },
                    { name: 'My saved', icon: <ListStarIcon /> },
                ]}
            />
        </Background>
    )
}

const AnalyticsPiece = styled.View`
    height: 180px;
    width: 140px;
    background-color: ${(props) => props.color};
    box-shadow: 4px 4px 0px ${(props) => props.color}50;
    border-radius: 15px;
    margin-right: 15px;
`

const ListStarIcon = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 20, height: 20 }}
        viewBox="0 0 20 20"
        fill="#ffffff50"
        {...props}
    >
        <Path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
    </Svg>
)
