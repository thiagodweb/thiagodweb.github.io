var css = ['./assets/css/main/negativeone.less'];

var jsmain = ['./assets/js/main/scripts.js'];
var index=['./*.html'];
var gulp = require("gulp");
var livereload = require("gulp-livereload");
var uglify = require("gulp-uglify");
var lesscss = require("gulp-less");
var concat = require("gulp-concat");
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleancss = new LessPluginCleanCSS({ advanced: true });


//MAIN LESSCOMPILE TASK
function csscompile(){
  gulp.src(css)
  .pipe(lesscss())
  .pipe(gulp.dest('./assets/css/main'))
  .pipe(lesscss({plugins:[cleancss]}))
  .pipe(concat('negativeone.min.css'))
  .pipe(gulp.dest('./assets/css/main'))
  .pipe(livereload())
}


//ULGYJS MAIN
function uglijs(){
  gulp.src(jsmain)
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('./assets/js/main'))
  .pipe(livereload())
}


//LIVERELOAD TASKS
function relindex(){
  gulp.src(index)
  .pipe(livereload())
}



//DEFAULT TASKS
gulp.task('default',function(){
  //UGLY MAINJS
    gulp.watch(jsmain,function(){
      return uglijs();
    })
  //LESS MAIN
    gulp.watch(css,function(){
      return csscompile();
    })

  //LIVERELOAD TASK
    gulp.watch(index,function(evt){
      return relindex();
    });
});

//Execute LiveReload Server
livereload.listen();
