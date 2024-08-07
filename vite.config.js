import { defineConfig }             from 'vite';
import { browserslistToTargets }    from 'lightningcss';
import browserslist                 from 'browserslist';
import { resolve }                  from 'path';
import vue from '@vitejs/plugin-vue'

const root = resolve('.');
const src = resolve('src');

const settings = {

    plugins: [

        vue()
        
    ],

    css: {

        lightningcss: {

            targets: browserslistToTargets(browserslist('>= 0.25%'))

        }

    },

    build:{

        target: ['chrome87', 'safari14'],

        minify: 'terser',

        terserOptions: {

            compress: {

                keep_infinity: true,
                drop_console: true,
                drop_debugger: true

            }

        },

        cssMinify:'lightningcss',

        outDir: 'dist',

    },

    ssr:{

        noExternal:[

            'vue3-touch-events'

        ]

    },

    resolve:{

        alias:{

            '@':resolve(src),
            '~':resolve(root),

        }

    },

    server:{

        host:true,
        port:3000

    }

};

export default defineConfig(settings);