export function displayDialogue(text: string, onDisplayEnd: Function) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  if (dialogueUI) dialogueUI.style.display = "block";

  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      if (dialogue) dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 5);

  const closeBtn = document.getElementById('closeBtn')
  function onCloseBtnClick() {
    onDisplayEnd()
    if (dialogueUI) dialogueUI.style.display = "none"
    if (dialogue) dialogue.innerHTML = ""
    clearInterval(intervalRef)
    closeBtn?.removeEventListener("click", onCloseBtnClick)
  }
  closeBtn?.addEventListener("click", onCloseBtnClick)
}
