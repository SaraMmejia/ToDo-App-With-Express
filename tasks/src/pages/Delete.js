import React from "react";
import axios from "axios";
import Form from "../components/Form";

class Delete extends React.Component {
	state = {
		task: null,
		loading: true,
		error: "",
	};

	componentDidMount() {
		axios({
			method: "GET",
			baseURL: "http://localhost:3000",
			url: `/${this.props.match.params.id}`,
			header: {
				"Content-Type": "application/json",
			},
		}).then(({ data }) => this.setState({ task: data, loading: false }));
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { loading, ...data } = this.state;

		axios({
			method: "DELETE",
			baseURL: "http://localhost:3000",
			url: `/${this.props.match.params.id}`,
			header: {
				"Content-Type": "application/json",
			},
		}).then(() => this.props.match.push("/"));
	};

	render() {
		return (
			<Form
				title={this.state.title}
				description={this.state.description}
				done={this.state.done}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				updating={true}
			/>
		);
	}
}

export default Delete;
