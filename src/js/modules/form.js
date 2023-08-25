const formActions = () => {
    document
        .getElementById('contact-form')
        .addEventListener('submit', function (event) {
            const form = event.target;
            const emailInput = form.elements.email;
            const phoneInput = form.elements.phone;
            const messageInput = form.elements.message;

            if (!emailInput.checkValidity()) {
                event.preventDefault();
                alert('Введіть коректний email');
            }

            if (!phoneInput.checkValidity()) {
                event.preventDefault();
                alert('Введіть коректний номер телефону');
            }

            if (!messageInput.checkValidity()) {
                event.preventDefault();
                alert('Введіть повідомлення');
            }
        });
};
