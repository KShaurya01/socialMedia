import React from 'react';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';

interface OptimizedImageProps {
    uri: string;
    style?: object;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ uri, style }) => {
    return (
        <FastImage
            style={[styles.image, style]}
            source={{ uri }}
            resizeMode={FastImage.resizeMode.cover}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
});

export default OptimizedImage;
