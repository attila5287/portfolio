import React from 'react';
import { Animated } from 'react-animated-css';

function SearchTitle(props) {
	return (
		<Animated
			animationIn="bounceInRight"
			animationInDelay={500}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-start">
				<div className="form-group col-2">
					<h4 className="fas fa-id-card"></h4>
				</div>
				<div className="form-group col rounded">
					<input
						onChange={props.handleInputChange}
						onSubmit={props.handleSubmit}
						value={props.search['title']}
						name="title"
						type="text"
						className="form-control form-control-lg"
						placeholder="by title"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchTitle;
