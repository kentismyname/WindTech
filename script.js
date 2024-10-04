const CARDS = [
    {
        id: 1,
        title: "Some title here",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Some title here",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Some title here",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
];

const cardList = document.getElementById('cardList');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.querySelector('.close');

let isHorizontal = true;

// Function to render cards
function renderCards() {
    cardList.innerHTML = '';
    CARDS.forEach(card => {
        const cardElement = document.createElement('li');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <span>${card.title}</span>
            <button class="open-modal" data-id="${card.id}">+</button>
        `;
        cardList.appendChild(cardElement);
    });
}

// Function to toggle layout
function toggleLayout() {
    cardList.className = isHorizontal ? 'card-list horizontal' : 'card-list vertical';
}

// Function to open modal
function openModal(card) {
    modalTitle.innerText = card.title;
    modalDescription.innerText = card.description;
    modal.classList.remove('hidden');
}

// Event listeners
document.getElementById('horizontalToggle').addEventListener('click', () => {
    isHorizontal = true;
    toggleLayout();
});

document.getElementById('verticalToggle').addEventListener('click', () => {
    isHorizontal = false;
    toggleLayout();
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Event delegation for card clicks
cardList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('open-modal')) {
        const cardId = target.getAttribute('data-id');
        const selectedCard = CARDS.find(card => card.id == cardId);
        if (selectedCard) {
            openModal(selectedCard);
        }
    }
});

// Initial render
renderCards();
toggleLayout();
