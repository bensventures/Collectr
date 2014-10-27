/** @jsx React.DOM */

var cvisualization = React.createClass({

	mixins: [React.postal],

	propTypes : {
		channel : React.PropTypes.string.isRequired
	},

	componentDidMount : function () {
		console.log( this.props.channel );
		this.subscribe( 'update', this.calculate );
	},

	calculate : function ( params ){

		var data = [],
			counter = 10;

		while( counter-- )
		{
			data.push( {
				'cash' : counter * 1000,
				'days' : counter + 33
			} )
		}

		return data;
	},

	render : function (){
		return (
			<div></div>
		);
	}
});
