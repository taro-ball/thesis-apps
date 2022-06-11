const students = require('../dummy/students.js');
const os = require('os');
const crypto = require('crypto');

class StudentController {

      static welcome(req, res) {
            //var currentDate = new Date().toISOString();
            var properties = JSON.stringify(req._readableState) +JSON.stringify(req.headers)+JSON.stringify(req._parsedUrl);
            return res.status(200).json({
                  message: "Tēnā koutou! Welcome humans! 你好！Добро пожаловать!ٱلسَّلَامُ عَلَيْكُمْ",
                  sysinfo: [
                        { date: new Date().toISOString() },
                        { node_version: process.version },
                        //{ hostname: os.hostname() },
                        { OS: os.type() },
                  ]

                  ,
                  clientinfo: [
                        //{ user_agent: req.get('user-agent') },
                        //{ ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress },
                        { request_fingerprint: crypto.createHash('md5').update(properties).digest("hex") }
                  ]
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
            
            var loops = 10000;
            var result = 0
            for (let i = 0; i < loops; i++) {
                  result += Math.cbrt((Math.atan(999999999999999 * Math.random())) + 999999999999999 * Math.random())
            }
            var properties = JSON.stringify(req._readableState) +JSON.stringify(req.headers)+JSON.stringify(req._parsedUrl)+result;
            return res.status(200).json({
                  request_fingerprint: crypto.createHash('md5').update(properties).digest("hex"),
                  message: "A random number hash",

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
