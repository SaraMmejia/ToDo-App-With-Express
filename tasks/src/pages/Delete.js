import React from "react";
import axios from "axios";

class Delete extends React.Component {
	state = {
		task: null,
		loading: true,
		error: "",
	};

	componentDidMount() {
		axios({
			method: "DELETE",
			baseURL: "http://localhost:3000",
			url: `/${this.props.match.params.id}`,
			header: {
				"Content-Type": "application/json",
			},
		}).then(() => this.props.match.push("/"));
	}

	render() {
		const { loading, task } = this.state;
		if (loading) return <p>Loading...</p>;
		return (
			<div className="task">
				<h2>{task.title}</h2>
				<p>{task.description}</p>
			</div>
		);
	}
}

export default Delete;
