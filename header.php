<!DOCTYPE html>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="profile" href="http://gmpg.org/xfn/11" />
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <title><?php bloginfo( 'name' ); ?><?php wp_title( '|', true, 'right' ); ?></title>

    <?php wp_head(); ?>
</head>

<html>

<body <?php body_class(); ?>>
    <header>
        <nav id="main-menu">
            <?php wp_nav_menu( array('menu' => 'Main Menu' )); ?>
        </nav>
    </header>
