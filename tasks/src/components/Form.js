import React from "react";

function Form({
	title,
	description,
	done,
	handleChange,
	handleSubmit,
	updating,
}) {
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="title"> Title</label>
			<input
				type="text"
				name="title"
				id="title"
				onChange={handleChange}
				value={title}
			/>
			<label htmlFor="description">Description</label>
			<input
				type="text"
				name="description"
				id="description"
				onChange={handleChange}
				value={description}
			/>
			<input
				type="checkbox"
				onChange={this.handleChange}
				checked={this.state.done}
				name="done"
				id="done"
			/>
			<button type="submit">{updating ? "Update" : "Create"} task</button>
		</form>
	);
}

export default Form;
