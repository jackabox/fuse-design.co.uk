<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 * @link https://craftcms.com/docs/5.x/reference/config/general.html
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    // Set the default week start day for date pickers (0 = Sunday, 1 = Monday, etc.)
    ->defaultWeekStartDay(1)
    // Prevent generated URLs from including "index.php"
    ->omitScriptNameInUrls()
    // Preload Single entries as Twig variables
    ->preloadSingles()
    // Prevent user enumeration attacks
    ->preventUserEnumeration()
    // Set the @webroot alias so the clear-caches command knows where to find CP resources
    ->errorTemplatePrefix('_exceptions/')
    ->enableGql(0)
    ->defaultImageQuality(100)
    ->brokenImagePath('@webroot/dist/images/fallback.png')
    ->transformGifs(false)
    ->generateTransformsBeforePageLoad(true)
    ->partialTemplatesPath('_blocks')
    ->cpHeadTags([
        ['link', ['rel' => 'icon', 'href' => '/dist/favicons/favicon.ico']],
    ])
    ->aliases([
        '@web' => App::env('SITE_URL'),
        '@webroot' => App::env('WEB_ROOT'),
    ])
;
