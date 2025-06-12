import React, { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, RefreshControl, Animated, ListRenderItem } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, selectAllPosts, selectPostsStatus, selectPostsError } from '../../store/slices/postsSlice';
import AnimatedButton from '../../components/ui/AnimatedButton';
import OptimizedImage from '../../components/media/OptimizedImage';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const status = useSelector(selectPostsStatus);
    const error = useSelector(selectPostsError);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchPosts(1));
        }
    }, [status, dispatch]);

    const handleRefresh = () => {
        dispatch(fetchPosts(1));
    };

    const handleLoadMore = () => {
        if (status !== 'loading') {
            dispatch(fetchPosts(posts.length / 10 + 1));
        }
    };

    const handleLike = (postId: number) => {
        console.log(`Liked post ${postId}`);
    };

    const renderItem: ListRenderItem<{ id: number; title: string; body: string }> = ({ item }) => {
        const scaleAnim = new Animated.Value(1);

        const animateLike = () => {
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.2,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                }),
            ]).start();
        };

        return (
            <TouchableOpacity style={{ padding: 10, borderBottomWidth: 1 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <OptimizedImage uri="https://via.placeholder.com/150" style={{ height: 150, marginVertical: 10 }} />
                <Text>{item.body}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => { handleLike(item.id); animateLike(); }}>
                        <Animated.Text style={{ transform: [{ scale: scaleAnim }], marginRight: 10 }}>❤️ Like</Animated.Text>
                    </TouchableOpacity>
                    <AnimatedButton title="Comment" onPress={() => console.log('Comment')} />
                    <AnimatedButton title="Share" onPress={() => console.log('Share')} />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>

            {status === 'loading' ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                    refreshControl={<RefreshControl refreshing={status === 'loading'} onRefresh={handleRefresh} />}
                    initialNumToRender={10}
                    maxToRenderPerBatch={5}
                    windowSize={5}
                />
            )}
        </View>
    );
};

export default DashboardScreen;
