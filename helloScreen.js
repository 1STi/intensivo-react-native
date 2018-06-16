// Libs
import React from 'react';
import {
	View,
	Text,
	Image
} from 'react-native';

class Hello extends React.Component {
	render() {
		return (
			<View
				style={styles.container}
			>
				<Text style={styles.container3}>Hello World!!!</Text>
				<Text style={styles.container2}>Texto Novo...</Text>
			</View>
		)
	}
}

const styles = {
	container: {
		justifyContent: 'center',
		flexDirection: 'row'
	},
	container2:{
		backgroundColor: 'red',
		width: '50%',
		fontSize: 22
	},
	container3:{
		width: '50%',
		backgroundColor: 'green',
		fontSize: 22
	}
};

export default Hello;