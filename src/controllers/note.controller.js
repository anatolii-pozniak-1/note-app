import { Note } from "../models/note.model.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.json(notes);
  } catch (error) {
    return res.status(500).json({ message: "Помилка отримання нотаток" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Нотатку не знайдено" });
    }

    return res.json(note);
  } catch (error) {
    return res.status(400).json({ message: "Помилка отримання нотатки" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Basic validation
    if (!title || !content) {
      return res.status(400).json({
        message: "Title and content are required",
      });
    }

    const note = await Note.create({
      title,
      content,
    });

    return res.status(201).json(note);
  } catch (error) {
    console.error("Create note error:", error.message);
    return res.status(500).json({
      message: "Failed to create note",
    });
  }
};

export const updateNote = async (req, res) =>  {
  try {
    const { title, content } = req.body;

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!note) {
      return res.status(404).json({ message: "Нотатку не знайдено" });
    }

    return res.json(note);
  } catch (error) {
    return res.status(400).json({ message: "Помилка оновлення нотатки" });
  }
};


export const deleteNote = async (req, res) => {
   try {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Нотатку не знайдено" });
    }

    return res.json({ success: true });
  } catch (error) {
    return res.status(400).json({ message: "Помилка видалення нотатки" });
  }

};
