/** @jsx React.DOM */

var cform = React.createClass({

	mixins: [React.postal],

	propTypes : {
		channel : React.PropTypes.string.isRequired
	},

	onSubmit : function ( e ){
		e.preventDefault();

		this.publish( 'update', {
			yearlyGrossSalary : this.refs.salary.getDOMNode().value,
			startDate : this.refs.startDate.getDOMNode().value
		});
	},

	render : function (){
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" placeholder="Yearly gross salary" ref="salary" />
				<input type="date" placeholder="Starting date" ref="startDate" />
				<input type="submit" value="Calculate" />
			</form>
		);
	}
});
