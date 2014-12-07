module.exports = function(grunt){



    grunt.initConfig({

        pkg:grunt.file.readJSON('package.json'),
        jsSrc:"./public/assets/js/*.js",
        sassSrc:"./public/assets/sass/*.scss",

        uglify: {
            options:{
                banner: "/* <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy')%> */ \n"
            },
            build:{
                src: "<%=jsSrc%>",
                dest:"./public/dist/<%= pkg.name %>.min.js"
            }
        },
        jshint:{
            src: ["<%= jsSrc %>"]
        }
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['jshint','uglify']);

}