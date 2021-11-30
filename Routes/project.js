import express from "express";
import projectModel from "../Schema/project.js";
import upload from "../multer.js";
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await projectModel.find({}, { _id: 0 });
    projects.forEach((element) => {
      element["img"] = `${req.protocol}://${req.get("host")}/${element["img"]}`;
    });
    res.status(200).send(projects);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await projectModel.findOne({ _id: id });
    res.status(200).send(project);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.body);
  try {
    var obj = {
      name: req.body.name,
      img: req.file.path,
      description: req.body.desc,
      privacy: parseInt(req.body.privacy),
      owners: req.body.owners,
      status: req.body.status,
      collaborators: req.body.collaborators,
      category:req.body.category
    };

    projectModel.create(obj, (err, item) => {
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