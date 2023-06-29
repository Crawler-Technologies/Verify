import {ReactNode} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import colors from '../../theme/colors';


interface IModalContainer {
  showModal: boolean;
  children?: ReactNode;
  onRequestClose?: () => void;
  showMask: boolean;
}

const ModalContainer = ({
  showModal,
  children,
  onRequestClose,
  showMask,
}: IModalContainer) => {
  let mask = typeof showMask !== 'undefined' ? showMask : true;
  return (
    <Modal
      animationType="slide"
      statusBarTranslucent
      transparent
      visible={showModal}
      onRequestClose={onRequestClose}>
      <View
        style={[
          styles.container,
          {backgroundColor: mask ? 'rgba(0,0,0,0.3)' : 'transparent'},
        ]}>
        <View style={styles.children}>
          <View style={styles.notch} />
          {children}
        </View>
      </View>
    </Modal>
  );
};
export default ModalContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  children: {
    backgroundColor: colors.white,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  notch: {
    width: 88,
    height: 6,
    backgroundColor: '#d9d9d9',
    borderRadius: 3,
    alignSelf: 'center',
    top: -8,
  },
});
