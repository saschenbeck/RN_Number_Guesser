import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/color';
function Card({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    //Android
    elevation: 6,
    //iOS
    //shadowColor: 'black', shadowOffeset: {width: 0, height: 2}, shadowRadius: 6, shadowOpacity: 0.25
  },
});
