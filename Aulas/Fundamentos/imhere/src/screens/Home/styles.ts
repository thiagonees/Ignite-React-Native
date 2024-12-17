import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input : {
    flex: 1,
    backgroundColor: '#1f1e25',
    color: '#fff',
    borderRadius: 5,
    height: 56,
    width: '100%',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 36,
    marginBottom: 42,
  },
  emptyList: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
})