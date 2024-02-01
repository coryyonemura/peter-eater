import { StatusBar, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 500,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#0064a4',
        padding: 20,
        fontSize: 22,
        marginVertical: 8,
        maxWidth: '100%',
        maxHeight: '65%',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
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
        width: '100%',
        borderRadius: 10,
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
