import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {
	state = {
		loading: true,
		tasks: [],
	};

	componentDidMount() {
		axios({
			method: "GET",
			url: "http://localhost:3000",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then(({ data }) => {
				this.setState({ tasks: data, loading: false });
			})
			.catch((error) => console.dir(error));
	}
	render() {
		const { loading, tasks } = this.state;
		if (loading) return <p>...Loading</p>;
		return (
			<div className="tasks">
				{tasks &&
					tasks.length > 0 &&
					tasks.map((task) => (
						<div className="task" key={task.id}>
							<h2>{task.title}</h2>
							<p>{task.description}</p>
							<p>{task.done ? "Tarea completada" : "Tarea por completar"}</p>
							<Link to={`/${task.id}`}>View More</Link>
							<Link to={`/update/${task.id}`}>Update Task</Link>
							<Link to={`/delete/${task.id}`}>Delete Task</Link>
						</div>
					))}
			</div>
		);
	}
}

export default Home;
