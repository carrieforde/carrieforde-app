<?php
/**
 * Carrie Forde App Project Category.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */

require_once dirname( __FILE__ ) . '/../vendor/taxonomy-core/Taxonomy_Core.php';

/**
 * Carrie Forde App Project Category.
 *
 * @since 1.0.0
 *
 * @see   https://github.com/WebDevStudios/Taxonomy_Core
 */
class CFA_Project_Category extends Taxonomy_Core {
	/**
	 * Parent plugin class.
	 *
	 * @var    Carrie_Forde_App
	 * @since  1.0.0
	 */
	protected $plugin = null;

	/**
	 * Constructor.
	 *
	 * Register Taxonomy.
	 *
	 * See documentation in Taxonomy_Core, and in wp-includes/taxonomy.php.
	 *
	 * @since  1.0.0
	 *
	 * @param  Carrie_Forde_App $plugin Main plugin object.
	 */
	public function __construct( $plugin ) {
		$this->plugin = $plugin;
		$this->hooks();

		parent::__construct(
			// Should be an array with Singular, Plural, and Registered name.
			array(
				__( 'Project Category', 'carrieforde-app' ),
				__( 'Project Categories', 'carrieforde-app' ),
				'cfa-project-category',
			),
			// Register taxonomy arguments.
			array(
				'rewrite'      => array( 'slug' => 'project-category' ),
				'hierarchical' => true,
				'show_in_rest' => true,
				'rest_base'    => 'project-category',
			),
			// Post types to attach to.
			array(
				'cfa-portfolio',
			)
		);
	}

	/**
	 * Initiate our hooks.
	 *
	 * @since 1.0.0
	 */
	public function hooks() {

	}
}
