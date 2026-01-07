import { Router } from "express";
import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote
} from "../controllers/note.controller.js";

const router = Router();

/**
 * @openapi
 * /notes:
 *   get:
 *     summary: Отримати список нотаток
 *     tags:
 *       - Notes
 *     responses:
 *       200:
 *         description: Список нотаток
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 60d21b4667d0d8992e610c85
 *                   title:
 *                     type: string
 *                     example: Моя нотатка
 *                   content:
 *                     type: string
 *                     example: Текст нотатки
 */
router.get("/", getNotes);

/**
 * @openapi
 * /notes/{id}:
 *   get:
 *     summary: Отримати нотатку за id
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор нотатки
 *     responses:
 *       200:
 *         description: Нотатку знайдено
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 60d21b4667d0d8992e610c85
 *                 title:
 *                   type: string
 *                   example: Моя нотатка
 *                 content:
 *                   type: string
 *                   example: Текст нотатки
 *       404:
 *         description: Нотатку не знайдено
 */
router.get("/:id", getNoteById);
/**
 * @openapi
 * /notes:
 *   post:
 *     summary: Створити нотатку
 *     tags:
 *       - Notes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Моя нотатка
 *               content:
 *                 type: string
 *                 example: Текст нотатки
 *     responses:
 *       201:
 *         description: Нотатку створено
 *       400:
 *         description: Некоректні дані
 */
router.post("/", createNote);
/**
 * @openapi
 * /notes/{id}:
 *   put:
 *     summary: Оновити нотатку за id
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор нотатки
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Оновлена нотатка
 *               content:
 *                 type: string
 *                 example: Оновлений текст нотатки
 *     responses:
 *       200:
 *         description: Нотатку оновлено
 *       400:
 *         description: Некоректні дані
 *       404:
 *         description: Нотатку не знайдено
 */
router.put("/:id", updateNote);

/**
 * @openapi
 * /notes/{id}:
 *   delete:
 *     summary: Видалити нотатку за id
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Ідентифікатор нотатки
 *     responses:
 *       204:
 *         description: Нотатку видалено
 *       404:
 *         description: Нотатку не знайдено
 */
router.delete("/:id", deleteNote);

export default router;
