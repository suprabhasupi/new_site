<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit14b406435d5967f268ca93a11a67c23d
{
    public static $prefixesPsr0 = array (
        'M' => 
        array (
            'Mandrill' => 
            array (
                0 => __DIR__ . '/..' . '/mandrill/mandrill/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixesPsr0 = ComposerStaticInit14b406435d5967f268ca93a11a67c23d::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}