import React from "react";
import axios from "axios";

class Details extends React.Component {
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

export default Details;
