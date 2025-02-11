document.addEventListener("DOMContentLoaded", () => {
    const paymentButtons = document.querySelectorAll(".payment-options button");
    const payeeInput = document.getElementById("payee");
    const accountInput = document.getElementById("account");
    const addSplitButton = document.getElementById("add-split");
    const splitContainer = document.getElementById("split-container");

    // Update placeholders based on payment method
    paymentButtons.forEach(button => {
      button.addEventListener("click", () => {
        paymentButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        if (button.id === "cheque") {
          payeeInput.placeholder = "To Cheque";
          accountInput.placeholder = "From Cheque";
        } else if (button.id === "cash") {
          payeeInput.placeholder = "To Cash";
          accountInput.placeholder = "From Cash";
        } else {
          payeeInput.placeholder = "Enter name";
          accountInput.placeholder = "Which account?";
        }
      });
    });

    // Add split fields dynamically
    addSplitButton.addEventListener("click", () => {
      const splitItem = document.createElement("div");
      splitItem.className = "split-item";

      const amountInput = document.createElement("input");
      amountInput.type = "number";
      amountInput.placeholder = "0.00";

      const expenseTypeInput = document.createElement("input");
      expenseTypeInput.type = "text";
      expenseTypeInput.placeholder = "Type of expense";

      const taxInput = document.createElement("input");
      taxInput.type = "text";
      taxInput.placeholder = "Tax";

      const descriptionInput = document.createElement("input");
      descriptionInput.type = "text";
      descriptionInput.placeholder = "Description";

      const removeButton = document.createElement("button");
      removeButton.textContent = "X";
      removeButton.onclick = () => splitItem.remove();

      splitItem.append(amountInput, expenseTypeInput, taxInput, descriptionInput, removeButton);
      splitContainer.appendChild(splitItem);
    });

    // Save button functionality
    document.querySelector(".save-btn").addEventListener("click", () => {
      alert("Data saved!");
    });
  });