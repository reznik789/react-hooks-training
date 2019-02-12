export const upload = (file, onSuccess, onFailure) => {
  let formData = new FormData();
  formData.append("file", file);

  window
    .fetch("https://file.io?expires=1w", {
      method: "POST",
      mode: "cors",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then(data => onSuccess(data))
    .catch(error => onFailure(error));
};
