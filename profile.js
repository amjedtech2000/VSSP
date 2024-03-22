 
        const stars = document.querySelectorAll('.stars i');

        stars.forEach((star) => {
            star.addEventListener('click', () => {
                const ratingValue = star.getAttribute('data-rating');
                const ratingInput = document.querySelector('.teacher-rating');
                ratingInput.value = ratingValue;
                stars.forEach((s) => {
                    if (parseInt(s.getAttribute('data-rating')) <= parseInt(ratingValue)) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    } else {
                        s.classList.add('far');
                        s.classList.remove('fas');
                    }
                });
            });
        });
    