import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cce6f1',
  },
  headerImage:{
    height:25,
    width:25,
    marginLeft:"3%"
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    marginLeft:"10%"
  },
  listContent: {
    padding: 16,
  },

  heartBtn: {
    padding: 6,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  nameView: {
    margin: 10,
    backgroundColor: '#f3f3f3',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  icon: {
    height: 20,
    width: 20,
  },

  modelView: {
    margin: 10,
    backgroundColor: '#f3f3f3cb',
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  details: {
    padding: 12,
  },
  name: {
    fontSize: 14,
    color: '#000',
     fontWeight: '500',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: '500',
    color: '#555',
    marginLeft: 10,
  },
});

export default styles;
