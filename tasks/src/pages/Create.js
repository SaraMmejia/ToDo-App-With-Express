import React from "react";
import axios from "axios";
import Form from "../components/Form";

class Create extends React.Component {
	state = {
		title: "",
		description: "",
		done: false,
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios({
			method: "POST",
			baseURL: "http://localhost:3000",
			url: "/",
			data: this.state,
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => this.props.history.push("/"));
	};

	render() {
		return (
			<Form
				title={this.state.title}
				description={this.state.description}
				done={this.state.done}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default Create;
