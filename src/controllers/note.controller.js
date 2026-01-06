import { Note } from "../models/note.model.js";

export const getNotes = async (req, res) => {
  res.json({ message: "getNotes controller — not implemented yet" });
};

export const getNoteById = async (req, res) => {
  res.json({ message: "getNoteById controller — not implemented yet" });
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

export const updateNote = async (req, res) => {
  res.json({ message: "updateNote controller — not implemented yet" });
};

export const deleteNote = async (req, res) => {
  res.json({ message: "deleteNote controller — not implemented yet" });
};
