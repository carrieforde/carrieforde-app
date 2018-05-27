<?php
/**
 * Carrie Forde App Portfolio.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */

require_once dirname( __FILE__ ) . '/../vendor/cpt-core/CPT_Core.php';
require_once dirname( __FILE__ ) . '/../vendor/cmb2/init.php';

/**
 * Carrie Forde App Portfolio post type class.
 *
 * @since 1.0.0
 *
 * @see   https://github.com/WebDevStudios/CPT_Core
 */
class CFA_Portfolio extends CPT_Core {
	/**
	 * Parent plugin class.
	 *
	 * @var Carrie_Forde_App
	 * @since  1.0.0
	 */
	protected $plugin = null;

	/**
	 * Constructor.
	 *
	 * Register Custom Post Types.
	 *
	 * See documentation in CPT_Core, and in wp-includes/post.php.
	 *
	 * @since  1.0.0
	 *
	 * @param  Carrie_Forde_App $plugin Main plugin object.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->hooks();

		// Register this cpt.
		// First parameter should be an array with Singular, Plural, and Registered name.
		parent::__construct(
			array(
				esc_html__( 'Portfolio', 'carrieforde-app' ),
				esc_html__( 'Projects', 'carrieforde-app' ),
				'cfa-portfolio',
			),
			array(
				'rewrite'      => array( 'slug' => 'portfolio' ),
				'supports'     => array(
					'title',
					'editor',
					'thumbnail',
				),
				'menu_icon'    => 'dashicons-portfolio',
				'public'       => true,
				'show_in_rest' => true,
				'rest_base'    => 'portfolio',
			)
		);
	}

	/**
	 * Initiate our hooks.
	 *
	 * @since  1.0.0
	 */
	public function hooks() {
		add_action( 'cmb2_init', array( $this, 'fields' ) );
		add_action( 'rest_api_init', array( $this, 'add_meta_to_rest' ) );
	}

	/**
	 * Add custom fields to the CPT.
	 *
	 * @since  1.0.0
	 */
	public function fields() {

		// Set our prefix.
		$prefix = 'cfa_portfolio_';

		// Define our metaboxes and fields.
		$cmb = new_cmb2_box( array(
			'id'           => $prefix . 'metabox',
			'title'        => esc_html__( 'Carrie Forde App Portfolio Meta Box', 'carrieforde-app' ),
			'object_types' => array( 'cfa-portfolio' ),
		) );

		$cmb->add_field( array(
			'name' => esc_html__( 'Github URL', 'carrieforde-app' ),
			'id'   => 'cfa_portfolio_githuburl',
			'type' => 'text_url',
		) );

		$cmb->add_field( array(
			'name' => esc_html__( 'Site URL', 'carrieforde-app' ),
			'id'   => 'cfa_portfolio_siteurl',
			'type' => 'text_url',
		) );
	}

	/**
	 * Gets portfolio post meta.
	 *
	 * @return array The post meta.
	 */
	public function get_meta() {

		$post_id = get_the_ID();

		return array(
			'github_url' => get_post_meta( $post_id, 'cfa_portfolio_githuburl', true ),
			'site_url'   => get_post_meta( $post_id, 'cfa_portfolio_siteurl', true ),
		);
	}

	public function get_terms() {

		$post_id = get_the_ID();

		$terms = wp_get_post_terms( $post_id, 'cfa-project-tag' );

		if ( empty( $terms ) || is_wp_error( $terms ) ) {
			return '';
		}

		return $terms;
	}

	/**
	 * Adds post meta to REST.
	 */
	public function add_meta_to_rest() {

		register_rest_field( 'cfa-portfolio', 'portfolio_meta', array(
			'get_callback' => array( $this, 'get_meta' ),
		));

		register_rest_field( 'cfa-portfolio', 'project_tags', array(
			'get_callback' => array( $this, 'get_terms' ),
		) );
	}

	/**
	 * Registers admin columns to display. Hooked in via CPT_Core.
	 *
	 * @since  1.0.0
	 *
	 * @param  array $columns Array of registered column names/labels.
	 * @return array          Modified array.
	 */
	public function columns( $columns ) {
		$new_column = array();
		return array_merge( $new_column, $columns );
	}

	/**
	 * Handles admin column display. Hooked in via CPT_Core.
	 *
	 * @since  1.0.0
	 *
	 * @param array   $column   Column currently being rendered.
	 * @param integer $post_id  ID of post to display column for.
	 */
	public function columns_display( $column, $post_id ) {
		switch ( $column ) {
		}
	}
}
