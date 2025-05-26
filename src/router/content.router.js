import {Router} from "express"
import { getContent, updateContent } from "../controller/content.controller.js";


const router=Router();

router.route('/update-content').post(updateContent)
router.route('/get-content').get(getContent)
export default router;