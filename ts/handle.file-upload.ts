import { createMaze } from "./create-maze";

export function handleFileUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement
  
    const uploadedFile = inputElement.files[0];
  
    createMaze(uploadedFile);
}
  