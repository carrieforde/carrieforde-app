<?php
/**
 * Carrie Forde App Project Tags Tests.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */
class CFA_Project_Tags_Test extends WP_UnitTestCase {

	/**
	 * Test if our class exists.
	 *
	 * @since  1.0.0
	 */
	function test_class_exists() {
		$this->assertTrue( class_exists( 'CFA_Project_Tags') );
	}

	/**
	 * Test that we can access our class through our helper function.
	 *
	 * @since  1.0.0
	 */
	function test_class_access() {
		$this->assertInstanceOf( 'CFA_Project_Tags', carrieforde_app()->project-tags );
	}

	/**
	 * Test that our taxonomy now exists.
	 *
	 * @since  1.0.0
	 */
	function test_taxonomy_exists() {
		$this->assertTrue( taxonomy_exists( 'cfa-project-tags' ) );
	}

	/**
	 * Replace this with some actual testing code.
	 *
	 * @since  1.0.0
	 */
	function test_sample() {
		$this->assertTrue( true );
	}
}
