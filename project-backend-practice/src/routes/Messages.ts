import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import MessageDao from '@daos/Message/MessageDao.mock';
import logger from '@shared/Logger';
import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();
const messageDao = new MessageDao();


/******************************************************************************
 *                      Get All Messages- "GET /api/messages/all"
 ******************************************************************************/

// router.get('/all', async (req: Request, res: Response) => {
//     try {
//         const messages = await messageDao.getAllMessages();
//         return res.status(OK).json({messages});
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });


// /******************************************************************************
//  *                       Add One - "POST /api/messages/add"
//  ******************************************************************************/

// router.post('/add', async (req: Request, res: Response) => {
//     try {
//         const { message } = req.body;
//         if (!message) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         await messageDao.addOrUpdateMessage(message);
//         return res.status(CREATED).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });



// /******************************************************************************
//  *                    Delete - "DELETE /api/messages/delete/:id"
//  ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params as ParamsDictionary;
//         await messageDao.deleteMessage(Number(id));
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
