const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

document.addEventListener("DOMContentLoaded", function () {
    const ticketButton = document.getElementById("view-tickets-button");

    if (ticketButton) {
        ticketButton.addEventListener("click", function () {
            window.location.href = "tickets.html";
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const ticketTable = document.getElementById("ticket-options");
    const purchaseButton = document.getElementById("confirm-purchase");

    const tickets = [
        { type: "Day Pass", price: 80 },
        { type: "Weekend Pass", price: 150 },
        { type: "Season Pass", price: 600 }
    ];

    function displayTickets() {
        ticketTable.innerHTML = "";
        tickets.forEach((ticket, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${ticket.type}</td>
                <td>$${ticket.price}</td>
                <td><input type="radio" name="ticket" value="${index}"></td>
            `;
            ticketTable.appendChild(row);
        });
    }

    function saveTicketSelection() {
        const selectedTicket = document.querySelector('input[name="ticket"]:checked');
        if (selectedTicket) {
            const ticketIndex = selectedTicket.value;
            localStorage.setItem("selectedTicket", JSON.stringify(tickets[ticketIndex]));
            alert(`You selected: ${tickets[ticketIndex].type} - $${tickets[ticketIndex].price}`);
            window.location.href = "checkout.html";
        } else {
            alert("Please choose a ticket.");
        }
    }

    if (ticketTable) displayTickets();
    if (purchaseButton) { 
        purchaseButton.addEventListener("click", saveTicketSelection);
    }

    const ticketDisplay = document.getElementById("selected-ticket");

    if (ticketDisplay) {
        const selectedTicket = localStorage.getItem("selectedTicket");

        if (selectedTicket) {
            const ticketData = JSON.parse(selectedTicket);
            ticketDisplay.textContent = `You selected: ${ticketData.type} $${ticketData.price}`;
        } else {
            ticketDisplay.textContent = "No tickets selected.";
        }
    }
});