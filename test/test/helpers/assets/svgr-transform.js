/** @format */

/**
 * External dependencies
 */
const path = require( 'path' );

module.exports = {
	process( src, filename ) {
		return (
			'module.exports = { default: ' +
			JSON.stringify( path.basename( filename ) ) +
			', ReactComponent: "icon-mock" };'
		);
	},
};