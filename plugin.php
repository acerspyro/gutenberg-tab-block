<?php
/**
 * Plugin Name: Gutenberg Tab Block
 * Plugin URI: https://github.com/acerspyro/gutenberg-tab-block/
 * Description: Tab Block - Based on marcusig and mklacroix's gutenberg-section-block. 
 * Author: acerspyro, marcusig, mklacroix
 * Author URI: https://mklacroix.com/
 * Version: 1.1.4
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
