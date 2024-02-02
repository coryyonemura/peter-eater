import { StyleSheet } from 'react-native'

import { uciColors } from './Colors'

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        width: 'auto',
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    foodItem: {
        backgroundColor: uciColors.uciBlue,
        padding: 20,
        fontSize: 22,
        marginVertical: 8,
    },
    item: {
        backgroundColor: uciColors.uciBlue,
        padding: 16,
        margin: 1,
        fontSize: 22,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: '#ffffff',
    },
    itemTouchable: {
        flex: 1,
        borderRadius: 10,
        padding: 16,
        overflow: 'hidden',
    },
    box: {
        borderWidth: 1,
        justifyContent: 'center',
        flex: 1,
        padding: 20,
        width: '40%',
        height: '50%',
        margin: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    subhead: {
        padding: 10,
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 8,
        maxWidth: '100%',
        maxHeight: '65%',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
})
