import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnimatedButton from '../../components/ui/AnimatedButton';
import { useGetUserByIdQuery } from '../../store/slices/apiSlice';

const ProfileScreen = () => {
    const userId = 1; // Example user ID
    const { data: user, error, isLoading } = useGetUserByIdQuery(userId);

    const handleEditProfile = () => {
        console.log('Edit Profile');
        // Navigate to edit profile screen or show edit form
    };

    if (isLoading) { return <Text>Loading...</Text>; }
    if (error) { return <Text>Error loading profile</Text>; }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.info}>Name: {user?.name}</Text>
            <Text style={styles.info}>Email: {user?.email}</Text>
            <AnimatedButton title="Edit Profile" onPress={handleEditProfile} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ProfileScreen;
