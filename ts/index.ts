import { handleKeyPress } from "./handle-key-press"
import { handleFileUpload } from "./handle.file-upload"

document.addEventListener("DOMContentLoaded", () => {
  const inputUploadFile = document.getElementById("input-upload-file")

  inputUploadFile.addEventListener("change", handleFileUpload)

  document.addEventListener("keydown", handleKeyPress)
})

export let mazeArray: string[][] = []

// I can't modify maze array directly in different files
export function updateMaze(newMazeArray: string[][]) {
  mazeArray = newMazeArray;
}