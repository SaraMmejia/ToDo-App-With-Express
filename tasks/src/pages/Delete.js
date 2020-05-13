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
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			this.props.history.push("/");
		});
	};

	render() {
		if (this.state.loading) return <p>Loading...</p>;
		return (
			<Form
				title={this.state.task.title}
				description={this.state.task.description}
				done={this.state.task.done}
				handleChange={this.handleChange}
				handleSubmit={this.handleSubmit}
				deleting={true}
			/>
		);
	}
}

export default Delete;
