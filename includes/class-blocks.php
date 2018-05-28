<?php
/**
 * Carrie Forde App Blocks.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */

/**
 * Carrie Forde App Blocks.
 *
 * @since 1.0.0
 */
class CFA_Blocks {
	/**
	 * Parent plugin class.
	 *
	 * @since 1.0.0
	 *
	 * @var   Carrie_Forde_App
	 */
	protected $plugin = null;

	/**
	 * Constructor.
	 *
	 * @since  1.0.0
	 *
	 * @param  Carrie_Forde_App $plugin Main plugin object.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->hooks();
	}

	/**
	 * Initiate our hooks.
	 *
	 * @since  1.0.0
	 */
	public function hooks() {
		add_action( 'init', array( $this, 'init' ) );
	}

	/**
	 * Register custom editor blocks.
	 */
	public function init() {

		$block_js = 'carrieforde-app/dist/bundle.js';
		wp_register_script(
			'projects-block-editor',
			plugins_url( $block_js, 'carrieforde-app' ),
			array(
				'wp-blocks',
				'wp-i18n',
				'wp-element',
			)
			// filemtime( "$dir/$block_js" )
		);

		// $editor_css = 'dist/editor.css';
		// wp_register_style(
		// 	'projects-block-editor',
		// 	plugins_url( $editor_css, __FILE__ ),
		// 	array(
		// 		'wp-blocks',
		// 	),
		// 	filemtime( "$dir/$editor_css" )
		// );

		$style_css = 'carrieforde-app/dist/main.css';
		wp_register_style(
			'projects-block',
			plugins_url( $style_css, 'carrieforde-app' ),
			array(
				'wp-blocks',
			)
			// filemtime( "$dir/$style_css" )
		);

		register_block_type( 'carrieforde-app/projects', array(
			'editor_script' => 'projects-block-editor',
			'editor_style'  => 'projects-block-editor',
			'style'         => 'projects-block',
		) );
	}
}
