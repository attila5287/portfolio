import React from 'react';
import { Animated } from 'react-animated-css';

function SearchTags(props) {
	return (
		<Animated
			animationIn="bounceInRight"
			animationInDelay={1500}
			isVisible={true}
			className="mini"
		>
			<form className="row align-items-start">
				<div className="form-group col-2">
					<h4 className="fas fa-tags"></h4>
				</div>
				<div className="form-group col rounded">
					<input
						onChange={props.handleInputChange}
						onSubmit={props.handleSubmit}
						value={props.search['tags']}
						name="tags"
						type="text"
						className="form-control form-control-lg"
						placeholder="by tags"
					/>
				</div>
			</form>
		</Animated>
	);
}

export default SearchTags;
