import React from 'react';
import Icon from '@material-ui/core/Icon'
import { Card, Button } from '@material-ui/core';
import Textarea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';

class TrelloActionButton extends React.Component {

	state = {
		formOpen: false,
		text: ""
	};

	openForm = () => {
		this.setState({
			formOpen: true
		});
	};

	closeForm = (e) => {
		this.setState({
			formOpen: false
		});
	};

	handleInputChange = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	handleAddList = () => {
		const { dispatch } = this.props;
		const { text } = this.state;

		if (text) {
			this.setState({
				text: ""
			});
			dispatch(addList(text))
		}

	 return;
	}

	handleAddCard = () => {
		const { dispatch, listID } = this.props;
		const { text } = this.state;

		if (text) {
			this.setState({
				text: ""
			});
			dispatch(addCard(listID, text))
		}
	}
	
	renderAddButton = () => {
		const { list } = this.props;

		const buttonText = list ? "Добавить новый список" : "Добавить новую карточку";
		const buttonTextOpacity = list ? 1 : 0.5;
		const buttonTextColor = list ? "white" : "inherit";
		const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

		return (
			<div 
				onClick={this.openForm}
				style={{
					...styles.openFormButtonGroup,
					opacity: buttonTextOpacity,
					color: buttonTextColor,
					backgroundColor: buttonTextBackground
				}}
			>
				<Icon>add</Icon>
				<p>{ buttonText }</p>
			</div>
		)
	}

	renderForm = () => {
		const { list } = this.props;

		const placeholder = list ? "Напишите название списка..." : "Напишите название карточки..." ;

		const buttonTitle = list ? "Добавить список" : "Добавить карточку" ;

		return <div>
			<Card style ={{
				minHeight: 85,
				minWidth: 272,
				padding: "6px 8px 2px"
			}}>
				<Textarea 
					placeholder={placeholder}
					autoFocus
					onBlur={this.closeForm}
					value={this.state.text}
					onChange={this.handleInputChange}
					style={{
						resize: "none",
						width: "100%",
						overflow: "hidden",
						outline: "none",
						border: "none"
					}}
				/>
			</Card>
			<div style={styles.formButtonGroup}>
				<Button onMouseDown={list ? this.handleAddList : this.handleAddCard}
								variant="contained"
								style={{color:"white",
								backgroundColor: "#5aac44"}}>
					{buttonTitle}
				</Button>
				<Icon onClick={this.closeForm} style={{marginLeft: 8, cursor: "pointer"}}>close</Icon>
			</div>
		</div>;
	};



	render() {
		return this.state.formOpen ? this.renderForm() : this.renderAddButton();
	}
}

const styles = {
	openFormButtonGroup: {
		display: "flex",
		alignItems: "center",
		cursor: "pointer",
		borderRadius: 3,
		height: 36,
		width: 272,
		paddingLeft:10
	},
	formButtonGroup: {
		marginTop: 8,
		display: "flex",
		alignItems: "center"
	}
}

export default connect()(TrelloActionButton);