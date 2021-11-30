import express from "express";
import userModel from "../Schema/user.js";
import upload from "../multer.js";
const router = express.Router();

// router.get("/", async (req, res) => {
//   try {
//     const projects = await projectModel.find({}, { _id: 0 });
//     projects.forEach((element) => {
//       element["img"] = `${req.protocol}://${req.get("host")}/${element["img"]}`;
//     });
//     res.status(200).send(projects);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// router.get("/:id", async (req, res) => {
//   try {
//     const id = req.params.id;
//     const project = await projectModel.findOne({ id: id });
//     res.status(200).send(project);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.body);
  try {
    var obj = {
      id: req.body.id,
      name: req.body.name,
      img: req.file.path,
      about: req.body.desc,
      phone_number:req.body.phoneNumber,
      department:req.body.department,
      email:req.body.email,
      dob:req.body.dob,
      projects:req.body.projects
    };

    userModel.create(obj, (err, item) => {
      if (err) {
        console.log(`can't post: ${err}`);
      } else {
        item.save();
        res.redirect("/");
      }
    });
  } catch (err) {
    res.status(400).send(`can not post: ${err}`);
  }
});

export default router;