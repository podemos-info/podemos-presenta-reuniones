//
// Módulos:
//
var gulp = require('gulp')
  , del = require('del')
  , fileInclude = require('gulp-file-include');

//
// Tareas de gulp
//

// limpiar
gulp.task('limpiar', function() {
  return del(['document_root/*']);
});

// copiamos assets a document_root
gulp.task("copiar-assets", function() {
   return gulp.src("src/assets/**")
      .pipe(gulp.dest("document_root"));
});

// generar-html-estaticos
gulp.task("generar-html-estaticos", function() {
   return gulp.src(['src/plantillas/*.html', 'src/plantillas/*/*.html'])
      .pipe(fileInclude({
        context: {
          "img_horizontal": "img/compartir-horizontal.jpg",
          "img_cuadrada": "img/compartir-cuadrada.jpg"
        },
        prefix: '@@', 
        basepath: 'src/bloques'
      }))
      .pipe(gulp.dest('document_root/'));
});

//
// Tarea por defecto
//
gulp.task('default', gulp.series('limpiar', 'copiar-assets', 'generar-html-estaticos'));
