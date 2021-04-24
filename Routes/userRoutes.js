const express = require('express');
const router = express.Router();

router.use(express.json());

//CRUD User
const users = [];

router.post("", (req, res) => {
    const name = req.body.name;
    const id = users.length+1;
    const course = []

    users.push({
        id,
        name,
        course
    });

   return res.status(201).json(`Usuário ${name} salvo com sucesso!`);
});

router.get("", (req, res) => {
    return res.status(200).json(users);
});

router.get("/:id", existUser, (req, res) => {
    return res.status(200).json(req.user);
});

router.put("/:id", existUser, (req, res) => {
   const user = req.user;
   user.name = req.body.name;

   return res.status(201).json(user);
});

router.delete("/:id", existUser, (req, res) => {
    const user = req.user;
    const indexUser = users.indexOf(user);

    users.splice(indexUser, 1);

    return res.status(201).json(`Usuário deletado com sucesso!`);
});

//CRUD user course
router.post("/:id/course", existUser, (req, res) => {
    const user = req.user;
    const course = req.body.course;
    const id = user.course.length+1;

    user.course.push({
        id,
        course
    });

    return res.status(201).json(`Curso ${course} inserido com sucesso para ${user.name}`);
});

router.get("/:id/course", existUser, hasUserCourse, (req, res) => {
    return res.status(200).json(req.course);
});

router.put("/:id/course/:courseId", existUser, hasUserCourse, existCourse, (req, res) => {
    const courseId = req.courseId;
    const newCourse = req.body.course;
    const course = req.course;
    
    course.map(course => {
        if(course.id == courseId){
            course.course = newCourse;
            return
        }
    });

    return res.status(201).json(`Curso alterado para ${newCourse} com sucesso.`);
});

router.delete("/:id/course/:courseId", existUser, hasUserCourse, existCourse, (req, res) =>{
    const courseId = req.courseId;
    const course = req.course;
   const indexCourse = course.findIndex(c => c.id == courseId);

   course.splice(indexCourse, 1);

    return res.status(201).json(`Curso deletado com sucesso!`);
});

//middlewares
function existUser(req, res, next){
    const id = req.params.id;
    let user = null;

    users.forEach(u => {
        if(id == u.id)
            return user = u;
    });

    if (user == null)
       return res.status(400).json({ error: 'Não existe nenhum usuário com esse identificador.' });

    req.user = user;
    next();
};

function hasUserCourse(req, res, next){
    const course = req.user.course;

    if(course.length < 1)
        return res.status(400).json({ error: `Usuário não tem nenhum curso`});

    req.course = course;
    next();
    
};

function existCourse(req, res, next){
    const courseId = req.params.courseId;
    const course = req.course;

    if(!course.some(c => c.id == courseId))
        return res.status(400).json({ error: `Usuário não tem curso com este id: ${courseId}`});
    
    req.courseId = courseId;
    next();
}

module.exports = router;