import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
    { id: '1', message: 'User1 liked your post.' },
    { id: '2', message: 'User2 commented on your post.' },
    { id: '3', message: 'User3 started following you.' },
];

const NotificationsScreen = () => {
    const renderItem = ({ item }: { item: { id: string; message: string } }) => (
        <View style={styles.notificationItem}>
            <Text>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    notificationItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default NotificationsScreen;
