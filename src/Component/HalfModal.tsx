import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  PanResponder,
  Animated,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;

interface HalfModalProps {
  modalVisible: boolean;
  children: React.ReactNode;
  minHeight?: number;
  modalHeight?: number;
  hasDraggableIcon?: boolean;
  dragIconStyle?: object;
  dragIconColor?: string;
  modalBackgroundColor?: string;
  setModalVisible?: Function;
}

const HalfModal: React.FC<HalfModalProps> = ({
  modalVisible,
  children,
  minHeight = 60,
  modalHeight = SCREEN_HEIGHT / 2,
  hasDraggableIcon = true,
  dragIconStyle,
  dragIconColor,
  modalBackgroundColor = 'white',
  setModalVisible = () => {},
}) => {
  const modalHeightValue = useRef<Animated.Value>(
    new Animated.Value(modalHeight),
  ).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newHeight = SCREEN_HEIGHT - gestureState.moveY;
        if (newHeight >= minHeight && newHeight <= SCREEN_HEIGHT - 100) {
          modalHeightValue.setValue(newHeight);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        const newHeight = SCREEN_HEIGHT - gestureState.moveY;
        if (newHeight <= 160) {
          setModalVisible(false);
          modalHeightValue.setValue(modalHeight);
        }
      },
    }),
  ).current;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: 22,
        }}>
        <TouchableOpacity
          style={styles.background}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Animated.View
          style={[
            styles.modal,
            {
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 30,
              width: '100%',
              backgroundColor: modalBackgroundColor,
            },
          ]}
          {...panResponder.panHandlers}>
          {hasDraggableIcon && (
            <View style={styles.draggableContainer}>
              <View
                style={[
                  styles.draggableIcon,
                  dragIconStyle,
                  {
                    backgroundColor: dragIconColor || '#A3A3A3',
                  },
                ]}
              />
            </View>
          )}
        </Animated.View>
        <Animated.View
          style={{
            height: modalHeightValue,
            width: '100%',
            backgroundColor: modalBackgroundColor,
            padding: 10,
          }}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  modal: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.55,
    shadowRadius: 14,
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  draggableContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  draggableIcon: {
    width: 40,
    height: 6,
    borderRadius: 3,
  },
});

export default HalfModal;
