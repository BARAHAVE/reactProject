import{ Alert} from'react-native'

Alert.alert(
    'Heading',
    'Body',
    [{
        text:'option1',
        onPress:() => handler
    },'Hello I am simple alert'

    ])

export default AlertExample;