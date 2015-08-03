<?php

if ( ! isset( $content_width ) ) $content_width = 1000;

/*-------------------------------------------------------------*/
/* Add Theme Support
---------------------------------------------------------------*/
add_theme_support( 'post-thumbnails' );
add_theme_support( 'automatic-feed-links' );


/*-------------------------------------------------------------*/
/* Add Image Sizes
---------------------------------------------------------------*/
add_image_size( "thumb", 400, 400, true );


/*-------------------------------------------------------------*/
/* Load JS
---------------------------------------------------------------*/
// function threesugars_scripts() {
//     wp_register_script( 'app', get_template_directory_uri() . '/assets/js/app.js');

//     wp_enqueue_script('jquery');
//     wp_enqueue_script('app');

// }
// add_action( 'wp_enqueue_scripts', 'threesugars_scripts' );


/*-------------------------------------------------------------*/
/* Load CSS
---------------------------------------------------------------*/
function threesugars_styles() {
    //register styles for our theme
    wp_register_style( 'threesugars-appstyle', get_template_directory_uri() . '/assets/css/app.css', array(), 'all');
    wp_enqueue_style( 'threesugars-appstyle' );
}
add_action( 'wp_enqueue_scripts', 'threesugars_styles' );


/*-------------------------------------------------------------*/
/* Register Menus
---------------------------------------------------------------*/
register_nav_menus(
    array(
        'main_menu' => 'Main Menu'
    )
);


/*-------------------------------------------------------------*/
/* Custom Post Types
---------------------------------------------------------------*/
function portfolio_register() {
    $args = array(
        'label' => __('Portfolio'),
        'singular_label' => __('Portfolio'),
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'hierarchical' => true,
        'rewrite' => true,
        'menu_position' => 100,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'excerpt'),
    );

    register_post_type('portfolio', $args);
}
add_action('init', 'portfolio_register');


/*-------------------------------------------------------------*/
/* Custom Query Calls
---------------------------------------------------------------*/

function latest_posts_of_type($type, $limit = -1, $order = 'date', $ord = 'DESC') {
    return new WP_Query(array(
        "posts_per_page" => $limit,
        "post_type" => "$type",
        "orderby" => $order,
        "order" => $ord
    ));
}

