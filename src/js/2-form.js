const formData = {
    email: "",
    message: ""
};

const saveToLocalStorage = () => {
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

const fillFormFromLocalStorage = () => {
    const savedData = localStorage.getItem("feedback-form-state");
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";

        document.querySelector('input[name="email"]').value = formData.email;
        document.querySelector('textarea[name="message"]').value = formData.message;
    }
};

const handleInputChange = (event) => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveToLocalStorage();
};

const handleSubmit = (event) => {
    event.preventDefault();


    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";

        formData.email = "";
        formData.message = "";
    }
};


document.querySelector('.feedback-form').addEventListener('input', handleInputChange);
document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);

window.addEventListener('DOMContentLoaded', fillFormFromLocalStorage);