import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  fullScreenSafeArea: {
    flex: 1,
    backgroundColor: '#7baec9',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#7baec9',
  },
  closeBtn: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  closeBtnText: {
    fontSize: width * 0.06,
    color: '#333',
    fontWeight: 'bold',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#7baec9',
    paddingBottom: 20,
  },
  imageSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.6,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: '#3a3a3a',
  },
  heartBtn: {
    padding: 6,
  },
  colorsRow: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  colorDot: {
    width: width * 0.055,
    height: width * 0.055,
    borderRadius: width * 0.0275,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    color: '#3a3a3a',
  },
  features: {
    fontSize: width * 0.037,
    color: '#555',
    marginBottom: 18,
    lineHeight: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  buyBtn: {
    backgroundColor: '#7baec9',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 8,
    elevation: 3,
  },
  buyBtnText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
