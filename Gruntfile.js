module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        less: {
            compile: {
                options: {
                    // 是否压缩css
                    compress: false,
                    // 是否启用 source map
                    sourceMap: true,
                    sourceMapRootpath: "../"
                },
                files:[{
                    // 不一一指定目标文件
                    expand: true,
                    // 源目录
                    cwd: 'less/',
                    // 源文件后缀
                    src: '*.less',
                    // 目标路径
                    dest: 'css/',
                    // 目标后缀
                    ext: '.css'
                }]
            }
        },

        // 监控文件变化
        watch: {
            livereload: {
                // 指定要监控的文件
                files: ['*.html', 'js/*', 'images/*', 'less/*'],
                // less变动，立即编译
                tasks: ["less"],
                options: {
                    // 自动刷新浏览器
                    livereload: true
                }
            }
        },

        // 复制文件
        copy: {
            main:{
                files:[
                    {expand: true, src: ['css/*.css'], dest: 'build/'},
                    {expand: true, src: ['js/*.js'], dest: 'build/'},
                    {expand: true, src: ['images/*.png','images/*.jpg','images/*.gif'], dest: 'build/'},
                    {expand: true, src: ['*.html'], dest: 'build/'}
                ]
            }
        },

        // 压缩build里的css
        cssmin: {
            options: {
                // 去掉注释
                keepSpecialComments: 0
            },
            minify: {
                // 不一一指定目标文件
                expand: true,
                // 源目录
                cwd: 'build/css/',
                // 源文件后缀
                src: '*.css',
                // 目标路径
                dest: 'build/css/',
                // 目标后缀
                ext: '.css'
            }
        }
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['less', 'watch']);
    // 执行 grunt publish 将最后代码复制到build文件夹
    grunt.registerTask('publish', ['copy', 'cssmin']);

};
