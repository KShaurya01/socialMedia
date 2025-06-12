import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AnimatedButton from '../../components/ui/AnimatedButton';

const users = [
    { id: '1', name: 'User1', isFollowing: false },
    { id: '2', name: 'User2', isFollowing: true },
    { id: '3', name: 'User3', isFollowing: false },
];

const UserListScreen = () => {
    const [userList, setUserList] = useState(users);

    const toggleFollow = (userId: string) => {
        setUserList((prevList) =>
            prevList.map((user) =>
                user.id === userId ? { ...user, isFollowing: !user.isFollowing } : user
            )
        );
    };

    const renderItem = ({ item }: { item: { id: string; name: string; isFollowing: boolean } }) => (
        <View style={styles.userItem}>
            <Text>{item.name}</Text>
            <AnimatedButton
                title={item.isFollowing ? 'Unfollow' : 'Follow'}
                onPress={() => toggleFollow(item.id)}
            />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={userList}
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
    userItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default UserListScreen;
