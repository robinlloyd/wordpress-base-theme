<?php get_header(); ?>

    <!-- WP Loop -->
    <?php if( have_posts() ) : while( have_posts() ) : the_post(); ?>
        <?php get_template_part('partials/content', 'post'); ?>
    <?php endwhile; else : ?>
        <p><?php _e("Something went wrong there, couldn't find any content."); ?></p>
    <?php endif; ?>
    <!-- END WP Loop -->

<?php get_footer(); ?>
