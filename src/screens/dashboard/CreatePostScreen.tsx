import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import AnimatedButton from '../../components/ui/AnimatedButton';

const CreatePostScreen = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreatePost = () => {
        console.log('Post Created:', { title, body });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter post title"
            />
            <Text style={styles.label}>Body</Text>
            <TextInput
                style={[styles.input, styles.textArea]}
                value={body}
                onChangeText={setBody}
                placeholder="Enter post content"
                multiline
            />
            <AnimatedButton title="Create Post" onPress={handleCreatePost} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    textArea: {
        height: 100,
    },
});

export default CreatePostScreen;
