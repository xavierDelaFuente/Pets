'use strict'

/*
 * Dependencies and variables
 */
import gulp from 'gulp'
import postcss from 'gulp-postcss'
import plumber from 'gulp-plumber'
import cssnano from 'gulp-cssnano'
import autoprefixer from 'autoprefixer'
import gulpSass from 'gulp-sass'

/*
 * Compile, minimize and prefix .scss files
 */
const sass = () => {
  const processors = [autoprefixer({
    browsers: ['last 2 versions', 'ie >= 10'],
    cascade: false
  })]
  return gulp.src([
    'sass/*.scss'
  ])
  .pipe(plumber())
  .pipe(gulpSass({
    outputStyle: 'compressed'
  }).on('error', gulpSass.logError))
  .pipe(cssnano({
    zindex: false
  }))
  .pipe(postcss(processors))
  .pipe(gulp.dest('css'))
}

/*
 * Watch .scss, .js and .hbs for changes, and reloads them on save
 */
const watch = (done) => {
  gulp.watch([
    'scss/**/*.scss'
  ], gulp.series(sass))

  done()
}

/*
 * ASCII art easter egg
 */
const print = () => {
  /* eslint-disable */
  const string = '             _                        _         _ \r\n  __ _ _   _| |_ __    _ __ ___   ___| | _____ | |\r\n \/ _` | | | | | \'_ \\  | \'__\/ _ \\ \/ __| |\/ \/ __|| |\r\n| (_| | |_| | | |_) | | | | (_) | (__|   <\\__ \\|_|\r\n \\__, |\\__,_|_| .__\/  |_|  \\___\/ \\___|_|\\_\\___\/|_|\r\n |___\/        |_|                                                                   \r\n                                     \r\n       ._-_.    ________________________\r\n      +|\\G\/|+  | _______________________|\r\n      +|\\.\/|+  || O  o o o  =|=  |   o ||\r\n      +|\\.\/|+  || O  o o o   |  =|=  o ||\r\n       `|H|\'   ||______________________||\r\n        |a|    |________________________| \r\n        |H|    ||MM88MM<<<?<<<XHHHHMMMM||  \r\n        |a|    ||M88MM<<<?<<<XHHHMMMMMM||  \r\n        |H|    ||88MM<<<?<<<XHHHMMMMMMM||  \r\n        |a|    ||8MM<<<?<<<XHHHHMMMMMMM||  \r\n        |H|    ||MM<<<?<<<XHHHHMMMMMMMM||  \r\n        |H|    ||M<<<?<<<XHHHHMMMMMMMMM||  \r\n  _-_   |H|   _-_<<<?<<<XHHHHMMMMMMMMMM||  \r\n \/   \\  |H|  \/   \\<?<<<XHHHHMMMMMMMMMMM||  \r\n |    \\_|a|_\/    |?<<<XHHHHMMMMMMMMMMMM||  \r\n \\      |H|      \/<<<XHHHHMMMMMMMMMMMMR||  \r\n  \\     |H|     \/<<<XHHHHMMMMMMMMMMMRMM||  \r\n   |    \'\"\'    |<<<XHHHHMMMMMMMMMMMRMM8||  \r\n  \/     ===     \\<XHHHHMMMMMMMMMMMRMM8R||  \r\n \/      ===   !  \\HHHHMMMMMMMMMMMRMM8RM||  \r\n|             | o |HMMMMMMMMMMMMMM988MM||  \r\n|      +---+ \/  o |MMMMMMMMMMMMMM988MM<||  \r\n\\       ___ \/  o  \/M\/MMMMMRMMMRMM88MM<<||  \r\n \\     |HHH|    l\/MMMMMMMRMMMRMM88MM<<<||  \r\n  `-_   \\_\/   _-MMRMMMMMRMMMRMM88MM<<<?||  \r\n     \"\"\"\"\"\"\"\"\' ~~~V~~\"\"~~~~~~~~~~~~~~V~~~  \r\n'
  console.log(string)
  /* eslint-enable */
}

/*
 * Define the task execution sequences
 */
gulp.task('sass', sass)
gulp.task('sassWatch', gulp.parallel(sass, watch))
gulp.task('rocks', print)