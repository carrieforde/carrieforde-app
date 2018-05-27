<?php
/**
 * Carrie Forde App Portfolio Tests.
 *
 * @since   1.0.0
 * @package Carrie_Forde_App
 */
class CFA_Portfolio_Test extends WP_UnitTestCase {

	/**
	 * Test if our class exists.
	 *
	 * @since  1.0.0
	 */
	function test_class_exists() {
		$this->assertTrue( class_exists( 'CFA_Portfolio') );
	}

	/**
	 * Test that we can access our class through our helper function.
	 *
	 * @since  1.0.0
	 */
	function test_class_access() {
		$this->assertInstanceOf( 'CFA_Portfolio', carrieforde_app()->portfolio' );
	}

	/**
	 * Test to make sure the CPT now exists.
	 *
	 * @since  1.0.0
	 */
	function test_cpt_exists() {
		$this->assertTrue( post_type_exists( 'cfa-portfolio' ) );
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
