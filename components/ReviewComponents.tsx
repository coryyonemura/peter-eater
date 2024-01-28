import {
    Text,
    Button,
    ScrollView,
    StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
        textAlign: 'center',
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

    item: {
        // backgroundColor: '#0064a4',
        padding: 20,
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 8,
        maxWidth: '100%',
        maxHeight: '65%',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
}
)

const ReviewScreen = ({ navigation }: { navigation: any }) => {
    return (
        <ScrollView>
            <Text style={styles.header}>Review Screen</Text>
            <Text style={styles.subhead}>Brandywine</Text>
            <Text style={styles.item}>Food Title</Text>
            <Text style={styles.item}>Rating: 4</Text>
            <Button
                title="Submit"
            // onPress={() =>
            //     navigation.navigate('Menu', { name: 'Jane' })
            // }
            />
        </ScrollView>
    );
};

export default ReviewScreen;
