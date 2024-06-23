import { Text, StyleSheet, Platform } from 'react-native';
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    //Another option available is making platform specfic files
    //Ex. Title.android.js & Title.ios.js
    //Change what is appropriate per each platform in each file
    //NOTE: Ensure that when importing, you are targeting the base file
    //Example import {Title} from ../components/ui/Title
    borderColor: 'white',
    padding: 12,
    marginTop: 5,
    maxWidth: '80%',
  },
});
