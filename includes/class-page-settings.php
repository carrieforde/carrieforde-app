<?php
/**
 * Carrie Forde App Page Settings.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */

require_once dirname( __FILE__ ) . '/../vendor/cmb2/init.php';

/**
 * Carrie Forde App Page Settings.
 *
 * @since 1.0.0
 */
class CFA_Page_Settings {
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
		add_action( 'cmb2_init', array( $this, 'fields' ) );
	}

	/**
	 * Add custom fields to pages.
	 *
	 * @since  1.0.0
	 */
	public function fields() {

		// Set our prefix.
		$prefix = 'cfa_page_';

		// Define our metaboxes and fields.
		$cmb = new_cmb2_box( array(
			'id'           => $prefix . 'metabox',
			'title'        => esc_html__( 'Carrie Forde App Page Settings', 'carrieforde-app' ),
			'object_types' => array( 'page' ),
		) );

		$cmb->add_field( array(
			'name' => esc_html__( 'Hide page title?', 'carrieforde-app' ),
			'id'   => 'cfa_hide_title',
			'type' => 'checkbox',
		) );
	}
}
