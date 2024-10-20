import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    padding: 20,
    backgroundColor: '#f5f5f5', // 배경 색상
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6200EE', // 헤더 배경 색상
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column', // 버튼을 세로로 정렬
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
    marginBottom: 20, // 아래 여백 추가
  },
  button: {
    backgroundColor: '#6200EE', // 버튼 배경 색상
    padding: 15,
    borderRadius: 5,
    marginVertical: 10, // 버튼 간 여백
    width: '80%', // 버튼 넓이 설정
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  menuText: {
    fontSize: 18,
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
},
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  margin: 10,
  paddingLeft: 8,
},
deleteButton: {
  color: 'red',
  marginLeft: 10,
},
});

export default styles;
