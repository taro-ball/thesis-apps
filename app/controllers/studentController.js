const students = require('../dummy/students.js');

class StudentController {

      static welcome(req, res) {
            return res.status(200).json({
                  message: "Tēnā koutou! Welcome humans! 你好！Добро пожаловать!",
            });
      }
      // Get all students
      static getAllStudents(req, res) {
            return res.status(200).json({
                  students,
                  message: "All the students",
            });
      }

      // Generate some CPU load
      static CPUload(req, res) {
            var now = new Date().getTime();
            var loops = 1000;
            var result = 0
            for (let i = 0; i < loops; i++) { 
                  result += Math.cbrt((Math.atan(987654321.123456789*Math.random()))+99987654321.123456789*Math.random())
            }
            return res.status(200).json({
                  random: result,
                  message: "A random number",
            });

      }



      // Get a single student
      static getSingleStudent(req, res) {
            const findStudent = students.find(student => student.id === parseInt(req.params.id, 10));
            if (findStudent) {
                  return res.status(200).json({
                        student: findStudent,
                        message: "A single student record",
                  });
            }
            return res.status(404).json({
                  message: "Student record not found!",
            });
      }

      // error
      static throwLazersError(req, res) {
            throw new Error('lazers offline');
      }

      static NotFound(req, res) {
            return res.status(404).json({
                  message: "Sorry can't find that!!!",

            });
      }


      static BuildInfo(req, res) {

            res.header("Content-Type", 'application/json');
            //using express way ;)
            res.sendFile('build.info', { root: '.' });

            // fs.readFile("build.info", "utf8", function (err, contents) {
            //       console.log(contents);
            //       var biobj = JSON.parse(contents);
            //      return res.json(biobj);
            // });

      }

}
module.exports = StudentController;
//export default StudentController;
