document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Toggle
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent closing when clicking on the button itself

            // Close other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                if (dropdown !== button.nextElementSibling) {
                    dropdown.classList.remove('show');
                }
                });
            });

            // Toggle current dropdown
            button.nextElementSibling.classList.toggle('show');
        });
    });

    // Close dropdown if clicked outside
    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });

    // Change Background on Button Click
    document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", () => {
            // Reset all buttons
            document.querySelectorAll(".nav-btn").forEach(btn => {
                btn.classList.remove("active-btn");
            });

            // Apply active state
            button.classList.add("active-btn");
        });
    });

    // Number Counting Animation
const counters = document.querySelectorAll(".number");
let started = false; // Ensure animation runs only once

// Function to start counting animation
function startCounting() {
    if (started) return; // Prevent re-triggering
    started = true;

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target"); // Get target value
        let count = 0;
        let increment = target / 100; // Increment for smooth animation
        let updateCount = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count) + "%"; // Update with %
                setTimeout(updateCount, 20); // Control animation speed
            } else {
                counter.textContent = target + "%"; // Ensure exact final value
            }
        };
        updateCount();
    });
}

// Check if section is in view
function isSectionInView() {
    const section = document.getElementById("percentage");
    if (!section) return false;
    const sectionTop = section.getBoundingClientRect().top;
    return sectionTop < window.innerHeight && sectionTop > 0; // Ensure section is fully visible
}

// Listen for scroll and trigger animation when section is in view
window.addEventListener("scroll", () => {
    if (isSectionInView()) startCounting();
});

// Subscribe button functionality
function subscribe() {
    alert("Thank you for subscribing! 🎉");
  }

  function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    searchBar.classList.toggle('active');
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Select all radio buttons for flavors and subscriptions
    const flavorRadios = document.querySelectorAll('input[name="flavor"]');
    const subscriptionRadios = document.querySelectorAll('input[name="subscription"]');
    const addToCartBtn = document.querySelector('.cart-sub-add-btn');

    // Function to update selected flavor
    function updateFlavorSelection() {
        flavorRadios.forEach(radio => {
            const label = radio.closest('.cart-sub-flavor');
            if (radio.checked) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        });
    }

    // Function to update selected subscription
    function updateSubscriptionSelection() {
        subscriptionRadios.forEach(radio => {
            const option = radio.closest('.cart-sub-option');
            if (radio.checked) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
    }

    // Event Listeners for Flavor Selection
    flavorRadios.forEach(radio => {
        radio.addEventListener('change', updateFlavorSelection);
    });

    // Event Listeners for Subscription Selection
    subscriptionRadios.forEach(radio => {
        radio.addEventListener('change', updateSubscriptionSelection);
    });

    // "Add to Cart" Button Click Event
    addToCartBtn.addEventListener('click', function () {
        const selectedFlavor = document.querySelector('input[name="flavor"]:checked').value;
        const selectedSubscription = document.querySelector('input[name="subscription"]:checked').parentElement.querySelector('.cart-sub-option-title').innerText;

        alert(`Added to cart:\nFlavor: ${selectedFlavor}\nSubscription: ${selectedSubscription}`);
    });

    // Initialize selections on page load
    updateFlavorSelection();
    updateSubscriptionSelection();
});


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
  
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
  
      question.addEventListener("click", function () {
        // Close other open accordions
        faqItems.forEach((faq) => {
          if (faq !== item) {
            faq.classList.remove("open");
            faq.querySelector(".faq-answer")?.remove();
          }
        });
  
        // Toggle the clicked FAQ
        if (item.classList.contains("open")) {
          item.classList.remove("open");
          item.querySelector(".faq-answer").remove();
        } else {
          item.classList.add("open");
          const answer = document.createElement("div");
          answer.classList.add("faq-answer");
          answer.innerText = getFAQAnswer(question.innerText);
          item.appendChild(answer);
        }
      });
    });
  
    // Function to return answer based on question
    function getFAQAnswer(questionText) {
      const answers = {
        "If I subscribe can I cancel anytime?":
          "Yes, you can cancel your subscription anytime from your account settings.",
        "Can I take this at night?":
          "Yes, our product is designed for anytime use, including nighttime.",
        "Where are your ingredients sourced from?":
          "Our ingredients are sourced from high-quality, sustainable sources worldwide.",
        "Will this get me high?":
          "No, our product does not contain any psychoactive substances.",
        "Are you using fruiting bodies for your mushrooms?":
          "Yes, we use 100% fruiting bodies in our mushroom extracts for maximum benefits.",
      };
      return answers[questionText] || "Answer not available.";
    }
  });

  
  const container = document.getElementById('testimonial-container');
  const scrollLeft = document.getElementById('scroll-left');
  const scrollRight = document.getElementById('scroll-right');

  scrollLeft.addEventListener('click', () => {
    container.scrollBy({ left: -250, behavior: 'smooth' });
  });

  scrollRight.addEventListener('click', () => {
    container.scrollBy({ left: 250, behavior: 'smooth' });
  });
