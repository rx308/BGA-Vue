export default {

    plugins: {
        cssnano: {
            preset: [
                "cssnano-preset-advanced", { discardComments: { removeAll: true }, zindex: false }
            ]
        },
        "postcss-combine-duplicated-selectors":{},
        "postcss-sort-media-queries":{}
    }

}