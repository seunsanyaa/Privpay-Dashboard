const rulePrefix = '.antd-ns';

const sourcePath = './node_modules/antd/dist/antd.css';
const targetFolder = './out/';
const targetFile = 'antd-namespaced.min.css';

const gulp = require('gulp');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const less = require('postcss-less-engine');
const prefixwrap = require('postcss-prefixwrap');

gulp.task('build-namespaced-css', function() {
    return (
        gulp
            .src(sourcePath)
            .pipe(
                postcss([
                    less({}),
                prefixwrap(rulePrefix),
                // Minify after prefixwrap
                cssnano({ preset: 'default' }),
], { parser: less.parser })
)
.pipe(rename(targetFile))
        .pipe(gulp.dest(targetFolder))
);
});