const { Router } =  require('express');
const StudentController =  require('../controllers/studentController.js');

const routes = Router();
routes.get('/api', StudentController.getAllStudents);
routes.get('/api/:id', StudentController.getSingleStudent);
routes.get('/cpu', StudentController.CPUload);

routes.get('/error', StudentController.throwLazersError);
routes.get('/bi', StudentController.BuildInfo);
routes.get('/', StudentController.welcome); 
routes.get('*', StudentController.NotFound);
//export default routes;
module.exports = routes;
