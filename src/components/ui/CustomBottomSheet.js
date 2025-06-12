import React, {useRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';

const CustomBottomSheet = ({content}) => {
  const sheetRef = useRef(null);

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[450, 300, 0]}
      borderRadius={10}
      renderContent={renderContent}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 450,
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomBottomSheet;
